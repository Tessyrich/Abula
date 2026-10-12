# Abula Zone Africa — spec website

Modern, fast, single-page site for Abula Zone Africa, 121 Woolwich High Street, London SE18 6DS.
Built on spec as a pitch; every fact (address, phone, hours, hygiene inspection) comes from public listings.
Menu prices are indicative and marked as such on the page.

## Stack

- Next.js 16 (App Router, Cache Components, Turbopack) + React 19 + TypeScript
- Tailwind CSS v4 with a custom token theme in `src/app/globals.css`
- `next/font` self-hosted Fraunces (display) and Geist (body)
- Lucide icons; CSS scroll-driven animations (no animation JS)
- Fully static output; the only client components are the nav, menu tabs and booking form
- Booking form uses a React Server Action with validation and a honeypot (`src/app/actions.ts`)
- SEO: Restaurant JSON-LD, generated Open Graph image, sitemap, robots

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy (Vercel)

```bash
npx vercel        # first deploy, follow prompts
npx vercel --prod
```

Set `NEXT_PUBLIC_SITE_URL` to the live URL in the Vercel project settings (see `.env.example`).

## Before handing over to the client

- Replace the illustrated plate and gradient dish cards with real food photography (`src/components/Plate.tsx`, `src/components/Signatures.tsx`)
- Confirm menu items and prices in `src/lib/data.ts`
- Wire the booking action to email, WhatsApp or a bookings table (TODO in `src/app/actions.ts`)
- Register a domain (abulazone.co.uk was unregistered on 12 Oct 2026) and point Google Business Profile at it
