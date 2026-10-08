import { CONTACT, EXPERIENCE } from './portfolio-data'

export function AboutSection() {
  return (
    <section id="about" className="pf-about" aria-labelledby="about-name">
      <div className="pf-shell pf-about-inner">
        <h2 id="about-name" className="pf-about-name">
          <span>Muhammad</span>
          <span>Nameer</span>
          <span>Akhter</span>
        </h2>
        <div className="pf-about-copy">
          <p>
            I&apos;m a software engineer based in Dehradun. I work at Prodios
            Labs building platforms that real people depend on — civic portals,
            payment infrastructure, and AI assistants that need to work under
            load.
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
          <a className="pf-about-mail" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
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
        <ol className="pf-experience-list">
          {EXPERIENCE.map((item) => (
            <li key={item.place + item.title} className="pf-experience-row">
              <span className="pf-experience-year">{item.year}</span>
              <span className="pf-experience-place">{item.place}</span>
              <span className="pf-experience-role">{item.title}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
