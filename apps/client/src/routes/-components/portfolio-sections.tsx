import { ArrowRightIcon } from 'lucide-react'

import { BaseButton } from '@/components/ui/button'

const STATS = [
  { value: '10+', label: 'Years building in production' },
  { value: '50+', label: 'Projects shipped' },
  { value: '99.9%', label: 'Uptime on critical systems' },
  { value: '5M+', label: 'Users served' },
] as const

const SERVICES = [
  {
    number: '01',
    title: 'Full-Stack Product Engineering',
    headline: 'End-to-end systems that hold up under real load.',
    description:
      'From API design to polished interfaces — products engineered to stay up, stay secure, and scale with your users.',
    items: [
      'Web applications & dashboards',
      'API design & integrations',
      'Real-time & event-driven systems',
      'Performance & reliability tuning',
    ],
  },
  {
    number: '02',
    title: 'Platform & Infrastructure',
    headline: 'The machinery behind reliable software.',
    description:
      'CI/CD pipelines, observability, and deployment strategies built for teams that cannot afford downtime.',
    items: [
      'Cloud & container orchestration',
      'CI/CD & observability',
      'Zero-downtime releases',
      'Security & compliance foundations',
    ],
  },
  {
    number: '03',
    title: 'AI & Intelligent Systems',
    headline: 'Applied intelligence where accuracy matters.',
    description:
      'LLM workflows, document intelligence, and ML features engineered for precision, auditability, and scale.',
    items: [
      'LLM-backed workflows',
      'Document intelligence',
      'Search & retrieval systems',
      'Model integration & serving',
    ],
  },
] as const

const PROJECTS = [
  {
    title: 'Citizen Service Platform',
    category: 'Government · Full-Stack',
    description:
      'High-throughput portal processing millions of applications with secure workflows and real-time status tracking.',
  },
  {
    title: 'Enterprise Analytics Dashboard',
    category: 'SaaS · Platform',
    description:
      'Multi-tenant reporting system with role-based access, custom pipelines, and sub-second query performance.',
  },
  {
    title: 'AI Document Pipeline',
    category: 'AI · Automation',
    description:
      'Intelligent extraction and classification system reducing manual review time by 90% across sensitive workflows.',
  },
] as const

const TECH_CATEGORIES = [
  {
    title: 'Frontend',
    items: [
      'React & TypeScript',
      'TanStack ecosystem',
      'Design systems',
      'Performance optimization',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Node.js & Hono',
      'PostgreSQL & Redis',
      'Queue workers',
      'API design',
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      'Docker & Kubernetes',
      'CI/CD pipelines',
      'Observability',
      'Cloud deployment',
    ],
  },
  {
    title: 'AI / ML',
    items: [
      'LLM integrations',
      'RAG pipelines',
      'Document intelligence',
      'Agent workflows',
    ],
  },
] as const

const PROCESS = [
  {
    number: '01',
    title: 'Fast-moving',
    description:
      'Short cycles, working software early, momentum that compounds week over week.',
  },
  {
    number: '02',
    title: 'Close collaboration',
    description:
      "I work shoulder-to-shoulder with the people who own the outcome, not at arm's length.",
  },
  {
    number: '03',
    title: 'Iterative',
    description:
      'Ship, observe, refine. Real usage tells us more than any spec document.',
  },
  {
    number: '04',
    title: 'Technically serious',
    description:
      'Architecture, security, and reliability treated as first-class, because the stakes demand it.',
  },
] as const

export function HeroSection() {
  return (
    <div className="hero-wrap mx-auto max-w-6xl px-6">
        <p className="mb-6 text-xs font-medium tracking-[0.2em] text-white/45 uppercase">
          Software engineering · Full-stack · Est. 2015
        </p>
        <h1 className="max-w-4xl text-5xl leading-[1.05] font-semibold tracking-tight text-white md:text-7xl">
          You imagine,
          <br />
          <span className="text-white/55 italic">I build.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg/relaxed  text-white/55 md:text-xl">
          Most developers ship features.{' '}
          <strong className="font-medium text-white/80">
            I build the systems products run on
          </strong>
          : platforms serving real users, handling sensitive data, with zero
          tolerance for failure.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <BaseButton
            asChild
            className="h-11 rounded-full bg-white px-6 text-sm font-medium text-[#08080a] hover:bg-white/90"
          >
            <a href="#contact">
              Start a project
              <ArrowRightIcon className="size-4" />
            </a>
          </BaseButton>
          <BaseButton
            asChild
            variant="outline"
            className="h-11 rounded-full border-white/15 bg-transparent px-6 text-sm text-white hover:bg-white/5 hover:text-white"
          >
            <a href="#work">See selected work</a>
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
            <p className="mt-2 text-sm/snug  text-white/45">{stat.label}</p>
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
            What I <span className="text-white/55 italic">build</span>
          </h2>
          <p className="mt-4 text-base/relaxed  text-white/50 md:text-lg">
            Three disciplines, one standard: production systems that hold up
            under real load, real scrutiny, and real consequences.
          </p>
        </div>

        <div className="space-y-20">
          {SERVICES.map((service) => (
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
                <p className="mt-4 max-w-2xl text-base/relaxed  text-white/50">
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
              Systems in production for startups, enterprises, and public-sector
              institutions.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
          >
            All work
            <ArrowRightIcon className="size-3.5" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
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
              <p className="mt-3 text-sm/relaxed  text-white/50">
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
            The difference
          </p>
          <h2 className="mt-6 max-w-3xl text-3xl/snug  font-semibold tracking-tight text-white md:text-4xl">
            Anyone can build an app. I build the systems that{' '}
            <span className="text-white/55 italic">products run on.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base/relaxed  text-white/50 md:text-lg">
            Millions of users. Sensitive data. Zero tolerance for failure. When
            the platform <em className="text-white/70 not-italic">is</em> the
            product, &ldquo;move fast and break things&rdquo; is not an option.
            So I move fast and{' '}
            <strong className="font-medium text-white/80">
              build things that don&apos;t break.
            </strong>
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
            Tech <span className="text-white/55 italic">DNA</span>
          </h2>
          <p className="mt-4 text-base/relaxed  text-white/50 md:text-lg">
            Not a list of what I know. A record of what I&apos;ve run in
            production, at scale, under load.
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
            How I <span className="text-white/55 italic">work</span>
          </h2>
          <p className="mt-4 text-base/relaxed  text-white/50 md:text-lg">
            Small, focused engagements that sit close to the problem and ship.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step) => (
            <div key={step.number} className="space-y-4">
              <div className="text-sm font-medium tracking-widest text-white/30">
                {step.number}
              </div>
              <h3 className="text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm/relaxed  text-white/50">
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
          Start a project
        </p>
        <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          You imagine,
          <br />
          <span className="text-white/55 italic">I build.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base/relaxed  text-white/50 md:text-lg">
          Tell me about the platform or product you need. I&apos;ll bring the
          engineering rigor to make it real, and keep it running.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <BaseButton
            asChild
            className="h-11 rounded-full bg-white px-6 text-sm font-medium text-[#08080a] hover:bg-white/90"
          >
            <a href="mailto:hello@nameer.live">
              Start a project
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
