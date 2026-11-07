import { CONTACT, RACE_COPY } from './portfolio-data'

export function DriverProfile() {
  return (
    <section
      id="about"
      className="race-section"
      aria-labelledby="driver-profile-title"
    >
      <p className="m-0 mb-3 font-timing text-caption tracking-caption text-bull-yellow uppercase">
        {RACE_COPY.aboutTitle}
      </p>
      <div className="grid gap-10 min-[900px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] min-[900px]:gap-x-16">
        <h2
          id="driver-profile-title"
          className="m-0 font-display text-[clamp(2.5rem,7vw,4rem)] font-black leading-display tracking-display text-chalk uppercase"
        >
          <span className="block">Muhammad</span>
          <span className="block">Nameer</span>
          <span className="block">Akhter</span>
        </h2>
        <div className="grid max-w-[52ch] content-start gap-3 font-display text-body/body tracking-body ">
          <p className="m-0 text-pretty text-chalk">
            I&apos;m a software engineer based in Dehradun. I work at Prodios
            Labs building platforms that real people depend on — civic portals,
            payment infrastructure, and AI assistants that need to work under
            load.
          </p>
          <p className="m-0 text-pretty text-chalk">
            My background spans full-stack development, ML research at IIT
            Roorkee, and a B.Tech in Computer Science (AIML) from UPES. I care
            about API design, automated testing, and shipping systems that
            don&apos;t break when the stakes are high.
          </p>
          <p className="m-0 text-pretty text-chalk">
            I do my best work on hard technical problems with clear product
            stakes. If that sounds like you, let&apos;s chat.
          </p>
          <a
            className="mt-3 w-fit font-display text-body-sm tracking-body-sm text-chalk-muted underline decoration-chalk-muted/55 underline-offset-[0.22em] transition-colors hover:text-chalk hover:decoration-chalk focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chalk"
            href={`mailto:${CONTACT.email}`}
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  )
}
