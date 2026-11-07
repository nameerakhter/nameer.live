import { EXPERIENCE, SHEET_COPY } from './portfolio-data'

const POINTS = [
  { x: 40, y: 118 },
  { x: 160, y: 92 },
  { x: 300, y: 58 },
  { x: 440, y: 36 },
] as const

export function ElevationProfile() {
  const path = POINTS.map((point, index) =>
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`,
  ).join(' ')

  return (
    <section
      className="border-t border-hairline bg-sheet py-(--section-gap)"
      aria-labelledby="experience-title"
    >
      <div className="box-border w-full px-(--page-inline-pad)">
        <p className="m-0 font-mono-survey text-caption tracking-caption text-ink-muted">
          Section A–A′
        </p>
        <h2
          id="experience-title"
          className="mt-2 m-0 font-mona text-heading font-bold tracking-heading text-ink"
          style={{ fontStretch: '108%' }}
        >
          {SHEET_COPY.experienceTitle}
        </h2>
        <p className="mt-3 m-0 max-w-[48ch] font-mona text-body tracking-body text-ink-muted">
          {SHEET_COPY.experienceLead}
        </p>

        <div className="mt-10 overflow-x-auto">
          <svg
            viewBox="0 0 480 160"
            className="h-auto w-full min-w-md max-w-4xl"
            role="img"
            aria-label="Career elevation from UPES through Prodios Labs"
          >
            <line
              x1="24"
              y1="130"
              x2="460"
              y2="130"
              stroke="var(--color-hairline)"
              strokeWidth="1"
            />
            <path
              d={path}
              fill="none"
              stroke="var(--color-contour-index)"
              strokeWidth="2.2"
            />
            {POINTS.map((point, index) => {
              const item = EXPERIENCE[EXPERIENCE.length - 1 - index]
              return (
                <g key={item.place}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="4.5"
                    fill="var(--color-station)"
                  />
                  <text
                    x={point.x}
                    y={point.y - 12}
                    textAnchor="middle"
                    className="fill-ink"
                    style={{
                      fontFamily: 'var(--font-mona)',
                      fontSize: '11px',
                      fontWeight: 600,
                    }}
                  >
                    {item.place}
                  </text>
                  <text
                    x={point.x}
                    y={148}
                    textAnchor="middle"
                    className="fill-ink-muted"
                    style={{
                      fontFamily: 'var(--font-mono-survey)',
                      fontSize: '11px',
                    }}
                  >
                    {item.year}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        <ol className="mt-8 m-0 list-none p-0">
          {EXPERIENCE.map((item) => (
            <li
              key={item.place + item.title}
              className="grid grid-cols-[4.5rem_1fr] gap-x-6 gap-y-1 border-t border-hairline py-3 last:border-b min-[700px]:grid-cols-[5rem_minmax(0,1fr)_minmax(12rem,auto)] min-[700px]:items-baseline"
            >
              <span className="font-mono-survey text-caption tracking-caption text-ink-muted">
                {item.year}
              </span>
              <span className="font-mona text-subheading tracking-subheading text-ink">
                {item.place}
              </span>
              <span className="font-mona text-body-sm tracking-body-sm text-ink-muted min-[700px]:text-right">
                {item.title}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
