import React from 'react'

type Props = {
  image: string
  sinceText?: string | null
  heading: string
  bodyParagraph1: string
  bodyParagraph2?: string | null
  teamImages?: Array<{ imageUrl: string; alt?: string | null }> | null
  teamLabel?: string | null
}

export function OurStoryBlock({
  image,
  sinceText,
  heading,
  bodyParagraph1,
  bodyParagraph2,
  teamImages,
  teamLabel,
}: Props) {
  return (
    <section className="relative w-full overflow-hidden bg-sand dark:bg-sand-dark rounded-3xl border border-slate-100 dark:border-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[400px] lg:h-auto min-h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${image}')`,
              filter: 'sepia(0.1) contrast(1.05)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-sand/20 dark:to-sand-dark/20" />
        </div>
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2">
            {sinceText && (
              <span className="text-primary font-bold uppercase tracking-widest text-xs">
                {sinceText}
              </span>
            )}
            <h2 className="text-5xl md:text-6xl font-handwritten text-slate-900 dark:text-white mb-2">
              {heading}
            </h2>
            <div className="w-16 h-1 bg-primary/20 rounded-full overflow-hidden relative">
              <div className="absolute top-0 left-0 w-8 h-full bg-primary rounded-full" />
            </div>
          </div>
          <div className="prose prose-slate dark:prose-invert">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {bodyParagraph1}
            </p>
            {bodyParagraph2 && (
              <p className="text-slate-600 dark:text-slate-300 mt-4">{bodyParagraph2}</p>
            )}
          </div>
          {teamImages && teamImages.length > 0 && (
            <div className="flex items-center gap-4 mt-4">
              <div className="flex -space-x-3">
                {teamImages.map((member, i) => (
                  <img
                    key={i}
                    alt={member.alt || 'Team member'}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 object-cover"
                    src={member.imageUrl}
                  />
                ))}
              </div>
              {teamLabel && (
                <span className="text-sm font-bold text-slate-500">{teamLabel}</span>
              )}
            </div>
          )}
          <div className="absolute bottom-8 right-8 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-9xl text-slate-900 dark:text-white rotate-12">
              tsunami
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
