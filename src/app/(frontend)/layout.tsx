import React from 'react'
import './styles.css'

export const metadata = {
  description: 'Experience the best waves with professional coaching at Driftwood Surf School.',
  title: 'Wavecrest - Driftwood Surf School',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html className="light" lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased selection:bg-primary/30">
        {children}
      </body>
    </html>
  )
}
