import type { CollectionConfig } from 'payload'

import { Hero } from '../blocks/Hero/config'
import { OurStory } from '../blocks/OurStory/config'
import { LessonCards } from '../blocks/LessonCards/config'
import { LiveConditions } from '../blocks/LiveConditions/config'
import { InstructorGrid } from '../blocks/InstructorGrid/config'
import { FAQ } from '../blocks/FAQ/config'
import { BookingForm } from '../blocks/BookingForm/config'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [Hero, OurStory, LessonCards, LiveConditions, InstructorGrid, FAQ, BookingForm],
    },
  ],
}
