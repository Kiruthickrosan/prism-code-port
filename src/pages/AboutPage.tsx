import { Page, PageHeader, Reveal } from "../components/Page";
import { journey, site } from "../data/content";
import { ActionLink } from "../components/ActionLink";
import { Download } from "../components/Icons";
export function AboutPage() {
  return (
    <Page mode="left">
      <div className="shell page-shell">
        <PageHeader
          eyebrow="About / 01"
          title="Backend thinking, practical delivery."
          text="I’m a backend-focused software developer building reliable applications with Java, APIs, databases, and a strong problem-solving foundation."
        />
        <section className="about-intro">
          <Reveal>
            <p className="display-quote">
              “I turn software fundamentals into practical systems that are clear, dependable, and useful.”
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <p>
                My focus is backend development with Java, Data Structures &amp; Algorithms, REST APIs,
                and databases. I approach problems by breaking them into clear, maintainable flows.
              </p>
              <p>
                Full-stack project work gives me an understanding of how interfaces, services, and data
                fit together. My current goal is to grow as a software engineer building production-ready applications.
              </p>
              <ActionLink href={site.resume} download variant="secondary">
                <Download size={17} /> Download Resume
              </ActionLink>
            </div>
          </Reveal>
        </section>
        <section className="section about-focus" aria-label="Current engineering focus">
          <Reveal>
            <article>
              <p className="eyebrow">Currently focused on</p>
              <h2>Backend Development</h2>
              <p>Java • DSA • REST APIs • Databases</p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article>
              <p className="eyebrow">Building</p>
              <h2>Production-ready applications</h2>
              <p>Improving practical engineering and problem-solving through LeetCode practice.</p>
            </article>
          </Reveal>
        </section>
        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Developer journey</p>
              <h2>A path shaped by practice.</h2>
            </div>
          </div>
          <div className="timeline">
            {journey.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article>
                  <div className="timeline__marker">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <p>{item.year}</p>
                    <h3>{item.title}</h3>
                    <small>{item.text}</small>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </Page>
  );
}
