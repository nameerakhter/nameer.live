import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import { CASE_STUDIES } from './portfolio-data'

type RaceContextValue = {
  activeId: string | null
  openProject: (id: string) => void
  closeProject: () => void
  goProject: (delta: number) => void
}

const RaceContext = createContext<RaceContextValue | null>(null)

function lockScroll() {
  document.body.style.overflow = 'hidden'
}

function unlockScroll() {
  document.body.style.overflow = ''
}

export function RaceProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<string | null>(null)

  const value = useMemo<RaceContextValue>(
    () => ({
      activeId,
      openProject(id: string) {
        setActiveId(id)
        lockScroll()
      },
      closeProject() {
        setActiveId(null)
        unlockScroll()
      },
      goProject(delta: number) {
        setActiveId((current) => {
          const index = current
            ? CASE_STUDIES.findIndex((study) => study.id === current)
            : -1
          const base = index < 0 ? 0 : index
          const next =
            (base + delta + CASE_STUDIES.length) % CASE_STUDIES.length
          lockScroll()
          return CASE_STUDIES[next].id
        })
      },
    }),
    [activeId],
  )

  return <RaceContext.Provider value={value}>{children}</RaceContext.Provider>
}

export function useRace() {
  const ctx = useContext(RaceContext)
  if (!ctx) {
    throw new Error('useRace must be used within RaceProvider')
  }
  return ctx
}
