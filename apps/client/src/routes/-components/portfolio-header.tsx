import { useState } from 'react'

import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

const SOCIAL_LINKS = [
  { label: 'Email', href: 'mailto:akhtarnameer@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/nameerakhter' },
] as const

export default function PortfolioHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className={cn('pf-nav', mobileOpen && 'pf-nav--open')}>
      <div className="pf-shell pf-nav-row">
        <a href="#" className="pf-nav-brand">
          Nameer
        </a>

        <p className="pf-nav-role">Software engineer</p>

        <nav className="pf-nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="pf-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="pf-nav-social">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="pf-nav-link"
              {...(link.href.startsWith('http')
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="pf-nav-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <div className="pf-nav-drawer">
        <div className="pf-shell pf-nav-drawer-inner">
          {[...NAV_LINKS, ...SOCIAL_LINKS].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="pf-nav-drawer-link"
              onClick={() => setMobileOpen(false)}
              {...(link.href.startsWith('http')
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
