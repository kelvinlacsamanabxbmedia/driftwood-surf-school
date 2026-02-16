import React from 'react'

type Condition = {
  label: string
  value: string
  unit?: string | null
  icon: string
  description?: string | null
  colorScheme?: 'blue' | 'orange' | 'slate' | 'yellow' | null
}

type Props = {
  conditions: Condition[]
  optimalTime?: string | null
  lowTideTime?: string | null
  lowTideHeight?: string | null
  highTideTime?: string | null
  highTideHeight?: string | null
}

const colorMap: Record<string, { bg: string; text: string }> = {
  blue: { bg: 'bg-blue-50 dark:bg-slate-800', text: 'text-blue-600 dark:text-blue-400' },
  orange: { bg: 'bg-orange-50 dark:bg-slate-800', text: 'text-orange-600 dark:text-orange-400' },
  slate: { bg: 'bg-slate-50 dark:bg-slate-800', text: 'text-slate-600 dark:text-slate-400' },
  yellow: { bg: 'bg-yellow-50 dark:bg-slate-800', text: 'text-yellow-600 dark:text-yellow-400' },
}

export function LiveConditionsBlock({
  conditions,
  optimalTime,
  lowTideTime,
  lowTideHeight,
  highTideTime,
  highTideHeight,
}: Props) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="conditions">
      <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Live Conditions</h2>
          <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
            <button className="px-3 py-1 rounded-md text-xs font-bold bg-white dark:bg-slate-700 shadow-sm text-primary">
              AM
            </button>
            <button className="px-3 py-1 rounded-md text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white">
              Mid
            </button>
            <button className="px-3 py-1 rounded-md text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white">
              PM
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {conditions.map((condition, i) => {
            const colors = colorMap[condition.colorScheme || 'blue']
            return (
              <div key={i} className={`${colors.bg} rounded-xl p-4 flex flex-col gap-1`}>
                <div className={`flex items-center gap-2 ${colors.text} mb-1`}>
                  <span className="material-symbols-outlined">{condition.icon}</span>
                  <span className="text-xs font-bold uppercase">{condition.label}</span>
                </div>
                <span className="text-3xl font-black text-slate-900 dark:text-white">
                  {condition.value}
                  {condition.unit && (
                    <span className="text-lg text-slate-500 ml-1">{condition.unit}</span>
                  )}
                </span>
                {condition.description && (
                  <span className="text-xs text-slate-500">{condition.description}</span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Tide Chart</h2>
          {optimalTime && (
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Optimal: {optimalTime}
            </span>
          )}
        </div>
        <div className="relative w-full h-48 bg-slate-50 dark:bg-slate-800/50 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700">
          <div className="absolute inset-0 flex flex-col justify-between py-4 px-6 opacity-20">
            <div className="w-full h-px bg-slate-400 border-dashed border-t" />
            <div className="w-full h-px bg-slate-400 border-dashed border-t" />
            <div className="w-full h-px bg-slate-400 border-dashed border-t" />
          </div>
          <div className="absolute left-[20%] w-[25%] h-full bg-primary/10 border-x border-primary/20 flex items-start justify-center pt-2">
            <span className="text-[10px] font-bold text-primary uppercase tracking-wide">
              Best
            </span>
          </div>
          <svg
            className="absolute bottom-0 left-0 w-full h-full text-primary"
            preserveAspectRatio="none"
            viewBox="0 0 100 50"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#137fec', stopOpacity: 0.4 }} />
                <stop offset="100%" style={{ stopColor: '#137fec', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            <path
              d="M0,50 L0,30 C20,10 40,50 60,30 C80,10 100,40 100,40 L100,50 Z"
              fill="url(#grad1)"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
          <div className="absolute bottom-0 w-full flex justify-between px-4 pb-2 text-[10px] text-slate-500 font-medium">
            <span>6 AM</span>
            <span>9 AM</span>
            <span>12 PM</span>
            <span>3 PM</span>
            <span>6 PM</span>
          </div>
        </div>
        <div className="flex justify-between mt-6 text-sm">
          <div className="flex flex-col">
            <span className="text-slate-500">Low Tide</span>
            <span className="font-bold text-slate-900 dark:text-white">
              {lowTideTime} <span className="text-slate-400 font-normal">{lowTideHeight}</span>
            </span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-slate-500">High Tide</span>
            <span className="font-bold text-slate-900 dark:text-white">
              {highTideTime} <span className="text-slate-400 font-normal">{highTideHeight}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
