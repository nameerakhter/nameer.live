import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import { useResolvedTheme } from '@/hooks/use-resolved-theme'

type Ripple = {
  x: number
  y: number
  r: number
  maxR: number
  alpha: number
  color: string
  life: number
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function themeColors(isDark: boolean) {
  if (isDark) {
    return {
      pigments: ['45, 212, 191', '20, 184, 166', '94, 234, 212'],
      trailFade: 0.012,
      strokeAlpha: 0.22,
      rippleAlpha: 0.28,
      ambient: '45, 212, 191',
      ambientAlpha: 0.07,
    }
  }

  return {
    pigments: ['15, 118, 110', '13, 148, 136', '17, 94, 89'],
    trailFade: 0.01,
    strokeAlpha: 0.26,
    rippleAlpha: 0.24,
    ambient: '15, 118, 110',
    ambientAlpha: 0.08,
  }
}

function strokeRibbon(
  ctx: CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  strokeWidth: number,
  color: string,
  alpha: number,
) {
  const dist = Math.hypot(x1 - x0, y1 - y0)
  if (dist < 0.5) return

  // Dense samples keep the ribbon continuous instead of dotted blobs
  const steps = Math.max(1, Math.ceil(dist / 2.5))

  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const x = x0 + (x1 - x0) * t
    const y = y0 + (y1 - y0) * t
    const radius = strokeWidth * (0.88 + Math.sin(t * Math.PI) * 0.12)

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
    gradient.addColorStop(0, `rgba(${color}, ${alpha})`)
    gradient.addColorStop(0.5, `rgba(${color}, ${alpha * 0.3})`)
    gradient.addColorStop(1, `rgba(${color}, 0)`)

    ctx.beginPath()
    ctx.fillStyle = gradient
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
  }
}

function paintRing(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  color: string,
  alpha: number,
) {
  if (r <= 2 || alpha <= 0.02) return

  const thickness = Math.max(10, r * 0.16)
  const gradient = ctx.createRadialGradient(
    x,
    y,
    Math.max(0, r - thickness),
    x,
    y,
    r,
  )
  gradient.addColorStop(0, `rgba(${color}, 0)`)
  gradient.addColorStop(0.45, `rgba(${color}, ${alpha * 0.4})`)
  gradient.addColorStop(0.8, `rgba(${color}, ${alpha})`)
  gradient.addColorStop(1, `rgba(${color}, 0)`)

  ctx.beginPath()
  ctx.fillStyle = gradient
  ctx.arc(x, y, r, 0, Math.PI * 2)
  ctx.fill()
}

