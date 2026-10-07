import { CONTACT } from './portfolio-data'

import { useLocalClock } from '@/hooks/use-local-clock'


export default function PortfolioHeader() {
  const clock = useLocalClock()

  return (
    <header className="pf-identity">
      <div className="pf-shell pf-identity-row">
        <div className="pf-identity-left">
          <a href="#" className="pf-identity-name">
            Muhammad Nameer Akhter
          </a>
          <p className="pf-identity-role">Software engineer</p>
        </div>

        <p className="pf-identity-surface">“Portfolio”</p>

        <p className="pf-identity-time" aria-label="Local time">
          {clock} Dehradun
        </p>

        <nav className="pf-identity-links" aria-label="Contact">
          <a href={`mailto:${CONTACT.email}`}>Contact</a>
          <a href="#work">Selected work ↓</a>
          <a href={CONTACT.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
