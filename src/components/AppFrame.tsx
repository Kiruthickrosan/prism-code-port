import { motion, useReducedMotion, useScroll } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { Background } from "./Background";
import { CursorGlow } from "./CursorGlow";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function AppFrame({children}:{children:React.ReactNode}){
  const {scrollYProgress}=useScroll();
  const reduce=useReducedMotion();
  const path=useRouterState({select:s=>s.location.pathname});
  return <><Background/><CursorGlow/><motion.div className="scroll-progress" style={{scaleX:scrollYProgress}}/><Navbar/><div className="app-content">{!reduce&&<motion.div key={path} className="route-sweep" initial={{scaleX:1}} animate={{scaleX:0}} transition={{duration:.58,ease:[.76,0,.24,1]}}/>}{children}</div><Footer/></>
}
