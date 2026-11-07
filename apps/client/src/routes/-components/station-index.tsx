import { CASE_STUDIES, SHEET_COPY } from './portfolio-data'
import { useSurvey } from './survey-context'

export function StationIndex() {
  const { openStation, activeId } = useSurvey()

  return (
    <section
      id="stations"
      className="border-t border-hairline bg-sheet py-(--section-gap)"
      aria-labelledby="stations-title"
    >
      <div className="box-border w-full px-(--page-inline-pad)">
        <p className="m-0 font-mono-survey text-caption tracking-caption text-ink-muted">
          Plate II
        </p>
        <h2
          id="stations-title"
          className="mt-2 m-0 font-mona text-heading font-bold tracking-heading text-ink"
          style={{ fontStretch: '108%' }}
        >
          {SHEET_COPY.indexTitle}
        </h2>
        <p className="mt-3 m-0 max-w-[52ch] font-mona text-body tracking-body text-ink-muted">
          {SHEET_COPY.indexLead}
        </p>

        <ol className="mt-10 m-0 list-none p-0">
          {CASE_STUDIES.map((study, index) => {
            const isActive = activeId === study.id
            return (
              <li key={study.id} className="border-t border-hairline last:border-b">
                <button
                  type="button"
                  onClick={() => openStation(study.id)}
                  className={`grid w-full grid-cols-[3rem_1fr] gap-x-4 gap-y-1 py-4 text-left transition-colors min-[800px]:grid-cols-[3.5rem_minmax(0,14rem)_minmax(0,1fr)_minmax(8rem,auto)] min-[800px]:items-baseline ${
                    isActive ? 'bg-sheet-deep' : 'hover:bg-sheet-deep/60'
                  }`}
                >
                  <span className="font-mono-survey text-caption tracking-caption text-ink-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="font-mona text-subheading font-semibold tracking-subheading text-ink"
                    style={{ fontStretch: '95%' }}
                  >
                    <span className="text-station" aria-hidden>
                      △{' '}
                    </span>
                    {study.title}
                  </span>
                  <span className="col-start-2 font-mona text-body-sm tracking-body-sm text-ink-muted min-[800px]:col-start-3">
                    {study.pitch}
                  </span>
                  <span className="col-start-2 font-mono-survey text-caption tracking-caption text-ink-muted min-[800px]:col-start-4 min-[800px]:text-right">
                    {study.year} · {study.station.place}
                  </span>
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
