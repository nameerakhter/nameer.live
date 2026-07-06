import { MenuIcon, XIcon } from 'lucide-react'
import { useState } from 'react'

import { BaseButton } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Work', href: '#work' },

  { label: 'Expertise', href: '#services' },

  { label: 'About', href: '#about' },

  { label: 'Contact', href: '#contact' },
] as const

export default function PortfolioHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="portfolio-nav fixed inset-x-0 top-0 z-1000 border-b border-transparent">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="flex items-center gap-2.5 text-(--pf-fg) transition-opacity hover:opacity-80"
        >
          <Logo className="size-7 text-(--pf-fg)" />

          <span className="text-sm font-semibold tracking-tight">Nameer</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-(--pf-fg-dim) transition-colors hover:text-(--pf-fg)"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <div className="hidden md:block">
            <BaseButton
              asChild
              className="h-9 rounded-full bg-(--pf-btn-bg) px-5 text-sm font-medium text-(--pf-btn-fg) hover:bg-(--pf-btn-bg)/90"
            >
              <a href="#contact">Get in touch</a>
            </BaseButton>
          </div>

          <button
            type="button"
            className="text-(--pf-fg) md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <XIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'border-t border-(--pf-border) bg-(--pf-bg) md:hidden',

          mobileOpen ? 'block' : 'hidden',
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm text-(--pf-fg-dim) transition-colors hover:bg-(--pf-surface) hover:text-(--pf-fg)"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <BaseButton
            asChild
            className="mt-2 h-10 rounded-full bg-(--pf-btn-bg) text-(--pf-btn-fg) hover:bg-(--pf-btn-bg)/90"
          >
            <a href="#contact" onClick={() => setMobileOpen(false)}>
              Get in touch
            </a>
          </BaseButton>
        </nav>
      </div>
    </nav>
  )
}
