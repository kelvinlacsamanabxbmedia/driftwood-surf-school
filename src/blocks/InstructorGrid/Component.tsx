import React from 'react'

type Instructor = {
  name: string
  image: string
  experience: string
  quote?: string | null
}

type Props = {
  heading: string
  instructors: Instructor[]
}

export function InstructorGridBlock({ heading, instructors }: Props) {
  return (
    <section className="flex flex-col gap-8" id="instructors">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {instructors.map((instructor, i) => (
          <div
            key={i}
            className="group flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors"
          >
            <div className="w-24 h-24 rounded-full bg-slate-200 mb-4 overflow-hidden border-2 border-transparent group-hover:border-primary transition-all">
              <img
                alt={`Instructor ${instructor.name}`}
                className="w-full h-full object-cover"
                src={instructor.image}
              />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {instructor.name}
            </h3>
            <p className="text-primary text-sm font-semibold mb-2">{instructor.experience}</p>
            {instructor.quote && (
              <p className="text-slate-500 text-sm italic">&quot;{instructor.quote}&quot;</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
