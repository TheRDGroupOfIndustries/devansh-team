import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
let envPath = path.join(__dirname, '..', '.env.local')
if (!fs.existsSync(envPath)) {
  // fallback to current working directory
  const cwdPath = path.join(process.cwd(), '.env.local')
  if (fs.existsSync(cwdPath)) envPath = cwdPath
}
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8')
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    let val = trimmed.slice(eq + 1).trim()
    // Remove surrounding quotes if present
    if ((val.startsWith("\"") && val.endsWith("\"")) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    process.env[key] = val
  }
}

// Helpful debug: show which env file was loaded (if any)
if (fs.existsSync(envPath)) {
  console.log('Loaded env from:', envPath)
} else {
  console.log('No .env.local found at typical locations; relying on process.env')
}

// Dynamic import now that process.env is populated
const { createClient } = await import('next-sanity')
const envMod = await import('../src/sanity/env.js')
const { apiVersion, dataset, projectId } = envMod

const token = process.env.SANITY_API_TOKEN || process.env.SANITY_WRITE_TOKEN
if (!projectId || !token) {
  console.error('Missing SANITY_PROJECT_ID or SANITY_API_TOKEN in environment')
  console.error('projectId:', projectId)
  console.error('SANITY_API_TOKEN present:', !!process.env.SANITY_API_TOKEN)
  console.error('SANITY_WRITE_TOKEN present:', !!process.env.SANITY_WRITE_TOKEN)
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
})

async function seed() {
  const doc = {
    _type: 'contactSubmission',
    fullName: 'Seed User',
    email: 'seed@example.com',
    phone: '9999999999',
    eventDate: new Date().toISOString().split('T')[0],
    eventType: 'other',
    venue: 'Seed Venue',
    guestCount: 10,
    budgetRange: '10k-25k',
    servicesRequired: ['portrait-sessions'],
    message: 'This is a seed document created for testing.',
    submittedAt: new Date().toISOString(),
  }

  try {
    const created = await client.create(doc)
    console.log('Created document:', created._id)
  } catch (err) {
    console.error('Seed failed:', err)
    process.exit(1)
  }
}

seed()
