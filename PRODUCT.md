# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Freelance clients and founders evaluating whether to hire Muhammad Nameer Akhter for engineering work — civic platforms, payment infrastructure, AI assistants, and full-stack product builds. Secondary readers include recruiters, but the primary job is client conviction and outreach.

## Product Purpose

A personal portfolio for Muhammad Nameer Akhter, software engineer at Prodios Labs based in Dehradun. It must prove he ships production systems people depend on (government-scale portals, CBDC rails, RAG assistants) and make starting a conversation (email) the obvious next step.

## Positioning

Most of the work is anchored to real places in Uttarakhand (Dehradun HQ of the Survey of India, Haridwar Kumbh, IIT Roorkee research, statewide e-District services). The portfolio is not a generic tech résumé — it is a living survey of that territory of work.

## Operating Context

Single-page marketing/portfolio site served by the Vite client (`apps/client`). Case studies live as screenshots under `apps/client/public/work/`. Contact is email (`akhtarnameer@gmail.com`) and GitHub (`https://github.com/nameerakhter`).

## Capabilities and Constraints

- One light theme only (no dark mode on the portfolio surface).
- Keep every factual claim: project titles, scopes, tags, links, experience dates/places, contact details.
- Do not invent clients, metrics, awards, or testimonials beyond what already exists in `portfolio-data.ts` and public work assets.
- Prefer WebGL/R3F for the hero when available; must degrade to a static SVG contour plate + HTML index when WebGL is unavailable or reduced motion is preferred for the heavy path.
- Performance budget: lazy-load the canvas, cap DPR at ~1.75, pause rendering when the hero is offscreen.

## Brand Commitments

- Name: Muhammad Nameer Akhter
- Role line: Software engineer · Dehradun
- Primary CTA copy: "Start a project" (mailto)
- Visual world for this redesign: **Living Survey Sheet** (light toposheet of the Dehradun–Haridwar–Roorkee region). Old Maciej black gallery is anti-reference only.
- Binding references volunteered by the user for inspiration sources: styles.refero.design, dark.design, awwwards.com (inspiration only — not a licensed style to copy).

## Evidence on Hand

- Case studies and screenshots: Apuni Sarkar, Chat Forge, AI Assistant, Haridwar Kumbh 2027, NHM Training Management, Stray Reporter, Bearing Fault Detection research (`apps/client/public/work/`).
- Experience: Prodios Labs (2025), IIT Roorkee Research Intern (2024), PlutosOne Front-End (2023), UPES B.Tech CS AIML (2020).
- Live product links as listed in `portfolio-data.ts`.
- Absences that must not be fabricated: client logos beyond what's in screenshots, testimonials, pricing, availability calendars.

## Product Principles

1. Facts first — every claim on the page must already be true in the data or assets.
2. Place is the proof — geography and civic stakes make the work specific.
3. One action — email / "Start a project" is the only primary CTA.
4. Craft is the credential — the site itself demonstrates engineering taste; decoration without mechanism fails.
5. Accessible by default — keyboard paths and non-WebGL fallbacks are first-class, not afterthoughts.

## Accessibility & Inclusion

- Respect `prefers-reduced-motion` (instant camera cuts, no contour reveal choreography).
- Provide an HTML index of stations as the screen-reader and mobile-primary path to case studies.
- Maintain readable contrast on the light survey-paper ground.
