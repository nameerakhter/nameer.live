import { useState } from 'react'

import MediaSlot from './media-slot'
import {
  CASE_STUDIES,
  CONTACT,
  EXPERIENCE,
  type CaseStudy,
} from './portfolio-data'

export function ContactOpenSection() {
  return (
    <section id="contact" className="pf-contact-open" aria-label="Contact">
      <div className="pf-shell">
        <div className="pf-open-panel">
          <div className="pf-open-top">
            <span className="pf-status-pill">
              <span className="pf-status-dot" aria-hidden />
              {CONTACT.availability}
            </span>
            <p className="pf-open-note">{CONTACT.availabilityNote}</p>
          </div>
          <div className="pf-open-actions">
            <a
              href={`mailto:${CONTACT.email}`}
              className="pf-btn pf-btn-fill"
            >
              Get in touch →
            </a>
            <button
              type="button"
              className="pf-btn pf-btn-ghost"
              onClick={() => {
                void navigator.clipboard?.writeText(CONTACT.email)
              }}
            >
              {CONTACT.email} · Copy
            </button>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="pf-text-link"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroMuralSlotSection() {
  return (
    <section className="pf-hero" aria-label="Signature">
      <div className="pf-shell">
        <MediaSlot
          label="Hero mural — I build things (asset pending)"
          aspect="16/9"
          className="pf-hero-slot"
        />
      </div>
    </section>
  )
}

export function SelectedWorkSection() {
  const [activeId, setActiveId] = useState(CASE_STUDIES[0]?.id ?? '')
  const active =
    CASE_STUDIES.find((study) => study.id === activeId) ?? CASE_STUDIES[0]

  const index = CASE_STUDIES.findIndex((study) => study.id === active?.id)

  function go(delta: number) {
    if (CASE_STUDIES.length === 0) return
    const next =
      (index + delta + CASE_STUDIES.length) % CASE_STUDIES.length
    setActiveId(CASE_STUDIES[next].id)
  }

  return (
    <section id="work" className="pf-work">
      <div className="pf-shell">
        <div className="pf-work-head">
          <h2 className="pf-section-title">Selected work ↓</h2>
          <p className="pf-work-lede">
            I ship production backends, AI workflows, and full-stack platforms —
            civic portals, payment rails, and assistants used at scale.{' '}
            <a href="#about" className="pf-text-link">
              Learn more
            </a>
          </p>
          <div className="pf-work-pad" role="group" aria-label="Browse work">
            <button type="button" className="pf-pad-key" onClick={() => go(-1)}>
              ←
            </button>
            <button type="button" className="pf-pad-key" onClick={() => go(1)}>
              →
            </button>
            <button
              type="button"
              className="pf-pad-key"
              onClick={() => {
                const el = document.getElementById(`case-${active?.id}`)
                el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              ↓
            </button>
          </div>
        </div>

        <ul className="pf-work-list">
          {CASE_STUDIES.map((study) => (
            <li key={study.id}>
              <button
                type="button"
                className={
                  study.id === active?.id
                    ? 'pf-work-row pf-work-row--active'
                    : 'pf-work-row'
                }
                onClick={() => setActiveId(study.id)}
              >
                <span className="pf-work-year">{study.year}</span>
                <span className="pf-work-title">{study.title}</span>
                <span className="pf-work-tags">
                  {study.tags.map((tag) => (
                    <span key={tag} className="pf-tag">
                      ○ {tag}
                    </span>
                  ))}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {active ? <WorkStage study={active} /> : null}
      </div>
    </section>
  )
}

function WorkStage({ study }: { study: CaseStudy }) {
  return (
    <div className="pf-work-stage" aria-live="polite">
      <div className="pf-work-stage-meta">
        <p className="pf-mono-label">{study.assetFolder}/</p>
        <p className="pf-work-stage-scope">{study.scope}</p>
      </div>
      <div className="pf-work-stage-grid">
        {study.images.map((image) => (
          <MediaSlot
            key={image.path}
            label={`${image.label} · ${image.path}`}
            aspect="16/9"
          />
        ))}
      </div>
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="pf-about">
      <div className="pf-shell">
        <p className="pf-about-hi">Hi</p>
        <h2 className="pf-about-name">I&apos;m Nameer</h2>

        <div className="pf-about-grid">
          <div className="pf-about-copy">
            <p>
              I&apos;m a software engineer based in Dehradun. I work at Prodios
              Labs building platforms that real people depend on — civic
              portals, payment infrastructure, and AI assistants that need to
              work under load.
            </p>
            <p>
              My background spans full-stack development, ML research at IIT
              Roorkee, and a B.Tech in Computer Science (AIML) from UPES. I care
              about API design, automated testing, and shipping systems that
              don&apos;t break when the stakes are high.
            </p>
            <p>
              I do my best work on hard technical problems with clear product
              stakes. If that sounds like you, let&apos;s chat.
            </p>
            <div className="pf-open-actions">
              <a
                href={`mailto:${CONTACT.email}`}
                className="pf-btn pf-btn-fill"
              >
                Get in touch →
              </a>
              <a href={`mailto:${CONTACT.email}`} className="pf-text-link">
                {CONTACT.email}
              </a>
            </div>
          </div>

          <MediaSlot
            label="about/studio.jpg — portrait / studio (pending)"
            aspect="3/4"
            className="pf-about-photo"
          />
        </div>
      </div>
    </section>
  )
}

export function ExperienceSection() {
  return (
    <section className="pf-experience" aria-labelledby="experience-title">
      <div className="pf-shell">
        <h2 id="experience-title" className="pf-section-title">
          Work experience
        </h2>
        <div className="pf-experience-grid">
          <ol className="pf-experience-years">
            {EXPERIENCE.map((item) => (
              <li key={item.year + item.title}>{item.year}</li>
            ))}
          </ol>
          <ol className="pf-experience-roles">
            {EXPERIENCE.map((item) => (
              <li key={item.place + item.title}>
                <p className="pf-experience-place">{item.place}</p>
                <p className="pf-experience-role">{item.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export function CaseStudiesSection() {
  return (
    <div className="pf-cases">
      {CASE_STUDIES.map((study) => (
        <section
          key={study.id}
          id={`case-${study.id}`}
          className="pf-case"
          aria-labelledby={`case-title-${study.id}`}
        >
          <div className="pf-shell">
            <h2 id={`case-title-${study.id}`} className="pf-case-title">
              {study.title}
            </h2>

            <div className="pf-case-gallery">
              {study.images.map((image) => (
                <MediaSlot
                  key={image.path}
                  label={`${image.label} · ${image.path}`}
                  aspect="16/9"
                />
              ))}
            </div>

            <div className="pf-case-meta">
              <div>
                <p className="pf-mono-label">Scope</p>
                <p className="pf-case-scope">{study.scope}</p>
              </div>
              <div className="pf-case-facts">
                <div>
                  <p className="pf-mono-label">Position</p>
                  <p>{study.role}</p>
                </div>
                <div>
                  <p className="pf-mono-label">Time</p>
                  <p>{study.period}</p>
                </div>
                <div>
                  <p className="pf-mono-label">With</p>
                  <div className="pf-case-links">
                    {study.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="pf-text-link"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
