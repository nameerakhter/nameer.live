import { Logo } from '@/components/ui/logo'

const FOOTER_LINKS = [
  { label: 'Research', href: '#research' },
  { label: 'At Prodios', href: '#company-work' },
  { label: 'Personal', href: '#personal-projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export default function PortfolioFooter() {
  return (
    <footer className="border-t border-(--pf-border) bg-(--pf-bg)">
      <div className="portfolio-content py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3">
              <Logo className="size-7 text-(--pf-fg)" />

            </a>

            <p className="pf-body max-w-xs text-sm">
              Software engineer building government-scale platforms, payment
              systems, and AI workflows at Prodios Labs.
            </p>
          </div>

          <div>
            <h3 className="pf-foot-heading mb-[18px]">Navigate</h3>

            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="pf-foot-link text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="pf-foot-heading mb-[18px]">Connect</h3>

            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:akhtarnameer@gmail.com"
                  className="pf-foot-link text-sm"
                >
                  akhtarnameer@gmail.com
                </a>
              </li>

              <li>
                <a href="#contact" className="pf-foot-link text-sm">
                  Start a project
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pf-foot-base mt-14 flex flex-col gap-3 border-t border-(--pf-border) pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nameer · nameer.live</p>

          <p>Building systems that scale.</p>
        </div>
      </div>
    </footer>
  )
}
