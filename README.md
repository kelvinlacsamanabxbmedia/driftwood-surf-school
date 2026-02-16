# Driftwood Surf School

A website for Driftwood Surf School built with [Payload CMS 3.0](https://payloadcms.com/) and [Next.js 15](https://nextjs.org/).

## Tech Stack

- **CMS:** Payload CMS 3.75
- **Framework:** Next.js 15 (App Router)
- **Database:** MongoDB (via Mongoose adapter)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Rich Text:** Lexical Editor

## Collections

- **Users** — Authentication-enabled collection with admin panel access
- **Media** — Upload-enabled collection with image management
- **Pages** — Content pages with a flexible block-based layout

## Content Blocks

The site uses a modular block system for page layouts:

- **Hero** — Hero/banner section
- **LessonCards** — Surf lesson offerings
- **InstructorGrid** — Instructor profiles
- **BookingForm** — Lesson booking form
- **OurStory** — About section
- **FAQ** — Frequently asked questions
- **LiveConditions** — Live surf conditions

## Getting Started

### Prerequisites

- Node.js `^18.20.2` or `>=20.9.0`
- pnpm `^9` or `^10`
- MongoDB instance (local or remote)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/kelvinlacsamanabxbmedia/driftwood-surf-school.git
   cd driftwood-surf-school
   ```

2. Copy the environment variables and configure them:

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your `DATABASE_URL` and `PAYLOAD_SECRET`.

3. Install dependencies and start the dev server:

   ```bash
   pnpm install && pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

5. Navigate to [http://localhost:3000/admin](http://localhost:3000/admin) to create your first admin user and manage content.

### Seeding Data

To seed the database with a default home page:

```bash
npx tsx src/seed.ts
```

### Docker (Optional)

1. Update `DATABASE_URL` in your `.env` to `mongodb://127.0.0.1/<dbname>`
2. Run `docker-compose up` (pass `-d` to run in background)

## Scripts

| Script | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm test` | Run all tests (integration + e2e) |
| `pnpm test:int` | Run integration tests (Vitest) |
| `pnpm test:e2e` | Run e2e tests (Playwright) |
| `pnpm generate:types` | Generate Payload TypeScript types |
| `pnpm lint` | Run ESLint |
