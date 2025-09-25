export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of features included in this service'
    },
    {
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., Camera, Video, Users)',
      validation: Rule => Rule.required()
    },
    {
      name: 'startingPrice',
      title: 'Starting Price',
      type: 'number',
      description: 'Starting price in INR'
    },
    {
      name: 'priceRange',
      title: 'Price Range',
      type: 'string',
      description: 'e.g., "₹15,000 - ₹50,000"'
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Service duration (e.g., "4-8 hours", "Full day")'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Photography', value: 'photography'},
          {title: 'Videography', value: 'videography'},
          {title: 'Combined Package', value: 'combined'},
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured Service',
      type: 'boolean',
      description: 'Display prominently on services page'
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
    }
  ]
}