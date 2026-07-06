import { ArrowRightIcon } from 'lucide-react'

import { BaseButton } from '@/components/ui/button'

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
      <p className="mb-6 text-xs font-medium tracking-[0.2em] text-white/45 uppercase">
        Software Engineer · Full-Stack · Prodios Labs
      </p>
      <h1 className="max-w-4xl text-5xl leading-[1.05] font-semibold tracking-tight text-white md:text-7xl">
        Muhammad Nameer
        <br />
        <span className="text-white/55 italic">Akhter</span>
      </h1>
      <p className="mt-8 max-w-2xl text-lg/relaxed text-white/55 md:text-xl">
        I design and ship{' '}
        <strong className="font-medium text-white/80">
          production backends, AI workflows, and full-stack platforms
        </strong>{' '}
        — from citizen portals serving 1Cr+ users to CBDC payment systems and
        RAG-powered assistants.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <BaseButton
          asChild
          className="h-11 rounded-full bg-white px-6 text-sm font-medium text-[#08080a] hover:bg-white/90"
        >
          <a href="#contact">
            Get in touch
            <ArrowRightIcon className="size-4" />
          </a>
        </BaseButton>
        <BaseButton
          asChild
          variant="outline"
          className="h-11 rounded-full border-white/15 bg-transparent px-6 text-sm text-white hover:bg-white/5 hover:text-white"
        >
          <a href="#work">View my work</a>
        </BaseButton>
      </div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="hero-stats border-y border-white/10 px-6 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {stat.value}
            </div>
            <p className="mt-2 text-sm/snug text-white/45">{stat.label}</p>
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
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            What I <span className="text-white/55 italic">do</span>
          </h2>
          <p className="mt-4 text-base/relaxed text-white/50 md:text-lg">
            Backend engineering, applied AI, and full-stack delivery — the same
            disciplines I use daily building platforms for government and
            fintech at Prodios Labs.
          </p>
        </div>

        <div className="space-y-20">
          {EXPERTISE.map((service) => (
            <article
              key={service.number}
              className="grid gap-8 border-t border-white/8 pt-12 md:grid-cols-[120px_1fr] md:gap-16"
            >
              <div className="text-sm font-medium tracking-widest text-white/30">
                {service.number} · {service.title}
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {service.headline}
                </h3>
                <p className="mt-4 max-w-2xl text-base/relaxed text-white/50">
                  {service.description}
                </p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-white/65"
                    >
                      <span className="size-1 shrink-0 rounded-full bg-white/30" />
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
    <section id="work" className="border-t border-white/8 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Selected <span className="text-white/55 italic">work</span>
            </h2>
            <p className="mt-3 max-w-lg text-base text-white/50">
              Platforms, payment systems, and AI tools shipped in production
              for government and enterprise.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
          >
            Discuss a project
            <ArrowRightIcon className="size-3.5" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-white/8 bg-white/2 p-6 transition-colors hover:border-white/15 hover:bg-white/4"
            >
              <p className="text-xs font-medium tracking-wide text-white/40">
                {project.category}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm/relaxed text-white/50">
                {project.description}
              </p>
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
        <div className="rounded-3xl border border-white/8 bg-white/2 px-8 py-14 md:px-16 md:py-20">
          <p className="text-xs font-medium tracking-[0.2em] text-white/35 uppercase">
            About
          </p>
          <h2 className="mt-6 max-w-3xl text-3xl/snug font-semibold tracking-tight text-white md:text-4xl">
            Engineering at the intersection of{' '}
            <span className="text-white/55 italic">
              scale, security, and intelligence.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-base/relaxed text-white/50 md:text-lg">
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
    <section className="border-t border-white/8 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Tech <span className="text-white/55 italic">stack</span>
          </h2>
          <p className="mt-4 text-base/relaxed text-white/50 md:text-lg">
            Tools and technologies I use daily across backend services, frontend
            interfaces, infrastructure, and AI pipelines.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TECH_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-white/8 p-6"
            >
              <h3 className="text-sm font-semibold text-white">
                {category.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-white/50"
                  >
                    <span className="size-1 shrink-0 rounded-full bg-white/25" />
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
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Experience & <span className="text-white/55 italic">background</span>
          </h2>
          <p className="mt-4 text-base/relaxed text-white/50 md:text-lg">
            From research labs to production government platforms.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERIENCE.map((step) => (
            <div key={step.number} className="space-y-4">
              <div className="text-sm font-medium tracking-widest text-white/30">
                {step.number}
              </div>
              <h3 className="text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm/relaxed text-white/50">
                {step.description}
              </p>
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
      className="border-t border-white/8 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-medium tracking-[0.2em] text-white/35 uppercase">
          Contact
        </p>
        <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Let&apos;s build
          <br />
          <span className="text-white/55 italic">something together.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base/relaxed text-white/50 md:text-lg">
          Open to engineering roles, collaborations, and interesting technical
          problems. Reach out and let&apos;s talk.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <BaseButton
            asChild
            className="h-11 rounded-full bg-white px-6 text-sm font-medium text-[#08080a] hover:bg-white/90"
          >
            <a href="mailto:akhtarnameer@gmail.com">
              Send an email
              <ArrowRightIcon className="size-4" />
            </a>
          </BaseButton>
          <BaseButton
            asChild
            variant="outline"
            className="h-11 rounded-full border-white/15 bg-transparent px-6 text-sm text-white hover:bg-white/5 hover:text-white"
          >
            <a href="#work">Review my work</a>
          </BaseButton>
        </div>
      </div>
    </section>
  )
}
