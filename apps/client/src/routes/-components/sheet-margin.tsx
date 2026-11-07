import { CONTACT, SHEET_COPY } from './portfolio-data'

export function SheetMargin() {
  return (
    <footer className="border-t border-hairline bg-sheet px-(--page-inline-pad) pt-10 pb-[90px]">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div className="grid gap-4">
          <div className="flex items-center gap-6">
            <ScaleBar />
            <NorthArrow />
          </div>
          <p className="m-0 font-mono-survey text-caption tracking-caption text-ink-muted">
            {SHEET_COPY.footerCredit} · © {new Date().getFullYear()}
          </p>
          <p className="m-0 max-w-[42ch] font-mono-survey text-caption tracking-caption text-ink-muted/80">
            {SHEET_COPY.mapCredit}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-mona text-body-sm text-water underline decoration-water/45 underline-offset-[0.22em] hover:decoration-water"
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="font-mona text-body-sm text-water underline decoration-water/45 underline-offset-[0.22em] hover:decoration-water"
            >
              GitHub
            </a>
          </div>
        </div>

        <a
          href={`mailto:${CONTACT.email}?subject=Project%20inquiry`}
          className="inline-flex items-center gap-2 border border-station bg-station px-5 py-3 font-mona text-body font-semibold tracking-body text-sheet no-underline transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-station"
        >
          {SHEET_COPY.cta}
          <span aria-hidden>→</span>
        </a>
      </div>
    </footer>
  )
}

function ScaleBar() {
  return (
    <svg
      width="140"
      height="28"
      viewBox="0 0 140 28"
      aria-label="Scale bar"
      className="text-ink"
    >
      <line
        x1="0"
        y1="18"
        x2="120"
        y2="18"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line x1="0" y1="12" x2="0" y2="24" stroke="currentColor" strokeWidth="1.5" />
      <line
        x1="60"
        y1="14"
        x2="60"
        y2="22"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <line
        x1="120"
        y1="12"
        x2="120"
        y2="24"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <text
        x="0"
        y="10"
        fill="currentColor"
        style={{ fontFamily: 'var(--font-mono-survey)', fontSize: '10px' }}
      >
        0
      </text>
      <text
        x="112"
        y="10"
        fill="currentColor"
        style={{ fontFamily: 'var(--font-mono-survey)', fontSize: '10px' }}
      >
        10 km
      </text>
    </svg>
  )
}

function NorthArrow() {
  return (
    <svg
      width="36"
      height="48"
      viewBox="0 0 36 48"
      aria-label="North"
      className="text-ink"
    >
      <polygon points="18,2 24,22 18,18 12,22" fill="var(--color-station)" />
      <line
        x1="18"
        y1="18"
        x2="18"
        y2="40"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <text
        x="18"
        y="47"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: 'var(--font-mono-survey)', fontSize: '10px' }}
      >
        N
      </text>
    </svg>
  )
}
