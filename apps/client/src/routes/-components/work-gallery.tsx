import {
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from 'react'
import { motion, useReducedMotion } from 'motion/react'

import { useMountEffect } from '@/hooks/use-mount-effect'
import { introCardTransition, introChromeTransition } from '@/lib/portfolio-motion'

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
  const reduce = useReducedMotion()

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

  function activeContentEl() {
    return galleryRef.current?.querySelector<HTMLElement>(
      '.pf-gallery-card.is-active .pf-gallery-content',
    )
  }

  function go(delta: number) {
    if (mode !== 'open' || activeListIndex < 0) return
    const next =
      (activeListIndex + delta + CASE_STUDIES.length) % CASE_STUDIES.length
    setActiveId(CASE_STUDIES[next].id)
    queueMicrotask(() => {
      const el = activeContentEl()
      if (el) el.scrollLeft = 0
    })
  }

  /** ←/→ pan screenshots; returns false if strip can't move further */
  function scrollActiveStrip(direction: -1 | 1) {
    const el = activeContentEl()
    if (!el) return false
    const maxScroll = el.scrollWidth - el.clientWidth
    if (maxScroll <= 1) return false

    const step = Math.max(280, Math.round(el.clientWidth * 0.72))
    const before = el.scrollLeft
    el.scrollLeft = Math.max(
      0,
      Math.min(maxScroll, el.scrollLeft + direction * step),
    )
    return Math.abs(el.scrollLeft - before) > 0.5
  }

  function onGalleryKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (mode !== 'open') return
    if (event.key === 'Escape') {
      event.preventDefault()
      closeGallery()
      return
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      scrollActiveStrip(-1)
      return
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      scrollActiveStrip(1)
      return
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      go(-1)
      return
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      go(1)
    }
  }

  return (
    <section id="work" className="pf-work">
      <div className="box-border w-full">
        <motion.div
          className="mb-[clamp(8px,1.2dvh,16px)] grid gap-1.5 min-[900px]:grid-cols-[1fr_1.2fr] min-[900px]:items-end min-[900px]:gap-x-6"
          initial={reduce ? false : { opacity: 0, filter: 'blur(4px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={introChromeTransition}
        >
          <h2 className="m-0 font-display text-[clamp(18px,2vw,28px)] font-normal tracking-heading leading-heading text-bone-white">
            Projects ↓
          </h2>
          <p className="m-0 max-w-[48ch] font-replica-regular text-[clamp(14px,1.5vw,var(--text-body-sm))] leading-body-sm text-fog">
            I ship production backends, AI workflows, and full-stack platforms —
            civic portals, payment rails, and assistants used at scale.{' '}
            <a
              href="#about"
              className="text-caption tracking-caption text-fog no-underline hover:text-bone-white"
            >
              Learn more
            </a>
          </p>
        </motion.div>
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
                  count={count}
                  isActive={isActive}
                  isFront={isFront}
                  isBack={isBack}
                  galleryY={y}
                  reduceMotion={Boolean(reduce)}
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
  count,
  isActive,
  isFront,
  isBack,
  galleryY,
  reduceMotion,
  onOpen,
}: {
  study: CaseStudy
  layer: number
  count: number
  isActive: boolean
  isFront: boolean
  isBack: boolean
  galleryY: string | undefined
  reduceMotion: boolean
  onOpen: () => void
}) {
  const contentRef = useRef<HTMLElement>(null)
  const className = [
    'pf-gallery-card',
    isActive ? 'is-active' : '',
    isFront ? 'is-front' : '',
    isBack ? 'is-back' : '',
  ]
    .filter(Boolean)
    .join(' ')

  // maciej.co: vertical wheel pans the screenshot strip horizontally
  useMountEffect(() => {
    const el = contentRef.current
    if (!el) return

    const onWheel = (event: WheelEvent) => {
      if (!el.closest('.pf-gallery-card.is-active')) return
      const maxScroll = el.scrollWidth - el.clientWidth
      if (maxScroll <= 1) return

      event.preventDefault()
      el.scrollLeft += event.deltaY + event.deltaX
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  })

  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      style={{ zIndex: count - layer }}
      initial={
        reduceMotion ? false : { opacity: 0, y: '50vh', scale: 1.1 }
      }
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={introCardTransition(layer, count)}
    >
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

        <article ref={contentRef} className="pf-gallery-content">
          {/* maciej.co: screenshots then Stack/Live in one strip */}
          <div className="pf-work-images">
            {study.images.map((image) => (
              <MediaSlot
                key={image.path}
                src={image.path}
                label={image.label}
                className="pf-work-slot"
              />
            ))}

            <aside className="pf-work-info">
              <div>
                <p className="pf-mono-label">Stack</p>
                <ul className="pf-work-tags">
                  {study.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              {study.links.length > 0 ? (
                <div>
                  <p className="pf-mono-label">Live</p>
                  <div className="pf-case-links">
                    {study.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="pf-live-link"
                      >
                        {link.label}
                        <span aria-hidden>↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </aside>
          </div>
        </article>
      </section>
    </motion.div>
  )
}
