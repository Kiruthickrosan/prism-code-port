import { lazy, Suspense } from "react";
import { ClientOnly } from "@tanstack/react-router";
const ThreeScene=lazy(()=>import("./ThreeScene"));
export function HeroScene(){const fallback=<div className="three-fallback"><span>Initializing topology</span></div>;return <ClientOnly fallback={fallback}><Suspense fallback={fallback}><ThreeScene/></Suspense></ClientOnly>}
