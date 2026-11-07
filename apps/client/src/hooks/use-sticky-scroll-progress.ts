import { useSyncExternalStore, type RefObject } from 'react'

/**
 * 0–1 progress through a tall stage whose sticky child pins for (stageHeight - viewport).
 */
export function useStickyScrollProgress(stageRef: RefObject<HTMLElement | null>) {
  return useSyncExternalStore(
    function subscribe(onStoreChange) {
      function onScroll() {
        onStoreChange()
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll)
      return () => {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
      }
    },
    function getSnapshot() {
      const el = stageRef.current
      if (!el) return 0
      const rect = el.getBoundingClientRect()
      const travel = el.offsetHeight - window.innerHeight
      if (travel <= 0) return 0
      const scrolled = -rect.top
      return Math.min(1, Math.max(0, scrolled / travel))
    },
    function getServerSnapshot() {
      return 0
    },
  )
}
