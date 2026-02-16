import type { Block } from 'payload'

export const BookingForm: Block = {
  slug: 'bookingForm',
  labels: {
    singular: 'Booking Form',
    plural: 'Booking Form Blocks',
  },
  fields: [
    {
      name: 'backgroundImage',
      type: 'text',
      required: true,
      label: 'Background Image URL',
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Start Your Adventure',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'The ocean is calling. Answer it with Driftwood.',
    },
    {
      name: 'formHeading',
      type: 'text',
      required: true,
      defaultValue: 'Secure Your Spot',
    },
    {
      name: 'formSubtitle',
      type: 'text',
      defaultValue: 'Fill out the details below to book your wave.',
    },
    {
      name: 'lessonOptions',
      type: 'array',
      label: 'Lesson Options',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'submitText',
      type: 'text',
      defaultValue: 'Confirm Booking',
    },
    {
      name: 'disclaimer',
      type: 'text',
      defaultValue: 'No payment required until confirmation.',
    },
  ],
}
