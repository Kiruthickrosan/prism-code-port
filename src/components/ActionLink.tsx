import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const MotionLink = motion.create(Link);
type Props = { children: ReactNode; to?: string; href?: string; download?: boolean; variant?: "primary" | "secondary" | "ghost"; className?: string };
export function ActionLink({ children, to, href, download, variant = "primary", className = "" }: Props) {
  const reduce = useReducedMotion();
  const motionProps = reduce ? {} : { whileHover: { y: -2, scale: 1.015 }, whileTap: { scale: 0.98 } };
  const classes = `button button--${variant} ${className}`;
  if (to) return <MotionLink to={to} className={classes} {...motionProps}>{children}</MotionLink>;
  return <motion.a href={href} className={classes} download={download} target={download ? undefined : "_blank"} rel="noreferrer" {...motionProps}>{children}</motion.a>;
}
