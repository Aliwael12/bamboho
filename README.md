# BamBoho — frontend

A slow, editorial frontend for **BamBoho** ([@bambohoegy](https://www.instagram.com/bambohoegy/)) — a bohemian, earthy home-decor brand. Built with Next.js 15 (App Router), Tailwind CSS, Framer Motion and Lenis smooth scroll. Animation language inspired by [petralithe.com](https://www.petralithe.com).

## Stack

- **Next.js 15** (App Router, Server Components where possible)
- **Tailwind CSS 3** — custom earthy palette (`cream`, `sand`, `clay`, `terracotta`, `rust`, `olive`, `bark`, `ink`)
- **Framer Motion** — scroll reveals, page transitions, parallax, sliders
- **Lenis** — buttery smooth scrolling
- **Fraunces + Inter** — editorial serif display + clean sans body

## Pages

- `/` — Home: cinematic hero, philosophy, **scroll-pinned horizontal collections slider**, split parallax blocks, indexed values list, lookbook teaser grid, testimonials carousel, FAQ accordion, CTA
- `/about` — Studio story, makers, principles
- `/lookbook` — Asymmetric gallery with parallax + hover captions
- `/contact` — Enquiry form with subject chips, studio info

## Signature interactions

- Curtain page transition with wordmark wipe
- Word-by-word mask reveals on all major headlines
- Horizontal scroll-pinned collection slider (Petralithe-style)
- Parallax images on every editorial block
- Magnetic pill buttons with a dark fill sweep on hover
- Animated underline on every link
- Soft SVG grain overlay for a printed-paper feel

## Getting started

```bash
cd bamboho
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
```

## Folder structure

```
bamboho/
├── app/
│   ├── layout.tsx           # fonts, <body>, SmoothScroll + PageTransition
│   ├── globals.css          # design tokens, buttons, grain, kicker, hover underline
│   ├── page.tsx             # Home
│   ├── about/page.tsx
│   ├── lookbook/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Hero.tsx             # parallax hero with staggered word reveals
│   ├── Navigation.tsx       # sticky nav + mobile overlay
│   ├── Footer.tsx
│   ├── SmoothScroll.tsx     # Lenis wrapper
│   ├── PageTransition.tsx   # two-stage curtain transition
│   ├── Reveal.tsx           # <Reveal> + <RevealWords>
│   ├── ParallaxImage.tsx    # scroll-driven image translate + scale
│   ├── CollectionSlider.tsx # horizontal pin-scroll slider
│   ├── Marquee.tsx
│   ├── Accordion.tsx
│   ├── Testimonials.tsx
│   └── ContactForm.tsx
├── lib/
│   └── data.ts              # all placeholder content
├── tailwind.config.ts
├── next.config.js           # whitelists images.unsplash.com for <Image>
└── package.json
```

## Swapping in real brand assets

Everything swappable lives in **`lib/data.ts`** and in the image URLs inside the page files. Specifically:

1. **Logo / wordmark** — currently rendered as type in `components/Navigation.tsx` (`Bam<span>B</span>oho`). Replace with an `<Image>` once you send me the logo.
2. **Hero image** — `components/Hero.tsx` line ~34.
3. **Collections** — `lib/data.ts` → `collections` array. Each item takes `name`, `subtitle`, `palette`, `image`.
4. **Lookbook grid** — `lib/data.ts` → `lookbookImages`. `span` is one of `"small" | "medium" | "large"` to control the tile size.
5. **Copy** — values, testimonials, and FAQs all live in `lib/data.ts`.
6. **Colors** — `tailwind.config.ts` has the full palette. Change the hex values and the whole site updates.
7. **Fonts** — `app/layout.tsx` imports Fraunces + Inter. Swap either with any Google Font.

## What I still need from you

To take this from "great mockup" to "actually BamBoho":

- **Logo** (SVG ideal, or a high-res PNG with transparent background)
- **Brand colors** (hex codes) — the current earthy palette is my best guess; tell me what the real one is
- **5–10 campaign / product photos** for the hero, collections slider, lookbook grid and CTA
- **Real copy** — the brand's tagline, story (1–2 paragraphs), and what they actually make
- **Contact details** — real email, phone, address (currently placeholders)
- **Social links** — any platforms beyond Instagram

Drop those in the chat and I'll wire them all in.
