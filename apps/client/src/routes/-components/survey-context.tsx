import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import { CASE_STUDIES } from './portfolio-data'

type SurveyContextValue = {
  activeId: string | null
  openStation: (id: string) => void
  closeStation: () => void
  goStation: (delta: number) => void
}

const SurveyContext = createContext<SurveyContextValue | null>(null)

function lockScroll() {
  document.body.style.overflow = 'hidden'
}

function unlockScroll() {
  document.body.style.overflow = ''
}

export function SurveyProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<string | null>(null)

  const value = useMemo<SurveyContextValue>(
    () => ({
      activeId,
      openStation(id: string) {
        setActiveId(id)
        lockScroll()
      },
      closeStation() {
        setActiveId(null)
        unlockScroll()
      },
      goStation(delta: number) {
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

  return (
    <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>
  )
}

export function useSurvey() {
  const ctx = useContext(SurveyContext)
  if (!ctx) {
    throw new Error('useSurvey must be used within SurveyProvider')
  }
  return ctx
}
