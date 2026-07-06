import PortfolioBadge, { PortfolioBadgeGroup } from './portfolio-badge'
import ProjectLinks from './project-links'

const RESEARCH_HIGHLIGHTS = [
  { value: '+25%', label: 'Performance gain via feature engineering' },
  { value: '10+', label: 'ML/DL architectures evaluated' },
  { value: 'IEEE', label: 'Peer-reviewed publication' },
] as const

const RESEARCH_MODELS = [
  '1D CNN',
  'LSTM',
  'GRU',
  'SVM',
  'PCA',
  'CWRU dataset',
] as const

const PUBLICATION = {
  title:
    'An Improved Bearing Fault Investigation Scheme Using 1D CNN with PCA and SVM',
  venue: 'IEEE Publication',
  institution: 'IIT Roorkee',
  year: '2025',
  description:
    'Evaluated 10+ ML and deep learning architectures for vibration-based bearing fault detection on the CWRU dataset — with 25% performance gains through feature engineering and hyperparameter tuning.',
  links: [
    {
      label: 'Read published paper',
      href: 'https://doi.org/10.1109/iatmsi64286.2025.10985009',
    },
    {
      label: 'Models & notebooks',
      href: 'https://github.com/nameerakhter/Ann_cwru',
    },
    {
      label: 'Signal explorer app',
      href: 'https://github.com/nameerakhter/Vibration_signal_analysis',
    },
  ],
} as const

export default function ResearchShowcase() {
  return (
    <article className="pf-research-feature">
      <div className="pf-research-feature-accent" aria-hidden />

      <div className="pf-research-feature-grid">
        <aside className="pf-research-aside">
          <p className="pf-label">Featured publication</p>

          <div className="pf-research-meta mt-6">
            <span className="pf-research-meta-item">{PUBLICATION.venue}</span>
            <span className="pf-research-meta-sep" aria-hidden>
              ·
            </span>
            <span className="pf-research-meta-item">
              {PUBLICATION.institution}
            </span>
            <span className="pf-research-meta-sep" aria-hidden>
              ·
            </span>
            <span className="pf-research-meta-item">{PUBLICATION.year}</span>
          </div>

          <div className="pf-research-stats mt-10">
            {RESEARCH_HIGHLIGHTS.map((item) => (
              <div key={item.label} className="pf-research-stat">
                <div className="pf-research-stat-value">{item.value}</div>
                <p className="pf-research-stat-label">{item.label}</p>
              </div>
            ))}
          </div>
        </aside>

        <div className="pf-research-main">
          <PortfolioBadge variant="accent">
            AI / Machine Learning · Fault Detection
          </PortfolioBadge>

          <h3 className="pf-research-title mt-5">{PUBLICATION.title}</h3>

          <p className="pf-body mt-5 max-w-3xl text-[clamp(0.98rem,1.25vw,1.08rem)]">
            {PUBLICATION.description}
          </p>

          <PortfolioBadgeGroup className="mt-6">
            {RESEARCH_MODELS.map((model) => (
              <PortfolioBadge key={model}>{model}</PortfolioBadge>
            ))}
          </PortfolioBadgeGroup>

          <div className="pf-research-actions mt-8">
            <a
              href={PUBLICATION.links[0].href}
              target="_blank"
              rel="noreferrer"
              className="pf-btn pf-btn-primary"
            >
              {PUBLICATION.links[0].label}
              <span aria-hidden>↗</span>
            </a>

            <ProjectLinks links={PUBLICATION.links.slice(1)} />
          </div>
        </div>
      </div>
    </article>
  )
}
