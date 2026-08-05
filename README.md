# Dekunle Homes & Properties — Website

A premium, engineering-led corporate website for Dekunle Homes and Properties,
built with Next.js 14 (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Design system

- **Colors** — pulled from the real Dekunle Homes logo: navy `#24366F`,
  coral `#FF5E47`, on a light gray `#F6F7F8` background system. Defined in
  `tailwind.config.ts`. The coral has three shades used deliberately for
  accessibility (see below): `gold` (bright, decorative/icon use only),
  `gold-dark` (AA-compliant text and button fills on light backgrounds),
  `gold-soft` (AA-compliant text on navy/dark backgrounds).
- **Typography** — Space Grotesk (headings) + IBM Plex Sans (body), self-hosted
  via `@fontsource` so there's no external font request at build or runtime.
- **Components** — rounded-corner, elevated "Material 3"-style cards and pill
  buttons (`components/Button.tsx`), circular icon badges, an 8px-aligned
  spacing rhythm, all built on top of the site's original section order and
  navigation, not a copied layout.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

To build for production:

```bash
npm run build
npm run start
```

This project has already been verified with a full production build
(`npm run build`) — 22 routes compile and prerender successfully.

## Accessibility notes

The bright brand coral (`#FF5E47`) fails WCAG AA contrast (3.0–3.8:1) when
used as text or as a button fill against both white and navy backgrounds.
It is intentionally reserved for decorative accents and icon-only elements
(which only need 3:1 under WCAG 1.4.11). Anywhere coral carries readable
text — buttons, status pills, step badges, section labels — the code uses
`gold-dark` (5:1 on white) or `gold-soft` (7.8:1 on navy) instead. Keep this
distinction if you add new coral-colored UI.

## What's included

- **Homepage** — hero, about, services, filterable project gallery,
  comparison section, investment steps, process timeline, testimonials
  carousel, partner grid, CTA banner.
- **Inner pages** — About, Services, Projects (+ dynamic project detail
  pages), Investment, Property Management, Contact (with a working
  react-hook-form), Careers, Gallery, FAQs, Privacy Policy, Terms, Blog.
- **Content** lives in `lib/data.ts` — edit this file to update services,
  projects, testimonials, stats, contact details, etc. in one place.

## Things to replace before launch

The brand document provided was a design brief and logo asset sheet, not a
full company profile, so the following are placeholder content written in
the brand's voice and should be swapped for real information:

- Founder story / detailed "About" narrative
- Real project names, locations, photography and status
- Real testimonials
- Office address, phone number, email, and the embedded map query in
  `app/contact/page.tsx`
- Partner/institution names in `lib/data.ts` (`PARTNERS`)
- Stock photography (currently sourced from Unsplash via `images.unsplash.com`,
  already allow-listed in `next.config.mjs`) — replace with real site and
  project photography
- Contact form in `components/ContactForm.tsx` currently logs to console;
  wire the `onSubmit` handler to your email service, CRM, or an API route
- Privacy Policy and Terms pages are placeholders — replace with copy
  reviewed by counsel

## Project structure

```
app/                 routes (App Router)
components/          shared UI components (Button, IconBadge, SectionHead, PageHero, etc.)
lib/data.ts          all site content/copy in one place
tailwind.config.ts   design tokens (colors, fonts, radii, shadows)
app/globals.css      global styles
```

