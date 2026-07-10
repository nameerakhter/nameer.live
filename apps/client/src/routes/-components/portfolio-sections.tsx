import CompanyWorkShowcase from './company-work-showcase'
import HeroVisual from './hero-visual'
import PortfolioBadge, { PortfolioBadgeGroup } from './portfolio-badge'
import ProjectLinks from './project-links'
import ResearchShowcase from './research-showcase'

const STATS = [
  { value: '1Cr+', label: 'Users on civic platforms' },
  { value: '1,000+', label: 'Public services supported' },
  { value: '₹800Cr+', label: 'CBDC disbursement flows' },
  { value: '84K+', label: 'Complaints managed at scale' },
] as const

const PERSONAL_PROJECTS = [
  {
    title: 'ML Explainer',
    category: 'Machine Learning · Interactive',
    description:
      'Interactive visual guides for machine learning concepts — built with React, TanStack Router, and Tailwind.',
    links: [
      { label: 'Live demo', href: 'https://ml-explainer-gray.vercel.app/' },
      {
        label: 'GitHub',
        href: 'https://github.com/nameerakhter/ml-explainer',
      },
    ],
  },
  {
    title: 'Code Editor React',
    category: 'React · PrismJS',
    description:
      'Multi-language code editor with real-time PrismJS syntax highlighting, scroll sync, and a transparent textarea overlay.',
    links: [
      { label: 'Live demo', href: 'https://code-editor-react.nameer.live/' },
      {
        label: 'GitHub',
        href: 'https://github.com/nameerakhter/code-editor-react',
      },
    ],
  },
  {
    title: 'Magma Clone',
    category: 'Frontend · Clone',
    description:
      'Front-end clone of thisismagma.com — replicating layout, interactions, sliders, and animations with vanilla HTML, CSS, and JavaScript.',
    links: [
      { label: 'Live demo', href: 'https://magma-clone.nameer.live/' },
      { label: 'GitHub', href: 'https://github.com/nameerakhter/magma_clone' },
    ],
  },
  {
    title: 'AI Startup UI',
    category: 'Next.js · Framer Motion',
    description:
      'Hero-section starter kit for AI startups — Figma-to-code with Next.js, shadcn/ui, Tailwind, and Framer Motion animations.',
    links: [
      { label: 'Live demo', href: 'https://ai-startup-ui.vercel.app/' },
      {
        label: 'GitHub',
        href: 'https://github.com/nameerakhter/AI_startup_ui',
      },
    ],
  },
  {
    title: 'Ochi Dark Version',
    category: 'React · Locomotive Scroll',
    description:
      'Dark-themed clone of ochi.design.in with cursor-tracking eyes, Locomotive Scroll parallax, and Framer Motion hover effects.',
    links: [
      { label: 'Live demo', href: 'https://ochi-dark-version.nameer.live/' },
      {
        label: 'GitHub',
        href: 'https://github.com/nameerakhter/ochi_dark_version',
      },
    ],
  },
  {
    title: 'Gericht Restaurant',
    category: 'React · Landing Page',
    description:
      'Gericht Restaurant landing page with an interactive intro video, chef message section, and responsive layout.',
    links: [
      {
        label: 'Live demo',
        href: 'https://gericht-restraunt.nameer.live/',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/nameerakhter/GerichtRestraunt_ReactJs',
      },
    ],
  },
  {
    title: 'MacBook Pro Hero',
    category: 'Three.js · Apple-style UI',
    description:
      '3D MacBook Pro hero with a loading sequence, scroll-driven product showcase, and Apple-inspired layout and interactions.',
    links: [
      { label: 'Live demo', href: 'https://macbook-pro-hero.nameer.live/' },
    ],
  },
  {
    title: 'Health Flow App',
    category: 'React · Health UI',
    description:
      'Health and wellness app UI with guided user flows, dashboard views, and a responsive mobile-first layout.',
    links: [
      { label: 'Live demo', href: 'https://health-flow-app.nameer.live/' },
    ],
  },
] as const

