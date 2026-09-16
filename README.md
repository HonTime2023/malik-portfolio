# Malik Pelumi Bello — Portfolio

Single-page portfolio for an AI/ML Engineer & Researcher, built with Next.js (App Router), Tailwind CSS v4, and Framer Motion.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 (theme tokens in `src/app/globals.css`)
- **Motion:** Framer Motion
- **Icons:** lucide-react (+ hand-rolled brand icons in `src/components/ui/BrandIcons.tsx` — lucide dropped trademarked logos)
- **AI ("Ask My AI"):** `src/app/api/chat/route.ts` proxies to Google Gemini, grounded on `src/config/aiKnowledge.ts`

## Local development

```bash
npm install
cp .env.local.example .env.local   # add your GEMINI_API_KEY to enable the AI chat
npm run dev
```

## Content

All site copy — experience, projects, publications, capabilities — lives in `src/config/siteData.ts`. Update that file to change what's on the page; no component edits needed for content changes.

LinkedIn recommendations: add entries to the `recommendations` array in `siteData.ts` (shows an empty state until populated).

## Deployment

Deployed on Vercel (connected to this GitHub repo for auto-deploy on push to `main`). Required environment variable in the Vercel project settings: `GEMINI_API_KEY`.
