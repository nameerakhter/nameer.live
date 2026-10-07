import { useRef } from 'react'

import { useMountEffect } from './use-mount-effect'
import { usePrefersReducedMotion } from './use-prefers-reduced-motion'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  speed: number
  radius: number
  sprite: HTMLCanvasElement
}

/** Exact maciej.co orb palette on bone-white letter fill */
const COLORS = ['#FD5F1C', '#AC9CFC', '#D6F50A'] as const
const FILL = '#F2F2F3'
const COUNT = 40
const MAX_RADIUS = 60

function makeSprite(color: string) {
  const size = MAX_RADIUS * 2
  const sprite = document.createElement('canvas')
  sprite.width = size
  sprite.height = size
  const ctx = sprite.getContext('2d')
  if (!ctx) return sprite
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(MAX_RADIUS, MAX_RADIUS, MAX_RADIUS, 0, Math.PI * 2)
  ctx.fill()
  return sprite
}

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

/** Rising colored orbs on white, clipped by the letterform mask. */
export function useBuildParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const reduceMotion = usePrefersReducedMotion()

  useMountEffect(() => {
    const el = canvasRef.current
    if (!el) return

    const context =
      el.getContext('2d', { alpha: false, desynchronized: true }) ||
      el.getContext('2d', { alpha: false })
    if (!context) return

    // Explicit non-null aliases so nested closures keep the narrowed types.
    const canvas: HTMLCanvasElement = el
    const ctx: CanvasRenderingContext2D = context

    const sprites = new Map(
      COLORS.map((color) => [color, makeSprite(color)] as const),
    )
    const particles: Particle[] = []
    const pointer = { x: 0, y: 0, inside: false }

    let width = 0
    let height = 0
    let magnetR = 110
    let magnetRsq = magnetR * magnetR
    let rafId = 0
    let running = false

    function spawn(fromBottom: boolean): Particle {
      const radius = randomBetween(30, MAX_RADIUS)
      const speed = randomBetween(2, 8)
      const color = COLORS[randomBetween(0, COLORS.length)]
      return {
        x: Math.random() * Math.max(width, 1),
        y: fromBottom
          ? height + radius
          : Math.random() * Math.max(height, 1),
        vx: 0,
        vy: speed,
        speed,
        radius,
        sprite: sprites.get(color)!,
      }
    }

    function resize() {
      const rect = canvas.getBoundingClientRect()
      const cssW = Math.max(1, rect.width)
      const cssH = Math.max(1, rect.height)
      const scale = Math.min(1, 1192 / cssW)
      const nextW = Math.max(1, Math.round(cssW * scale))
      const nextH = Math.max(1, Math.round(cssH * scale))
      if (nextW === width && nextH === height) return
      width = nextW
      height = nextH
      magnetR = Math.min(180, Math.max(110, Math.min(width, height) * 0.42))
      magnetRsq = magnetR * magnetR
      canvas.width = width
      canvas.height = height
      if (particles.length === 0) {
        for (let i = 0; i < COUNT; i += 1) particles.push(spawn(false))
      } else {
        for (const particle of particles) {
          particle.x = Math.min(particle.x, width)
          particle.y = Math.min(particle.y, height)
        }
      }
    }

    function draw() {
      ctx.fillStyle = FILL
      ctx.fillRect(0, 0, width, height)
      for (const particle of particles) {
        const size = particle.radius * 2
        ctx.drawImage(
          particle.sprite,
          particle.x - particle.radius,
          particle.y - particle.radius,
          size,
          size,
        )
      }
    }

    function tick() {
      if (!running) return
      for (const particle of particles) {
        let influence = 0
        if (pointer.inside) {
          const dx = pointer.x - particle.x
          const dy = pointer.y - particle.y
          const distSq = dx * dx + dy * dy
          if (distSq < magnetRsq) {
            const falloff = 1 - Math.sqrt(distSq) / magnetR
            influence = falloff * falloff
          }
        }
        if (influence > 0) {
          particle.vx += (pointer.x - particle.x) * 0.14 * influence
          particle.vx *= 1 - 0.22 * influence
          particle.vy = particle.speed * (1 - influence * 0.9)
        } else {
          particle.vx *= 0.9
          if (particle.vx > -0.04 && particle.vx < 0.04) particle.vx = 0
          particle.vy += (particle.speed - particle.vy) * 0.1
        }
        particle.x += particle.vx
        particle.y -= particle.vy
        if (particle.y <= -particle.radius * 2) {
          particle.x = Math.random() * width
          particle.y = height + particle.radius
          particle.vx = 0
          particle.vy = particle.speed
        }
      }
      draw()
      rafId = requestAnimationFrame(tick)
    }

    function onPointerMove(event: PointerEvent) {
      const rect = canvas.getBoundingClientRect()
      const scaleX = width / Math.max(rect.width, 1)
      const scaleY = height / Math.max(rect.height, 1)
      pointer.x = (event.clientX - rect.left) * scaleX
      pointer.y = (event.clientY - rect.top) * scaleY
      pointer.inside = true
    }

    function onPointerLeave() {
      pointer.inside = false
    }

    function start() {
      if (running || reduceMotion) return
      running = true
      rafId = requestAnimationFrame(tick)
    }

    function stop() {
      running = false
      cancelAnimationFrame(rafId)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) start()
        else {
          stop()
          draw()
        }
      },
      { threshold: 0.05 },
    )

    resize()
    draw()
    if (!reduceMotion) observer.observe(canvas)
    window.addEventListener('resize', resize)
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerleave', onPointerLeave)

    return () => {
      stop()
      observer.disconnect()
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerleave', onPointerLeave)
    }
  })

  return canvasRef
}
