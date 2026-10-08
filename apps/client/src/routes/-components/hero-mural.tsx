import { useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'

import { useBuildParticleField } from '@/hooks/use-build-particle-field'
import { useIntroCenterOffset } from '@/hooks/use-intro-center-offset'
import { introHeroTransition } from '@/lib/portfolio-motion'

export function HeroMuralSection() {
  const canvasRef = useBuildParticleField()
  const heroRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const introY = useIntroCenterOffset(heroRef, !reduce)

  // Keep this tree mounted — remounting via `key` destroys the particle canvas.
  const ready = reduce || introY !== null

  return (
    <motion.section
      ref={heroRef}
      className="pf-hero"
      aria-label="I build things"
      initial={
        reduce
          ? false
          : { opacity: 0, filter: 'blur(10px)', scale: 0.9, y: 0 }
      }
      animate={
        reduce || !ready
          ? reduce
            ? undefined
            : { opacity: 0, filter: 'blur(10px)', scale: 0.9 }
          : {
              opacity: [0, 1, 1],
              filter: ['blur(10px)', 'blur(0px)', 'blur(0px)'],
              scale: [0.9, 1, 1],
              y: [introY ?? 0, introY ?? 0, 0],
            }
      }
      transition={introHeroTransition}
    >
      <div className="box-border w-full px-6">
        <div className="pf-build" aria-hidden="true">
          <canvas
            ref={canvasRef}
            className="pf-build-particles"
            aria-hidden
          />
        </div>
        <h1 className="sr-only">I build things</h1>
      </div>
    </motion.section>
  )
}
