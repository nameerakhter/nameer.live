import { EXPERIENCE, RACE_COPY } from './portfolio-data'

export function CareerStints() {
  return (
    <section className="race-section" aria-labelledby="career-stints-title">
      <h2 id="career-stints-title" className="race-section-title">
        {RACE_COPY.stintsTitle}
      </h2>
      <p className="race-section-lede font-display text-body-sm">
        {RACE_COPY.stintsLede}
      </p>
      <ol className="career-timeline m-0 list-none p-0">
        {EXPERIENCE.map((item, index) => (
          <li key={item.place + item.title} className="career-row">
            <span className="career-year font-timing text-caption tracking-caption text-chalk-muted">
              {item.year}
            </span>
            <span className="career-mark" aria-hidden>
              <span className="career-dot" />
              {index < EXPERIENCE.length - 1 ? (
                <span className="career-line" />
              ) : null}
            </span>
            <div className="min-w-0">
              <p className="m-0 font-display text-subheading font-bold tracking-subheading text-chalk uppercase">
                {item.place}
              </p>
              <p className="mt-1 mb-0 font-display text-body-sm tracking-body-sm text-chalk-muted">
                {item.title}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
