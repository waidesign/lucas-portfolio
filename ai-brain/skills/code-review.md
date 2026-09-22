# Skill: Code Review

Checklist for reviewing changes to this portfolio codebase.

---

## General Quality

- [ ] No hardcoded personal data in components (use data files)
- [ ] No inline styles except for truly dynamic values (e.g. `paddingBottom` trick for aspect ratios)
- [ ] All Tailwind classes are valid and use correct v4 syntax
- [ ] TypeScript compiles with zero errors (`npx tsc --noEmit`)
- [ ] No unused imports left behind

---

## Design Consistency

- [ ] Border radius: only `rounded-xs` used on cards, buttons, containers
- [ ] Dark mode variants present for every color class
- [ ] Shadows are subtle (`shadow-xs` / `shadow-sm` maximum)
- [ ] Spacing follows existing scale (no arbitrary `mt-[37px]` etc. unless unavoidable)
- [ ] Font sizes follow existing scale (`text-xs`, `text-sm`, `text-base`)

---

## Responsive / Mobile

- [ ] Looks correct at 320px (smallest common mobile width)
- [ ] Tooltips near the right side of screen use `right-0` anchor on mobile
- [ ] Interactive elements have adequate tap targets (min ~32px)
- [ ] Text does not overflow its container on narrow screens
- [ ] Images and iframes have correct responsive sizing

---

## Accessibility

- [ ] Interactive elements have `aria-label` or visible label
- [ ] Tooltips use `role="tooltip"` where appropriate
- [ ] Focusable elements can be tabbed to (`tabIndex={0}` if needed)
- [ ] Color contrast is sufficient in both light and dark modes
- [ ] Images have meaningful `alt` text

---

## Performance

- [ ] Images use `loading="lazy"` where not above the fold
- [ ] No unnecessary `useEffect` or heavy re-renders introduced
- [ ] Animations use CSS transitions or Framer Motion (not JS setInterval)

---

## Red Flags to Reject

- ❌ New `rounded-lg` or larger border radius introduced
- ❌ Hardcoded email, URL, or name outside of `src/data/`
- ❌ Missing `dark:` variant on a colored element
- ❌ TypeScript `any` type used without justification
- ❌ Inline `style={{ color: '...' }}` for non-dynamic values
