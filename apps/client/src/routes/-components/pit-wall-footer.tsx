import { CircuitMap } from './circuit-map'
import { ASSET_CREDITS, CONTACT, RACE_COPY } from './portfolio-data'

export function PitWallFooter() {
  return (
    <footer className="pit-wall">
      <div className="grid gap-8 min-[800px]:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] min-[800px]:items-end">
        <div>
          <p className="m-0 font-timing text-caption tracking-caption text-bull-yellow uppercase">
            {RACE_COPY.circuitTitle} · {RACE_COPY.circuitStat}
          </p>
          <h2 className="mt-2 mb-3 font-display text-heading font-bold tracking-heading text-chalk uppercase">
            Pit wall
          </h2>
          <p className="m-0 max-w-[40ch] font-display text-body-sm text-chalk-muted">
            {RACE_COPY.circuitNote}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={`mailto:${CONTACT.email}?subject=Project%20inquiry`}
              className="inline-flex items-center gap-2 bg-signal px-5 py-3 font-display text-body-sm font-bold tracking-body-sm text-chalk no-underline hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chalk"
            >
              {RACE_COPY.cta}
              <span aria-hidden>→</span>
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="font-display text-body-sm tracking-body-sm text-chalk/80 underline decoration-chalk/35 underline-offset-[0.22em] hover:decoration-chalk"
            >
              GitHub
            </a>
          </div>
        </div>
        <CircuitMap />
      </div>

      <div className="flex flex-wrap items-end justify-between gap-4 border-t border-hairline pt-6">
        <p className="m-0 font-display text-caption text-chalk-muted">
          © {new Date().getFullYear()} Muhammad Nameer Akhter
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="font-timing text-caption tracking-caption text-chalk-muted no-underline hover:text-chalk"
        >
          {CONTACT.email}
        </a>
      </div>

      <p className="pit-wall-credits">
        {ASSET_CREDITS.car} {ASSET_CREDITS.circuit} {ASSET_CREDITS.env}{' '}
        {ASSET_CREDITS.textures}
      </p>
    </footer>
  )
}
