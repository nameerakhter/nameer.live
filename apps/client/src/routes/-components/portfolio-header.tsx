import { CONTACT } from './portfolio-data'

import { useLocalClock } from '@/hooks/use-local-clock'

export default function PortfolioHeader() {
  const clock = useLocalClock()

  return (
    <header className="pf-identity">
      <nav className="pf-identity-row" aria-label="Site">
        <a href="/" className="pf-identity-name">
          Muhammad Nameer Akhter
        </a>
        <p>Software engineer</p>
        <p>“Portfolio”</p>
        <p aria-label="Local time">
          {clock} Dehradun
        </p>
      </nav>

      <a
        href={`mailto:${CONTACT.email}`}
        className="pf-contact-pill"
      >
        Contact
        <svg viewBox="0 0 20 20" aria-hidden>
          <path d="M10 3.5a1 1 0 0 1 1 1V9h5.5a1 1 0 1 1 0 2H11v5.5a1 1 0 1 1-2 0V11H3.5a1 1 0 1 1 0-2H9V4.5a1 1 0 0 1 1-1z" />
        </svg>
      </a>
    </header>
  )
}
