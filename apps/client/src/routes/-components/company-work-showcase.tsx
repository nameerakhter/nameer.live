import { useState } from 'react'

import PortfolioBadge, { PortfolioBadgeGroup } from './portfolio-badge'
import ProjectLinks from './project-links'

import { cn } from '@/lib/utils'

const COMPANY_PROJECTS = [
  {
    number: '01',
    year: '2024',
    title: 'Apuni Sarkar Platform',
    category: 'e-District · Govt. of Uttarakhand',
    headline: 'Citizen platform serving 1Cr+ users across Uttarakhand.',
    description:
      'Backend services powering citizen-facing applications for 1Cr+ users and 1,000+ public services — designed, tested, and deployed with NestJS and MongoDB at Prodios Labs.',
    hero: ['1Cr+', 'Users on civic platforms'],
    media: 'Citizen services portal',
    items: [
      'NestJS & MongoDB',
      '1,000+ public services',
      'Role-based workflows',
      'Production deployment',
    ],
    links: [
      { label: 'e-Services portal', href: 'https://eservices.uk.gov.in/' },
    ],
  },
  {
    number: '02',
    year: '2024',
    title: 'CBDC Infrastructure',
    category: 'Mission Kiwi · Fintech',
    headline: 'State-wide CBDC payment rails for subsidy disbursement.',
    description:
      'Secure payment APIs and transaction validation for a state-wide CBDC initiative supporting subsidy disbursement operations worth ₹800Cr+.',
    hero: ['₹800Cr+', 'Disbursement flows'],
    media: 'CBDC payment infrastructure',
    items: [
      'Payment APIs',
      'Transaction validation',
      'NestJS services',
      'Fintech compliance',
    ],
    links: [
      { label: 'e-Services · CBDC', href: 'https://eservices.uk.gov.in/' },
    ],
  },
  {
    number: '03',
    year: '2024',
    title: 'AI Assistant',
    category: 'Prodios Labs · Applied AI',
    headline: 'Production RAG assistant with measurable resolution gains.',
    description:
      'Production RAG-based assistant with vector embeddings, semantic search, and tool-calling — cutting query resolution time by 30–40%.',
    hero: ['30-40%', 'Faster query resolution'],
    media: 'RAG & tool-calling assistant',
    items: [
      'Vector embeddings',
      'Semantic search',
      'LLM tool-calling',
      'Production RAG pipeline',
    ],
    links: [
      { label: 'NATA', href: 'https://nata.in/' },
      { label: 'PGETA', href: 'https://www.pgeta.in/' },
    ],
  },
  {
    number: '04',
    year: '2023',
    title: 'E-Office Dashboard',
    category: 'Government · Analytics',
    headline: 'Operational dashboards adopted across departments.',
    description:
      'Analytics dashboards and backend APIs adopted across 4+ government departments, improving operational reporting efficiency by 20–30%.',
    hero: ['4+', 'Government departments'],
    media: 'Analytics & reporting',
    items: [
      'React dashboards',
      'REST APIs',
      'Cross-department rollout',
      'Reporting automation',
    ],
    links: [{ label: 'Dashboard', href: 'https://dashboard.uk.gov.in/' }],
  },
  {
    number: '05',
    year: '2023',
    title: 'NHM Training Management',
    category: 'National Health Mission · Enterprise',
    headline: 'Training platform tracking 50K+ hours at scale.',
    description:
      'Training management software tracking 50K+ hours with automated validation pipelines and secure role-based workflows.',
    hero: ['50K+', 'Training hours tracked'],
    media: 'Training management platform',
    items: [
      'RBAC workflows',
      'Validation pipelines',
      'NestJS backend',
      'Enterprise reporting',
    ],
    links: [
      { label: 'Training portal', href: 'https://tms.prodioslabs.com/login' },
    ],
  },
  {
    number: '06',
    year: '2023',
    title: 'Stray Reporter',
    category: 'Civic Tech · Full-Stack',
    headline: 'Complaint management at 84K+ record scale.',
    description:
      'Platform managing 84K+ complaints and 20K+ records — API performance optimizations cut average response times by 60%.',
    hero: ['84K+', 'Complaints managed'],
    media: 'Civic complaint platform',
    items: [
      'Full-stack delivery',
      'API optimization',
      '60% faster responses',
      'MongoDB at scale',
    ],
    links: [],
  },
] as const

type CompanyProject = (typeof COMPANY_PROJECTS)[number]

function formatHeroNumber(value: string) {
  const match = value.match(/^(.*?)(\+|%| yrs?|st|nd|rd|th)$/)

  if (!match) {
    return { main: value, suffix: null as string | null }
  }

  return { main: match[1], suffix: match[2] }
}

function CompanyProjectDetail({ project }: { project: CompanyProject }) {
  const hero = formatHeroNumber(project.hero[0])

  return (
    <div className="pf-wd-fade">
      <div className="pf-wd-media">
        <span className="pf-wd-yr">{project.year}</span>
        <div className="pf-wd-hero">
          <div className="pf-wd-hero-num">
            {hero.main}
            {hero.suffix ? (
              <span className="text-(--pf-accent)">{hero.suffix}</span>
            ) : null}
          </div>
          <div className="pf-wd-hero-rule" aria-hidden />
          <div className="pf-wd-hero-lbl">{project.hero[1]}</div>
        </div>
        <span className="pf-wd-mlabel">{project.media}</span>
      </div>

      <div className="pf-wd-body">
        <h4>{project.headline}</h4>
        <div className="pf-wd-client">
          <PortfolioBadge variant="accent">{project.category}</PortfolioBadge>
        </div>
        <p className="pf-wd-desc">{project.description}</p>
        <PortfolioBadgeGroup className="pf-wd-tags">
          {project.items.map((tag) => (
            <PortfolioBadge key={tag}>{tag}</PortfolioBadge>
          ))}
        </PortfolioBadgeGroup>
        {project.links.length > 0 ? (
          <ProjectLinks links={project.links} variant="proof" />
        ) : null}
      </div>
    </div>
  )
}

export default function CompanyWorkShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = COMPANY_PROJECTS[activeIndex]

  return (
    <div className="pf-work-layout">
      <div className="pf-work-list" role="list">
        {COMPANY_PROJECTS.map((project, index) => (
          <div
            key={project.number}
            className={cn(
              'pf-wrow-group',
              project.links.length > 0 && 'pf-wrow-group--has-proof',
            )}
          >
            <button
              type="button"
              role="listitem"
              className={cn(
                'pf-wrow',
                index === activeIndex && 'active',
                project.links.length > 0 && 'pf-wrow--has-proof',
              )}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <span className="pf-wnum">{project.number}</span>
              <div>
                <div className="pf-wname">{project.title}</div>
                <div className="pf-wclient">{project.category}</div>
                <p className="pf-wdesc">{project.description}</p>
              </div>
              <span className="pf-warr" aria-hidden>
                →
              </span>
            </button>
            {project.links.length > 0 ? (
              <ProjectLinks
                links={project.links}
                variant="proof"
                className="pf-wrow-proof"
              />
            ) : null}
          </div>
        ))}
      </div>

      <aside className="pf-work-detail" aria-live="polite">
        <CompanyProjectDetail key={active.number} project={active} />
      </aside>
    </div>
  )
}
