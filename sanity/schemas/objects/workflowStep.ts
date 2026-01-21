import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'workflowStep',
  title: 'Workflow Step',
  type: 'object',
  fields: [
    defineField({
      name: 'number',
      title: 'Step Number',
      type: 'string',
      description: 'e.g., 01, 02',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: 'title', number: 'number' },
    prepare: ({ title, number }) => ({ title: `${number}. ${title}` }),
  },
})
