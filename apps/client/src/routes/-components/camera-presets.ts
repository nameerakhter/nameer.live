import type { CaseStudy } from './portfolio-data'

export type CameraPreset = {
  position: [number, number, number]
  target: [number, number, number]
}

/** Default garage hero angle — three-quarter front, car fills the right half. */
export const DEFAULT_CAMERA: CameraPreset = {
  position: [3.4, 1.55, 4.2],
  target: [0, 0.45, 0.2],
}

/**
 * Per-project camera cuts. Car bbox is roughly ±1 × 1.17 × ±2.6 (Sketchfab Y-up).
 */
export const CAMERA_PRESETS: Record<CaseStudy['id'], CameraPreset> = {
  'apuni-sarkar': {
    position: [2.8, 1.2, 3.6],
    target: [0, 0.4, 0.1],
  },
  'chat-forge': {
    position: [0.2, 0.9, 4.4],
    target: [0, 0.35, 1.2],
  },
  'ai-assistant': {
    position: [3.6, 0.7, 0.4],
    target: [0.2, 0.45, 0],
  },
  'kumbh-2027': {
    position: [0.1, 3.8, 0.2],
    target: [0, 0.2, 0.2],
  },
  nhm: {
    position: [-3.2, 1.1, 2.4],
    target: [0, 0.4, 0],
  },
  'stray-reporter': {
    position: [1.2, 0.55, -3.8],
    target: [0, 0.5, -0.4],
  },
  research: {
    position: [0.4, 1.4, 2.2],
    target: [0, 0.55, 0.6],
  },
}

export function presetFor(id: string | null): CameraPreset {
  if (!id) return DEFAULT_CAMERA
  return CAMERA_PRESETS[id] ?? DEFAULT_CAMERA
}
