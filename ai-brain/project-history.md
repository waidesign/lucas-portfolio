# Project History

A running log of major design decisions, UI changes, and refactors. Most recent changes are listed first.

---

## 2026-09-23

### Mobile Tooltip Anchoring Fix
- Both info-icon tooltips (Professional Experience, Works & Case Studies) were overflowing the right edge of the viewport on narrow mobile screens
- Fix: changed anchor from `left-0` to `right-0` on mobile, with `items-end` and `mr-2` caret offset. Desktop stays centered (`left-1/2 -translate-x-1/2`)

### Behance Footer Tooltip
- Updated Behance link in `Footer.tsx` to match the header's slide-up tooltip behavior
- Removed the old inline expanding `Motion & Video` badge
- Removed now-unused `Play` import from Footer

### Behance Header Tooltip Cleanup
- Removed `Play` icon from the Behance hover tooltip in CleanPortfolio
- Removed pulsing amber dot indicator from Behance link
- Updated tooltip copy to: *"Discover Motion and Video Editing Portfolio."*

### Links Layout Revert
- Reverted links from 2×2 grid back to `flex flex-wrap` with `•` separators (user preference)
- Right column reverted to `shrink-0` (smaller than left column, not equal width)

### Experience Expand Button — Mobile Placement
- On mobile, the expand button is now inline with the period/years text (flex row: period left, button right)
- On desktop (`md+`), button remains inline next to the role title
- Removed `relative` from the row wrapper (no longer needed for absolute positioning)

### GIF Banner — Mobile Aspect Ratio
- Mobile: 16:9 aspect ratio via `aspect-video` container with center-crop technique (iframe height 177.78%, `translateY(-50%)`)
- Desktop: square (1:1) with grayscale hover effect unchanged

---

## 2026-09-22

### Behance Tooltip — Replaced Expanding Badge
- Previous: inline expanding badge with Play icon, "Motion" → "Motion & Video" on hover
- New: clean hover tooltip (slide-up, dark pill, centered caret) with text *"Discover Motion and Video Editing Portfolio."*

### Links 2×2 Grid (then reverted)
- Briefly implemented 2×2 grid layout for social links; reverted to flex-wrap on user request

### Social Links Reorder
- Order: Behance → LinkedIn → GitHub → Medium
- Added GitHub link (`https://github.com/waidesign`)
- Behance marked as Motion & Video portfolio

### GIF Banner — Responsive Sizing
- Full-width on mobile, `max-w-[220px]` on desktop
- Grayscale on desktop by default, full color on hover
- `pointer-events: none` to prevent unwanted iframe interaction
- "via GIPHY" credit text removed

### Behance Banner Card
- Added 2-column banner card below the Classic Decoder case study
- Left col: embedded Giphy GIF (motion design reel)
- Right col: copy directing to Behance for motion & video case studies
- CTA button: "Case studies on Behance" with ExternalLink icon

### Icon Standardization
- Resume button, "Case studies on Behance" button, "Schedule a Virtual Chat" buttons → all use `ExternalLink` icon
- Nav resume button updated

### Mobile Expand Buttons (Project Cards)
- Project cards: `Maximize2` icon shown as absolute top-right on mobile, inline on desktop
- Added `relative` to project card wrapper

### Nav Cleanup
- Hidden `WorldClock` component
- Nav links aligned to right corner of header

### Skills Badges Updated
- "Developer-handoff-fidelity" → "Developer-hadoff-design"
- "No-code-development" → "No-code & AI vibe-coding"
- Added "AI tools for design" badge
- "Git" → "Github"

### About Section
- Hidden AEWV visa availability paragraph (commented out in JSX)
