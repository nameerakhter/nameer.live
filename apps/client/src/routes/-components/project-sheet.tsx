import { motion, useReducedMotion } from 'motion/react'
import { useRef, type KeyboardEvent, type MouseEvent } from 'react'

import { CASE_STUDIES, RACE_COPY } from './portfolio-data'
import { useRace } from './race-context'

import { useMountEffect } from '@/hooks/use-mount-effect'

export function ProjectSheet() {
  const { activeId, closeProject, goProject } = useRace()
  const panelRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const study = CASE_STUDIES.find((item) => item.id === activeId) ?? null
  const handlersRef = useRef({ activeId, closeProject, goProject })
  handlersRef.current = { activeId, closeProject, goProject }

  useMountEffect(() => {
    function onKey(event: globalThis.KeyboardEvent) {
      const {
        activeId: id,
        closeProject: close,
        goProject: go,
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
      closeProject()
    }
  }

  function stopSheetBubble(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
  }

  if (!study) return null

  const index = CASE_STUDIES.findIndex((item) => item.id === study.id)

  return (
    <div className="telemetry-panel" role="presentation" onClick={closeProject}>
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="telemetry-title"
        tabIndex={-1}
        className="telemetry-sheet outline-none"
        onClick={stopSheetBubble}
        onKeyDown={onPanelKeyDown}
        initial={reduce ? false : { x: '100%', opacity: 0.6 }}
        animate={{ x: 0, opacity: 1 }}
        transition={
          reduce
            ? { duration: 0 }
            : { type: 'spring', stiffness: 320, damping: 34 }
        }
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="m-0 font-timing text-caption tracking-caption text-bull-yellow uppercase">
              P{study.race.position} · {study.race.metric}
            </p>
            <h2
              id="telemetry-title"
              className="mt-2 mb-0 font-display text-heading-sm font-bold tracking-heading-sm text-chalk uppercase"
            >
              {study.title}
            </h2>
            <p className="mt-2 mb-0 font-display text-body-sm text-chalk-muted">
              {study.role} · {study.period}
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 border border-hairline bg-transparent px-3 py-2 font-timing text-caption tracking-caption text-chalk uppercase hover:border-chalk/40"
            onClick={closeProject}
          >
            Esc
          </button>
        </div>

        <p className="mt-4 mb-0 font-display text-body tracking-body text-pretty text-chalk">
          {study.pitch}
        </p>
        <p className="mt-3 mb-0 font-display text-body-sm tracking-body-sm text-pretty text-chalk-muted">
          {study.scope}
        </p>

        <div className="telemetry-media" aria-label="Screenshots">
          {study.images.map((image) => (
            <figure key={image.path}>
              <img src={image.path} alt={image.label} loading="lazy" />
              <figcaption className="mt-2 font-timing text-caption tracking-caption text-chalk-muted">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
          {study.tags.map((tag) => (
            <li
              key={tag}
              className="border border-hairline px-2 py-1 font-timing text-caption tracking-caption text-chalk-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {study.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-display text-body-sm font-bold tracking-body-sm text-signal underline decoration-signal/40 underline-offset-[0.22em] hover:decoration-signal"
            >
              {link.label} ↗
            </a>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-hairline pt-4">
          <button
            type="button"
            className="border-0 bg-transparent font-timing text-caption tracking-caption text-chalk-muted uppercase hover:text-chalk"
            onClick={() => goProject(-1)}
          >
            ← Prev
          </button>
          <span className="font-timing text-caption tracking-caption text-chalk-muted">
            {index + 1} / {CASE_STUDIES.length} · {RACE_COPY.towerTitle}
          </span>
          <button
            type="button"
            className="border-0 bg-transparent font-timing text-caption tracking-caption text-chalk-muted uppercase hover:text-chalk"
            onClick={() => goProject(1)}
          >
            Next →
          </button>
        </div>
      </motion.div>
    </div>
  )
}
