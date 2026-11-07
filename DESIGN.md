# Pit Garage — Style Reference

> Dark Red Bull garage — a real RB22 under studio lights, work as a broadcast timing tower, Mexico City as the circuit plate.

**Theme:** dark only

**Mode:** Experience

## World

The site is a night pit garage. The hero is a pitched three.js scene with the 2026 Red Bull RB22, warehouse HDRI reflections, strip lights, and a concrete reflector floor. Projects are timing-tower rows (P1–P7). Opening a row cuts the camera to a car detail angle and slides in a telemetry panel. Below the fold: driver profile, career stints as tyre-strategy bars, and a pit-wall footer with the Autódromo Hermanos Rodríguez outline (Verstappen’s best track, 6 wins).

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Carbon | `oklch(0.14 0.01 260)` | `--color-carbon` | Page canvas |
| Carbon Raised | `oklch(0.18 0.015 260)` | `--color-carbon-raised` | Tower, panel, footer |
| Navy | `oklch(0.22 0.05 265)` | `--color-navy` | Red Bull matte navy surfaces |
| Tarmac | `oklch(0.28 0.01 260)` | `--color-tarmac` | Stint track wells |
| Chalk | `oklch(0.96 0.005 100)` | `--color-chalk` | Primary type |
| Chalk Muted | `oklch(0.68 0.015 260)` | `--color-chalk-muted` | Secondary type |
| Signal | `oklch(0.55 0.22 25)` | `--color-signal` | Racing red — sole primary CTA |
| Bull Yellow | `oklch(0.86 0.16 95)` | `--color-bull-yellow` | P1 marker, active accents |
| Sector Purple | `oklch(0.55 0.2 300)` | `--color-sector-purple` | Timing sector |
| Sector Green | `oklch(0.72 0.17 145)` | `--color-sector-green` | Timing sector |
| Hairline | `oklch(0.32 0.02 260)` | `--color-hairline` | Rules, borders |

Three.js materials sample hex mirrors in `GARAGE_RGB` (`garage-rgb.ts`) because Three cannot parse `oklch()`.

## Tokens — Typography

- **Titillium Web** (`--font-display`) — heavy uppercase for the name / section titles; 600–700 for body. Former F1 web font (OFL). Official Formula1 Display is proprietary and unused.
- **Commit Mono** (`--font-timing`) — positions, metrics, keyboard hints, credits.

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

1. **Hero** — full-viewport garage scene; name, tagline, Start a project on the left; car on the right.
2. **Timing tower** — accessible list of projects as P1–P7 rows with gap metrics.
3. **Driver profile** — client-facing about.
4. **Career stints** — experience as strategy bars.
5. **Pit wall** — Mexico City circuit SVG, contact CTA, asset credits.
6. **Telemetry panel** — fixed sheet over the live scene (screenshots, stack, links).

## Signature interaction

Opening a timing row flies the camera to that project’s preset angle (`CameraControls`) and slides in the telemetry panel. Esc closes; arrows move between projects. Garage strip lights sweep on first load. `prefers-reduced-motion` skips flights and the light sweep. WebGL unavailable → CSS garage fallback. Wheel spin / DRS omitted — the RB22 Sketchfab mesh has no separately named wheel or flap nodes.

## Components

- Garage hero / scene (lazy R3F)
- Timing tower
- Telemetry panel (project sheet)
- Driver profile, career stints, pit wall + circuit map

## Assets & licences

| Asset | Path | Licence |
|-------|------|---------|
| RB22 car (desktop) | `public/3d-assets/car/rb22-desktop.glb` | Sketchfab CC Attribution — credit author in footer |
| RB22 car (mobile) | `public/3d-assets/car/rb22-mobile.glb` | same |
| Source GLB (not served) | `apps/client/assets-src/rb22-source.glb` | same; gitignored |
| Warehouse HDRI | `public/3d-assets/env/warehouse-1k.hdr` | Poly Haven CC0 |
| Concrete / asphalt | `public/3d-assets/textures/*` | ambientCG CC0 |
| Mexico City circuit | `public/3d-assets/circuits/mexico-city.geojson` | bacinger/f1-circuits MIT |

No Formula 1 logo and no official Formula1 Display font in UI chrome. Real Red Bull / Oracle livery remains on the model by design choice.

## Color discipline

Carbon and navy dominate. Signal red is reserved for the single primary CTA. Bull yellow marks P1 and active tower state only. Sector colours appear only in timing metrics.
