import { cn } from '@/lib/utils'

type MediaSlotProps = {
  label: string
  aspect?: '16/9' | '4/3' | '1/1' | '3/4'
  className?: string
}

/** Blank media well — drop real files into public/ later */
export default function MediaSlot({
  label,
  aspect = '16/9',
  className,
}: MediaSlotProps) {
  return (
    <div
      className={cn('pf-media-slot', className)}
      style={{ aspectRatio: aspect.replace('/', ' / ') }}
      data-slot={label}
    >
      <span className="pf-media-slot-label">{label}</span>
    </div>
  )
}
