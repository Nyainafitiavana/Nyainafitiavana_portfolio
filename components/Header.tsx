"use client";

import {useMemo, useState} from "react";
import {Code2, Menu, X} from "lucide-react";
import {CopyShape, Lang} from "../lib/types";

type HeaderProps = {
    t: CopyShape;
    lang: Lang;
    setLang: (lang: Lang) => void;
    githubUrl: string;
};

export default function Header({t, lang, setLang, githubUrl}: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    const nav = useMemo(
        () => [
            ["#home", t.nav[0]],
            ["#about", t.nav[1]],
            ["#skills", t.nav[2]],
            ["#experience", t.nav[3]],
            ["#projects", t.nav[4]],
            ["#contact", t.nav[5]]
        ],
        [t]
    );

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-300/10 bg-night/75 backdrop-blur-xl">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
                <a href="#home" className="flex items-center gap-3 font-black tracking-wide">
                    <span
                        className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 text-base text-white shadow-glow">N</span>
                    <span className="gradient-text text-sm sm:text-base">NYAINA.DEV</span>
                </a>

                <div className="hidden items-center gap-7 text-sm font-semibold text-slate-400 lg:flex">
                    {nav.map(([href, label]) => (
                        <a key={href} href={href} className="transition hover:text-cyan-300">
                            {label}
                        </a>
                    ))}
                </div>

                <div className="hidden items-center gap-3 sm:flex">
                    <a href={githubUrl} target="_blank"
                       className="inline-flex h-9 items-center gap-2 rounded-xl border border-cyan-400/35 px-4 text-sm font-bold text-cyan-300 transition hover:bg-cyan-400/10">
                        <Code2 size={16}/> GitHub
                    </a>
                    <div className="flex rounded-xl border border-slate-700 bg-slate-900/80 p-1 text-xs font-black">
                        {(["fr", "en"] as Lang[]).map((item) => (
                            <button key={item} onClick={() => setLang(item)}
                                    className={`rounded-lg px-3 py-1.5 uppercase transition ${lang === item ? "bg-cyan-500/20 text-cyan-300" : "text-slate-500"}`}>
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                <button aria-label="Menu" onClick={() => setMenuOpen((value) => !value)}
                        className="grid size-11 place-items-center rounded-xl border border-slate-700 bg-slate-900/80 lg:hidden">
                    {menuOpen ? <X size={20}/> : <Menu size={20}/>}
                </button>
            </nav>
            {menuOpen && (
                <div className="border-t border-cyan-300/10 bg-night px-5 py-4 lg:hidden">
                    <div className="mx-auto grid max-w-7xl gap-3">
                        {nav.map(([href, label]) => (
                            <a key={href} href={href} onClick={() => setMenuOpen(false)}
                               className="rounded-lg px-3 py-2 text-slate-300 hover:bg-cyan-400/10">
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
