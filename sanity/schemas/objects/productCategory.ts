import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'productCategory',
  title: 'Product Category',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'height',
      title: 'Display Height',
      type: 'string',
      description: 'CSS class for height (e.g., h-80 md:h-[500px])',
      initialValue: 'h-72 md:h-[400px]',
    }),
  ],
  preview: {
    select: { title: 'name', media: 'image' },
  },
})