function useHeroWatercolorCanvas(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  isDark: boolean,
) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduced = prefersReducedMotion()
    const colors = themeColors(isDark)

    let width = 0
    let height = 0
    let dpr = 1
    let frame = 0
    let destroyed = false
    let hasPointer = false

    const pointer = { x: 0, y: 0 }
    const smooth = { x: 0, y: 0 }
    const toX = gsap.quickTo(smooth, 'x', {
      duration: 0.4,
      ease: 'power3.out',
    })
    const toY = gsap.quickTo(smooth, 'y', {
      duration: 0.5,
      ease: 'power3.out',
    })

    const trail = document.createElement('canvas')
    const trailCtx = trail.getContext('2d', { alpha: true })
    if (!trailCtx) return

    const ripples: Ripple[] = []
    let pigmentIndex = 0
    let lastRippleAt = 0
    let distanceSinceRipple = 0

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return

      width = parent.clientWidth
      height = parent.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 1.75)

      const prev = document.createElement('canvas')
      prev.width = trail.width
      prev.height = trail.height
      const prevCtx = prev.getContext('2d')
      if (prevCtx && trail.width && trail.height) {
        prevCtx.drawImage(trail, 0, 0)
      }

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      trail.width = Math.floor(width * dpr)
      trail.height = Math.floor(height * dpr)
      trailCtx.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (prev.width && prev.height) {
        trailCtx.drawImage(prev, 0, 0, width, height)
      }

      if (!hasPointer) {
        smooth.x = width * 0.72
        smooth.y = height * 0.42
        pointer.x = smooth.x
        pointer.y = smooth.y
      }
    }

    const addRipple = (x: number, y: number, force: number, color: string) => {
      const now = performance.now()
      if (now - lastRippleAt < 140) return
      lastRippleAt = now

      const base = 52 + force * 90
      ripples.push({
        x,
        y,
        r: base * 0.16,
        maxR: base * (2.5 + force * 1.6),
        alpha: colors.rippleAlpha * (0.7 + force * 0.35),
        color,
        life: 1,
      })
    }

    const paintStroke = (x0: number, y0: number, x1: number, y1: number) => {
      const dist = Math.hypot(x1 - x0, y1 - y0)
      if (dist < 0.6) return

      const force = Math.min(1, dist / 28)
      const color = colors.pigments[pigmentIndex % colors.pigments.length]
      const strokeWidth = 48 + force * 42

      // One continuous ribbon + a softer outer wash
      strokeRibbon(
        trailCtx,
        x0,
        y0,
        x1,
        y1,
        strokeWidth,
        color,
        colors.strokeAlpha * (0.7 + force * 0.35),
      )
      strokeRibbon(
        trailCtx,
        x0,
        y0,
        x1,
        y1,
        strokeWidth * 1.65,
        color,
        colors.strokeAlpha * 0.22,
      )

      distanceSinceRipple += dist
      if (distanceSinceRipple > 90 + (1 - force) * 50) {
        distanceSinceRipple = 0
        pigmentIndex += 1
        addRipple(x1, y1, force, color)
      }
    }

    const fadeTrail = () => {
      trailCtx.save()
      trailCtx.globalCompositeOperation = 'destination-out'
      trailCtx.fillStyle = `rgba(0, 0, 0, ${colors.trailFade})`
      trailCtx.fillRect(0, 0, width, height)
      trailCtx.restore()
    }

    const paintAmbient = () => {
      const ax = width * 0.76
      const ay = height * 0.38
      const r = Math.max(width, height) * 0.4
      const gradient = ctx.createRadialGradient(ax, ay, r * 0.12, ax, ay, r)
      gradient.addColorStop(
        0,
        `rgba(${colors.ambient}, ${colors.ambientAlpha})`,
      )
      gradient.addColorStop(1, `rgba(${colors.ambient}, 0)`)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    }

    const paintPointerWash = () => {
      if (!hasPointer) return

      const color = colors.pigments[0]
      const r = 96
      const gradient = ctx.createRadialGradient(
        smooth.x,
        smooth.y,
        r * 0.05,
        smooth.x,
        smooth.y,
        r,
      )
      gradient.addColorStop(0, `rgba(${color}, ${isDark ? 0.18 : 0.2})`)
      gradient.addColorStop(0.45, `rgba(${color}, ${isDark ? 0.06 : 0.07})`)
      gradient.addColorStop(1, `rgba(${color}, 0)`)
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(smooth.x, smooth.y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    const tick = () => {
      if (destroyed) return

      fadeTrail()

      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i]
        ripple.r += (ripple.maxR - ripple.r) * 0.065
        ripple.life -= 0.01
        ripple.alpha *= 0.984

        paintRing(
          trailCtx,
          ripple.x,
          ripple.y,
          ripple.r,
          ripple.color,
          ripple.alpha * 0.16 * Math.max(ripple.life, 0),
        )

        if (ripple.life <= 0 || ripple.alpha < 0.02) {
          ripples.splice(i, 1)
        }
      }

      ctx.clearRect(0, 0, width, height)
      paintAmbient()
      ctx.drawImage(trail, 0, 0, width, height)

      for (const ripple of ripples) {
        paintRing(
          ctx,
          ripple.x,
          ripple.y,
          ripple.r,
          ripple.color,
          ripple.alpha * Math.max(ripple.life, 0),
        )
      }

      paintPointerWash()
      frame = window.requestAnimationFrame(tick)
    }

    const onPointerMove = (event: PointerEvent) => {
      if (reduced) return

      const parent = canvas.parentElement
      if (!parent) return

      const rect = parent.getBoundingClientRect()
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom

      if (!inside) {
        hasPointer = false
        return
      }

      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      if (!hasPointer) {
        hasPointer = true
        pointer.x = x
        pointer.y = y
        smooth.x = x
        smooth.y = y
        distanceSinceRipple = 0
      } else {
        paintStroke(pointer.x, pointer.y, x, y)
      }

      pointer.x = x
      pointer.y = y
      toX(x)
      toY(y)
    }

    resize()
    paintStroke(width * 0.68, height * 0.42, width * 0.78, height * 0.36)
    addRipple(width * 0.74, height * 0.4, 0.35, colors.pigments[0])
    frame = window.requestAnimationFrame(tick)

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove, { passive: true })

    return () => {
      destroyed = true
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [canvasRef, isDark])
}

export default function HeroWatercolor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const resolvedTheme = useResolvedTheme()

  useHeroWatercolorCanvas(canvasRef, resolvedTheme === 'dark')

  return <canvas ref={canvasRef} className="hero-watercolor" aria-hidden />
}
