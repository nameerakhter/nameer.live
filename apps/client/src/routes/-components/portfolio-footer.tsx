const FOOTER_LINKS = [
  { label: 'Research', href: '#research' },
  { label: 'At Prodios', href: '#company-work' },
  { label: 'Personal', href: '#personal-projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export default function PortfolioFooter() {
  return (
    <footer className="pf-footer">
      <div className="portfolio-content">
        <div className="pf-footer-grid">
          <div className="pf-footer-brand">
            <a href="#" className="pf-footer-logo" aria-label="Home">
              <img
                src="/man-transparent.webp"
                alt=""
                aria-hidden
                width={88}
                height={48}
                loading="lazy"
                decoding="async"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="pf-body text-sm">
              Software engineer building government-scale platforms, payment
              systems, and AI workflows at Prodios Labs.
            </p>
          </div>

          <div>
            <h3 className="pf-foot-heading">Navigate</h3>
            <ul className="pf-footer-list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="pf-foot-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="pf-foot-heading">Connect</h3>
            <ul className="pf-footer-list">
              <li>
                <a
                  href="mailto:akhtarnameer@gmail.com"
                  className="pf-foot-link"
                >
                  akhtarnameer@gmail.com
                </a>
              </li>
              <li>
                <a href="#contact" className="pf-foot-link">
                  Start a project
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pf-foot-base">
          <p>© {new Date().getFullYear()} Nameer · nameer.live</p>
          <p>Building systems that scale.</p>
        </div>
      </div>
    </footer>
  )
}
