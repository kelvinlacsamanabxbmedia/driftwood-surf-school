import type { Block } from 'payload'

export const OurStory: Block = {
  slug: 'ourStory',
  labels: {
    singular: 'Our Story',
    plural: 'Our Story Blocks',
  },
  fields: [
    {
      name: 'image',
      type: 'text',
      required: true,
      label: 'Image URL',
    },
    {
      name: 'sinceText',
      type: 'text',
      label: 'Since Text',
      defaultValue: 'Since 1998',
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Our Story',
    },
    {
      name: 'bodyParagraph1',
      type: 'textarea',
      required: true,
      label: 'First Paragraph',
    },
    {
      name: 'bodyParagraph2',
      type: 'textarea',
      label: 'Second Paragraph',
    },
    {
      name: 'teamImages',
      type: 'array',
      label: 'Team Member Images',
      fields: [
        {
          name: 'imageUrl',
          type: 'text',
          required: true,
          label: 'Image URL',
        },
        {
          name: 'alt',
          type: 'text',
          defaultValue: 'Team member',
        },
      ],
    },
    {
      name: 'teamLabel',
      type: 'text',
      label: 'Team Label',
      defaultValue: 'Meet the locals',
    },
  ],
}
