import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import type { Project } from "../data/content";
import { ArrowUpRight } from "./Icons";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  const [hover, setHover] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5),
    my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 150, damping: 20 }),
    ry = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 150, damping: 20 });
  const visualX = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 140, damping: 22 }),
    visualY = useSpring(useTransform(my, [0, 1], [-8, 8]), { stiffness: 140, damping: 22 });
  const glowX = useTransform(mx, (v) => `${v * 100}%`),
    glowY = useTransform(my, (v) => `${v * 100}%`);
  const move = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const cardMotion = reduce
    ? {}
    : { style: { rotateX: rx, rotateY: ry, transformPerspective: 1100 }, whileHover: { y: -7 } };
  const visualMotion = reduce
    ? {}
    : { style: project.featured ? { x: visualX, y: visualY } : { x: visualX, y: visualY, scale: 1.035 } };
  const hasCover = Boolean(project.image) && !imageFailed;
  const hasGithub = project.github.startsWith("https://");
  const hasDemo = project.demo.startsWith("https://");

  useEffect(() => {
    setImageFailed(false);
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth === 0) setImageFailed(true);
  }, [project.image]);

  return (
    <motion.article
      className={`project-card ${project.featured ? "project-card--featured" : ""}`}
      {...cardMotion}
      onMouseMove={move}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        mx.set(0.5);
        my.set(0.5);
      }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
    >
      <motion.div className={`project-visual ${hasCover ? "project-visual--cover" : ""}`} {...visualMotion}>
        {hasCover && (
          <motion.img
            ref={imageRef}
            className="project-cover"
            src={project.image}
            alt={`${project.title} project cover`}
            loading="lazy"
            decoding="async"
            width={1600}
            height={900}
            onError={() => setImageFailed(true)}
            animate={hover && !reduce ? { scale: 1.05 } : { scale: 1 }}
            transition={{ type: "spring", stiffness: 170, damping: 24 }}
          />
        )}
        <div className="project-visual__grid" aria-hidden="true" />
        {!hasCover && (
          <motion.div
            className="project-terminal"
            animate={hover && !reduce ? { rotate: -1.5, scale: 1.025 } : { rotate: -3, scale: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 19 }}
          >
            <span>system://{project.slug}</span>
            <strong>{project.title}</strong>
            <small>{project.stack.join(" · ")}</small>
          </motion.div>
        )}
      </motion.div>
      <div className="project-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
        <ul>
          {project.features.slice(0, project.featured ? 4 : 3).map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="tags">
          {project.stack.map((s, i) => (
            <motion.span
              key={s}
              animate={hover && !reduce ? { y: -2 } : { y: 0 }}
              transition={{ delay: i * 0.025 }}
            >
              {s}
            </motion.span>
          ))}
        </div>
        <div className="project-actions">
          <motion.button
            className="text-action"
            onClick={() => onOpen(project)}
            animate={hover && !reduce ? { x: 4 } : { x: 0 }}
          >
            Explore Project <ArrowUpRight size={16} />
          </motion.button>
          {hasGithub && <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a>}
          {hasDemo && <a className="project-link" href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo <ArrowUpRight size={14} /></a>}
        </div>
        <motion.div
          className="project-glow"
          style={{ left: glowX, top: glowY }}
          animate={{ opacity: hover ? 0.75 : 0 }}
        />
      </div>
    </motion.article>
  );
}
