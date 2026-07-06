import { cn } from '@/lib/utils'

type PortfolioBadgeProps = React.ComponentProps<'span'> & {
  variant?: 'default' | 'accent'
}

export default function PortfolioBadge({
  children,
  variant = 'default',
  className,
  ...props
}: PortfolioBadgeProps) {
  return (
    <span
      className={cn(
        'pf-badge',
        variant === 'accent' && 'pf-badge--accent',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export function PortfolioBadgeGroup({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('pf-badge-group', className)} {...props}>
      {children}
    </div>
  )
}