const TECH_CATEGORIES = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    title: 'Backend',
    items: [
      'Node.js & NestJS',
      'Express.js & FastAPI',
      'REST APIs & microservices',
      'System & API design',
    ],
  },
  {
    title: 'Frontend',
    items: ['React & Next.js', 'HTML & CSS', 'Responsive UI', 'Payment forms'],
  },
  {
    title: 'Infrastructure & AI',
    items: [
      'Docker & AWS (EC2, S3)',
      'PostgreSQL, MongoDB & Redis',
      'RAG & vector embeddings',
      'TensorFlow & Scikit-Learn',
    ],
  },
] as const

const EXPERIENCE = [
  {
    period: '2025 — Present',
    title: 'Software Engineer',
    place: 'Prodios Labs',
    description:
      'Building government-scale platforms, CBDC payment infrastructure, RAG assistants, and enterprise dashboards in Dehradun.',
  },
  {
    period: '2024',
    title: 'Research Intern',
    place: 'IIT Roorkee',
    description:
      'Evaluated 10+ ML/DL models for vibration-based fault detection, improving performance by 25% through feature engineering and tuning.',
  },
  {
    period: '2023',
    title: 'Front-End Developer',
    place: 'PlutosOne',
    description:
      'Built responsive React interfaces and secure payment forms for customer-facing workflows in Noida.',
  },
  {
    period: '2020 — 2024',
    title: 'B.Tech CS (AIML)',
    place: 'UPES',
    description:
      'Bachelor of Technology in Computer Science with AIML specialization, CGPA 8.14.',
  },
] as const

