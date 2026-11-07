import { CONTACT, SHEET_COPY } from './portfolio-data'

export function MarginalNotes() {
  return (
    <section
      id="about"
      className="border-t border-hairline bg-sheet-deep py-(--section-gap)"
      aria-labelledby="about-title"
    >
      <div className="box-border grid w-full gap-10 px-(--page-inline-pad) min-[900px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] min-[900px]:gap-x-16">
        <div>
          <p className="m-0 font-mono-survey text-caption tracking-caption text-ink-muted">
            Margin
          </p>
          <h2
            id="about-title"
            className="mt-2 m-0 font-mona text-heading font-bold tracking-heading text-ink"
            style={{ fontStretch: '108%' }}
          >
            {SHEET_COPY.aboutTitle}
          </h2>
          <p
            className="mt-6 m-0 font-mona text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-display text-ink"
            style={{ fontStretch: '110%' }}
          >
            Muhammad
            <br />
            Nameer
            <br />
            Akhter
          </p>
        </div>
        <div className="grid max-w-[52ch] content-start gap-4">
          {SHEET_COPY.about.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="m-0 font-mona text-body tracking-body text-ink text-pretty"
            >
              {paragraph}
            </p>
          ))}
          <a
            className="mt-2 w-fit font-mona text-body-sm tracking-body-sm text-water underline decoration-water/45 underline-offset-[0.22em] hover:decoration-water"
            href={`mailto:${CONTACT.email}`}
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  )
}
