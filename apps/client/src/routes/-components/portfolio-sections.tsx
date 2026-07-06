import { ArrowRightIcon } from 'lucide-react'

const STATS = [
  { value: '1Cr+', label: 'Users on civic platforms' },
  { value: '1,000+', label: 'Public services supported' },
  { value: '₹800Cr+', label: 'CBDC disbursement flows' },
  { value: '84K+', label: 'Complaints managed at scale' },
] as const

const EXPERTISE = [
  {
    number: '01',
    title: 'Backend & API Engineering',
    headline: 'Services built to survive real traffic and real scrutiny.',
    description:
      'TypeScript backends with NestJS and Node.js — REST APIs, microservices, role-based workflows, and transaction validation for government and fintech platforms.',
    items: [
      'NestJS & Express.js services',
      'MongoDB, PostgreSQL & Redis',
      'Payment & subsidy disbursement APIs',
      'Automated testing & performance tuning',
    ],
  },
  {
    number: '02',
    title: 'AI & Intelligent Systems',
    headline: 'Production RAG and ML where accuracy actually matters.',
    description:
      'From vector embeddings and semantic search to CNN/LSTM fault detection — AI features engineered for measurable impact, not slide decks.',
    items: [
      'RAG pipelines & tool-calling workflows',
      'Vector search & LLM integrations',
      'TensorFlow & Scikit-Learn models',
      'Feature engineering & model evaluation',
    ],
  },
  {
    number: '03',
    title: 'Full-Stack Product Development',
    headline: 'End-to-end platforms from schema to interface.',
    description:
      'React and Next.js frontends paired with scalable APIs, workflow automation, and analytics dashboards used across departments and stakeholder groups.',
    items: [
      'React & Next.js applications',
      'Analytics & admin dashboards',
      'Workflow automation & RBAC',
      'Docker, AWS & CI/CD deployment',
    ],
  },
] as const

const PROJECTS = [
  {
    title: 'Apuni Sarkar Platform',
    category: 'Government · Full-Stack',
    description:
      'Backend services powering citizen-facing applications for 1Cr+ users and 1,000+ public services — designed, tested, and deployed with NestJS and MongoDB.',
  },
  {
    title: 'CBDC Infrastructure',
    category: 'Fintech · Mission Kiwi',
    description:
      'Secure payment APIs and transaction validation for a state-wide CBDC initiative supporting subsidy disbursement operations worth ₹800Cr+.',
  },
  {
    title: 'AI Assistant',
    category: 'AI · RAG',
    description:
      'Production RAG-based assistant with vector embeddings, semantic search, and tool-calling — cutting query resolution time by 30–40%.',
  },
  {
    title: 'E-Office Dashboard',
    category: 'Government · Analytics',
    description:
      'Analytics dashboards and backend APIs adopted across 4+ government departments, improving operational reporting efficiency by 20–30%.',
  },
  {
    title: 'NHM Training Management',
    category: 'Enterprise · Platform',
    description:
      'Training management software tracking 50K+ hours with automated validation pipelines and secure role-based workflows.',
  },
  {
    title: 'Stray Reporter',
    category: 'Full-Stack · Civic Tech',
    description:
      'Platform managing 84K+ complaints and 20K+ records — API performance optimizations cut average response times by 60%.',
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
        <a href="#work" className="pf-btn pf-btn-ghost">
          View my work
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

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="pf-section-title">
            What I <em>do</em>
          </h2>
          <p className="pf-section-lead">
            Backend engineering, applied AI, and full-stack delivery — the same
            disciplines I use daily building platforms for government and
            fintech at Prodios Labs.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {EXPERTISE.map((service) => (
            <article
              key={service.number}
              className="grid gap-8 border-t border-(--pf-border) pt-12 md:grid-cols-[120px_1fr] md:gap-16"
            >
              <div className="pf-card-idx">
                {service.number} · {service.title}
              </div>
              <div>
                <h3 className="pf-card-title">{service.headline}</h3>
                <p className="pf-body mt-4 max-w-2xl text-[clamp(0.95rem,1.2vw,1.05rem)]">
                  {service.description}
                </p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="pf-stack-item flex items-center gap-2.5"
                    >
                      <span
                        className="size-1 shrink-0 rounded-full bg-(--pf-fg-faint)"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WorkSection() {
  return (
    <section
      id="work"
      className="border-t border-(--pf-border) px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="pf-section-title">
              Selected <em>work</em>
            </h2>
            <p className="pf-section-lead mt-3 max-w-lg">
              Platforms, payment systems, and AI tools shipped in production for
              government and enterprise.
            </p>
          </div>
          <a href="#contact" className="pf-link-arrow inline-flex items-center gap-1.5">
            Discuss a project
            <ArrowRightIcon className="size-3.5" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
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
          <a href="#work" className="pf-btn pf-btn-ghost">
            Review my work
          </a>
        </div>
      </div>
    </section>
  )
}
