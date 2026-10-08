import { CONTACT, EXPERIENCE } from './portfolio-data'

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-surface-hairline bg-slate-dark py-16 text-bone-white min-[900px]:py-[88px]"
      aria-labelledby="about-name"
    >
      <div className="box-border grid w-full gap-16 px-6 min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] min-[900px]:items-start min-[900px]:gap-x-[90px] min-[900px]:gap-y-6">
        <h2
          id="about-name"
          className="m-0 font-display text-[clamp(2.75rem,9vw,5rem)] font-normal leading-[0.98] tracking-display text-bone-white"
        >
          <span className="block">Muhammad</span>
          <span className="block">Nameer</span>
          <span className="block">Akhter</span>
        </h2>
        <div className="grid max-w-[52ch] content-start gap-3 font-replica-regular text-body font-normal tracking-body leading-[1.35] min-[900px]:pt-[0.35em]">
          <p className="m-0 text-pretty text-bone-white">
            I&apos;m a software engineer based in Dehradun. I work at Prodios
            Labs building platforms that real people depend on — civic portals,
            payment infrastructure, and AI assistants that need to work under
            load.
          </p>
          <p className="m-0 text-pretty text-bone-white">
            My background spans full-stack development, ML research at IIT
            Roorkee, and a B.Tech in Computer Science (AIML) from UPES. I care
            about API design, automated testing, and shipping systems that
            don&apos;t break when the stakes are high.
          </p>
          <p className="m-0 text-pretty text-bone-white">
            I do my best work on hard technical problems with clear product
            stakes. If that sounds like you, let&apos;s chat.
          </p>
          <a
            className="mt-3 w-fit font-replica-regular text-body-sm tracking-body-sm text-fog underline decoration-fog/55 underline-offset-[0.22em] transition-colors duration-[160ms] hover:text-bone-white hover:decoration-bone-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-white"
            href={`mailto:${CONTACT.email}`}
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  )
}

export function ExperienceSection() {
  return (
    <section
      className="border-t border-surface-hairline py-16"
      aria-labelledby="experience-title"
    >
      <div className="box-border w-full px-6">
        <h2
          id="experience-title"
          className="mb-3 font-display text-heading font-normal tracking-heading leading-heading text-bone-white"
        >
          Work experience
        </h2>
        <ol className="m-0 list-none p-0">
          {EXPERIENCE.map((item) => (
            <li
              key={item.place + item.title}
              className="group grid grid-cols-[4.5rem_1fr] gap-x-6 gap-y-1 border-t border-surface-hairline py-3 last:border-b last:border-surface-hairline min-[700px]:grid-cols-[5rem_minmax(0,1fr)_minmax(12rem,auto)] min-[700px]:items-baseline"
            >
              <span className="row-span-2 self-start pt-[0.35em] font-replica-mono text-caption tracking-caption text-fog transition-colors duration-[160ms] group-hover:text-[color-mix(in_oklch,var(--color-fog)_70%,var(--color-bone-white))] min-[700px]:row-span-1">
                {item.year}
              </span>
              <span className="font-display text-subheading tracking-subheading text-bone-white transition-colors duration-[160ms] group-hover:text-bone-white/88 min-[700px]:col-start-2">
                {item.place}
              </span>
              <span className="font-replica-regular text-body-sm tracking-body-sm text-fog transition-colors duration-[160ms] group-hover:text-[color-mix(in_oklch,var(--color-fog)_70%,var(--color-bone-white))] min-[700px]:col-start-3 min-[700px]:text-right">
                {item.title}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
