import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site, projects, skills } from "../data/content";
import { ActionLink } from "../components/ActionLink";
import { Download, ArrowUpRight } from "../components/Icons";
import { Page, Reveal } from "../components/Page";
import { HeroScene } from "../components/HeroScene";
import { SocialLinks } from "../components/SocialLinks";
function HeroBeat({
  children,
  delay,
  className = "",
}: {
  children: ReactNode;
  delay: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.72, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
export function HomePage() {
  const reduce = useReducedMotion();
  return (
    <Page mode="home">
      <section className="hero shell">
        <div className="hero__copy">
          <HeroBeat delay={0.1}>
            <p className="eyebrow">Backend Software Developer · Java · DSA</p>
          </HeroBeat>
          <HeroBeat delay={0.18}>
            <h1>
              <span>Kiruthickrosan K.</span>
              <span className="sr-only"> — Backend Software Developer</span>
            </h1>
          </HeroBeat>
          <HeroBeat delay={0.3}>
            <p className="hero__intro hero__statement">
              Building reliable backend systems, solving problems with Java &amp; DSA, and creating
              practical software products.
            </p>
          </HeroBeat>
          <HeroBeat delay={0.42}>
            <div className="hero__actions">
              <ActionLink to="/projects">
                View Projects <ArrowUpRight size={17} />
              </ActionLink>
              <ActionLink href={site.resume} download variant="secondary">
                <Download size={17} /> Download Resume
              </ActionLink>
            </div>
          </HeroBeat>
          <HeroBeat delay={0.5}>
            <SocialLinks compact colorful />
            <div className="availability">
              <i /> Open to software engineering opportunities
            </div>
          </HeroBeat>
        </div>
        <motion.div
          className="hero__scene"
          initial={reduce ? false : { opacity: 0, scale: 0.96, rotateY: -4 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.1, delay: reduce ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroScene />
        </motion.div>
      </section>
      <section className="signal-strip">
        <div className="shell">
          <span>Current focus</span>
          <strong>Backend engineering</strong>
          <span>Core stack</span>
          <strong>Java · REST · SQL</strong>
          <span>Practice</span>
          <strong>DSA &amp; problem solving</strong>
        </div>
      </section>
      <section className="section shell">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Systems with purpose.</h2>
            </div>
            <ActionLink to="/projects" variant="ghost">
              All projects <ArrowUpRight size={16} />
            </ActionLink>
          </div>
        </Reveal>
        <div className="home-projects">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <article>
                <span>0{i + 1}</span>
                <div>
                  <p>{p.eyebrow}</p>
                  <h3>{p.title}</h3>
                  <small>{p.summary}</small>
                </div>
                <ArrowUpRight />
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section section--tint">
        <div className="shell focus-grid">
          <Reveal>
            <div>
              <p className="eyebrow">Engineering toolkit</p>
              <h2>
                Strong foundations.
                <br />
                Modern delivery.
              </h2>
              <p className="section-copy">
                A practical stack centered on backend thinking, clean interfaces, and reliable data.
              </p>
              <ActionLink to="/skills" variant="secondary">
                Explore skills
              </ActionLink>
            </div>
          </Reveal>
          <div className="skill-preview">
            {skills.slice(0, 4).map((g, i) => (
              <Reveal key={g.category} delay={i * 0.06}>
                <div>
                  <span>0{i + 1}</span>
                  <h3>{g.category}</h3>
                  <p>{g.items.map((x) => x.name).join(" · ")}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section shell">
        <Reveal>
          <div className="cta-band">
            <div>
              <p className="eyebrow">A good system starts with a conversation</p>
              <h2>Have an idea or opportunity?</h2>
              <p>Let’s build something meaningful, useful, and engineered to last.</p>
            </div>
            <div>
              <ActionLink to="/contact">Contact Me</ActionLink>
              <ActionLink href={site.resume} download variant="secondary">
                Download Resume
              </ActionLink>
            </div>
          </div>
        </Reveal>
      </section>
    </Page>
  );
}
