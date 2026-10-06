# EMNEX AI — Portfolio Website

The official website for **EMNEX AI** — AI-powered product advertisements and cinematic promotional videos for brands.

A dark, cinematic multi-page portfolio built around the films themselves: the videos are the product, the website is the gallery.

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero film, selected work, featured film, services, industries, process, about |
| `/work` | The Archive — complete index of all ten films |
| `/contact` | Start a Project — project brief form |

Every conversion path (nav CTA, hero, final call-to-action, footer, and the contact form itself) lands directly in WhatsApp: **+234 816 298 3333**. The form has no backend — on submit it composes a structured brief into a pre-filled `wa.me` deep link, so nothing is stored and the conversation starts instantly.

## Tech

- [Next.js](https://nextjs.org) 16 (App Router) + React 19
- Tailwind CSS 4
- Framer Motion — restrained, cinematic transitions
- Films + imagery hosted on Cloudinary, lazy-loaded with IntersectionObserver (play in viewport, pause off-screen), immersive lightbox player with sound
- Zero database, zero external services — static pages, CDN-fast

## Getting started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
bun run build   # static output — /, /work, /contact prerendered
bun run start   # serve the standalone build
```

## Deploy on Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com), **Add New… → Project** and import the repo.
3. Framework is auto-detected (Next.js) — no environment variables needed. Deploy.

Every push to `main` triggers an automatic production deployment; pull requests get preview URLs.
