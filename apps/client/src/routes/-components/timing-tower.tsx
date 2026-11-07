import { CASE_STUDIES, RACE_COPY } from './portfolio-data'
import { useRace } from './race-context'

const TICK_CLASS: Record<string, string> = {
  signal: 'bg-signal',
  'bull-yellow': 'bg-bull-yellow',
  navy: 'bg-navy',
  'sector-green': 'bg-sector-green',
  'sector-purple': 'bg-sector-purple',
}

export function TimingTower({
  variant = 'section',
}: {
  variant?: 'section' | 'rail'
}) {
  const { activeId, openProject } = useRace()
  const isRail = variant === 'rail'

  return (
    <section
      id={isRail ? 'timing' : undefined}
      className={isRail ? 'timing-rail' : 'timing-tower'}
      aria-labelledby="timing-title"
    >
      <div className={isRail ? 'timing-rail-head' : 'px-(--page-inline-pad) pt-10 pb-4'}>
        <h2
          id="timing-title"
          className={
            isRail
              ? 'm-0 font-display text-caption font-bold tracking-caption text-chalk uppercase'
              : 'race-section-title text-heading-sm'
          }
        >
          {RACE_COPY.towerTitle}
        </h2>
        {!isRail ? (
          <p className="race-section-lede m-0 font-display text-body-sm">
            {RACE_COPY.towerLede}
          </p>
        ) : (
          <p className="m-0 mt-1 font-timing text-caption tracking-caption text-chalk-muted uppercase">
            Tap a row
          </p>
        )}
      </div>

      <ol className={`m-0 list-none p-0 ${isRail ? 'timing-rail-list' : ''}`}>
        {CASE_STUDIES.map((study) => {
          const isActive = activeId === study.id
          const isP1 = study.race.position === 1
          return (
            <li key={study.id} className="m-0 p-0">
              <button
                type="button"
                className={`timing-tower-row ${isRail ? 'is-rail' : ''} ${isActive ? 'is-active' : ''} ${isP1 ? 'is-p1' : ''}`}
                data-sector={study.race.sectorTone}
                aria-pressed={isActive}
                onClick={() => openProject(study.id)}
              >
                <span className="timing-tower-pos">P{study.race.position}</span>
                <span
                  className={`timing-tower-tick ${TICK_CLASS[study.race.tick] ?? 'bg-signal'}`}
                  aria-hidden
                />
                <span className="min-w-0">
                  <span className="block truncate font-display text-body-sm font-bold tracking-body-sm text-chalk uppercase">
                    {study.tabLabel}
                  </span>
                  {!isRail ? (
                    <span className="block truncate font-display text-caption tracking-caption text-chalk-muted">
                      {study.role} · {study.year}
                    </span>
                  ) : null}
                </span>
                <span className="timing-tower-metric">{study.race.metric}</span>
              </button>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
