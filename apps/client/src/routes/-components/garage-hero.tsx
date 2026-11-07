import { lazy, Suspense, useRef, useState } from 'react'

import { CONTACT, RACE_COPY } from './portfolio-data'
import { TimingTower } from './timing-tower'

import { useMountEffect } from '@/hooks/use-mount-effect'
import { useStickyScrollProgress } from '@/hooks/use-sticky-scroll-progress'

const GarageScene = lazy(async function loadGarageScene() {
  const mod = await import('./garage-scene')
  return { default: mod.GarageScene }
})

function SceneFallback() {
  return (
    <div className="garage-hero-canvas garage-hero-fallback" aria-hidden>
      <div className="garage-hero-fallback-copy">Loading garage…</div>
    </div>
  )
}

export function GarageHero() {
  const stageRef = useRef<HTMLElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)
  const progress = useStickyScrollProgress(stageRef)
  const brandOpacity = Math.max(0, 1 - progress * 1.35)
  const hintOpacity =
    progress < 0.08 ? 1 : Math.max(0, 1 - (progress - 0.08) * 8)

  useMountEffect(() => {
    const el = stickyRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      function onHeroVisibility(entries) {
        const entry = entries[0]
        if (entry) setVisible(entry.isIntersecting)
      },
      { threshold: 0.05 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  })

  return (
    <section
      ref={stageRef}
      id="garage"
      className="garage-stage"
      aria-label="Muhammad Nameer Akhter — portfolio"
    >
      <div ref={stickyRef} className="garage-stage-sticky">
        <Suspense fallback={<SceneFallback />}>
          <GarageScene visible={visible} progress={progress} />
        </Suspense>

        <div className="garage-hero-overlay" aria-hidden />

        <div className="garage-stage-ui">
          <div
            className="garage-hero-content"
            style={{
              opacity: brandOpacity,
              pointerEvents: brandOpacity < 0.2 ? 'none' : undefined,
            }}
          >
            <header className="flex items-center justify-between gap-4">
              <p className="m-0 font-timing text-caption tracking-caption text-chalk/75 uppercase">
                {RACE_COPY.location}
              </p>
              <span className="font-timing text-caption tracking-caption text-chalk/55 uppercase">
                Drag to orbit · Scroll to lap
              </span>
            </header>

            <div className="pointer-events-auto">
              <h1 className="garage-hero-name m-0 text-chalk">
                Muhammad
                <br />
                Nameer
                <br />
                Akhter
              </h1>
              <p className="garage-hero-tagline m-0 max-w-[34ch] font-display text-body tracking-body text-chalk/88 text-pretty">
                {RACE_COPY.tagline}
              </p>
              <div className="garage-hero-actions flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${CONTACT.email}?subject=Project%20inquiry`}
                  className="garage-hero-cta inline-flex items-center gap-2 px-5 py-3 font-display text-body-sm font-bold tracking-body-sm no-underline transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chalk"
                >
                  {RACE_COPY.cta}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            <p
              className="m-0 font-timing text-caption tracking-caption text-chalk/55 uppercase"
              style={{ opacity: hintOpacity }}
            >
              Pit garage · RB22 · Scroll
            </p>
          </div>

          <TimingTower variant="rail" />
        </div>
      </div>
    </section>
  )
}
