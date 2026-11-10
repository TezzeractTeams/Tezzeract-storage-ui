# Tezzeract Storage UI

Landing page for the Tezzeract storage solution.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## Structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, metadata
    page.tsx           # Landing page composition
    globals.css         # Tailwind entry + global styles
  components/
    landing/
      Navbar.tsx
      Hero.tsx
      Features.tsx
      HowItWorks.tsx
      Pricing.tsx
      Cta.tsx
      Footer.tsx
  lib/                   # Shared utilities (empty for now)
public/                  # Static assets (logos, images, icons)
```

Each section under `components/landing/` is a placeholder — fill in real
copy, imagery and styling as the design comes together.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.
