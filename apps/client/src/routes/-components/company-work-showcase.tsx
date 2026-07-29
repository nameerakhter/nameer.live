import { useState } from 'react'

import { cn } from '@/lib/utils'

type HeroStat = {
  value: string
  label: string
}

type ProjectLink = {
  label: string
  href: string
}

type CompanyProject = {
  name: string
  client: string
  year: string
  discipline: string
  desc: string
  hero: readonly [HeroStat, HeroStat, HeroStat, HeroStat]
  links: readonly ProjectLink[]
}

const ISO_BG_COLORS = [
  'indigo',
  'sky',
  'emerald',
  'amber',
  'rose',
  'violet',
  'teal',
  'fuchsia',
] as const

const COMPANY_PROJECTS = [
  {
    name: 'Apuni Sarkar',
    client: 'e-District · Govt. of Uttarakhand',
    year: '2024',
    discipline: 'Citizen services portal',
    desc: 'Backend services powering citizen-facing applications for 1Cr+ users and 1,000+ public services — designed, tested, and deployed with NestJS and MongoDB at Prodios Labs.',
    hero: [
      { value: '1Cr+', label: 'Users on civic platforms' },
      { value: '1,000+', label: 'Public services' },
      { value: 'NestJS', label: 'Backend services' },
      { value: 'RBAC', label: 'Role-based workflows' },
    ],
    links: [
      { label: 'e-Services portal', href: 'https://eservices.uk.gov.in/' },
    ],
  },
  {
    name: 'CBDC Infrastructure',
    client: 'Mission Kiwi · Fintech',
    year: '2024',
    discipline: 'Payment infrastructure',
    desc: 'Secure payment APIs and transaction validation for a state-wide CBDC initiative supporting subsidy disbursement operations worth ₹800Cr+.',
    hero: [
      { value: '₹800Cr+', label: 'Disbursement flows' },
      { value: 'APIs', label: 'Payment validation' },
      { value: 'NestJS', label: 'Service layer' },
      { value: 'Fintech', label: 'Compliance-ready' },
    ],
    links: [
      { label: 'e-Services · CBDC', href: 'https://eservices.uk.gov.in/' },
    ],
  },
  {
    name: 'AI Assistant',
    client: 'Prodios Labs · Applied AI',
    year: '2024',
    discipline: 'RAG & tool-calling assistant',
    desc: 'Production RAG-based assistant with vector embeddings, semantic search, and tool-calling — cutting query resolution time by 30–40%.',
    hero: [
      { value: '30-40%', label: 'Faster query resolution' },
      { value: 'RAG', label: 'Production pipeline' },
      { value: 'Vector', label: 'Semantic search' },
      { value: 'Tools', label: 'LLM tool-calling' },
    ],
    links: [
      { label: 'NATA', href: 'https://nata.in/' },
      { label: 'PGETA', href: 'https://www.pgeta.in/' },
    ],
  },
  {
    name: 'E-Office Dashboard',
    client: 'Government · Analytics',
    year: '2023',
    discipline: 'Analytics & reporting',
    desc: 'Analytics dashboards and backend APIs adopted across 4+ government departments, improving operational reporting efficiency by 20–30%.',
    hero: [
      { value: '4+', label: 'Government departments' },
      { value: '20-30%', label: 'Reporting efficiency' },
      { value: 'React', label: 'Dashboards' },
      { value: 'REST', label: 'Backend APIs' },
    ],
    links: [{ label: 'Dashboard', href: 'https://dashboard.uk.gov.in/' }],
  },
  {
    name: 'NHM Training Management',
    client: 'National Health Mission · Enterprise',
    year: '2023',
    discipline: 'Training management platform',
    desc: 'Training management software tracking 50K+ hours with automated validation pipelines and secure role-based workflows.',
    hero: [
      { value: '50K+', label: 'Training hours tracked' },
      { value: 'RBAC', label: 'Secure workflows' },
      { value: 'NestJS', label: 'Backend' },
      { value: 'Auto', label: 'Validation pipelines' },
    ],
    links: [
      { label: 'Training portal', href: 'https://tms.prodioslabs.com/login' },
    ],
  },
  {
    name: 'Stray Reporter',
    client: 'Civic Tech · Full-Stack',
    year: '2023',
    discipline: 'Civic complaint platform',
    desc: 'Platform managing 84K+ complaints and 20K+ records — API performance optimizations cut average response times by 60%.',
    hero: [
      { value: '84K+', label: 'Complaints managed' },
      { value: '20K+', label: 'Records at scale' },
      { value: '60%', label: 'Faster API responses' },
      { value: 'MongoDB', label: 'Production data layer' },
    ],
    links: [],
  },
] as const satisfies readonly CompanyProject[]

