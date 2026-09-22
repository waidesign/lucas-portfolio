# Skill: Code Generation

Guidelines for generating new UI components and sections for this portfolio.

---

## Component Template

```tsx
import React from 'react';

interface MyComponentProps {
  // props here
}

export const MyComponent: React.FC<MyComponentProps> = ({ }) => {
  return (
    <div className="space-y-6 sm:space-y-8 scroll-mt-24" id="section-id">
      {/* Section heading */}
      <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-900 dark:text-white">
        Section Title
      </h2>

      {/* Content */}
    </div>
  );
};
```

---

## Section Divider Pattern

Always separate major sections with:
```tsx
<div className="border-t border-neutral-200 dark:border-neutral-800" />
```

---

## Card Pattern

```tsx
<div className="p-4 sm:p-6 rounded-xs border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0c0c0e] shadow-xs hover:shadow-md hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300">
  {/* card content */}
</div>
```

---

## Badge / Tag Pattern

```tsx
<span className="inline-flex items-center px-2.5 py-1 rounded-xs text-[11px] font-medium bg-neutral-100 text-neutral-800 border border-neutral-200/90 dark:bg-[#18181c] dark:text-neutral-100 dark:border-white/5 shadow-2xs">
  Badge Label
</span>
```

---

## Tooltip Pattern

```tsx
<div className="relative group/tooltip">
  {/* Trigger */}
  <button>Hover me</button>

  {/* Tooltip */}
  <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30
    opacity-0 translate-y-1.5 group-hover/tooltip:opacity-100 group-hover/tooltip:translate-y-0
    transition-all duration-200 ease-out">
    <div className="px-2.5 py-1.5 rounded-xs bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 whitespace-nowrap shadow-lg text-[10px] font-medium">
      Tooltip text
    </div>
    <div className="w-0 h-0 border-x-[5px] border-x-transparent border-t-[5px] border-t-neutral-900 dark:border-t-neutral-100 mx-auto" />
  </div>
</div>
```

> **Mobile note:** If the trigger is near the right edge of the screen, use `right-0` instead of `left-1/2 -translate-x-1/2` for mobile to prevent viewport overflow.

---

## Button Pattern

Use the `Button` component from `src/components/Button.tsx`:

```tsx
import { Button } from './Button';

<Button variant="primary" href="https://..." target="_blank">
  <span>Label</span>
  <ExternalLink className="w-3.5 h-3.5" />
</Button>

<Button variant="secondary" onClick={handler}>
  <span>Label</span>
</Button>
```

---

## Link with ArrowUpRight Pattern

```tsx
<a
  href="https://..."
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-0.5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors group/link"
>
  <span>Link Text</span>
  <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
</a>
```
