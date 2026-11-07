import maplibregl, { type Map as MapLibreMap, type Marker } from 'maplibre-gl'
import { useEffect, useRef, type RefObject } from 'react'

import {
  CASE_STUDIES,
  SHEET_BOUNDS,
  type CaseStudy,
} from '@/routes/-components/portfolio-data'
import {
  STATION_META,
  stationIndex,
} from '@/routes/-components/station-meta'

const OVERVIEW_PITCH = 48
const OVERVIEW_BEARING = -22
const STATION_ZOOM = 13
const STATION_PITCH = 58

type MarkerEntry = {
  marker: Marker
  el: HTMLButtonElement
  study: CaseStudy
}

function buildStyle(): maplibregl.StyleSpecification {
  return {
    version: 8,
    sources: {
      satellite: {
        type: 'raster',
        tiles: [
          'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        ],
        tileSize: 256,
        attribution:
          'Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community',
        maxzoom: 19,
      },
      terrain: {
        type: 'raster-dem',
        tiles: [
          'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png',
        ],
        encoding: 'terrarium',
        tileSize: 256,
        maxzoom: 15,
        attribution: 'AWS Terrain Tiles / Mapzen',
      },
    },
    layers: [
      {
        id: 'satellite',
        type: 'raster',
        source: 'satellite',
        paint: {
          'raster-saturation': -0.28,
          'raster-contrast': -0.06,
          'raster-brightness-min': 0.08,
          'raster-brightness-max': 0.92,
        },
      },
    ],
    terrain: {
      source: 'terrain',
      exaggeration: 1.2,
    },
  }
}

function createMarkerElement(study: CaseStudy) {
  const meta = STATION_META[study.id]
  const n = String(stationIndex(study.id, CASE_STUDIES)).padStart(2, '0')
  const root = document.createElement('button')
  root.type = 'button'
  root.className = 'survey-map-marker'
  root.dataset.tone = meta.tone
  root.setAttribute('aria-label', `Open ${study.title}`)
  root.title = `${study.title} · ${study.station.place}`
  root.innerHTML = `
    <span class="survey-map-marker-pin" aria-hidden="true">
      <span class="survey-map-marker-dot"></span>
      <span class="survey-map-marker-index">${n}</span>
    </span>
    <span class="survey-map-marker-label">
      <span class="survey-map-marker-title">${study.tabLabel}</span>
      <span class="survey-map-marker-meta">${meta.gridRef}</span>
    </span>
  `
  return root
}

function fitAllStations(map: MapLibreMap, animate: boolean) {
  const bounds = new maplibregl.LngLatBounds()
  for (const study of CASE_STUDIES) {
    bounds.extend([study.station.lng, study.station.lat])
  }
  map.fitBounds(bounds, {
    padding: { top: 88, bottom: 200, left: 340, right: 72 },
    pitch: OVERVIEW_PITCH,
    bearing: OVERVIEW_BEARING,
    maxZoom: 10.6,
    duration: animate ? 1200 : 0,
  })
}

type UseSurveyMapArgs = {
  containerRef: RefObject<HTMLDivElement | null>
  activeId: string | null
  reduceMotion: boolean
  visible: boolean
  onOpenStation: (id: string) => void
  onCursor: (readout: {
    lat: number
    lng: number
    elevM: number | null
  } | null) => void
}

/** Owns MapLibre lifecycle and station markers for the survey hero. */
export function useSurveyMap({
  containerRef,
  activeId,
  reduceMotion,
  visible,
  onOpenStation,
  onCursor,
}: UseSurveyMapArgs) {
  const mapRef = useRef<MapLibreMap | null>(null)
  const markersRef = useRef(new Map<string, MarkerEntry>())
  const onOpenRef = useRef(onOpenStation)
  const onCursorRef = useRef(onCursor)
  const readyRef = useRef(false)
  onOpenRef.current = onOpenStation
  onCursorRef.current = onCursor

  useEffect(function initSurveyMap() {
    const container = containerRef.current
    if (!container || mapRef.current) return

    const map = new maplibregl.Map({
      container,
      style: buildStyle(),
      center: [78.03, 30.18],
      zoom: 9.8,
      pitch: OVERVIEW_PITCH,
      bearing: OVERVIEW_BEARING,
      maxBounds: [
        [SHEET_BOUNDS.lngMin - 0.45, SHEET_BOUNDS.latMin - 0.35],
        [SHEET_BOUNDS.lngMax + 0.45, SHEET_BOUNDS.latMax + 0.35],
      ],
      minZoom: 8.2,
      maxZoom: 15.5,
      attributionControl: false,
      cooperativeGestures: true,
      dragRotate: false,
      pitchWithRotate: false,
    })

    mapRef.current = map

    function placeMarkers() {
      for (const study of CASE_STUDIES) {
        const el = createMarkerElement(study)
        el.addEventListener('click', function onMarkerClick(event) {
          event.stopPropagation()
          onOpenRef.current(study.id)
        })
        const marker = new maplibregl.Marker({
          element: el,
          anchor: 'bottom',
          offset: [0, -6],
        })
          .setLngLat([study.station.lng, study.station.lat])
          .addTo(map)
        markersRef.current.set(study.id, { marker, el, study })
      }
      readyRef.current = true
      fitAllStations(map, false)
    }

    map.on('load', placeMarkers)

    map.on('mousemove', function onMapMove(event) {
      const elev =
        typeof map.queryTerrainElevation === 'function'
          ? map.queryTerrainElevation(event.lngLat)
          : null
      onCursorRef.current({
        lat: event.lngLat.lat,
        lng: event.lngLat.lng,
        elevM: elev == null ? null : Math.round(elev),
      })
    })

    map.on('mouseout', function onMapOut() {
      onCursorRef.current(null)
    })

    return function disposeSurveyMap() {
      readyRef.current = false
      for (const entry of markersRef.current.values()) {
        entry.marker.remove()
      }
      markersRef.current.clear()
      map.remove()
      mapRef.current = null
    }
  }, [containerRef])

  useEffect(
    function syncActiveStation() {
      const map = mapRef.current
      if (!map || !readyRef.current) return

      for (const [id, entry] of markersRef.current) {
        const isActive = id === activeId
        entry.el.classList.toggle('is-active', isActive)
        entry.el.classList.toggle('is-dimmed', Boolean(activeId) && !isActive)
        entry.el.classList.toggle('is-away', Boolean(activeId) && !isActive)
      }

      const animate = !reduceMotion
      if (!activeId) {
        fitAllStations(map, animate)
        return
      }

      const study = CASE_STUDIES.find((item) => item.id === activeId)
      if (!study) return

      map.easeTo({
        center: [study.station.lng, study.station.lat],
        zoom: STATION_ZOOM,
        pitch: STATION_PITCH,
        bearing: OVERVIEW_BEARING + 18,
        duration: animate ? 1500 : 0,
      })
    },
    [activeId, reduceMotion],
  )

  useEffect(
    function syncMapVisibility() {
      const map = mapRef.current
      if (!map) return
      if (visible) {
        map.resize()
        map.triggerRepaint()
      }
    },
    [visible],
  )
}
