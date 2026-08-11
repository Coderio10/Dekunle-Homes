# Dekunle Homes & Properties

A modern real-estate and property marketing website for Dekunle Homes & Properties, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Overview

This project is a multi-page corporate website for showcasing properties, services, investment opportunities, and company information. It uses the Next.js App Router and includes a reusable component system, animated sections, and centralized content management.

## Features

- Responsive landing page and marketing sections
- Property and project showcase pages
- Investment and property management content areas
- Contact page with form handling
- FAQ, blog, careers, privacy, and terms pages
- Reusable UI components and shared design system
- Centralized copy and data in one content file
- App Router-based pages for clean routing

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Hook Form

## Project Structure

```bash
.
├── app/
│   ├── about/
│   ├── blog/
│   ├── careers/
│   ├── contact/
│   ├── faqs/
│   ├── gallery/
│   ├── investment/
│   ├── privacy-policy/
│   ├── projects/
│   ├── property-management/
│   ├── services/
│   ├── terms/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── lib/
│   └── data.ts
├── public/
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── next-env.d.ts
└── README.md
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the site in your browser at:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

Run lint checks:

```bash
npm run lint
```

## Content Management

Most page text, services, projects, testimonials, partners, and contact content are stored in:

```bash
lib/data.ts
```

This makes it easier to update content without editing multiple component files.

## Styling and Design

The visual system is defined in the project configuration and global styles, including:

- Brand colors and theme tokens
- Typography setup
- Reusable UI patterns and spacing rhythm
- Card and button styling
- Motion-based transitions

## Notes

Some sections may still contain placeholder content such as sample project details, generic testimonials, and contact information. These should be replaced with real business content before production launch.

## License

This project is currently unlicensed unless otherwise stated by the owner.

## Contact

For updates or deployment questions, coordinate with the project maintainer or site owner.

