export default function PortfolioFooter() {
  return (
    <footer className="pf-footer">
      <div className="pf-shell pf-footer-row">
        <p className="pf-footer-copy">
          © {new Date().getFullYear()} Muhammad Nameer Akhter
        </p>
        <a href="mailto:akhtarnameer@gmail.com" className="pf-nav-link">
          akhtarnameer@gmail.com
        </a>
      </div>
    </footer>
  )
}
