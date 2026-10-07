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

const COLORS = ['#FD5F1C', '#AC9CFC', '#D6F50A', '#3DDCFF'] as const
const COUNT = 36
const MAX_RADIUS = 52

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

/** Soft rising orbs clipped by the hero letterform mask (maciej.co model). */
export function useBuildParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const reduceMotion = usePrefersReducedMotion()

  useMountEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || reduceMotion) return

    const ctx =
      canvas.getContext('2d', { alpha: true, desynchronized: true }) ||
      canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const sprites = new Map(
      COLORS.map((color) => [color, makeSprite(color)] as const),
    )
    const particles: Particle[] = []
    const pointer = { x: 0, y: 0, inside: false }

    let width = 0
    let height = 0
    let magnetR = 120
    let magnetRsq = magnetR * magnetR
    let rafId = 0
    let running = false

    function spawn(fromBottom: boolean): Particle {
      const radius = randomBetween(22, MAX_RADIUS)
      const speed = randomBetween(1.4, 5.2)
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
      const scale = Math.min(1, 1200 / cssW)
      const nextW = Math.max(1, Math.round(cssW * scale))
      const nextH = Math.max(1, Math.round(cssH * scale))
      if (nextW === width && nextH === height) return
      width = nextW
      height = nextH
      magnetR = Math.min(170, Math.max(100, Math.min(width, height) * 0.4))
      magnetRsq = magnetR * magnetR
      canvas.width = width
      canvas.height = height
      if (particles.length === 0) {
        for (let i = 0; i < COUNT; i += 1) particles.push(spawn(false))
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      for (const particle of particles) {
        const size = particle.radius * 2
        ctx.globalAlpha = 0.85
        ctx.drawImage(
          particle.sprite,
          particle.x - particle.radius,
          particle.y - particle.radius,
          size,
          size,
        )
      }
      ctx.globalAlpha = 1
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = Boolean(entry?.isIntersecting)
        if (visible && !running) {
          running = true
          rafId = requestAnimationFrame(tick)
        } else if (!visible && running) {
          running = false
          cancelAnimationFrame(rafId)
        }
      },
      { threshold: 0.05 },
    )

    resize()
    draw()
    observer.observe(canvas)
    window.addEventListener('resize', resize)
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerleave', onPointerLeave)

    return () => {
      running = false
      cancelAnimationFrame(rafId)
      observer.disconnect()
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerleave', onPointerLeave)
    }
  })

  return canvasRef
}
