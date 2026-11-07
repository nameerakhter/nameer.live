import { lazy, Suspense } from 'react'

import { CONTACT, SHEET_COPY } from './portfolio-data'
import { StationRail } from './station-rail'

const SurveyMap = lazy(async function loadSurveyMap() {
  const mod = await import('./survey-map')
  return { default: mod.SurveyMap }
})

function MapFallback() {
  return (
    <div className="survey-hero-canvas survey-map-fallback" aria-hidden>
      <div className="survey-map-fallback-copy">Loading…</div>
    </div>
  )
}

export function SurveyHero() {
  return (
    <section
      className="survey-hero"
      aria-label="Muhammad Nameer Akhter — portfolio"
    >
      <Suspense fallback={<MapFallback />}>
        <SurveyMap onCursor={() => {}} />
      </Suspense>

      <div className="survey-hero-overlay" aria-hidden />

      <div className="survey-hero-content">
        <header className="flex items-center justify-between gap-4">
          <p className="m-0 font-mono-survey text-caption tracking-caption text-sheet/80">
            Dehradun · Software engineer
          </p>
          <a
            href="#stations"
            className="font-mona text-caption tracking-caption text-sheet/85 no-underline hover:text-sheet"
          >
            Work ↓
          </a>
        </header>

        <div className="survey-hero-brand pointer-events-auto">
          <h1 className="survey-hero-name m-0 font-mona font-bold text-sheet">
            Muhammad
            <br />
            Nameer
            <br />
            Akhter
          </h1>
          <p className="survey-hero-tagline m-0 max-w-[32ch] font-mona text-body tracking-body text-sheet/88 text-pretty">
            {SHEET_COPY.tagline}
          </p>
          <div className="survey-hero-actions flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${CONTACT.email}?subject=Project%20inquiry`}
              className="survey-hero-cta inline-flex items-center gap-2 bg-station px-5 py-3 font-mona text-body-sm font-semibold tracking-body-sm text-sheet no-underline transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sheet"
            >
              {SHEET_COPY.cta}
              <span aria-hidden>→</span>
            </a>
            <a
              href="#stations"
              className="font-mona text-body-sm tracking-body-sm text-sheet/78 underline decoration-sheet/35 underline-offset-[0.22em] hover:decoration-sheet"
            >
              Browse work
            </a>
          </div>
        </div>

        <StationRail />
      </div>
    </section>
  )
}
