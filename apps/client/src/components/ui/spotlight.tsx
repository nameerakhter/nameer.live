import { useState, type PointerEvent, type PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

type GridBackgroundProps = {
  className?: string
}

export function GridBackground({ className }: GridBackgroundProps) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden
    >
      <div className="hero-grid-lines absolute inset-0" />
      <div className="hero-grid-mask absolute inset-0" />
    </div>
  )
}

type SpotlightProps = PropsWithChildren<{
  className?: string
}>

export function Spotlight({ className, children }: SpotlightProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
    setActive(true)
  }

  const handlePointerLeave = () => {
    setActive(false)
  }

  return (
    <div
      className={cn('relative', className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        className={cn(
          'hero-spotlight pointer-events-none absolute inset-0 z-0 transition-opacity duration-500',
          active ? 'opacity-100' : 'opacity-0',
        )}
        style={{
          background: `radial-gradient(640px circle at ${position.x}px ${position.y}px, var(--hero-spotlight), transparent 42%)`,
        }}
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