function HeroNumber({ value }: { value: string }) {
  const match = value.match(/^(.*?)(\+|%| yrs?|st|nd|rd|th)$/)

  if (!match) {
    return value
  }

  return (
    <>
      {match[1]}
      <span className="text-(--pf-accent)">{match[2]}</span>
    </>
  )
}

function ProjectHeroStats({
  project,
  colorOffset = 0,
  className,
}: {
  project: CompanyProject
  colorOffset?: number
  className?: string
}) {
  return (
    <div className={cn('pf-wd-stats', className)}>
      {project.hero.map((item, index) => {
        const tone = ISO_BG_COLORS[(index + colorOffset) % ISO_BG_COLORS.length]

        return (
          <div
            key={`${item.value}-${item.label}`}
            className={cn(
              'pf-wd-stat',
              `pf-wd-stat--${tone}`,
              index >= 2 && 'pf-wd-stat--border-t',
              index % 2 === 0 && 'pf-wd-stat--border-r',
            )}
          >
            <div className="pf-wd-stat-num">
              <HeroNumber value={item.value} />
            </div>
            <div className="pf-wd-stat-rule" aria-hidden />
            <div className="pf-wd-stat-lbl">{item.label}</div>
          </div>
        )
      })}
    </div>
  )
}

function ProjectActions({
  links,
  className,
}: {
  links: readonly ProjectLink[]
  className?: string
}) {
  if (links.length === 0) {
    return null
  }

  return (
    <div className={cn('pf-wd-actions', className)}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="pf-wd-cta"
          onClick={(event) => event.stopPropagation()}
        >
          {link.label}
          <span aria-hidden>↗</span>
        </a>
      ))}
    </div>
  )
}

function CompanyProjectDetail({
  project,
  colorOffset,
}: {
  project: CompanyProject
  colorOffset: number
}) {
  return (
    <div className="pf-wd-fade">
      <div className="pf-wd-head">
        <div className="pf-wd-title-row">
          <h4>{project.name}</h4>
          <span className="pf-wd-yr">{project.year}</span>
        </div>
        <div className="pf-wd-category">{project.discipline}</div>
        <div className="pf-wd-client">{project.client}</div>
        <p className="pf-wd-desc">{project.desc}</p>
      </div>

      <ProjectHeroStats project={project} colorOffset={colorOffset} />

      <ProjectActions links={project.links} />
    </div>
  )
}

export default function CompanyWorkShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = COMPANY_PROJECTS[activeIndex] ?? COMPANY_PROJECTS[0]

  return (
    <div className="pf-work-layout">
      <div className="pf-work-list" id="workList" role="list">
        {COMPANY_PROJECTS.map((project, index) => {
          const isActive = index === activeIndex

          return (
            <div key={project.name} className="pf-wrow-group">
              <button
                type="button"
                role="listitem"
                className={cn('pf-wrow', isActive && 'active')}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className={cn('pf-wrow-inner', isActive && 'active')}>
                  <span className="pf-wnum">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="pf-wname-row">
                    <div className="pf-wname">{project.name}</div>
                    <span className="pf-warr" aria-hidden>
                      →
                    </span>
                  </div>
                  <div className="pf-wcategory">{project.discipline}</div>
                  <div className="pf-wclient">
                    {project.client}
                    <span className="pf-wsep" aria-hidden>
                      ·
                    </span>
                    {project.year}
                  </div>
                  <p className="pf-wdesc">{project.desc}</p>
                  <ProjectHeroStats
                    project={project}
                    colorOffset={index * 4}
                    className="pf-wstats"
                  />
                </div>
              </button>
              <ProjectActions
                links={project.links}
                className="pf-wrow-actions"
              />
            </div>
          )
        })}
      </div>

      <aside className="pf-work-detail" id="workDetail" aria-live="polite">
        <CompanyProjectDetail
          key={active.name}
          project={active}
          colorOffset={activeIndex * 4}
        />
      </aside>
    </div>
  )
}
