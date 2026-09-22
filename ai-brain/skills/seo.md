# Skill: SEO

SEO implementation guidelines for this portfolio.

---

## Current SEO Setup

The portfolio is a single-page React app (no SSR). SEO is handled via static HTML meta tags in `index.html`.

---

## index.html Checklist

Ensure `index.html` contains:

```html
<head>
  <!-- Title: descriptive, under 60 chars -->
  <title>Wai Phyo Aung — Senior UI/UX & Motion Designer</title>

  <!-- Meta description: compelling, 150–160 chars -->
  <meta name="description" content="Senior UI/UX & Motion Designer with 10+ years of experience building scalable product design systems, high-conversion landing pages, and kinetic interfaces." />

  <!-- Open Graph (for social sharing previews) -->
  <meta property="og:title" content="Wai Phyo Aung — Senior UI/UX & Motion Designer" />
  <meta property="og:description" content="Explore case studies in UI/UX, motion design, and video editing." />
  <meta property="og:image" content="/og-image.png" />
  <meta property="og:url" content="https://yourportfolio.vercel.app" />
  <meta property="og:type" content="website" />

  <!-- Twitter / X Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Wai Phyo Aung — Senior UI/UX & Motion Designer" />
  <meta name="twitter:description" content="10+ years of UI/UX, motion design, and video editing." />
  <meta name="twitter:image" content="/og-image.png" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://yourportfolio.vercel.app" />

  <!-- Viewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Robots -->
  <meta name="robots" content="index, follow" />
</head>
```

---

## Semantic HTML Rules

| Element | Usage in this portfolio |
|---|---|
| `<header>` | Nav component |
| `<main>` | Main content area |
| `<footer>` | Footer component |
| `<h1>` | Designer name (one per page) |
| `<h2>` | Section headings (About, Experience, Works…) |
| `<h3>` | Card/item headings (project title, role title) |
| `<h4>` | Sub-headings within sections |
| `<p>` | Body copy |
| `<a>` | All external links with `target="_blank" rel="noreferrer"` |

---

## Heading Hierarchy

```
h1: Wai Phyo Aung (designer name in profile header)
  h2: About
  h2: Skills & Tools
  h2: Professional Experience
    h3: Senior UI/UX Designer (role title)
    h3: Motion Designer (role title)
  h2: Works & Case Studies
    h3: Classic Decoder (project title)
    h3: Vehicle Databases (project title)
    ...
```

Do **not** skip heading levels or use headings purely for styling.

---

## Image SEO

All `<img>` tags must have:
- `alt` — descriptive text (not empty, not "image")
- `loading="lazy"` — for below-the-fold images
- Correct `width` and `height` to prevent layout shift (CLS)

---

## Performance (Core Web Vitals)

- **LCP:** Profile image and hero section should load fast — ensure the avatar image is not blocked
- **CLS:** All images and iframes must have defined dimensions to prevent layout shift
- **FID/INP:** Avoid heavy JS on interaction; use CSS transitions for animations where possible

---

## External Links

All external links must include:
```tsx
target="_blank" rel="noreferrer"
```

`noreferrer` implies `noopener` — prevents tab-napping and doesn't send referrer headers.
