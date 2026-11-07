import { useEffect } from 'react'

/** Mount-only external sync. Components must use this instead of useEffect. */
export function useMountEffect(effect: () => void | (() => void)) {
  /* eslint-disable react-hooks/exhaustive-deps -- intentional mount-only wrapper */
  useEffect(effect, [])
  /* eslint-enable react-hooks/exhaustive-deps */
}
