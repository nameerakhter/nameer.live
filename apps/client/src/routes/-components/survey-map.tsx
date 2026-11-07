import { useRef, useState, useSyncExternalStore } from 'react'
import 'maplibre-gl/dist/maplibre-gl.css'

import { useMountEffect } from '@/hooks/use-mount-effect'
import { useSurveyMap } from '@/hooks/use-survey-map'

import { useSurvey } from './survey-context'

export type MapCursorReadout = {
  lat: number
  lng: number
  elevM: number | null
}

type SurveyMapProps = {
  onCursor: (readout: MapCursorReadout | null) => void
}

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', onStoreChange)
  return () => mq.removeEventListener('change', onStoreChange)
}

function getReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getReducedMotionServerSnapshot() {
  return false
}

export function SurveyMap({ onCursor }: SurveyMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)
  const { activeId, openStation } = useSurvey()
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  )

  useMountEffect(() => {
    const el = wrapRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      function onHeroVisibility(entries) {
        const entry = entries[0]
        if (!entry) return
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.05 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  })

  useSurveyMap({
    containerRef,
    activeId,
    reduceMotion,
    visible,
    onOpenStation: openStation,
    onCursor,
  })

  return (
    <div ref={wrapRef} className="survey-hero-canvas">
      <div
        ref={containerRef}
        className="survey-map"
        role="application"
        aria-label="Satellite survey map of the Doon valley"
      />
    </div>
  )
}
