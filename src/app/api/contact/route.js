import { NextResponse } from 'next/server'
import { z } from 'zod'
import fs from 'fs/promises'
import path from 'path'
let sanityClient = null
let serverSanityClient = null
try {
  // if a server write token is available, create a server-side Sanity client for writes
  const token = process.env.SANITY_WRITE_TOKEN || process.env.SANITY_API_TOKEN || process.env.SANITY_ADMIN_TOKEN
  if (token) {
    const { createClient } = await import('next-sanity')
    const { apiVersion, dataset, projectId } = await import('../../../sanity/env')
    serverSanityClient = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token,
      ignoreBrowserTokenWarning: true,
    })
  } else {
    // fallback: try to import the existing browser client (may be read-only)
    try {
      const mod = await import('../../../sanity/lib/client')
      sanityClient = mod.client
    } catch (e) {
      sanityClient = null
    }
  }
} catch (e) {
  console.error('Sanity client init error', e)
  sanityClient = null
  serverSanityClient = null
}

// Helper: turn empty string -> undefined for optional fields
const emptyToUndefined = (v) => (v === '' ? undefined : v)

// Validate only the required contact fields: name, email, phone, and type.
// Other fields (date, venue, guests, budget, services, message) will be accepted but not strictly validated here.
const ContactSchema = z.object({
  name: z.preprocess((v) => (typeof v === 'string' ? v.trim() : v), z.string().min(2, 'Name must be at least 2 characters')),
  email: z.preprocess((v) => (typeof v === 'string' ? v.trim() : v), z.string().email('Invalid email address')),
  phone: z.preprocess((v) => (typeof v === 'string' ? v.replace(/\D/g, '') : v), z.string().min(6, 'Enter a valid phone number')),
  // event type is required-ish for business logic; accept non-empty strings
  type: z.preprocess((v) => (typeof v === 'string' ? v.trim() : v), z.string().min(1, 'Select an event type')),
})

export async function POST(req) {
  try {
    const body = await req.json()
    // DEBUG: log incoming body for troubleshooting validation issues
    console.debug('[contact API] received body:', JSON.stringify(body).slice(0, 1000))
    const parsed = ContactSchema.safeParse(body)
    if (!parsed.success) {
      const flattened = parsed.error.flatten()
      console.debug('[contact API] validation failed:', JSON.stringify(flattened))
      return NextResponse.json({ ok: false, errors: flattened }, { status: 400 })
    }

    // Build entry: use validated values for the required fields and copy-through any optional fields from the incoming body.
    const entry = {
      fullName: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      eventDate: (body.date && String(body.date).trim()) || null,
      eventType: parsed.data.type || null,
      venue: (body.venue && String(body.venue).trim()) || null,
      guestCount: (body.guests && String(body.guests).trim()) || null,
      budgetRange: (body.budget && String(body.budget).trim()) || null,
      servicesRequired: Array.isArray(body.services) ? body.services.filter(Boolean) : (body.services ? [String(body.services)] : []),
      message: (body.message && String(body.message).trim()) || '',
      status: 'new',
      submittedAt: new Date().toISOString(),
    }

    // Prefer server-side write client if available
    if (serverSanityClient) {
      try {
        const created = await serverSanityClient.create({
          _type: 'contactSubmission',
          ...entry,
        })
        console.debug('[contact API] saved to Sanity (server client), id=', created._id)
  return NextResponse.json({ ok: true, entry: created, source: 'sanity' }, { status: 201 })
      } catch (err) {
        console.error('Sanity server write failed, falling back to local file', err)
        // continue to fallback
      }
    }

    // If only the browser/read client is available, warn that writes likely won't work without a server token
    if (sanityClient) {
      try {
        const created = await sanityClient.create({ _type: 'contactSubmission', ...entry })
        console.debug('[contact API] saved to Sanity (browser client), id=', created._id)
  return NextResponse.json({ ok: true, entry: created, source: 'sanity-client' }, { status: 201 })
      } catch (err) {
        console.error('Sanity client write failed (no server token). Falling back to local file.', err)
        // continue to fallback
      }
    }

    // Fallback: write to local data file
    const dataDir = path.join(process.cwd(), 'data')
    await fs.mkdir(dataDir, { recursive: true })
    const file = path.join(dataDir, 'submissions.json')
    let arr = []
    try {
      const txt = await fs.readFile(file, 'utf8')
      arr = JSON.parse(txt || '[]')
    } catch (e) {
      arr = []
    }

  const saved = { id: Date.now().toString(), ...entry }
  arr.push(saved)
  await fs.writeFile(file, JSON.stringify(arr, null, 2), 'utf8')
  console.debug('[contact API] saved to local fallback at', file)
  return NextResponse.json({ ok: true, entry: saved, source: 'local' }, { status: 201 })
  } catch (err) {
    console.error('Contact API error', err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
