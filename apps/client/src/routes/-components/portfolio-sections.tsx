import { motion, useReducedMotion } from 'motion/react'
import { lazy, Suspense, type ReactNode } from 'react'

import {
  FEATURED_PROJECTS,
  SELECTED_PROJECTS,
  type SelectedProject,
} from './portfolio-data'

const HeroAtmosphere = lazy(() => import('./hero-atmosphere'))

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export function HeroMuralSection() {
  const reduce = useReducedMotion()

  return (
    <section className="pf-hero" aria-label="Introduction">
      <div className="pf-shell pf-hero-inner">
        <Suspense fallback={null}>
          <HeroAtmosphere />
        </Suspense>

        <motion.div
          className="pf-mural"
          initial={reduce ? false : { opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/i-build-things-mural.jpg"
            alt="I build things"
            width={1600}
            height={900}
            decoding="async"
            fetchPriority="high"
            className="pf-mural-img"
          />
          <h1 className="sr-only">I build things</h1>
        </motion.div>
      </div>
    </section>
  )
}

export function BioSection() {
  return (
    <section className="pf-bio-section" aria-labelledby="bio-heading">
      <div className="pf-shell">
        <Reveal>
          <div className="pf-bio-card">
            <p className="pf-bio-hello" id="bio-heading">
              Hello
            </p>
            <p className="pf-bio-body">
              I&apos;m Muhammad Nameer Akhter — a software engineer at Prodios
              Labs shipping civic platforms, CBDC payment rails, and RAG
              assistants for real users at scale. IEEE-published research from
              IIT Roorkee; full-stack systems that hold up when the stakes are
              high.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ActionRowSection() {
  return (
    <section className="pf-actions-section" id="contact">
      <div className="pf-shell">
        <Reveal>
          <div className="pf-actions">
            <span className="pf-status-pill">
              <span className="pf-status-dot" aria-hidden />
              Open
            </span>
            <a
              href="mailto:akhtarnameer@gmail.com"
              className="pf-btn pf-btn-fill"
            >
              Get in touch →
            </a>
            <a href="#work" className="pf-btn pf-btn-ghost">
              View work →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: SelectedProject
  index: number
}) {
  return (
    <Reveal delay={Math.min(index * 0.04, 0.24)}>
      <article className="pf-project-card">
        <p className="pf-project-year">{project.year}</p>
        <div className="pf-project-main">
          <h3 className="pf-project-title">{project.title}</h3>
          <p className="pf-project-desc">{project.description}</p>
        </div>
        <ul className="pf-project-tags">
          {project.tags.map((tag) => (
            <li key={tag} className="pf-tag">
              ○ {tag}
            </li>
          ))}
        </ul>
        {project.links && project.links.length > 0 ? (
          <div className="pf-project-links">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="pf-nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </article>
    </Reveal>
  )
}

export function SelectedWorkSection() {
  return (
    <section id="work" className="pf-work-section">
      <div className="pf-shell">
        <Reveal>
          <h2 className="pf-section-title">Selected work</h2>
        </Reveal>

        <div className="pf-project-list">
          {SELECTED_PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function ShowcaseSection() {
  return (
    <section className="pf-showcase-section" aria-label="Featured projects">
      <div className="pf-shell pf-showcase-list">
        {FEATURED_PROJECTS.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05}>
            <a
              href={project.embedHref!}
              target="_blank"
              rel="noreferrer"
              className="pf-showcase"
            >
              <div className="pf-showcase-meta">
                <span className="pf-showcase-label">
                  {project.embedLabel ?? project.title}
                </span>
                <ul className="pf-showcase-tags">
                  {project.tags.slice(0, 3).map((tag) => (
                    <li key={tag} className="pf-tag pf-tag--border">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pf-showcase-panel">
                <p className="pf-showcase-title">{project.title}</p>
                <p className="pf-showcase-desc">{project.description}</p>
                <span className="pf-showcase-cta">Open →</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="pf-about-section">
      <div className="pf-shell pf-about-grid">
        <Reveal>
          <div className="pf-about-name">
            <h2 className="pf-about-heading">Nameer</h2>
            <p className="pf-about-phonetic">Software engineer · Prodios Labs</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="pf-about-copy">
            <p>
              I build platforms that real people depend on — civic portals,
              payment infrastructure, and AI assistants that need to work under
              load. My background spans full-stack development, ML research at
              IIT Roorkee, and a B.Tech in Computer Science (AIML) from UPES.
            </p>
            <p>
              I care about API design, automated testing, and shipping systems
              that don&apos;t break when the stakes are high. Currently based in
              Dehradun, open to engineering roles and hard technical problems.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
