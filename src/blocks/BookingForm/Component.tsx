import React from 'react'

type LessonOption = {
  label: string
  price: string
}

type Props = {
  backgroundImage: string
  heading: string
  subtitle?: string | null
  formHeading: string
  formSubtitle?: string | null
  lessonOptions?: LessonOption[] | null
  submitText?: string | null
  disclaimer?: string | null
}

export function BookingFormBlock({
  backgroundImage,
  heading,
  subtitle,
  formHeading,
  formSubtitle,
  lessonOptions,
  submitText,
  disclaimer,
}: Props) {
  return (
    <section
      className="w-full rounded-3xl overflow-hidden shadow-2xl shadow-sand-dark/10 dark:shadow-none border border-slate-100 dark:border-slate-800"
      id="booking"
    >
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        <div
          className="lg:w-1/2 relative h-64 lg:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/40" />
          <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 max-w-sm text-white drop-shadow-lg">
            <h3 className="font-handwritten text-6xl md:text-7xl font-bold -mb-2">{heading}</h3>
            {subtitle && (
              <p className="text-lg font-medium opacity-90 mt-4">{subtitle}</p>
            )}
          </div>
        </div>
        <div className="lg:w-1/2 bg-sand dark:bg-slate-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
          <div className="absolute inset-0 pointer-events-none opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply dark:mix-blend-overlay" />
          <div className="relative z-10 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold font-handwritten text-slate-900 dark:text-white">
              {formHeading}
            </h2>
            {formSubtitle && (
              <p className="text-slate-500 text-sm mt-3">{formSubtitle}</p>
            )}
          </div>
          <form className="relative z-10 flex flex-col gap-6">
            {lessonOptions && lessonOptions.length > 0 && (
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                  Lesson Type
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {lessonOptions.map((option, i) => (
                    <label key={i} className="cursor-pointer group">
                      <input
                        className="peer sr-only"
                        defaultChecked={i === 0}
                        name="lesson_type"
                        type="radio"
                      />
                      <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center peer-checked:border-primary peer-checked:bg-white peer-checked:shadow-md dark:peer-checked:bg-slate-800 transition-all hover:border-primary/50 bg-white/50 dark:bg-slate-800/50">
                        <span className="block text-sm font-bold">{option.label}</span>
                        <span className="block text-xs text-slate-400 mt-1">{option.price}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                  Date
                </label>
                <input
                  className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary text-sm p-3.5 font-medium bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                  type="date"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                  Surfers
                </label>
                <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary text-sm p-3.5 font-medium bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4+ Group</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                Contact Info
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary text-sm p-3.5 placeholder:text-slate-400 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                  placeholder="Full Name"
                  type="text"
                />
                <input
                  className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary text-sm p-3.5 placeholder:text-slate-400 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                  placeholder="Email Address"
                  type="email"
                />
              </div>
            </div>
            <button
              className="mt-4 w-full bg-primary hover:bg-blue-600 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all hover:-translate-y-1"
              type="button"
            >
              {submitText || 'Confirm Booking'}
            </button>
            {disclaimer && (
              <p className="text-center text-xs text-slate-400">{disclaimer}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
