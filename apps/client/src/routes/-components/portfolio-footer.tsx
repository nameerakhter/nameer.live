import { Logo } from '@/components/ui/logo'

const FOOTER_LINKS = [
  { label: 'Work', href: '#work' },

  { label: 'Expertise', href: '#services' },

  { label: 'About', href: '#about' },

  { label: 'Contact', href: '#contact' },
] as const

export default function PortfolioFooter() {
  return (
    <footer className="border-t border-(--pf-border) bg-(--pf-bg)">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2.5 text-(--pf-fg)">
              <Logo className="size-7 text-(--pf-fg)" />

              <span className="text-sm font-semibold tracking-tight">
                Nameer
              </span>
            </a>

            <p className="max-w-xs text-sm/relaxed text-(--pf-fg-muted)">
              Software engineer building government-scale platforms, payment
              systems, and AI workflows at Prodios Labs.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium tracking-widest text-(--pf-fg-faint) uppercase">
              Navigate
            </h3>

            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-(--pf-fg-dim) transition-colors hover:text-(--pf-fg)"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium tracking-widest text-(--pf-fg-faint) uppercase">
              Connect
            </h3>

            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:akhtarnameer@gmail.com"
                  className="text-sm text-(--pf-fg-dim) transition-colors hover:text-(--pf-fg)"
                >
                  akhtarnameer@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-(--pf-fg-dim) transition-colors hover:text-(--pf-fg)"
                >
                  Start a project
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-(--pf-border) pt-8 text-xs text-(--pf-fg-faint) sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nameer · nameer.live</p>

          <p>Building systems that scale.</p>
        </div>
      </div>
    </footer>
  )
}
