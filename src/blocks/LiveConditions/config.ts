import type { Block } from 'payload'

export const LiveConditions: Block = {
  slug: 'liveConditions',
  labels: {
    singular: 'Live Conditions',
    plural: 'Live Conditions Blocks',
  },
  fields: [
    {
      name: 'conditions',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'unit',
          type: 'text',
        },
        {
          name: 'icon',
          type: 'text',
          required: true,
          label: 'Material Icon Name',
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'colorScheme',
          type: 'select',
          defaultValue: 'blue',
          options: [
            { label: 'Blue', value: 'blue' },
            { label: 'Orange', value: 'orange' },
            { label: 'Slate', value: 'slate' },
            { label: 'Yellow', value: 'yellow' },
          ],
        },
      ],
    },
    {
      name: 'optimalTime',
      type: 'text',
      label: 'Optimal Surf Time',
      defaultValue: '7am - 10am',
    },
    {
      name: 'lowTideTime',
      type: 'text',
      defaultValue: '8:15 AM',
    },
    {
      name: 'lowTideHeight',
      type: 'text',
      defaultValue: '0.4ft',
    },
    {
      name: 'highTideTime',
      type: 'text',
      defaultValue: '2:45 PM',
    },
    {
      name: 'highTideHeight',
      type: 'text',
      defaultValue: '4.8ft',
    },
  ],
}
