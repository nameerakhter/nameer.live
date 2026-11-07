import { motion, useReducedMotion } from 'motion/react'
import { useRef, type KeyboardEvent, type MouseEvent } from 'react'

import { CASE_STUDIES, SHEET_COPY } from './portfolio-data'
import { useSurvey } from './survey-context'

import { useMountEffect } from '@/hooks/use-mount-effect'

export function ProjectSheet() {
  const { activeId, closeStation, goStation } = useSurvey()
  const panelRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const study = CASE_STUDIES.find((item) => item.id === activeId) ?? null
  const handlersRef = useRef({ activeId, closeStation, goStation })
  handlersRef.current = { activeId, closeStation, goStation }

  useMountEffect(() => {
    function onKey(event: globalThis.KeyboardEvent) {
      const {
        activeId: id,
        closeStation: close,
        goStation: go,
      } = handlersRef.current
      if (!id) return
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
      }
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault()
        go(-1)
        return
      }
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault()
        go(1)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  })

  function onPanelKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      event.preventDefault()
      closeStation()
    }
  }

  function stopSheetBubble(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
  }

  if (!study) return null

  return (
    <motion.div
      className="project-sheet"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-sheet-title"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.22 }}
      onClick={closeStation}
    >
      <motion.div
        ref={panelRef}
        className="project-sheet-panel"
        tabIndex={-1}
        onKeyDown={onPanelKeyDown}
        initial={reduce ? false : { x: '100%' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 34 }}
        onClick={stopSheetBubble}
      >
        <header className="flex items-start justify-between gap-4 border-b border-hairline px-5 py-4">
          <div>
            <p className="m-0 font-mono-survey text-caption tracking-caption text-ink-muted">
              {study.year} · {study.station.place}
              {study.station.approximate
                ? ` · ${SHEET_COPY.approximateNote}`
                : ''}
            </p>
            <h2
              id="project-sheet-title"
              className="mt-1 m-0 font-mona text-heading-sm font-bold tracking-heading-sm text-ink"
              style={{ fontStretch: '105%' }}
            >
              {study.title}
            </h2>
            <p className="mt-2 m-0 max-w-[40ch] font-mona text-body-sm tracking-body-sm text-ink-muted">
              {study.pitch}
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 border border-hairline bg-sheet px-3 py-2 font-mona text-caption text-ink hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-station"
            onClick={closeStation}
          >
            Close
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto p-5 ">
          <p className="m-0 max-w-[52ch] font-mona text-body tracking-body text-ink text-pretty">
            {study.scope}
          </p>

          <div className="project-sheet-strip mt-6">
            {study.images.map((image) => (
              <img
                key={image.path}
                src={image.path}
                alt={image.label}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>

          <div className="mt-8 grid gap-6 min-[520px]:grid-cols-2">
            <div>
              <p className="m-0 font-mono-survey text-caption tracking-caption text-ink-muted">
                Legend · stack
              </p>
              <ul className="mt-2 flex list-none flex-wrap gap-2 p-0">
                {study.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-hairline px-2.5 py-1 font-mona text-caption text-ink"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            {study.links.length > 0 ? (
              <div>
                <p className="m-0 font-mono-survey text-caption tracking-caption text-ink-muted">
                  Live
                </p>
                <div className="mt-2 flex flex-col items-start gap-2">
                  {study.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mona text-body-sm tracking-body-sm text-water underline decoration-water/50 underline-offset-[0.22em] hover:decoration-water"
                    >
                      {link.label}
                      <span aria-hidden> ↗</span>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <footer className="flex items-center justify-between gap-3 border-t border-hairline px-5 py-3 font-mono-survey text-caption text-ink-muted">
          <span>↑↓ stations · Esc close</span>
          <span>
            {CASE_STUDIES.findIndex((item) => item.id === study.id) + 1} /{' '}
            {CASE_STUDIES.length}
          </span>
        </footer>
      </motion.div>
    </motion.div>
  )
}
