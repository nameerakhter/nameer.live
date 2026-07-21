import { useState } from 'react'

import { ThemeToggle } from '@/components/ui/theme-toggle'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Research', href: '#research' },
  { label: 'At Prodios', href: '#company-work' },
  { label: 'Personal', href: '#personal-projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export default function PortfolioHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className={cn(
        'portfolio-nav fixed inset-x-0 top-0 z-1000',
        mobileOpen && 'open',
      )}
    >
      <div className="portfolio-nav-shell">
        <div className="portfolio-nav-row portfolio-content flex items-center justify-between">
          <a
            href="#"
            aria-label="Home"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src="/man-transparent.webp"
              alt=""
              aria-hidden
              width={103}
              height={56}
              decoding="async"
              fetchPriority="high"
              className="h-14 w-auto object-contain"
            />
          </a>

          <div className="hidden items-center gap-[38px] md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="pf-nav-link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            <a href="#contact" className="pf-nav-cta hidden md:inline-flex">
              Say hey
            </a>

            <button
              type="button"
              className="inline-flex size-[42px] items-center justify-center rounded-[2px] border border-(--line-2) text-(--pf-fg) md:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            'border-t border-dashed border-(--line) bg-(--pf-bg) md:hidden',
            mobileOpen ? 'block' : 'hidden',
          )}
        >
          <nav className="portfolio-content flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="pf-nav-link border-t border-dashed border-(--line) py-3.5 first:border-t-0"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="pf-nav-cta mt-3 inline-flex w-fit"
              onClick={() => setMobileOpen(false)}
            >
              Say hey
            </a>
          </nav>
        </div>
      </div>
    </nav>
  )
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}
