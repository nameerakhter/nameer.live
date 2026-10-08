import type { Transition } from 'motion/react'

/** Shared maciej.co intro timing — Motion, not hand-rolled CSS classes */
export const INTRO_EASE = [0.25, 0.46, 0.45, 0.94] as const

export const INTRO_HERO_MS = 600
export const INTRO_CARD_MS = 450
export const INTRO_STAGGER_MS = 100
export const INTRO_CHROME_MS = 450
export const INTRO_CHROME_LEAD_MS = 80
/** Folders start as chrome appears — after the hero has centered then lifted */
export const INTRO_CARD_START_MS = INTRO_HERO_MS - INTRO_CHROME_LEAD_MS

/** Chrome appears as the hero finishes lifting (hero duration − lead) */
export const INTRO_CHROME_DELAY_S =
  Math.max(0, INTRO_HERO_MS - INTRO_CHROME_LEAD_MS) / 1000

export const introChromeTransition: Transition = {
  delay: INTRO_CHROME_DELAY_S,
  duration: INTRO_CHROME_MS / 1000,
  ease: INTRO_EASE,
}

export const introHeroTransition: Transition = {
  duration: INTRO_HERO_MS / 1000,
  ease: INTRO_EASE,
  times: [0, 0.5, 1],
}

export function introCardTransition(layer: number, count: number): Transition {
  return {
    delay: (INTRO_CARD_START_MS + (count - 1 - layer) * INTRO_STAGGER_MS) / 1000,
    duration: INTRO_CARD_MS / 1000,
    ease: INTRO_EASE,
  }
}

/** Pixels to shift the hero so its center sits on the viewport center */
export function measureHeroCenterOffset(hero: HTMLElement): number {
  const rect = hero.getBoundingClientRect()
  return window.innerHeight / 2 - (rect.top + rect.height / 2)
}
