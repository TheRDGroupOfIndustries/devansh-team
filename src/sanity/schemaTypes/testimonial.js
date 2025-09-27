export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'clientTitle',
      title: 'Client Title/Role',
      type: 'string',
      description: 'e.g., "Wedding Couple", "Corporate Event Manager"',
      validation: Rule => Rule.required()
    },
    {
      name: 'clientImage',
      title: 'Client Photo',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      validation: Rule => Rule.required().min(50).max(500)
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5),
      options: {
        list: [1, 2, 3, 4, 5]
      }
    },
    {
      name: 'serviceType',
      title: 'Service Type',
      type: 'string',
      options: {
        list: [
          {title: 'Wedding Photography', value: 'wedding'},
          {title: 'Corporate Events', value: 'corporate'},
          {title: 'Birthday/Events', value: 'events'},
          {title: 'Portrait Sessions', value: 'portraits'},
          {title: 'Videography', value: 'videography'},
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Display on homepage'
    },
    {
      name: 'orderRank',
      title: 'Order',
      type: 'string',
      hidden: true,
    }
  ],
  orderings: [
    {
      title: 'Manual order',
      name: 'manualOrder',
      by: [
        {field: 'orderRank', direction: 'asc'}
      ]
    },
    {
      title: 'Rating (highest first)',
      name: 'ratingDesc',
      by: [
        {field: 'rating', direction: 'desc'}
      ]
    }
  ]
}