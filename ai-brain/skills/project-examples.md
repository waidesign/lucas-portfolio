# Skill: Project Examples

Reference implementations from this codebase to copy patterns from.

---

## Slide-Up Tooltip (Behance Link)

Used in: `CleanPortfolio.tsx` and `Footer.tsx`

```tsx
<div className="relative group/behance">
  <a
    href="https://www.behance.net/waiphyoaungdesign"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-0.5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
  >
    <span>Behance</span>
    <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover/behance:translate-x-0.5 group-hover/behance:-translate-y-0.5 transition-transform" />
  </a>
  {/* Tooltip */}
  <div
    className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30
      opacity-0 translate-y-1.5 group-hover/behance:opacity-100 group-hover/behance:translate-y-0
      transition-all duration-200 ease-out"
  >
    <div className="px-2.5 py-1.5 rounded-xs bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 whitespace-nowrap shadow-lg text-[10px] font-medium">
      Discover Motion and Video Editing Portfolio.
    </div>
    <div className="w-0 h-0 border-x-[5px] border-x-transparent border-t-[5px] border-t-neutral-900 dark:border-t-neutral-100 mx-auto" />
  </div>
</div>
```

---

## Info Icon with Tooltip (Section Header)

Used in: Experience section, Case Studies section in `CleanPortfolio.tsx`

```tsx
<div className="relative group inline-flex items-center">
  <span
    tabIndex={0}
    role="button"
    aria-label="Helpful hint text"
    className="cursor-help text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors p-0.5 rounded"
  >
    <Info className="w-3.5 h-3.5" />
  </span>
  <div
    role="tooltip"
    className="pointer-events-none absolute bottom-full right-0 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 mb-2
      opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
      transition-opacity duration-150 flex flex-col items-end sm:items-center z-30 drop-shadow-sm"
  >
    <div className="w-max max-w-[200px] sm:max-w-none px-2.5 py-1 text-xs font-normal rounded bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 shadow-md">
      Helpful hint text here.
    </div>
    <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-neutral-900 dark:border-t-neutral-100 -mt-px mr-2 sm:mr-0" />
  </div>
</div>
```

---

## Expandable Experience Row (Mobile/Desktop Split)

Used in: Professional Experience section in `CleanPortfolio.tsx`

- Mobile: Period text + expand button as flex row (button right-aligned)
- Desktop: Period in its own column, expand button inline with role title

```tsx
<div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start">
  {/* Period + mobile expand button */}
  <div className="md:col-span-3 flex items-center justify-between md:block">
    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
      {role.period}
    </span>
    <button className="md:hidden p-1.5 rounded-xs bg-neutral-100 ...">
      <Maximize2 className="w-3.5 h-3.5" />
    </button>
  </div>

  {/* Role content + desktop expand button */}
  <div className="md:col-span-9 space-y-2.5">
    <div className="flex items-start justify-between gap-3">
      <div className="space-y-1">
        <h3>{role.role}</h3>
        <p>{role.company} • {role.location}</p>
      </div>
      <button className="hidden md:inline-flex p-2 rounded-xs ...">
        <Maximize2 className="w-4 h-4" />
      </button>
    </div>
    <p>{role.summary}</p>
  </div>
</div>
```

---

## Aspect-Ratio Center-Crop (GIF / iframe in 16:9 Container)

Used in: Behance banner card, mobile view in `CleanPortfolio.tsx`

```tsx
{/* 1:1 content center-cropped into 16:9 frame — no grey bars */}
<div className="relative aspect-video w-full overflow-hidden rounded-xs">
  <iframe
    src="https://giphy.com/embed/XXXX"
    style={{
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: '100%',
      height: '177.78%', // 16/9 × 100% = fills width with square content
      border: 0,
      pointerEvents: 'none',
    }}
    allowFullScreen
    title="Description"
  />
</div>
```

---

## Email Copy Button with Hover Swap

Used in: `Footer.tsx`

```tsx
<Button variant="secondary" onClick={handleCopyEmail} className="group relative overflow-hidden">
  {copiedEmail ? (
    <span className="inline-flex items-center gap-1.5 text-emerald-600">
      <Check className="w-3.5 h-3.5" />
      Email Copied to Clipboard
    </span>
  ) : (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Default */}
      <span className="absolute inset-0 flex items-center justify-center gap-1.5 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1.5">
        <Mail className="w-3.5 h-3.5" />
        <span>Get In Touch</span>
      </span>
      {/* Hover reveal */}
      <span className="absolute inset-0 flex items-center justify-center gap-1.5 transition-all duration-300 opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0">
        <Copy className="w-3.5 h-3.5" />
        <span>{email}</span>
      </span>
    </div>
  )}
</Button>
```
