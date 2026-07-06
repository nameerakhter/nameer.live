import { MenuIcon, XIcon } from 'lucide-react'
import { useState } from 'react'

import { BaseButton } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
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
          className="flex items-center gap-2.5 text-white transition-opacity hover:opacity-80"
        >
          <Logo className="size-7 text-white" />
          <span className="text-sm font-semibold tracking-tight">Nameer</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/65 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <BaseButton
            asChild
            className="h-9 rounded-full bg-white px-5 text-sm font-medium text-[#08080a] hover:bg-white/90"
          >
            <a href="#contact">Get in touch</a>
          </BaseButton>
        </div>

        <button
          type="button"
          className="text-white md:hidden"
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

      <div
        className={cn(
          'border-t border-white/8 bg-[#0E0D13] md:hidden',
          mobileOpen ? 'block' : 'hidden',
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <BaseButton
            asChild
            className="mt-2 h-10 rounded-full bg-white text-[#08080a] hover:bg-white/90"
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
