# Project Context

## What This Is

A personal UI/UX portfolio website for **Wai Phyo Aung**, a Senior UI/UX & Motion Designer with 10+ years of experience. The site showcases case studies, professional experience, skills, and contact information.

**Live intent:** Attract senior design roles and freelance clients globally.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 (utility-first) |
| Animation | Framer Motion |
| Icons | Lucide React |
| Routing | None (single-page) |
| Hosting | Vercel (assumed) |

---

## Key Files & Folders

```
src/
├── components/
│   ├── CleanPortfolio.tsx   # Main content hub (about, skills, experience, case studies)
│   ├── Nav.tsx              # Sticky header navigation
│   ├── Footer.tsx           # Footer with social links and contact
│   ├── Button.tsx           # Reusable button component
│   └── ...                  # Modal components, etc.
├── data/
│   ├── profile.ts           # Name, email, social URLs
│   ├── projects.ts          # Case study data
│   ├── experience.ts        # Work history data
│   └── skillsAndTools.ts    # Skills and tools badge lists
├── assets/
│   └── images/              # Project thumbnails, logo, avatar
└── index.css                # Global styles, design tokens
```

---

## Design System

- **Border radius:** `rounded-xs` throughout (very subtle rounding)
- **Color palette:** Neutral grays (neutral-100 to neutral-900), emerald for availability, amber for Behance/motion indicator
- **Typography:** System sans-serif; mono for metadata (periods, dates)
- **Shadows:** `shadow-xs`, `shadow-sm` — very subtle
- **Dark mode:** Fully supported via Tailwind dark: prefix
- **Breakpoints:** Mobile-first; key breakpoints are `sm` (640px), `md` (768px), `lg` (1024px)

---

## Layout Architecture

- **Desktop:** 12-column grid (`lg:grid-cols-12`), left content (`lg:col-span-8`) + right sticky sidebar (`lg:col-span-4`)
- **Mobile:** Single column, stacked sections
- **Left column sections:** Profile header → About → Skills & Tools → Professional Experience → Works & Case Studies
- **Right column (sticky):** Schedule button, nav links, available-for-work badge
