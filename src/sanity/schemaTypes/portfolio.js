export default {
	name: 'portfolio',
	title: 'Portfolio',
	type: 'document',
	fields: [
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text',
		},
		{
			name: 'category',
			title: 'Category',
			type: 'string',
			options: {
				list: [
					{ title: 'Wedding', value: 'wedding' },
					{ title: 'Corporate', value: 'corporate' },
					{ title: 'Events', value: 'events' },
					{ title: 'Portraits', value: 'portraits' },
				],
			},
		},
		{
			name: 'createdAt',
			title: 'Created At',
			type: 'datetime',
			readOnly: true,
			initialValue: () => new Date().toISOString(),
		},
	],
	orderings: [
		{
			title: 'Created (newest first)',
			name: 'createdDesc',
			by: [
				{ field: 'createdAt', direction: 'desc' },
			],
		},
		{
			title: 'Category',
			name: 'categoryAsc',
			by: [
				{ field: 'category', direction: 'asc' },
			],
		},
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'category',
			media: 'image',
			description: 'createdAt',
		},
	},
};
