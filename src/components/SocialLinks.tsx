import { motion, useReducedMotion } from "framer-motion";
import { socials } from "../data/content";
import { SocialIcon } from "./SocialIcon";

export function SocialLinks({ compact = false, colorful = false }: { compact?: boolean; colorful?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`socials ${compact ? "socials--compact" : ""} ${colorful ? "socials--colorful" : ""}`}>
      {socials.map((item) => (
        <motion.a
          key={item.label}
          className={`social-link social-link--${item.icon}`}
          href={item.href}
          {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          aria-label={item.label}
          data-tooltip={item.label}
          whileHover={reduceMotion ? {} : { y: -3, scale: 1.08 }}
          whileFocus={reduceMotion ? {} : { y: -2, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 390, damping: 24 }}
        >
          <SocialIcon icon={item.icon} />
        </motion.a>
      ))}
    </div>
  );
}
