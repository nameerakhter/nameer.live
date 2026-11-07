# Living Survey Sheet — Style Reference

> Light toposheet of the Doon valley — Survey of India grammar as a personal portfolio.

**Theme:** light only

**Mode:** Experience

## World

The site is one living topographic sheet of Dehradun–Haridwar–Roorkee. The hero is a pitched MapLibre map with Esri World Imagery + AWS Terrarium DEM (real green satellite terrain); projects are triangulation station markers; below-the-fold sections are plate margins (index, notes, elevation profile, sheet footer). The previous Maciej black folder gallery and the failed procedural contour mesh are anti-reference only.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Sheet | `oklch(0.965 0.008 230)` | `--color-sheet` | Page canvas / survey paper |
| Sheet Deep | `oklch(0.935 0.012 230)` | `--color-sheet-deep` | Marginal bands, station nav surface |
| Ink | `oklch(0.22 0.02 250)` | `--color-ink` | Primary type |
| Ink Muted | `oklch(0.48 0.02 250)` | `--color-ink-muted` | Secondary type, readouts |
| Contour | `oklch(0.52 0.1 55)` | `--color-contour` | Intermediate contour lines |
| Contour Index | `oklch(0.42 0.11 50)` | `--color-contour-index` | Index contours (every 5th) |
| Water | `oklch(0.48 0.1 240)` | `--color-water` | Drainage wash, links |
| Forest | `oklch(0.62 0.07 150)` | `--color-forest` | Elevation wash |
| Station | `oklch(0.52 0.19 25)` | `--color-station` | Markers + sole primary CTA |
| Hairline | `oklch(0.78 0.02 230)` | `--color-hairline` | Rules, panel borders |

Three.js materials sample hex mirrors in `SURVEY_RGB` (`contour-material.ts`) because Three cannot parse `oklch()`.

## Tokens — Typography

- **Mona Sans Variable** (`--font-mona`) — expanded heavy for the name / title block; condensed for map-label lettering; body at regular width.
- **Commit Mono** (`--font-mono-survey`) — coordinates, plate numbers, elevations, keyboard hints only.

### Type scale

| Role | Size | Token |
|------|------|-------|
| caption | 14px | `--text-caption` |
| body-sm | 16px | `--text-body-sm` |
| body | 18px | `--text-body` |
| subheading | 22px | `--text-subheading` |
| heading-sm | 28px | `--text-heading-sm` |
| heading | 36px | `--text-heading` |
| display | 64px | `--text-display` |

## Layout

1. **Hero** — full-viewport R3F contour terrain, title block (name, role, tagline, Start a project), stations legend, crosshair + lat/lng/elev readout.
2. **Index to stations** — accessible HTML list (primary path on mobile / keyboard).
3. **Marginal notes** — client-facing about.
4. **Elevation profile** — SVG cross-section + experience list.
5. **Sheet margin** — scale bar, north arrow, credit, contact, CTA.
6. **Project sheet** — fixed paper panel over the live scene (screenshots strip, stack legend, live links).

## Signature interaction

Opening a station flies the camera to its pin (`CameraControls`) and slides in the project sheet. Esc closes; arrows move between stations. `prefers-reduced-motion` cuts flights and skips the contour reveal. WebGL unavailable → SVG contour fallback.

## Components

- Survey hero / terrain canvas (lazy)
- Station markers (cone + ring)
- Project sheet panel
- Station index, marginal notes, elevation profile, sheet margin
- Sheet title + Start a project CTA

## Color discipline

Paper neutrals dominate. Contour / forest / water paint the terrain field. Station red is reserved for triangulation marks and the single primary CTA. Links use water blue.
