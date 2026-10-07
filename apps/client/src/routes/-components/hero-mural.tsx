import { useBuildParticleField } from '@/hooks/use-build-particle-field'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

export function HeroMuralSection() {
  const canvasRef = useBuildParticleField()
  const reduceMotion = usePrefersReducedMotion()

  return (
    <section className="pf-hero" aria-label="I build things">
      <div className="pf-shell">
        <div className="pf-build" aria-hidden="true">
          <img
            className="pf-build-fill"
            src="/hero/fill.jpg"
            alt=""
            width={2752}
            height={1536}
            decoding="async"
            fetchPriority="high"
          />
          {!reduceMotion ? (
            <canvas
              ref={canvasRef}
              className="pf-build-particles"
              aria-hidden
            />
          ) : null}
        </div>
        <h1 className="sr-only">I build things</h1>
      </div>
    </section>
  )
}
