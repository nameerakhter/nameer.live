import { Logo } from '@/components/ui/logo'

const FOOTER_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export default function PortfolioFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#0E0D13]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2.5 text-white">
              <Logo className="size-7 text-white" />
              <span className="text-sm font-semibold tracking-tight">
                Nameer
              </span>
            </a>
            <p className="max-w-xs text-sm/relaxed text-white/50">
              Software engineer building government-scale platforms, payment
              systems, and AI workflows at Prodios Labs.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium tracking-widest text-white/40 uppercase">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium tracking-widest text-white/40 uppercase">
              Connect
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:akhtarnameer@gmail.com"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  akhtarnameer@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  Start a project
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/8 pt-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nameer · nameer.live</p>
          <p>Building systems that scale.</p>
        </div>
      </div>
    </footer>
  )
}
