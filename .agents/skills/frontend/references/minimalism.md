# Minimalism

Quiet, content-first UI: the data is the interface, and chrome appears only when the user reaches for it.

> **Keep this file updated.** When a new minimal pattern is agreed in review or requested by the user, add it here (with the classes used) so the next screen starts from it.

## Principles

1. **Content over chrome** — no card, border, or background unless it separates something the eye cannot separate on its own.
2. **One surface per region** — a section is either flat on the page or inside one surface, never nested cards. When a region has one primary control, let it be the only box.
3. **Quiet until interacted with** — secondary actions (row menus, copy buttons) stay hidden until hover/focus; on touch (`pointer-coarse`) keep them visible.
4. **Color only for meaning** — status, danger, focus. Everything else uses foreground / muted-foreground neutrals from the theme.
5. **One line per item** — extra detail goes in a `title` tooltip or the detail page, not a second line of body text (except intentional mobile two-line rows).
6. **One primary action** — at most one filled primary button per view; the rest are ghost, outline, or secondary.

## Lists (navigational rows)

Use for single-entity lists that open something: notifications, files, search results.

- **No container** — no card, border, dividers, or background on the `ul`.
- **Rows overhang the column** — `ul.-mx-2` + `li.px-2`, so titles line up with the section heading while the hover pill extends past it.
- **Row** — `group relative flex h-10 items-center gap-3 rounded-md px-2`, highlighted on interaction only (`hover` / `focus-visible` / open menu).
- **Whole row clickable** — a stretched `Link` (`after:absolute after:inset-0 after:rounded-[inherit]`) holding the truncated title; interactive controls sit above it with `relative z-10`.
- **Metadata on the right** — `text-xs text-muted-foreground tabular-nums` (times, counts).
- **Status** — a small colored dot plus muted label only for states that need attention; never a filled badge on every row. Idle/default states show nothing.
- **Section heading** — quiet `text-base font-medium` with an optional muted count; siblings on the same page share one heading style.

## Row actions

- Ghost icon button (e.g. `Ellipsis`) at the end of the row.
- Hidden until needed, taking **no space** while hidden so trailing metadata stays flush — use a collapsible width/opacity slot on `group-hover` / `group-has-focus-visible` / open popup, and keep visible for `pointer-coarse`.
- On small phones, prefer tap-to-open for the row and put management actions on the detail page.

## Tables

Tables are open lists, not cards:

- **No container chrome** — no border, surface, or radius wrapping the table.
- **Dense** — compact header (`text-xs text-muted-foreground`), ~40px rows, faint dividers.
- **Flush edges** — first and last cells drop outer padding so text lines up with the page column.
- **Hover only when clickable** — tint rows that navigate or open something; static rows stay flat.
- **Toolbar above** — filter left, muted count or primary action right.

## Preview / media cards

When the look of the artifact is the point (gallery tiles, media previews):

- One surface with a light ring or border — not nested cards inside cards.
- Preview on top; title + one muted meta line below.
- Stretch the title link across the card; keep independent controls (`relative z-10`).

## The "AI slop" checklist (avoid)

- Indigo or violet as the default brand with no reason.
- Purple-to-blue gradients, glowing borders, or inset white highlights on dark cards.
- Rainbow categorical palettes where every series is a saturated hue.
- A colored status pill on every metric.
- An icon in a tinted circle on every list item or card header.
- Uppercase mono eyebrows over every heading.
- Notification badges and red dots everywhere.
- Equal-weight buttons side by side.
- Emoji or sparkle icons as decoration.
- Generic copy ("Supercharge your workflow").

## Before you finish

1. Squint at the screen — can you tell the single most important thing, and is it the only saturated thing?
2. Count distinct hues outside charts. More than brand plus status usually means decoration.
3. Confirm every color comes from theme tokens (`grep` for `#` / `oklch(` / `rgb(` in the component).
4. Check mobile width (~375px): labels, pills, and rows must not collide.
