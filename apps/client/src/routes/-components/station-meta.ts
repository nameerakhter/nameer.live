import type { CaseStudy } from './portfolio-data'

export type StationTone =
  | 'civic'
  | 'agents'
  | 'assistant'
  | 'event'
  | 'enterprise'
  | 'mobile'
  | 'research'

export type StationMeta = {
  tone: StationTone
  /** Short grid ref shown in the rail */
  gridRef: string
  /** Lucide-like inline SVG path(s) for the marker pin */
  iconPath: string
}

/**
 * Per-station visual identity — keeps map pins and the rail in sync.
 * iconPath values are Lucide 24×24 viewBox paths.
 */
export const STATION_META: Record<CaseStudy['id'], StationMeta> = {
  'apuni-sarkar': {
    tone: 'civic',
    gridRef: 'DDN-01',
    iconPath:
      'M10 18v-7M14 18v-7M4 21V10.08a1 1 0 0 1 .35-.76l7-6.3a1 1 0 0 1 1.3 0l7 6.3a1 1 0 0 1 .35.76V21M2 21h20M9 21v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4',
  },
  'chat-forge': {
    tone: 'agents',
    gridRef: 'DDN-02',
    iconPath:
      'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  },
  'ai-assistant': {
    tone: 'assistant',
    gridRef: 'DDN-03',
    iconPath:
      'M12 3v2M12 19v2M5.6 5.6l1.4 1.4M16.9 16.9l1.4 1.4M3 12h2M19 12h2M5.6 18.4l1.4-1.4M16.9 7.1l1.4-1.4M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0',
  },
  'kumbh-2027': {
    tone: 'event',
    gridRef: 'HRD-01',
    iconPath:
      'M2 12c2.5-2 5-3 10-3s7.5 1 10 3M2 17c2.5-2 5-3 10-3s7.5 1 10 3M2 7c2.5-2 5-3 10-3s7.5 1 10 3',
  },
  nhm: {
    tone: 'enterprise',
    gridRef: 'DDN-04',
    iconPath:
      'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 4h6v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4M9 14h6M9 10h6M9 18h4',
  },
  'stray-reporter': {
    tone: 'mobile',
    gridRef: 'DDN-05',
    iconPath:
      'M12 18h.01M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z',
  },
  research: {
    tone: 'research',
    gridRef: 'RKE-01',
    iconPath:
      'M10 2v7.5L4.2 19a2 2 0 0 0 1.7 3h12.2a2 2 0 0 0 1.7-3L14 9.5V2M8.5 2h7M7 15h10',
  },
}

export function formatStationCoords(lat: number, lng: number) {
  const latHem = lat >= 0 ? 'N' : 'S'
  const lngHem = lng >= 0 ? 'E' : 'W'
  return `${Math.abs(lat).toFixed(3)}°${latHem} ${Math.abs(lng).toFixed(3)}°${lngHem}`
}

export function stationIndex(id: string, studies: readonly { id: string }[]) {
  const index = studies.findIndex((study) => study.id === id)
  return index >= 0 ? index + 1 : 0
}
