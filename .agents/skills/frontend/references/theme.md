# Theme

Tokens live in `apps/client/src/styles/globals.css`. This repo has two related layers: **shadcn semantic tokens** (app chrome, forms, light/dark) and **Living Survey Sheet tokens** (light toposheet portfolio).

## How it works

- Raw values are declared in `:root` / `.dark` and portfolio `@theme inline` entries, then mapped to Tailwind utilities.
- Prefer utilities (`bg-background`, `text-muted-foreground`, `border-border`, `bg-sheet`, `text-ink`, `text-contour`, …) over raw CSS variables in JSX.
- Never hardcode hex or `oklch(...)` in components. If a value is missing, add a token to `globals.css`. Three.js materials may sample CSS custom properties once via `getComputedStyle` and convert to `THREE.Color` / `Vector3`.

## Survey sheet tokens

Defined under `@theme inline` and consumed by `.portfolio` surfaces:

| Group | Tokens / utilities |
|-------|-------------------|
| Paper | `sheet`, `sheet-deep` |
| Ink | `ink`, `ink-muted`, `hairline` |
| Map inks | `contour`, `contour-index`, `water`, `forest`, `station` |
| Type | `font-mona` (Mona Sans Variable), `font-mono-survey` (Commit Mono) |
| Type scale | `text-caption` (14px) … `text-display` (64px) with matching `--leading-*` / `--tracking-*` |
| Shape | `radius-sheet` (2px), plus shared radius scale |

**Roles**

- Contours / terrain lines → `contour` / `contour-index`
- Water features and text links → `water`
- Soft elevation wash → `forest`
- Triangulation stations and the single primary CTA → `station`
- Mono only for coordinates, grid refs, elevations, plate numbers — not display type

## Shadcn semantic tokens

Used by app shell, forms, and shared `ui/` primitives:

| Group | Utilities |
|-------|-----------|
| Surfaces | `bg-background`, `bg-card`, `bg-popover`, `bg-muted`, `bg-secondary`, `bg-accent` |
| Text | `text-foreground`, `text-muted-foreground`, `text-card-foreground`, `text-primary-foreground` |
| Borders | `border-border`, `border-input`, `ring-ring` |
| Actions | `bg-primary` / `text-primary-foreground` (aligned with station red on the portfolio) |
| Sidebar | `sidebar`, `sidebar-foreground`, `sidebar-primary`, `sidebar-accent`, `sidebar-border`, `sidebar-ring` |
| Charts | `chart-1` … `chart-5` |
| Shape | `--radius` drives `rounded-sm` … `rounded-4xl` |

## Color rules

- **Build the neutrals first.** Sheet paper, ink hierarchy, and hairlines are most of the pixels.
- **Give station red one job.** Primary CTA and survey markers only.
- **Portfolio is light-only.** Do not reintroduce a dark gallery canvas.
- **Width axis:** expanded Mona for the title block; condensed for map labels (`fontStretch`).

## Before you finish

1. Confirm no `#`, `rgb(`, or bare `oklch(` in component files (opacity modifiers on tokens are fine; Three.js sampled colors are the exception when read from tokens).
2. Check contrast for body and muted text on `sheet` / `sheet-deep`.
3. Hierarchy should come from weight, width, and ink before size.
