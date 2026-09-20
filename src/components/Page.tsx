import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Page({ children, mode = "up" }: { children: ReactNode; mode?: "home" | "left" | "depth" | "up" | "blur" }) {
  const reduce = useReducedMotion();
  const initial = reduce ? { opacity: 0 } : mode === "left" ? { opacity: 0, x: -24 } : mode === "depth" ? { opacity: 0, scale: .97, y: 12 } : mode === "blur" ? { opacity: 0, filter: "blur(8px)", y: 10 } : mode === "home" ? { opacity: 0, scale: .985 } : { opacity: 0, y: 18 };
  return <motion.main initial={initial} animate={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }} transition={{ duration: reduce ? .12 : mode === "home" ? .8 : .48, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.main>;
}
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={{ opacity: 0, y: reduce ? 0 : 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .55, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
export function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <header className="page-head"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{text}</p></header>;
}
