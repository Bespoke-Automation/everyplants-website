import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'services', title: 'Services' },
    { name: 'workflow', title: 'Workflow' },
    { name: 'assortment', title: 'Assortment' },
    { name: 'about', title: 'About' },
    { name: 'social', title: 'Social Proof' },
    { name: 'cta', title: 'Call to Action' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        { name: 'badge', title: 'Badge Text', type: 'string' },
        {
          name: 'headlineLines',
          title: 'Headline Lines',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Each line of the headline',
        },
        { name: 'highlightedLine', title: 'Highlighted Line (faded)', type: 'string' },
        { name: 'tagline', title: 'Tagline', type: 'text', rows: 2 },
        { name: 'ctaText', title: 'CTA Button Text', type: 'string' },
        { name: 'ctaLink', title: 'CTA Button Link', type: 'string' },
        { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },
        { name: 'heroImageAlt', title: 'Hero Image Alt Text', type: 'string' },
        { name: 'imageCaption', title: 'Image Caption', type: 'string' },
        { name: 'badgeText', title: 'Rotating Badge Text', type: 'string' },
      ],
    }),

    // Marquee
    defineField({
      name: 'marqueeItems',
      title: 'Marquee Items',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'hero',
    }),

    // Trust Bar
    defineField({
      name: 'trustBar',
      title: 'Trust Bar',
      type: 'object',
      group: 'social',
      fields: [
        { name: 'label', title: 'Section Label', type: 'string' },
        {
          name: 'partners',
          title: 'Partner References',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'partner' }] }],
        },
      ],
    }),

    // Value Props
    defineField({
      name: 'valueProps',
      title: 'Value Propositions',
      type: 'object',
      group: 'services',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'subtitle', title: 'Section Subtitle', type: 'string' },
        { name: 'items', title: 'Value Props', type: 'array', of: [{ type: 'valueProp' }] },
        { name: 'instructionText', title: 'Instruction Text', type: 'string', description: 'e.g. "Interact to explore"' },
        { name: 'ctaText', title: 'CTA Link Text', type: 'string', description: 'e.g. "Meer info"' },
      ],
    }),

    // How It Works
    defineField({
      name: 'howItWorks',
      title: 'How It Works Section',
      type: 'object',
      group: 'workflow',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'subtitle', title: 'Section Subtitle', type: 'string' },
        { name: 'steps', title: 'Workflow Steps', type: 'array', of: [{ type: 'workflowStep' }] },
      ],
    }),

    // Assortment
    defineField({
      name: 'assortment',
      title: 'Assortment Section',
      type: 'object',
      group: 'assortment',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'ctaText', title: 'CTA Text', type: 'string' },
        { name: 'ctaLink', title: 'CTA Link', type: 'string' },
        {
          name: 'categories',
          title: 'Product Categories',
          type: 'array',
          of: [{ type: 'productCategory' }],
        },
      ],
    }),

    // About
    defineField({
      name: 'about',
      title: 'About Section',
      type: 'object',
      group: 'about',
      fields: [
        { name: 'label', title: 'Section Label', type: 'string' },
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'imageAlt', title: 'Image Alt Text', type: 'string' },
        {
          name: 'imageBadge',
          title: 'Image Badge',
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
        {
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'description', title: 'Description', type: 'string' },
              ],
            },
          ],
        },
        { name: 'linkText', title: 'Link Text', type: 'string' },
        { name: 'linkHref', title: 'Link URL', type: 'string' },
      ],
    }),

    // Stats
    defineField({
      name: 'stats',
      title: 'Stats Section',
      type: 'array',
      of: [{ type: 'stat' }],
      group: 'social',
    }),

    // Testimonial Reference
    defineField({
      name: 'featuredTestimonial',
      title: 'Featured Testimonial',
      type: 'reference',
      to: [{ type: 'testimonial' }],
      group: 'social',
    }),

    // CTA Section
    defineField({
      name: 'cta',
      title: 'CTA Section',
      type: 'object',
      group: 'cta',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'string' },
        {
          name: 'primaryButton',
          title: 'Primary Button',
          type: 'object',
          fields: [
            { name: 'text', title: 'Text', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' },
          ],
        },
        {
          name: 'secondaryButton',
          title: 'Secondary Button',
          type: 'object',
          fields: [
            { name: 'text', title: 'Text', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' },
          ],
        },
      ],
    }),

    // SEO
    defineField({
      name: 'seo',
      title: 'Page SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Homepage' }),
  },
})
