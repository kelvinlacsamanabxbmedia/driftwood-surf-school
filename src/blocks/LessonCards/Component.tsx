import React from 'react'

type Lesson = {
  title: string
  price: number
  priceUnit: string
  image?: string | null
  badge?: string | null
  isRecommended?: boolean | null
  features?: Array<{ feature: string }> | null
}

type Props = {
  heading: string
  subtitle?: string | null
  lessons: Lesson[]
}

export function LessonCardsBlock({ heading, subtitle, lessons }: Props) {
  return (
    <section className="flex flex-col gap-8" id="lessons">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{heading}</h2>
          {subtitle && (
            <p className="text-slate-500 dark:text-slate-400 mt-2">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lessons.map((lesson, i) => (
          <div
            key={i}
            className={`flex flex-col gap-4 rounded-2xl p-6 ${
              lesson.isRecommended
                ? 'border-2 border-primary bg-white dark:bg-slate-900 shadow-md relative'
                : 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow'
            }`}
          >
            {lesson.isRecommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Recommended
              </div>
            )}
            {lesson.image && (
              <div
                className="h-40 rounded-xl bg-cover bg-center mb-2 relative overflow-hidden"
                style={{ backgroundImage: `url('${lesson.image}')` }}
              >
                {lesson.badge && !lesson.isRecommended && (
                  <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {lesson.badge}
                  </div>
                )}
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{lesson.title}</h3>
              <p className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-black text-slate-900 dark:text-white">
                  ${lesson.price}
                </span>
                <span className="text-sm font-medium text-slate-500">{lesson.priceUnit}</span>
              </p>
            </div>
            {lesson.features && lesson.features.length > 0 && (
              <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">
                {lesson.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      check_circle
                    </span>
                    {f.feature}
                  </li>
                ))}
              </ul>
            )}
            <button
              className={`mt-auto w-full font-bold py-3 rounded-xl transition-colors ${
                lesson.isRecommended
                  ? 'bg-primary hover:bg-blue-600 text-white shadow-lg shadow-primary/20'
                  : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
              }`}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
