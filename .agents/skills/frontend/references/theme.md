# Theme

Tokens live in `apps/client/src/styles/globals.css`. This repo has two related layers: **shadcn semantic tokens** (app chrome, forms, light/dark) and **portfolio gallery tokens** (Maciej-style black canvas).

## How it works

- Raw values are declared in `:root` / `.dark` and portfolio `@theme inline` entries, then mapped to Tailwind utilities.
- Prefer utilities (`bg-background`, `text-muted-foreground`, `border-border`, `bg-primary`, `text-bone-white`, `bg-slate-dark`, …) over raw CSS variables in JSX.
- Never hardcode hex or `oklch(...)` in components. If a value is missing, add a token to `globals.css` (both light and dark when it is a semantic role).

## Portfolio tokens

Defined under `@theme inline` and consumed by `.portfolio` surfaces:

| Group | Tokens / utilities |
|-------|-------------------|
| Neutrals | `bone-white`, `slate-dark`, `graphite`, `fog`, `ash`, `charcoal` |
| Accent | `indigo-dusk`, `gallery-accent` |
| Surfaces | `surface-card`, `surface-card-hover`, `surface-hairline`, `surface-media` — also aliased as `--surface-*` inside `.portfolio` |
| Type | `font-replica-regular` (Satoshi), `font-replica-mono` (Commit Mono), `font-display` (Clash Display) |
| Type scale | `text-caption` (14px) … `text-display` (120px) with matching `--leading-*` / `--tracking-*` |
| Shape | `radius-images`, `radius-2xl`, `radius-3xl`, `radius-full` |
| Spacing (gallery CSS) | `--space-4` … `--space-90`, `--page-inline-pad`, `--section-gap` — keep these off Tailwind’s spacing scale |

## Shadcn semantic tokens

Used by app shell, forms, and shared `ui/` primitives:

| Group | Utilities |
|-------|-----------|
| Surfaces | `bg-background`, `bg-card`, `bg-popover`, `bg-muted`, `bg-secondary`, `bg-accent` |
| Text | `text-foreground`, `text-muted-foreground`, `text-card-foreground`, `text-primary-foreground` |
| Borders | `border-border`, `border-input`, `ring-ring` |
| Actions | `bg-primary` / `text-primary-foreground`; `destructive` for danger |
| Sidebar | `sidebar`, `sidebar-foreground`, `sidebar-primary`, `sidebar-accent`, `sidebar-border`, `sidebar-ring` |
| Charts | `chart-1` … `chart-5` (categorical; `chart-1` is the hero series) |
| Shape | `--radius` drives `rounded-sm` … `rounded-4xl` |

## Color rules

- **Build the neutrals first.** Page, surface, muted, border, and text levels are most of the pixels. If neutrals are right, one brand color is enough.
- **Give the brand hue one job.** Primary actions and at most one hero data series. Do not also paint logos, every icon, every badge, and the focus ring with the same saturated color.
- **Status colors are semantic, not decorative.** Green/healthy, amber/attention, red/failed. Do not tint neutral facts just to feel positive. When everything is fine, show no status color.
- **Tinted pills are loud.** Prefer a small dot + muted text. Reserve filled pills for the state the user must act on.
- **Mono** (`font-replica-mono` / mono utilities) only for character-by-character data (IDs, codes, timings) — not big KPIs or decorative eyebrows. Use `tabular-nums` on sans numbers.
- **Portfolio gallery** stays on the cool near-black canvas (`slate-dark`) with bone-white type; do not flatten it into generic purple/indigo SaaS chrome.

## Charts

- First categorical color is the hero series; the rest step toward neutrals.
- Grid lines almost invisible; axis/label colors from muted text.
- Prefer line style or weight before a second hue.
- Use red only on the point or series that is actually bad.

## Buttons and primitives

- Prefer shared components from `@/components/ui/` over hand-rolled controls when one exists.
- One primary button per view; ghost/secondary for the rest.
- Scrollable regions: prefer a dedicated scroll component when the design system provides one; bound the height explicitly.

## Before you finish

1. Confirm no `#`, `rgb(`, or bare `oklch(` in the component file (opacity modifiers on tokens are fine).
2. Check light and dark (or gallery canvas) contrast for body and muted text.
3. Hierarchy should come from weight and color before size.
