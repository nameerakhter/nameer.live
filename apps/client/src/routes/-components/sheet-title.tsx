import { CONTACT, SHEET_COPY } from './portfolio-data'

export function SheetTitle() {
  return (
    <div className="max-w-md pointer-events-auto">
      <p
        className="m-0 font-mona text-caption font-medium uppercase tracking-caption text-ink-muted"
        style={{ fontStretch: '90%' }}
      >
        Sheet 1 · Doon valley &amp; foothills
      </p>
      <h1
        className="mt-2 m-0 font-mona text-[clamp(2.25rem,6vw,var(--text-display))] font-bold leading-display tracking-display text-ink"
        style={{ fontStretch: '112%' }}
      >
        Muhammad Nameer Akhter
      </h1>
      <p className="mt-2 m-0 font-mona text-body-sm tracking-body-sm text-ink-muted">
        {SHEET_COPY.role}
      </p>
      <p className="mt-3 m-0 max-w-[36ch] font-mona text-body tracking-body text-ink text-pretty">
        {SHEET_COPY.tagline}
      </p>
      <a
        href={`mailto:${CONTACT.email}?subject=Project%20inquiry`}
        className="mt-5 inline-flex items-center gap-2 border border-station bg-station px-4 py-2.5 font-mona text-body-sm font-semibold tracking-body-sm text-sheet no-underline transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-station"
      >
        {SHEET_COPY.cta}
        <span aria-hidden>→</span>
      </a>
    </div>
  )
}
