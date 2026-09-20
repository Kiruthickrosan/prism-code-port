import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
export function CursorGlow() {
  const x=useMotionValue(-100), y=useMotionValue(-100); const sx=useSpring(x,{stiffness:180,damping:28}), sy=useSpring(y,{stiffness:180,damping:28}); const [active,setActive]=useState(false);
  useEffect(()=>{ if(!window.matchMedia("(pointer:fine)").matches) return; const move=(e:MouseEvent)=>{x.set(e.clientX);y.set(e.clientY)}; const over=(e:MouseEvent)=>setActive(Boolean((e.target as HTMLElement).closest("a,button,[data-cursor]"))); window.addEventListener("mousemove",move);window.addEventListener("mouseover",over);return()=>{window.removeEventListener("mousemove",move);window.removeEventListener("mouseover",over)}},[x,y]);
  return <motion.div className={`cursor-glow ${active?"is-active":""}`} style={{x:sx,y:sy}} aria-hidden="true"/>;
}
