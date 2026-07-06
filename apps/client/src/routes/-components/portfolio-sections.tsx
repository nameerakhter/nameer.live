import CompanyWorkShowcase from './company-work-showcase'
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
      { label: 'Live demo', href: 'https://code-editor-react-nine.vercel.app/' },
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
      { label: 'Live demo', href: 'https://magma-clone-nu.vercel.app/' },
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
      { label: 'Live demo', href: 'https://ochi-dark-version.vercel.app/' },
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
        href: 'https://gericht-restraunt-react-js.vercel.app/',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/nameerakhter/GerichtRestraunt_ReactJs',
      },
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
    number: '01',
    title: 'Software Engineer · Prodios Labs',
    description:
      'Jan 2025 – Present · Building government-scale platforms, CBDC payment infrastructure, RAG assistants, and enterprise dashboards in Dehradun.',
  },
  {
    number: '02',
    title: 'Research Intern · IIT Roorkee',
    description:
      'Jan – Aug 2024 · Evaluated 10+ ML/DL models for vibration-based fault detection, improving performance by 25% through feature engineering and tuning.',
  },
  {
    number: '03',
    title: 'Front-End Developer · PlutosOne',
    description:
      'Jun – Aug 2023 · Built responsive React interfaces and secure payment forms for customer-facing workflows in Noida.',
  },
  {
    number: '04',
    title: 'B.Tech CS (AIML) · UPES',
    description:
      'Nov 2020 – Jul 2024 · Bachelor of Technology in Computer Science with AIML specialization, CGPA 8.14.',
  },
] as const