export function HeroSection() {
  return (
    <div className="hero-wrap">
      <div className="pf-hero-stage portfolio-content">
        <div className="pf-hero-intro">
          <p className="pf-hero-availability">
            <span className="pf-hero-availability-dot" aria-hidden />
            Software engineer at Prodios Labs
          </p>
          <h1 className="pf-display pf-hero-headline">
            <span>Muhammad</span>
            <span className="pf-display-line">Nameer Akhter</span>
          </h1>
        </div>

        <div className="pf-hero-body">
          <div className="pf-hero-copy-col">
            <p className="pf-subline">
              I ship production backends, AI workflows, and full-stack platforms —
              citizen portals for 1Cr+ users, CBDC payment systems, and
              RAG-powered assistants.
            </p>
            <div className="pf-cta-row">
              <a href="#contact" className="pf-btn pf-btn-primary">
                Start a conversation
                <span aria-hidden>→</span>
              </a>
              <a href="#company-work" className="pf-btn pf-btn-ghost">
                Selected work
              </a>
            </div>
            <p className="pf-hero-proof">
              <span className="pf-hero-proof-kicker">IEEE · 2025</span>
              Vibration-based bearing fault detection research from IIT Roorkee.
            </p>
          </div>

          <div className="pf-hero-visual">
            <HeroVisual />
          </div>
        </div>
      </div>

      <div className="pf-hero-scroll portfolio-content" aria-hidden>
        <span className="pf-mono">Scroll</span>
        <span className="pf-hero-scroll-line" />
      </div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="hero-stats" aria-label="Impact at a glance">
      <div className="portfolio-content">
        <ul className="pf-proof-band">
          {STATS.map((stat) => (
            <li key={stat.label} className="pf-proof-item">
              <span className="pf-stat-num">{stat.value}</span>
              <span className="pf-stat-lbl">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function CompanyWorkSection() {
  return (
    <section id="company-work" className="pf-block">
      <div className="portfolio-content">
        <div className="pf-sec-head">
          <h2 className="pf-section-title max-w-[14ch]">Selected work</h2>
          <p className="pf-sec-side">
            Production systems at Prodios Labs — civic platforms, payment rails,
            and AI tools used by real people at scale.
          </p>
        </div>

        <CompanyWorkShowcase />
      </div>
    </section>
  )
}

export function PersonalProjectsSection() {
  return (
    <section id="personal-projects" className="pf-block pf-block--surface">
      <div className="portfolio-content">
        <div className="pf-sec-head">
          <h2 className="pf-section-title max-w-[14ch]">Personal projects</h2>
          <p className="pf-sec-side">
            Side builds and UI experiments — interactive tools, design studies,
            and front-end work with live demos.
          </p>
        </div>

        <ul className="pf-project-list">
          {PERSONAL_PROJECTS.map((project) => (
            <li key={project.title} className="pf-project-row">
              <div className="pf-project-row-main">
                <p className="pf-project-cat">{project.category}</p>
                <h3 className="pf-project-title">{project.title}</h3>
                <p className="pf-body pf-project-desc">{project.description}</p>
              </div>
              <div className="pf-project-row-links">
                <ProjectLinks links={project.links} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function ResearchSection() {
  return (
    <section id="research" className="pf-block">
      <div className="portfolio-content">
        <div className="pf-sec-head">
          <h2 className="pf-section-title max-w-[16ch]">Research</h2>
          <p className="pf-sec-side">
            Peer-reviewed work from IIT Roorkee on vibration-based fault
            detection — published with IEEE in 2025.
          </p>
        </div>

        <ResearchShowcase />
      </div>
    </section>
  )
}

export function PhilosophySection() {
  return (
    <section id="about" className="pf-block pf-block--ink">
      <div className="portfolio-content pf-about">
        <p className="pf-about-kicker">About</p>
        <h2 className="pf-about-title">
          Engineering where scale, security, and intelligence meet.
        </h2>
        <p className="pf-about-body">
          I&apos;m a software engineer at Prodios Labs building platforms that
          real people depend on — civic portals, payment infrastructure, and AI
          assistants that need to work under load. My background spans
          full-stack development, ML research at IIT Roorkee, and a B.Tech in
          Computer Science (AIML) from UPES. I care about API design, automated
          testing, and shipping systems that don&apos;t break when the stakes
          are high.
        </p>
      </div>
    </section>
  )
}

export function TechSection() {
  return (
    <section className="pf-block">
      <div className="portfolio-content">
        <div className="pf-sec-head">
          <h2 className="pf-section-title max-w-[12ch]">Tools I use</h2>
          <p className="pf-sec-side">
            Day-to-day stack across backend services, interfaces,
            infrastructure, and AI pipelines.
          </p>
        </div>

        <div className="pf-stack-grid">
          {TECH_CATEGORIES.map((category) => (
            <div key={category.title} className="pf-stack-col">
              <h3 className="pf-stack-heading">{category.title}</h3>
              <PortfolioBadgeGroup>
                {category.items.map((item) => (
                  <PortfolioBadge key={item}>{item}</PortfolioBadge>
                ))}
              </PortfolioBadgeGroup>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProcessSection() {
  return (
    <section className="pf-block pf-block--surface">
      <div className="portfolio-content">
        <div className="pf-sec-head">
          <h2 className="pf-section-title max-w-[14ch]">Background</h2>
          <p className="pf-sec-side">
            From research labs to production government platforms.
          </p>
        </div>

        <ol className="pf-timeline">
          {EXPERIENCE.map((step) => (
            <li key={step.period + step.title} className="pf-timeline-item">
              <time className="pf-timeline-period">{step.period}</time>
              <div className="pf-timeline-body">
                <h3 className="pf-timeline-title">
                  {step.title}
                  <span className="pf-timeline-place"> · {step.place}</span>
                </h3>
                <p className="pf-body text-sm">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function CtaSection() {
  return (
    <section id="contact" className="pf-block">
      <div className="portfolio-content pf-contact">
        <h2 className="pf-contact-title">
          Let&apos;s build something together.
        </h2>
        <p className="pf-contact-lead">
          Open to engineering roles, collaborations, and hard technical
          problems. Reach out and let&apos;s talk.
        </p>
        <div className="pf-cta-row">
          <a
            href="mailto:akhtarnameer@gmail.com"
            className="pf-btn pf-btn-primary"
          >
            Send an email
            <span aria-hidden>→</span>
          </a>
          <a href="#personal-projects" className="pf-btn pf-btn-ghost">
            See personal projects
          </a>
        </div>
      </div>
    </section>
  )
}
