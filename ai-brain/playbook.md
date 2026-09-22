# Playbook — How to Work on This Project

## Before Starting Any Task

1. Read **context.md** to understand the tech stack and file structure
2. Read **rules.md** to confirm constraints
3. Check **project-history.md** for recent changes that may affect your task
4. Identify the target file(s) — most UI changes live in `CleanPortfolio.tsx`, `Nav.tsx`, or `Footer.tsx`

---

## Common Task Patterns

### Adding or Editing Content (Text, Links, Copy)

- Data lives in `src/data/` — prefer editing data files over hardcoding in components
- Profile URLs → `src/data/profile.ts`
- Case study info → `src/data/projects.ts`
- Work history → `src/data/experience.ts`
- Skills/tools lists → `src/data/skillsAndTools.ts`

### Adding a New UI Section

1. Identify which column it belongs to (left content column vs. right sticky sidebar)
2. Follow the existing section pattern: `space-y-6 sm:space-y-8 scroll-mt-24` wrapper with a `border-t` divider above
3. Section headings use: `text-sm font-semibold tracking-wide uppercase`
4. Separate sections with: `<div className="border-t border-neutral-200 dark:border-neutral-800" />`

### Styling Changes

- Always use Tailwind utility classes — no inline styles except for dynamic values
- Use `sm:` prefix for mobile-first responsive overrides
- Dark mode: always pair light and dark variants (`bg-white dark:bg-black`, etc.)
- Keep `rounded-xs` border radius consistent — do NOT use `rounded-md`, `rounded-lg`, etc.

### Adding Interactive Elements

- Hover states: use Tailwind `group` / `group-hover` pattern
- Tooltips: use the established pattern from the Behance link — `opacity-0 translate-y-1.5` → `opacity-100 translate-y-0` on `group-hover`
- Modals: existing modal pattern uses `selectedExperienceModal` state + overlay in `CleanPortfolio.tsx`

### Mobile-First Checklist

Before finishing any change, verify:
- [ ] Does it look correct at 320px width?
- [ ] Do tooltips stay within the viewport (anchor `right-0` for right-side elements on mobile)?
- [ ] Are expand buttons/icons accessible on small screens?
- [ ] Does text truncate gracefully or wrap intentionally?

---

## Running the Project

```bash
npm run dev      # Start dev server (hot reload)
npx tsc --noEmit # Type-check without building
npm run build    # Production build
```

---

## Deploy

The project deploys to Vercel. Push to `main` to trigger automatic deployment.
