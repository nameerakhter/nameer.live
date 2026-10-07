import MediaSlot from './media-slot'
import { CONTACT, EXPERIENCE } from './portfolio-data'

export function AboutSection() {
  return (
    <section id="about" className="pf-about">
      <div className="pf-shell">
        <p className="pf-about-hi">Hi</p>
        <h2 className="pf-about-name">I&apos;m Nameer</h2>

        <div className="pf-about-grid">
          <div className="pf-about-copy">
            <p>
              I&apos;m a software engineer based in Dehradun. I work at Prodios
              Labs building platforms that real people depend on — civic
              portals, payment infrastructure, and AI assistants that need to
              work under load.
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
            <div className="pf-open-actions">
              <a
                href={`mailto:${CONTACT.email}`}
                className="pf-btn pf-btn-fill"
              >
                Get in touch →
              </a>
              <a href={`mailto:${CONTACT.email}`} className="pf-text-link">
                {CONTACT.email}
              </a>
            </div>
          </div>

          <MediaSlot
            src="/about/studio.jpg"
            label="Nameer — anime portrait"
            aspect="3/4"
            className="pf-about-photo"
          />
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
        <div className="pf-experience-grid">
          <ol className="pf-experience-years">
            {EXPERIENCE.map((item) => (
              <li key={item.year + item.title}>{item.year}</li>
            ))}
          </ol>
          <ol className="pf-experience-roles">
            {EXPERIENCE.map((item) => (
              <li key={item.place + item.title}>
                <p className="pf-experience-place">{item.place}</p>
                <p className="pf-experience-role">{item.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
