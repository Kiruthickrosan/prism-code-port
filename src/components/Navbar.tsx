import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "../data/content";
import { Download, Menu, X } from "./Icons";

const links = [{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/experience",label:"Experience"},{to:"/projects",label:"Projects"},{to:"/skills",label:"Skills"},{to:"/articles",label:"Articles"},{to:"/coding-profiles",label:"Coding Profiles"},{to:"/contact",label:"Contact"}] as const;

export function Navbar(){
  const [open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false);
  const reduceMotion=useReducedMotion();
  const path=useRouterState({select:s=>s.location.pathname});
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>24);fn();window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn)},[]);
  useEffect(()=>setOpen(false),[path]);
  return <>
    <header className={`navbar ${scrolled?"navbar--scrolled":""}`}>
      <Link to="/" className="brand" aria-label="Home"><span>{site.shortName}</span><strong>{site.name}</strong></Link>
      <nav className="navlinks" aria-label="Main navigation">{links.map(l=><Link key={l.to} to={l.to} className={path===l.to?"active":""} aria-current={path===l.to?"page":undefined}>{l.label}</Link>)}</nav>
      <motion.a className="resume-link" href={site.resume} download whileHover={reduceMotion?{}:{y:-2}} whileTap={reduceMotion?{}:{scale:.98}}><Download size={16}/> Resume</motion.a>
      <motion.button className="menu-button" onClick={()=>setOpen(current=>!current)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open?"Close navigation":"Open navigation"} whileTap={reduceMotion?{}:{scale:.94}}>{open?<X/>:<Menu/>}</motion.button>
    </header>
    <AnimatePresence>{open&&<motion.nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation" initial={reduceMotion?false:{opacity:0,y:-10,scale:.985}} animate={{opacity:1,y:0,scale:1}} exit={reduceMotion?{opacity:0}:{opacity:0,y:-8,scale:.985}} transition={{duration:.24,ease:[.22,1,.36,1]}}>{links.map((l,index)=><motion.div key={l.to} initial={reduceMotion?false:{opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{delay:index*.025}}><Link to={l.to} className={path===l.to?"active":""} aria-current={path===l.to?"page":undefined}>{l.label}</Link></motion.div>)}<a className="mobile-menu__resume" href={site.resume} download><Download size={16}/> Download Resume</a></motion.nav>}</AnimatePresence>
  </>
}
