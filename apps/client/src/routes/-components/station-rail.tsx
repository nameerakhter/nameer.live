import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

import { CASE_STUDIES } from './portfolio-data'
import { STATION_META, stationIndex } from './station-meta'
import { useSurvey } from './survey-context'

export function StationRail() {
  const { activeId, openStation } = useSurvey()
  const scrollerRef = useRef<HTMLUListElement>(null)

  function scrollByDir(dir: -1 | 1) {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * Math.min(280, el.clientWidth * 0.6), behavior: 'smooth' })
  }

  return (
    <nav aria-label="Selected work" className="survey-work-rail pointer-events-auto w-full">
      <div className="survey-work-rail-head">
        <p className="m-0 font-mono-survey text-caption tracking-caption text-sheet/70">
          Selected work
        </p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="survey-rail-nav"
            aria-label="Scroll work left"
            onClick={() => scrollByDir(-1)}
          >
            <ChevronLeft size={16} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            className="survey-rail-nav"
            aria-label="Scroll work right"
            onClick={() => scrollByDir(1)}
          >
            <ChevronRight size={16} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <div className="survey-station-rail-wrap">
        <ul ref={scrollerRef} className="survey-station-rail">
          {CASE_STUDIES.map((study) => {
            const meta = STATION_META[study.id]
            const isActive = activeId === study.id
            const n = String(stationIndex(study.id, CASE_STUDIES)).padStart(
              2,
              '0',
            )

            return (
              <li key={study.id} className="shrink-0">
                <button
                  type="button"
                  data-tone={meta.tone}
                  aria-pressed={isActive}
                  onClick={() => openStation(study.id)}
                  className={`survey-station-chip ${isActive ? 'is-active' : ''}`}
                >
                  <span className="survey-station-chip-index" aria-hidden>
                    {n}
                  </span>
                  <span className="survey-station-chip-body">
                    <span className="survey-station-chip-title">
                      {study.tabLabel}
                    </span>
                    <span className="survey-station-chip-place">
                      {study.station.place.replace('Prodios Labs, ', '')}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
