import { useSyncExternalStore } from 'react'

function subscribe(onStoreChange: () => void) {
  const id = window.setInterval(onStoreChange, 30_000)
  return () => window.clearInterval(id)
}

function formatClock(date: Date) {
  return date.toLocaleTimeString('en-IN', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata',
  })
}

export function useLocalClock() {
  return useSyncExternalStore(
    subscribe,
    () => formatClock(new Date()),
    () => '--:--',
  )
}
