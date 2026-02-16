import type { Block } from 'payload'

export const LessonCards: Block = {
  slug: 'lessonCards',
  labels: {
    singular: 'Lesson Cards',
    plural: 'Lesson Cards Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Choose Your Lesson',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Professional coaching for every skill level.',
    },
    {
      name: 'lessons',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          type: 'number',
          required: true,
        },
        {
          name: 'priceUnit',
          type: 'text',
          required: true,
          defaultValue: '/ session',
        },
        {
          name: 'image',
          type: 'text',
          label: 'Image URL',
        },
        {
          name: 'badge',
          type: 'text',
          label: 'Badge Text (optional)',
        },
        {
          name: 'isRecommended',
          type: 'checkbox',
          defaultValue: false,
          label: 'Recommended?',
        },
        {
          name: 'features',
          type: 'array',
          fields: [
            {
              name: 'feature',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
