# Skill: Debugging

Common issues and how to diagnose them in this portfolio project.

---

## Layout Issues

### Element overflowing viewport horizontally

**Likely cause:** A flex or grid child has no `min-w-0`, causing it to refuse to shrink.

**Fix:** Add `min-w-0` to the overflowing child, or `overflow-hidden` to the parent.

```tsx
// Before
<div className="flex-1">...</div>

// After
<div className="flex-1 min-w-0">...</div>
```

---

### Tooltip clipping off-screen on mobile

**Likely cause:** Tooltip positioned with `left-0` (grows rightward) but element is near the right edge.

**Fix:** On mobile, use `right-0` to grow leftward:

```tsx
className="absolute bottom-full right-0 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 ..."
```

---

### Sticky sidebar not sticking

**Likely cause:** Parent container has `overflow-hidden` or the sidebar lacks the sticky classes.

**Fix:** Ensure sidebar has `lg:sticky lg:top-20` and no ancestor has `overflow-hidden`.

---

### Grid columns not applying on mobile

**Likely cause:** Classes without a breakpoint prefix apply to all sizes. Check that you're not accidentally setting `grid-cols-2` that only works at a certain width.

**Fix:** Always start mobile-first: `grid-cols-1 md:grid-cols-2`.

---

## Style Issues

### Dark mode not applying

**Likely cause:** Missing `dark:` class, or Tailwind's `dark` class not present on `<html>`.

**Check:** Open DevTools → inspect `<html>` element → confirm `class="dark"` is toggled correctly.

---

### Transition not animating

**Likely cause:** Missing `transition-all` or `transition-{property}` class, or conflicting `duration-0`.

**Fix:** Confirm both the base state and the hover/active state have the correct transition class:

```tsx
className="opacity-0 translate-y-1.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0"
```

---

### `group-hover` not triggering

**Likely cause:** The `group` class is missing on the parent, or the variant name doesn't match.

```tsx
// Parent must have group (or group/name for named groups)
<div className="group/card">
  {/* Child uses matching group name */}
  <div className="opacity-0 group-hover/card:opacity-100">...</div>
</div>
```

---

## TypeScript Issues

### TypeScript error: "Property does not exist on type"

**Likely cause:** A data object shape changed in `src/data/` but the component still uses the old property.

**Fix:** Update the interface/type in the data file, then update all usages.

---

### TypeScript error after adding new import

**Likely cause:** Import path is wrong or the module has no default export.

**Fix:** Check the import path and use named imports where appropriate:
```tsx
import { ComponentName } from './ComponentName'; // named
import ComponentName from './ComponentName';      // default
```

---

## Dev Server Issues

### Changes not reflecting in browser

1. Check the terminal running `npm run dev` for compilation errors
2. Hard refresh the browser (`Ctrl+Shift+R`)
3. If Vite HMR is stuck, restart the dev server

### Port already in use

```bash
# Kill the process on port 5173 (default Vite port)
npx kill-port 5173
npm run dev
```
