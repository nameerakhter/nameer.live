import {
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from 'react'

import MediaSlot from './media-slot'
import { CASE_STUDIES, type CaseStudy } from './portfolio-data'

type GalleryMode = 'stack' | 'open'

function cardLayer(listIndex: number, count: number) {
  // First case study sits on top of the stack (highest --i, leftmost tab).
  return count - 1 - listIndex
}

function cardY(
  layer: number,
  mode: GalleryMode,
  activeLayer: number | null,
): string | undefined {
  if (mode !== 'open' || activeLayer === null) return undefined
  if (layer < activeLayer) return 'calc(100% - var(--gallery-tab))'
  return '0px'
}

export function WorkGallery() {
  const count = CASE_STUDIES.length
  const [mode, setMode] = useState<GalleryMode>('stack')
  const [activeId, setActiveId] = useState<string | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const activeListIndex =
    activeId === null
      ? -1
      : CASE_STUDIES.findIndex((study) => study.id === activeId)
  const activeLayer =
    activeListIndex >= 0 ? cardLayer(activeListIndex, count) : null

  function openStudy(id: string) {
    setActiveId(id)
    setMode('open')
    document.body.style.overflow = 'hidden'
    queueMicrotask(() => galleryRef.current?.focus())
  }

  function closeGallery() {
    setMode('stack')
    setActiveId(null)
    document.body.style.overflow = ''
  }

  function go(delta: number) {
    if (mode !== 'open' || activeListIndex < 0) return
    const next =
      (activeListIndex + delta + CASE_STUDIES.length) % CASE_STUDIES.length
    setActiveId(CASE_STUDIES[next].id)
  }

  function onGalleryKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (mode !== 'open') return
    if (event.key === 'Escape') {
      event.preventDefault()
      closeGallery()
      return
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      go(-1)
      return
    }
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      go(1)
    }
  }

  return (
    <section id="work" className="pf-work">
      <div className="pf-shell">
        <div className="pf-work-head">
          <h2 className="pf-section-title">Selected work ↓</h2>
          <p className="pf-work-lede">
            I ship production backends, AI workflows, and full-stack platforms —
            civic portals, payment rails, and assistants used at scale.{' '}
            <a href="#about" className="pf-text-link">
              Learn more
            </a>
          </p>
        </div>
      </div>

      <div className="pf-gallery-wrap">
        <div
          ref={galleryRef}
          className={
            mode === 'open' ? 'pf-gallery is-focused' : 'pf-gallery'
          }
          style={
            {
              '--gallery-count': count,
              '--gallery-front':
                mode === 'open' && activeLayer !== null ? activeLayer : 0,
            } as CSSProperties
          }
          tabIndex={mode === 'open' ? -1 : undefined}
          onKeyDown={onGalleryKeyDown}
        >
          <button
            type="button"
            className="pf-gallery-dismiss"
            aria-label="Close gallery"
            onClick={closeGallery}
          >
            <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden>
              <path d="M9 3.5a1 1 0 0 1 2 0V9h5.5a1 1 0 1 1 0 2H11v5.5a1 1 0 1 1-2 0V11H3.5a1 1 0 1 1 0-2H9V3.5z" />
            </svg>
          </button>

          <div className="pf-gallery-keyboard" aria-hidden>
            <span>↑</span>
            <span>←</span>
            <span>↓</span>
            <span>→</span>
          </div>

          <div className="pf-gallery-stage">
            {CASE_STUDIES.map((study, listIndex) => {
              const layer = cardLayer(listIndex, count)
              const isActive = mode === 'open' && study.id === activeId
              const isFront =
                mode === 'open' &&
                activeLayer !== null &&
                layer < activeLayer
              const isBack =
                mode === 'open' &&
                activeLayer !== null &&
                layer > activeLayer
              const y = cardY(layer, mode, activeLayer)

              return (
                <GalleryCard
                  key={study.id}
                  study={study}
                  layer={layer}
                  isActive={isActive}
                  isFront={isFront}
                  isBack={isBack}
                  galleryY={y}
                  onOpen={() => openStudy(study.id)}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function GalleryCard({
  study,
  layer,
  isActive,
  isFront,
  isBack,
  galleryY,
  onOpen,
}: {
  study: CaseStudy
  layer: number
  isActive: boolean
  isFront: boolean
  isBack: boolean
  galleryY: string | undefined
  onOpen: () => void
}) {
  const className = [
    'pf-gallery-card',
    isActive ? 'is-active' : '',
    isFront ? 'is-front' : '',
    isBack ? 'is-back' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section
      id={study.id}
      className={className}
      style={
        {
          '--i': layer,
          ...(galleryY ? { '--gallery-y': galleryY } : {}),
        } as CSSProperties
      }
      tabIndex={isActive ? -1 : 0}
      aria-label={study.tabLabel ?? study.title}
      aria-current={isActive ? 'true' : 'false'}
      onClick={(event) => {
        const target = event.target as HTMLElement
        if (target.closest('a')) return
        if (!isActive) onOpen()
      }}
      onKeyDown={(event) => {
        if (isActive) return
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onOpen()
        }
      }}
    >
      <div className="pf-gallery-tab">
        <h3>{study.tabLabel ?? study.title}</h3>
      </div>

      <article className="pf-gallery-content">
        <div className="pf-work-images">
          {study.images.map((image) => (
            <figure key={image.path}>
              <MediaSlot
                label={`${image.label} · ${image.path}`}
                aspect="16/9"
                className="pf-work-slot"
              />
            </figure>
          ))}
        </div>

        <aside className="pf-work-info">
          <div className="pf-work-scope">
            <p className="pf-mono-label">Scope</p>
            <p>{study.scope}</p>
          </div>
          <div className="pf-work-facts">
            <div>
              <p className="pf-mono-label">Position</p>
              <p>{study.role}</p>
            </div>
            <div>
              <p className="pf-mono-label">Time</p>
              <p>{study.period}</p>
            </div>
            <div>
              <p className="pf-mono-label">With</p>
              <div className="pf-case-links">
                {study.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="pf-text-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </article>
    </section>
  )
}
