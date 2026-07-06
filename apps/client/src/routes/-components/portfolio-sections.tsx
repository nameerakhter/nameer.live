import CompanyWorkShowcase from './company-work-showcase'

const STATS = [
  { value: '1Cr+', label: 'Users on civic platforms' },
  { value: '1,000+', label: 'Public services supported' },
  { value: '₹800Cr+', label: 'CBDC disbursement flows' },
  { value: '84K+', label: 'Complaints managed at scale' },
] as const

const PERSONAL_PROJECTS = [
  {
    title: 'nameer.live',
    category: 'Personal · Portfolio',
    description:
      'This portfolio — designed and built from scratch with React, TanStack Router, and a Hono backend monorepo.',
  },
  {
    title: 'VibraSense',
    category: 'Personal · ML Research',
    description:
      'Vibration-based fault detection pipeline evaluating 10+ ML/DL models with custom feature engineering — grew out of research at IIT Roorkee.',
  },
  {
    title: 'DevTools Dashboard',
    category: 'Personal · Side Project',
    description:
      'Lightweight developer dashboard for monitoring local services, cron jobs, and API health checks during side-project development.',
  },
  {
    title: 'ClipStack',
    category: 'Personal · Open Source',
    description:
      'Clipboard history manager with fuzzy search and snippet tagging — built to speed up repetitive coding workflows.',
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
    <div className="hero-wrap mx-auto max-w-6xl px-6">
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
          Get in touch
          <span aria-hidden>→</span>
        </a>
        <a href="#company-work" className="pf-btn pf-btn-ghost">
          View company work
        </a>
      </div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="hero-stats border-y border-(--pf-border) px-6 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
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
    <section id="company-work" className="pf-block px-6">
      <div className="mx-auto max-w-6xl">
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
      className="border-t border-(--pf-border) pf-block px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="pf-sec-head">
          <h2 className="pf-section-title max-w-[16ch]">
            Personal <em>projects</em>
          </h2>
          <p className="pf-sec-side">
            Side projects, experiments, and open-source work built outside the
            day job — from this portfolio to ML research and dev tooling.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PERSONAL_PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group rounded-sm border border-(--pf-border) bg-(--pf-surface) p-6 transition-colors hover:border-(--pf-border-strong) hover:bg-(--pf-surface-hover)"
            >
              <p className="pf-project-cat">{project.category}</p>
              <h3 className="pf-project-title mt-3">{project.title}</h3>
              <p className="pf-body mt-3 text-sm">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PhilosophySection() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
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
    <section className="border-t border-(--pf-border) px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
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
              <ul className="mt-[18px] flex flex-col gap-2.5">
                {category.items.map((item) => (
                  <li key={item} className="pf-stack-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProcessSection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
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
      className="border-t border-(--pf-border) px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl text-center">
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
