import { lazy, Suspense } from "react";
const ThreeScene=lazy(()=>import("./ThreeScene"));
export function HeroScene(){return <Suspense fallback={<div className="three-fallback"><span>Initializing topology</span></div>}><ThreeScene/></Suspense>}
