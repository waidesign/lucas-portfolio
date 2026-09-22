# Rules — Non-Negotiable Constraints

These rules must ALWAYS be followed when working on this project. Do not deviate without explicit user instruction.

---

## Design Rules

1. **Border radius** — Always use `rounded-xs`. Never use `rounded`, `rounded-md`, `rounded-lg`, or `rounded-full` for card/button/container elements.

2. **Color palette** — Use Tailwind neutral grays as the primary palette. Do not introduce new named colors (no `blue-500`, `red-400`, etc.) unless explicitly requested. Accent colors currently in use:
   - Emerald — availability badge only
   - Amber — Behance / motion indicator only

3. **Dark mode** — Every element must have both light and dark mode variants. Never add styles without a corresponding `dark:` class.

4. **Shadows** — Keep shadows very subtle: `shadow-xs` or `shadow-sm` maximum. Never use `shadow-lg` on cards or containers.

5. **Typography** — Do not change font sizes dramatically. Follow the existing scale: `text-xs` for metadata, `text-sm` for body, `text-base`+ sparingly for headings.

6. **No TailwindCSS v3 syntax** — This project uses Tailwind v4. Avoid `@apply` in component files. Use utility classes directly.

---

## Code Rules

7. **TypeScript** — All components must be fully typed. Run `npx tsc --noEmit` after significant changes to confirm zero errors.

8. **No hardcoded personal data in components** — Names, URLs, email addresses, and social links must come from `src/data/profile.ts` or the relevant data file. Exception: one-off embedded content (GIF iframes, etc.)

9. **Preserve all existing comments and docstrings** unless explicitly removing a feature.

10. **Mobile-first** — All new styles must work at 320px minimum width. Test mental model: "Does this overflow or clip on a 320px screen?"

---

## Content Rules

11. **Do not change the designer's name, title, or bio** without explicit instruction.

12. **Do not remove any existing social links** (Behance, LinkedIn, GitHub, Medium) without explicit instruction.

13. **Do not unhide the AEWV visa paragraph** — It is intentionally hidden in the About section. Keep the comment in place.

14. **Behance tooltip copy** — The hover tooltip text is: *"Discover Motion and Video Editing Portfolio."* Do not change this without instruction.

---

## Process Rules

15. **Always run `tsc --noEmit` after TypeScript changes** to confirm zero errors before considering a task done.

16. **Update project-history.md** when completing a significant change, so future AI sessions have continuity.
