import { cn } from '@/lib/utils'

type SignalItem = {
  label: string
  kicker?: string
}

type PortfolioMarqueeProps = {
  items: readonly SignalItem[]
  className?: string
  duration?: string
  gap?: string
  repeat?: number
  pauseOnHover?: boolean
}

export default function PortfolioMarquee({
  items,
  className,
  duration = '45s',
  gap = '2.5rem',
  repeat = 4,
  pauseOnHover = true,
}: PortfolioMarqueeProps) {
  return (
    <div
      className={cn(
        'pf-marquee',
        pauseOnHover && 'pf-marquee--pause-hover',
        className,
      )}
      style={
        {
          '--pf-marquee-duration': duration,
          '--pf-marquee-gap': gap,
        } as React.CSSProperties
      }
    >
      {Array.from({ length: repeat }, (_, trackIndex) => (
        <div
          key={trackIndex}
          className="pf-marquee-track"
          aria-hidden={trackIndex > 0}
        >
          {items.map((item) => (
            <span key={`${trackIndex}-${item.label}`} className="pf-marquee-item">
              <span className="pf-marquee-dot" aria-hidden />
              {item.kicker ? (
                <span className="pf-marquee-kicker">{item.kicker}</span>
              ) : null}
              <span className="pf-marquee-label">{item.label}</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}
