export default {
  name: 'contactSubmission',
  title: 'Contact Submission',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'Wedding', value: 'wedding'},
          {title: 'Corporate Event', value: 'corporate'},
          {title: 'Birthday Party', value: 'birthday'},
          {title: 'Portrait Session', value: 'portrait'},
          {title: 'Other Event', value: 'other'},
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string'
    },
    {
      name: 'guestCount',
      title: 'Expected Guest Count',
      type: 'number'
    },
    {
      name: 'budgetRange',
      title: 'Budget Range',
      type: 'string',
      options: {
        list: [
          {title: '₹10,000 - ₹25,000', value: '10k-25k'},
          {title: '₹25,000 - ₹50,000', value: '25k-50k'},
          {title: '₹50,000 - ₹1,00,000', value: '50k-100k'},
          {title: '₹1,00,000 - ₹2,00,000', value: '100k-200k'},
          {title: '₹2,00,000+', value: '200k+'},
        ]
      }
    },
    {
      name: 'servicesRequired',
      title: 'Services Required',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Wedding Photography', value: 'wedding-photography'},
          {title: 'Wedding Videography', value: 'wedding-videography'},
          {title: 'Corporate Events', value: 'corporate-events'},
          {title: 'Birthday Parties', value: 'birthday-parties'},
          {title: 'Portrait Sessions', value: 'portrait-sessions'},
          {title: 'Drone Coverage', value: 'drone-coverage'},
          {title: 'Event Highlights', value: 'event-highlights'},
          {title: 'Product Photography', value: 'product-photography'},
        ],
        layout: 'grid'
      }
    },
    {
      name: 'message',
      title: 'Additional Message',
      type: 'text'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'New', value: 'new'},
          {title: 'Contacted', value: 'contacted'},
          {title: 'Quote Sent', value: 'quote-sent'},
          {title: 'Booked', value: 'booked'},
          {title: 'Completed', value: 'completed'},
          {title: 'Cancelled', value: 'cancelled'},
        ]
      },
      initialValue: 'new'
    },
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString()
    }
  ],
  orderings: [
    {
      title: 'Submitted (newest first)',
      name: 'submittedDesc',
      by: [
        {field: 'submittedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Status',
      name: 'statusAsc',
      by: [
        {field: 'status', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'eventType',
      description: 'submittedAt'
    }
  }
}