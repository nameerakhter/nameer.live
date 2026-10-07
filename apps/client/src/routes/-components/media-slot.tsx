import { useState } from 'react'

import { cn } from '@/lib/utils'

type MediaSlotProps = {
  label: string
  src?: string
  aspect?: '16/9' | '4/3' | '1/1' | '3/4'
  className?: string
}

/** Media well — screenshot sits to natural width at strip height; else labeled placeholder */
export default function MediaSlot({
  label,
  src,
  aspect = '16/9',
  className,
}: MediaSlotProps) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(src) && !failed

  if (showImage) {
    return (
      <figure className={cn('pf-media-slot is-filled', className)}>
        <img
          src={src}
          alt={label}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      </figure>
    )
  }

  return (
    <div
      className={cn('pf-media-slot', className)}
      style={{ aspectRatio: aspect.replace('/', ' / ') }}
      data-slot={label}
    >
      <span className="pf-media-slot-label">
        {src ? `${label} · ${src}` : label}
      </span>
    </div>
  )
}
