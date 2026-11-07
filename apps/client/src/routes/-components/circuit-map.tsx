import { useRef, useState } from 'react'

import { useMountEffect } from '@/hooks/use-mount-effect'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

type GeoFeature = {
  geometry: {
    type: string
    coordinates: number[][]
  }
  properties: {
    Name?: string
    length?: number
  }
}

type GeoCollection = {
  features: GeoFeature[]
  bbox?: number[]
}

function projectPath(
  coords: number[][],
  bbox: number[],
  width: number,
  height: number,
  pad = 12,
) {
  const [minLng, minLat, maxLng, maxLat] = bbox
  const spanLng = maxLng - minLng || 1
  const spanLat = maxLat - minLat || 1
  const innerW = width - pad * 2
  const innerH = height - pad * 2
  const scale = Math.min(innerW / spanLng, innerH / spanLat)

  return coords
    .map(([lng, lat], index) => {
      const x = pad + (lng - minLng) * scale
      const y = pad + (maxLat - lat) * scale
      return `${index === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`
    })
    .join(' ')
}

export function CircuitMap() {
  const hostRef = useRef<HTMLDivElement>(null)
  const reduce = usePrefersReducedMotion()
  const [drawn, setDrawn] = useState(!!reduce)
  const [path, setPath] = useState('')
  const [label, setLabel] = useState('Mexico City')

  useMountEffect(() => {
    let cancelled = false

    async function loadCircuit() {
      try {
        const res = await fetch('/3d-assets/circuits/mexico-city.geojson')
        if (!res.ok) return
        const data = (await res.json()) as GeoCollection
        if (cancelled) return
        const feature = data.features[0]
        if (!feature || feature.geometry.type !== 'LineString') return
        const bbox =
          data.bbox ??
          feature.geometry.coordinates.reduce(
            (acc, [lng, lat]) => [
              Math.min(acc[0], lng),
              Math.min(acc[1], lat),
              Math.max(acc[2], lng),
              Math.max(acc[3], lat),
            ],
            [Infinity, Infinity, -Infinity, -Infinity],
          )
        setPath(projectPath(feature.geometry.coordinates, bbox, 400, 276))
        if (feature.properties.Name) setLabel(feature.properties.Name)
      } catch {
        // leave empty path — footer still shows copy
      }
    }

    void loadCircuit()

    const el = hostRef.current
    if (!el || reduce || typeof IntersectionObserver === 'undefined') {
      setDrawn(true)
      return () => {
        cancelled = true
      }
    }

    const observer = new IntersectionObserver(
      function onCircuitVisible(entries) {
        if (entries[0]?.isIntersecting) {
          setDrawn(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(el)

    return () => {
      cancelled = true
      observer.disconnect()
    }
  })

  return (
    <div ref={hostRef} className="circuit-map-wrap">
      <svg
        className={`circuit-map ${drawn ? 'is-drawn' : ''}`}
        viewBox="0 0 400 276"
        role="img"
        aria-label={label}
      >
        {path ? <path d={path} /> : null}
      </svg>
    </div>
  )
}
