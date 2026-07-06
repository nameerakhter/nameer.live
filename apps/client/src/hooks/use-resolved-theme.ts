import { useSyncExternalStore } from 'react'

import { useTheme } from '@/hooks/use-theme'

type ResolvedTheme = 'dark' | 'light'

function getResolvedTheme(): ResolvedTheme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })

  const media = window.matchMedia('(prefers-color-scheme: dark)')
  media.addEventListener('change', onStoreChange)

  return () => {
    observer.disconnect()
    media.removeEventListener('change', onStoreChange)
  }
}

export function useResolvedTheme(): ResolvedTheme {
  const { theme } = useTheme()

  return useSyncExternalStore(
    subscribe,
    () => {
      if (theme === 'light' || theme === 'dark') {
        return theme
      }

      return getResolvedTheme()
    },
    () => 'dark',
  )
}
