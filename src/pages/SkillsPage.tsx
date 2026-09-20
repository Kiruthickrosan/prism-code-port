import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SkillIcon } from "../components/SkillIcon";
import { Page, PageHeader, Reveal } from "../components/Page";
import { skills } from "../data/content";

export function SkillsPage() {
  const allSkills = skills.flatMap((group) => group.items.map((item) => ({ ...item, category: group.category })));
  const [active, setActive] = useState(allSkills[0]);
  const reduceMotion = useReducedMotion();

  return (
    <Page mode="up">
      <div className="shell page-shell">
        <PageHeader eyebrow="Skills / 04" title="A connected engineering toolkit." text="Languages, frameworks, databases, tools, and computer science foundations used to build dependable software." />
        <section className="skill-lab" aria-label="Interactive technology skills">
          <div className="constellation">
            {allSkills.map((item) => (
              <motion.button
                key={`${item.category}-${item.name}`}
                className={`skill-card skill-card--${item.icon}${active?.name === item.name && active?.category === item.category ? " active" : ""}`}
                onMouseEnter={() => setActive(item)}
                onFocus={() => setActive(item)}
                {...(!reduceMotion ? { whileHover: { y: -5, scale: 1.015 }, whileFocus: { y: -3 } } : {})}
                transition={{ type: "spring", stiffness: 320, damping: 23 }}
              >
                <motion.span className="skill-icon-motion" {...(!reduceMotion ? { whileHover: { y: -3, scale: 1.08 } } : {})}>
                  <SkillIcon icon={item.icon} name={item.name} />
                </motion.span>
                <strong>{item.name}</strong>
                <small>{item.category}</small>
              </motion.button>
            ))}
          </div>
          <aside className="skill-inspector">
            {active && <SkillIcon icon={active.icon} name={active.name} />}
            <span>Selected technology</span>
            <h2>{active?.name}</h2>
            <p>{active?.note}</p>
            <small>Category · {active?.category}</small>
          </aside>
        </section>
        <section className="section skill-groups" aria-label="Skills by category">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.04}>
              <article>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <motion.li key={item.name} className={`skill-card skill-card--${item.icon}`} {...(!reduceMotion ? { whileHover: { y: -3 } } : {})} transition={{ type: "spring", stiffness: 340, damping: 24 }}>
                      <SkillIcon icon={item.icon} name={item.name} />
                      <div><strong>{item.name}</strong><small>{item.note}</small></div>
                    </motion.li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </section>
      </div>
    </Page>
  );
}
