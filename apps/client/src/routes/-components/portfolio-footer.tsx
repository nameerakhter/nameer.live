import { CONTACT } from './portfolio-data'

export default function PortfolioFooter() {
  return (
    <footer className="pf-footer">
      <div className="pf-shell pf-footer-row">
        <p className="pf-footer-copy">
          © {new Date().getFullYear()} Muhammad Nameer Akhter
        </p>
        <a href={`mailto:${CONTACT.email}`} className="pf-text-link">
          {CONTACT.email}
        </a>
      </div>
    </footer>
  )
}