export function HeroSection() {
  return (
    <div className="hero-wrap portfolio-content">
      <div className="pf-eyebrow">
        <span className="pf-eyebrow-rule" aria-hidden />
        <span className="pf-mono">
          Software Engineer · Full-Stack · Prodios Labs
        </span>
      </div>
      <h1 className="pf-display">
        Muhammad Nameer
        <br />
        <em>Akhter</em>
      </h1>
      <p className="pf-subline">
        I design and ship{' '}
        <b>
          production backends, AI workflows, and full-stack platforms
        </b>{' '}
        — from citizen portals serving 1Cr+ users to CBDC payment systems and
        RAG-powered assistants.
      </p>
      <div className="pf-cta-row">
        <a href="#contact" className="pf-btn pf-btn-primary">
          Got something worth building?
          <span aria-hidden>→</span>
        </a>
        <a href="#company-work" className="pf-btn pf-btn-ghost">
          View company work
        </a>
      </div>
      <p className="pf-research-hero-note">
        <span className="pf-label">IEEE publication · 2025</span>
        Evaluated ML and deep learning models for vibration-based bearing fault
        detection at IIT Roorkee.
      </p>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="hero-stats border-y border-(--pf-border) py-14">
      <div className="portfolio-content grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="pf-stat-num">{stat.value}</div>
            <p className="pf-stat-lbl">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function CompanyWorkSection() {
  return (
    <section id="company-work" className="border-t border-(--pf-border) pf-block">
      <div className="portfolio-content">
        <div className="pf-sec-head">
          <h2 className="pf-section-title max-w-[16ch]">
            What I <em>did</em>
          </h2>
          <p className="pf-sec-side">
            Production systems shipped at Prodios Labs — government platforms,
            payment infrastructure, and AI tools built for real users at scale.
          </p>
        </div>

        <CompanyWorkShowcase />
      </div>
    </section>
  )
}

export function PersonalProjectsSection() {
  return (
    <section
      id="personal-projects"
      className="border-t border-(--pf-border) pf-block"
    >
      <div className="portfolio-content">
        <div className="pf-sec-head">
          <h2 className="pf-section-title max-w-[16ch]">
            Personal <em>projects</em>
          </h2>
          <p className="pf-sec-side">
            Side projects and UI experiments — interactive tools, design clones,
            and front-end builds with live demos and open-source repos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PERSONAL_PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-sm border border-(--pf-border) bg-(--pf-surface) p-6 transition-colors hover:border-(--pf-border-strong) hover:bg-(--pf-surface-hover)"
            >
              <PortfolioBadge variant="accent">{project.category}</PortfolioBadge>
              <h3 className="pf-project-title mt-3">{project.title}</h3>
              <p className="pf-body mt-3 flex-1 text-sm">{project.description}</p>
              <ProjectLinks links={project.links} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ResearchSection() {
  return (
    <section id="research" className="pf-research-block border-t border-(--pf-border)">
      <div className="portfolio-content">
        <div className="pf-sec-head">
          <h2 className="pf-section-title max-w-[16ch]">
            AI research & <em>publications</em>
          </h2>
          <p className="pf-sec-side">
            Peer-reviewed research published in 2025 — evaluating ML and deep
            learning models for vibration-based fault detection in rolling
            bearings.
          </p>
        </div>

        <ResearchShowcase />
      </div>
    </section>
  )
}

export function PhilosophySection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="portfolio-content">
        <div className="rounded-sm border border-(--pf-border) bg-(--pf-surface) px-8 py-14 md:px-16 md:py-20">
          <p className="pf-label">About</p>
          <h2 className="pf-section-title mt-6 max-w-3xl">
            Engineering at the intersection of{' '}
            <em>scale, security, and intelligence.</em>
          </h2>
          <p className="pf-body mt-6 max-w-2xl text-[clamp(1rem,1.5vw,1.125rem)]">
            I&apos;m a software engineer at Prodios Labs building platforms that
            real people depend on — civic portals, payment infrastructure, and
            AI assistants that need to work under load. My background spans
            full-stack development, ML research at IIT Roorkee, and a B.Tech in
            Computer Science (AIML) from UPES. I care about API design,
            automated testing, and shipping systems that don&apos;t break when
            the stakes are high.
          </p>
        </div>
      </div>
    </section>
  )
}

export function TechSection() {
  return (
    <section className="border-t border-(--pf-border) py-24 md:py-32">
      <div className="portfolio-content">
        <div className="mb-14 max-w-2xl">
          <h2 className="pf-section-title">
            Tech <em>stack</em>
          </h2>
          <p className="pf-section-lead">
            Tools and technologies I use daily across backend services, frontend
            interfaces, infrastructure, and AI pipelines.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TECH_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-sm border border-(--pf-border) p-6"
            >
              <h3 className="pf-stack-heading border-b border-(--pf-border) pb-[18px]">
                {category.title}
              </h3>
              <PortfolioBadgeGroup className="mt-[18px]">
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
    <section className="py-24 md:py-32">
      <div className="portfolio-content">
        <div className="mb-14 max-w-2xl">
          <h2 className="pf-section-title">
            Experience & <em>background</em>
          </h2>
          <p className="pf-section-lead">
            From research labs to production government platforms.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERIENCE.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <div className="pf-pillar-num">{step.number}</div>
              <h3 className="pf-pillar-title">{step.title}</h3>
              <p className="pf-body text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaSection() {
  return (
    <section
      id="contact"
      className="border-t border-(--pf-border) py-24 md:py-32"
    >
      <div className="portfolio-content text-center">
        <p className="pf-label">Contact</p>
        <h2 className="pf-contact-title mx-auto mt-6 max-w-3xl">
          Let&apos;s build
          <br />
          <em>something together.</em>
        </h2>
        <p className="pf-body mx-auto mt-6 max-w-xl text-[clamp(1rem,1.5vw,1.125rem)]">
          Open to engineering roles, collaborations, and interesting technical
          problems. Reach out and let&apos;s talk.
        </p>
        <div className="pf-cta-row justify-center">
          <a href="mailto:akhtarnameer@gmail.com" className="pf-btn pf-btn-primary">
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
