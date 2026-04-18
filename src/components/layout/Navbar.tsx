"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto font-headline tracking-tight">
        <a href="/" className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
          KAMESH RAVADA
        </a>
        <div className="hidden md:flex items-center gap-8">
          <Link className={`transition-colors ${pathname === "/systems" ? "text-sky-400 border-b-2 border-sky-400 pb-1 font-bold" : "text-slate-400 hover:text-white"}`} href="/systems">Work</Link>
          <Link className={`transition-colors ${pathname === "/tech" ? "text-sky-400 border-b-2 border-sky-400 pb-1 font-bold" : "text-slate-400 hover:text-white"}`} href="/tech">Tech</Link>
          <Link className={`transition-colors ${pathname === "/process" ? "text-sky-400 border-b-2 border-sky-400 pb-1 font-bold" : "text-slate-400 hover:text-white"}`} href="/process">Process</Link>
          <Link className={`transition-colors ${pathname === "/case-studies" ? "text-sky-400 border-b-2 border-sky-400 pb-1 font-bold" : "text-slate-400 hover:text-white"}`} href="/case-studies">Blog</Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 bg-surface-container-high px-3 py-1 rounded-full border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-[10px] font-label uppercase tracking-widest text-primary">
              Available for Select Projects
            </span>
          </div>
          <button className="bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed px-6 py-2 rounded-xl font-bold hover:scale-95 active:scale-90 transition-all duration-300">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}