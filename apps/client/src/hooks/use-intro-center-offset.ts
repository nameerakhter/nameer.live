import { useLayoutEffect, useState, type RefObject } from 'react'

import { measureHeroCenterOffset } from '@/lib/portfolio-motion'

/**
 * Distance (px) to translate the hero so it starts vertically centered.
 * Measured before paint so the intro does not flash at the resting position.
 */
export function useIntroCenterOffset(
  ref: RefObject<HTMLElement | null>,
  enabled: boolean,
) {
  const [offset, setOffset] = useState<number | null>(enabled ? null : 0)

  /* eslint-disable react-hooks/exhaustive-deps, no-restricted-syntax -- layout measure before paint */
  useLayoutEffect(() => {
    if (!enabled) {
      setOffset(0)
      return
    }
    const el = ref.current
    if (!el) {
      setOffset(0)
      return
    }
    setOffset(measureHeroCenterOffset(el))
  }, [enabled, ref])
  /* eslint-enable react-hooks/exhaustive-deps, no-restricted-syntax */

  return offset
}
