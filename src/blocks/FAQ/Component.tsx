import React from 'react'

type Question = {
  question: string
  answer: string
  icon: string
  iconColor?: 'primary' | 'blue' | 'orange' | 'red' | null
}

type Props = {
  heading: string
  subtitle?: string | null
  questions: Question[]
}

const iconColorMap: Record<string, string> = {
  primary: 'text-primary',
  blue: 'text-blue-500',
  orange: 'text-orange-500',
  red: 'text-red-500',
}

export function FAQBlock({ heading, subtitle, questions }: Props) {
  return (
    <section className="flex flex-col gap-10 w-full" id="faq">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold font-handwritten text-slate-900 dark:text-white mb-3">
          {heading}
        </h2>
        {subtitle && <p className="text-slate-500 max-w-lg">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {questions.map((q, i) => (
          <div
            key={i}
            className="bg-sand dark:bg-sand-dark rounded-2xl border border-slate-200 dark:border-slate-700 p-8 flex gap-6 hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="flex-shrink-0">
              <div
                className={`p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm ${iconColorMap[q.iconColor || 'primary']} ring-1 ring-slate-100 dark:ring-slate-700`}
              >
                <span className="material-symbols-outlined text-3xl">{q.icon}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">{q.question}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {q.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
