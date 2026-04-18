"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <>
      <footer className="w-full border-t border-white/5 bg-[#10131a]">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 max-w-7xl mx-auto">
          <div className="space-y-4 mb-8 md:mb-0">
            <div className="font-headline font-bold text-white text-2xl tracking-tighter">
              KAMESH.RAVADA
            </div>
            <p className="font-body text-sm text-slate-500">
              © {new Date().getFullYear()} Built by Kamesh Ravada with ❤️
            </p>
          </div>
          <div className="flex gap-10">
            <a className="text-slate-500 hover:text-sky-300 transition-colors font-body text-sm" href="#">Github</a>
            <a className="text-slate-500 hover:text-sky-300 transition-colors font-body text-sm" href="#">LinkedIn</a>
            <a className="text-slate-500 hover:text-sky-300 transition-colors font-body text-sm" href="#">Twitter</a>
            <a className="text-slate-500 hover:text-sky-300 transition-colors font-body text-sm" href="#">Docs</a>
          </div>
        </div>
      </footer>
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-2xl rounded-t-2xl border-t border-white/10 shadow-[0_-4px_20px_rgba(105,218,255,0.08)] flex justify-around items-center px-4 py-3 pb-safe">
        <a className={`flex flex-col items-center justify-center rounded-xl px-4 py-1 transition-colors ${pathname === "/" ? "bg-sky-400/20 text-sky-400" : "text-slate-500 hover:text-slate-300"}`} href="/">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="font-label text-[10px] uppercase mt-1">Home</span>
        </a>
        <a className={`flex flex-col items-center justify-center rounded-xl px-4 py-1 transition-colors ${pathname === "/systems" ? "bg-sky-400/20 text-sky-400" : "text-slate-500 hover:text-slate-300"}`} href="/systems">
          <span className="material-symbols-outlined">code</span>
          <span className="font-label text-[10px] uppercase mt-1">Work</span>
        </a>
        <a className={`flex flex-col items-center justify-center rounded-xl px-4 py-1 transition-colors ${pathname === "/tech" ? "bg-sky-400/20 text-sky-400" : "text-slate-500 hover:text-slate-300"}`} href="/tech">
          <span className="material-symbols-outlined">memory</span>
          <span className="font-label text-[10px] uppercase mt-1">Tech</span>
        </a>
        <a className="flex flex-col items-center justify-center rounded-xl px-4 py-1 transition-colors text-slate-500 hover:text-slate-300" href="mailto:kameshravada@gmail.com">
          <span className="material-symbols-outlined">send</span>
          <span className="font-label text-[10px] uppercase mt-1">Contact</span>
        </a>
      </div>
    </>
  );
}