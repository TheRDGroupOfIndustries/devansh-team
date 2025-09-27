import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getServerClient } from '../../../../src/sanity/lib/serverClient'

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(150),
  phone: z.string().min(6).max(20),
  date: z.string().optional(),
  type: z.string().min(1).max(50),
  venue: z.string().optional(),
  guests: z.string().optional(),
  budget: z.string().optional(),
  services: z.array(z.string()).optional(),
  message: z.string().max(500).optional()
});

export async function POST(request) {
  try {
    const body = await request.json();
    
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          errors: { fieldErrors: validationResult.error.flatten().fieldErrors }
        },
        { status: 400 }
      );
    }

    
    const validated = validationResult.data;
    const safe = {
      venue: validated.venue ?? '',
      guests: validated.guests ?? '',
      budget: validated.budget ?? '',
      services: validated.services ?? [],
      message: validated.message ?? '',
      ...validated,
    }

   
    const server = getServerClient()

    if (server) {
      
        const doc = {
        _type: 'contactSubmission',
        fullName: safe.name,
        email: safe.email,
        phone: safe.phone,
        eventDate: safe.date || null,
        eventType: safe.type,
        venue: safe.venue,
        guestCount: safe.guests ? Number(safe.guests) : undefined,
        budgetRange: safe.budget,
        servicesRequired: safe.services,
        message: safe.message,
        submittedAt: new Date().toISOString(),
      }

      try {
        const created = await server.create(doc)
        return NextResponse.json(
          {
            message: 'Contact submission saved to Sanity',
            source: 'sanity',
            entry: { id: created._id }
          },
          { status: 201 }
        )
      } catch (err) {
        console.error('Sanity write error:', err)
        
      }
    }

    
    const entry = {
      id: `local_${Date.now()}`,
      ...validationResult.data,
      submittedAt: new Date().toISOString()
    }

    return NextResponse.json(
      {
        message: 'Contact submission received',
        source: 'local',
        entry: { id: entry.id }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
