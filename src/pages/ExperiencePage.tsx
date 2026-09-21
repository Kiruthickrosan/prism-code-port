import { motion, useReducedMotion } from "framer-motion";
import { Page, PageHeader, Reveal } from "../components/Page";
import { experience } from "../data/content";

export function ExperiencePage() {
  const reduceMotion = useReducedMotion();

  return (
    <Page mode="left">
      <div className="shell page-shell">
        <PageHeader
          eyebrow="Experience / 02"
          title="Experience grounded in delivery."
          text="Professional work across software engineering, financial products, and high-accuracy data operations."
        />
        <section className="experience-list" aria-label="Professional experience timeline">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.08}>
              <motion.article
                className="experience-card"
                {...(!reduceMotion ? { whileHover: { y: -4 } } : {})}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
              >
                <div className="experience-card__rail" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="experience-card__body">
                  <div className="experience-card__head">
                    <div>
                      <p className="eyebrow">{item.company}</p>
                      <h2>{item.role}</h2>
                    </div>
                    <div className="experience-card__meta"><span>{item.period}</span></div>
                  </div>
                  <ul>
                    {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </section>
      </div>
    </Page>
  );
}