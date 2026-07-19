# MacBook Pro Store Experience

A cinematic MacBook Pro shopping experience built with React, TypeScript, Vite, Tailwind CSS, and GSAP. The page includes a product hero, model lineup, product exploration, feature storytelling, comparison, configurator, and bag summary flow.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Local Development

```bash
npm install
npm run dev
```

The development server runs with Vite and prints the local URL in the terminal.

## Production Checks

```bash
npm run lint
npm run build
npm audit --audit-level=high
```

The production build is emitted to `dist/`.

## Deploy

This project is configured for static deployment on Vercel.

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

The same `dist/` output can also be served by any static host that supports Vite single-page projects.
