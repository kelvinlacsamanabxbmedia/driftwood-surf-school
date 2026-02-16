import React from 'react'

import { HeroBlock } from './Hero/Component'
import { OurStoryBlock } from './OurStory/Component'
import { LessonCardsBlock } from './LessonCards/Component'
import { LiveConditionsBlock } from './LiveConditions/Component'
import { InstructorGridBlock } from './InstructorGrid/Component'
import { FAQBlock } from './FAQ/Component'
import { BookingFormBlock } from './BookingForm/Component'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blockComponents: Record<string, React.FC<any>> = {
  hero: HeroBlock,
  ourStory: OurStoryBlock,
  lessonCards: LessonCardsBlock,
  liveConditions: LiveConditionsBlock,
  instructorGrid: InstructorGridBlock,
  faq: FAQBlock,
  bookingForm: BookingFormBlock,
}

type Block = {
  blockType: string
  id?: string
  [key: string]: unknown
}

type Props = {
  blocks: Block[]
}

export function RenderBlocks({ blocks }: Props) {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block, i) => {
        const Component = blockComponents[block.blockType]
        if (!Component) return null
        return <Component key={block.id || i} {...block} />
      })}
    </>
  )
}
