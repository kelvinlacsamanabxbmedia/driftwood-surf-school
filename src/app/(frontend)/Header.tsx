'use client'

import React, { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white group cursor-pointer">
          <span className="material-symbols-outlined text-primary text-3xl">surfing</span>
          <h2 className="text-xl font-extrabold tracking-tight">Wavecrest</h2>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#lessons">Lessons</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#conditions">Conditions</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#instructors">Instructors</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#faq">FAQ</a>
          </nav>
          <a
            className="bg-primary hover:bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            href="#booking"
          >
            Book Session
          </a>
        </div>
        <button
          className="md:hidden text-slate-900 dark:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark">
          <nav className="flex flex-col px-4 py-4 gap-4 text-center">
            <a
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#lessons"
              onClick={() => setMobileMenuOpen(false)}
            >
              Lessons
            </a>
            <a
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#conditions"
              onClick={() => setMobileMenuOpen(false)}
            >
              Conditions
            </a>
            <a
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#instructors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Instructors
            </a>
            <a
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              className="bg-primary hover:bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-md text-center"
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Session
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
