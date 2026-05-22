# Hejira — Running Away With Honor

An interactive museum website dedicated to Joni Mitchell's *Hejira* (1976). Nine songs, three journeys, one hand-painted map. The user doesn't read about the album — they traverse it.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Framework:** Next.js 14+ (App Router) + TypeScript (strict)
- **Styling:** Tailwind CSS + CSS custom properties (design tokens)
- **Animation:** Framer Motion (components) + GSAP/ScrollTrigger (scroll-driven)
- **Smooth scroll:** Lenis
- **Maps:** react-simple-maps + d3-geo (AlbersUsa projection)
- **Audio:** Howler.js + Web Audio API
- **Fonts:** Italiana, IM Fell English, Cormorant Garamond, Courier Prime, Reenie Beanie, Homemade Apple (via next/font)

## Project Structure

```
app/                    Route pages (4 acts)
  page.tsx              Act I  — Umbral (cinematic entry)
  the-map/              Act II — The notebook-map
  song/[slug]/          Act III — Song capsules (9 songs)
  refuge-of-the-roads/  Act IV — Epilogue

components/
  umbral/               Cinematic entry scene
  map/                  Map, routes, markers, legend
  capsule/              Song capsule layout and sections
  epilogue/             Closing scene
  shared/               Paper texture, cursors, SVG symbols

lib/
  songs-data.ts         9 songs with full metadata
  journey-data.ts       3 journey identities
  routes-coords.ts      Geographic waypoints
  design-tokens.ts      Tokens as typed JS object

styles/
  globals.css           Design tokens + reset
  animations.css        Global keyframes

public/
  maps/                 TopoJSON for US map
  photos/               USER PROVIDED — photoshoot images
  audio/                USER PROVIDED — 30s samples
```

## Missing Assets (user must provide)

1. **Photos** (`public/photos/`): Photoshoot images by Norman Seeff and Joel Bernstein (1976). See `public/photos/README.md` for expected filenames.

2. **Audio** (`public/audio/`): 30-second samples from each of the 9 tracks, plus `wind-loop.mp3` for the umbral ambient. See `public/audio/README.md`.

## Deploy

Target: Vercel. Run `vercel` or connect the repo to Vercel dashboard.
