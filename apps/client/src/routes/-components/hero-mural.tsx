import { useBuildParticleField } from '@/hooks/use-build-particle-field'

export function HeroMuralSection() {
  const canvasRef = useBuildParticleField()

  return (
    <section className="pf-hero" aria-label="I build things">
      <div className="pf-shell">
        <div className="pf-build" aria-hidden="true">
          <canvas
            ref={canvasRef}
            className="pf-build-particles"
            aria-hidden
          />
        </div>
        <h1 className="sr-only">I build things</h1>
      </div>
    </section>
  )
}
