import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { Header } from './Header'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'home' },
    },
    limit: 1,
  })

  const page = pages.docs[0]

  if (!page) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">No Home Page Found</h1>
          <p className="text-slate-500 mb-6">
            Create a page with slug &quot;home&quot; in the{' '}
            <a href="/admin/collections/pages" className="text-primary underline">
              admin panel
            </a>{' '}
            or run the seed script.
          </p>
          <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm text-left inline-block">
            npx tsx src/seed.ts
          </pre>
        </div>
      </div>
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blocks = (page.layout || []) as any[]

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center w-full">
        <div className="w-full max-w-7xl px-4 md:px-10 py-6 md:py-10 flex flex-col gap-12 md:gap-20">
          <RenderBlocks blocks={blocks} />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 mt-10 md:mt-20 py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white">
            <span className="material-symbols-outlined text-primary">surfing</span>
            <span className="font-bold">Wavecrest</span>
          </div>
          <div className="flex gap-6 text-slate-500 text-sm">
            <a className="hover:text-primary" href="#">Privacy</a>
            <a className="hover:text-primary" href="#">Terms</a>
            <a className="hover:text-primary" href="#">Instagram</a>
          </div>
          <p className="text-slate-400 text-sm">&copy; 2023 Driftwood Surf School</p>
        </div>
      </footer>
    </div>
  )
}
