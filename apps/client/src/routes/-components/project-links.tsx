import { cn } from '@/lib/utils'

export type ProjectLink = {
  label: string
  href: string
}

type ProjectLinksProps = {
  links: readonly ProjectLink[]
  variant?: 'default' | 'proof'
  className?: string
}

export default function ProjectLinks({
  links,
  variant = 'default',
  className,
}: ProjectLinksProps) {
  if (links.length === 0) {
    return null
  }

  if (variant === 'proof') {
    return (
      <div className={cn('pf-proof-links-row', className)}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="pf-link-proof"
          >
            {link.label}
            <span aria-hidden>↗</span>
          </a>
        ))}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'pf-project-links mt-5 flex flex-wrap gap-x-5 gap-y-2',
        className,
      )}
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="pf-link-arrow inline-flex items-center gap-1.5"
        >
          {link.label}
          <span aria-hidden>↗</span>
        </a>
      ))}
    </div>
  )
}
