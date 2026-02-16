import type { Block } from 'payload'

export const InstructorGrid: Block = {
  slug: 'instructorGrid',
  labels: {
    singular: 'Instructor Grid',
    plural: 'Instructor Grid Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Meet the Crew',
    },
    {
      name: 'instructors',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'text',
          required: true,
          label: 'Image URL',
        },
        {
          name: 'experience',
          type: 'text',
          required: true,
          label: 'Experience (e.g. "12 Years Surfing")',
        },
        {
          name: 'quote',
          type: 'text',
        },
      ],
    },
  ],
}
