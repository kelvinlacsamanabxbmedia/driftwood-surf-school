import React from 'react'

type Props = {
  backgroundImage: string
  badgeText?: string | null
  heading: string
  headingHighlight?: string | null
  subheading?: string | null
  ctaText?: string | null
  ctaLink?: string | null
}

export function HeroBlock({
  backgroundImage,
  badgeText,
  heading,
  headingHighlight,
  subheading,
  ctaText,
  ctaLink,
}: Props) {
  return (
    <section className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden min-h-[500px] flex items-center justify-center group grain-overlay">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
      <div className="relative z-20 flex flex-col items-center text-center max-w-2xl px-6 gap-6">
        {badgeText && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {badgeText}
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight drop-shadow-sm">
          {heading}{' '}
          {headingHighlight && (
            <span className="text-primary italic">{headingHighlight}</span>
          )}
        </h1>
        {subheading && (
          <p className="text-lg md:text-xl text-slate-100 font-medium max-w-lg leading-relaxed drop-shadow-sm">
            {subheading}
          </p>
        )}
        {ctaText && (
          <a
            className="mt-4 bg-primary hover:bg-blue-600 text-white text-base md:text-lg font-bold px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2"
            href={ctaLink || '#booking'}
          >
            <span>{ctaText}</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        )}
      </div>
    </section>
  )
}
