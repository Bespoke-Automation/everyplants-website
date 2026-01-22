import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteTagline',
      title: 'Site Tagline',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'logoAlt',
      title: 'Logo Alt Text',
      type: 'string',
      description: 'Alt text for the logo image',
    }),
    defineField({
      name: 'seo',
      title: 'Default SEO',
      type: 'seo',
    }),
    defineField({
      name: 'footer',
      title: 'Footer Settings',
      type: 'object',
      fields: [
        {
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 4,
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'certifications',
          title: 'Certifications',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'socialLinks',
          title: 'Social Links',
          type: 'array',
          of: [{ type: 'socialLink' }],
        },
        {
          name: 'sitemapLabel',
          title: 'Sitemap Section Label',
          type: 'string',
          description: 'Label for the sitemap links section',
        },
        {
          name: 'sitemapLinks',
          title: 'Sitemap Links',
          type: 'array',
          of: [{ type: 'navLink' }],
        },
        {
          name: 'legalLabel',
          title: 'Legal Section Label',
          type: 'string',
          description: 'Label for the legal links section',
        },
        {
          name: 'legalLinks',
          title: 'Legal Links',
          type: 'array',
          of: [{ type: 'navLink' }],
        },
        {
          name: 'contactLabel',
          title: 'Contact Section Label',
          type: 'string',
          description: 'Label for the contact info section',
        },
        {
          name: 'copyrightText',
          title: 'Copyright Text',
          type: 'string',
        },
        {
          name: 'locationTag',
          title: 'Location Tag',
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
})
