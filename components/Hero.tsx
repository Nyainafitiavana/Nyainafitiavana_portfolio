import dynamic from "next/dynamic";
import {ArrowDown, Code2, Download, Mail, MapPin, Phone} from "lucide-react";
import {CopyShape, Lang} from "../lib/types";
import {contact, heroTechs, chipColors} from "../lib/data";

const Globe = dynamic(() => import("./Globe"), {ssr: false});

type HeroProps = {
    t: CopyShape;
    lang: Lang;
};

export default function Hero({t, lang}: HeroProps) {
    return (
        <section
            className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-5 pb-10 pt-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
                <div className="section-label mb-6">{t.status}</div>
                <h1 className="text-5xl font-black leading-[0.95] tracking-normal text-slate-50 sm:text-6xl lg:text-[4.2rem]">
                    NY AINA
                    <span className="block gradient-text">FITIAVANA</span>
                    <span
                        className="block text-2xl font-extrabold text-slate-300 sm:text-3xl lg:text-[1.85rem]">FITAHIANTSOA</span>
                </h1>
                <div className="mt-5 flex items-center gap-4 text-base font-black text-cyan-300">
                    <span className="h-px w-12 bg-gradient-to-r from-cyan-400 to-violet-500"/>
                    {t.role}
                </div>
                <p className="mt-5 max-w-xl text-[0.95rem] leading-6 text-slate-300">{t.intro}</p>
                <p className="mt-2 max-w-xl text-[0.95rem] leading-6 text-slate-300">{t.specialty}</p>

                <div className="mt-5 flex max-w-xl flex-wrap gap-2">
                    {heroTechs.map((item, index) => (
                        <span key={item}
                              className={`chip ${chipColors[index % chipColors.length]} px-3 py-1.5 text-xs font-bold sm:text-sm`}>
                            {item}
                        </span>
                    ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400 sm:text-sm">
                    <span className="inline-flex items-center gap-2"><MapPin size={16}
                                                                             className="text-orange-400"/> {contact.location}</span>
                    <span className="inline-flex items-center gap-2"><Phone size={16}
                                                                            className="text-cyan-300"/> {contact.phone1}</span>
                    <span className="inline-flex items-center gap-2"><Mail size={16}
                                                                           className="text-slate-200"/> {contact.email}</span>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                    <a href={contact.github} target="_blank"
                       className="inline-flex h-10 items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 px-4 text-sm font-black text-white shadow-glow transition hover:scale-[1.02]">
                        <Code2 size={17}/> {t.github}
                    </a>
                    <a href="#contact"
                       className="inline-flex h-10 items-center gap-2.5 rounded-xl border border-cyan-400/35 px-4 text-sm font-black text-cyan-300 transition hover:bg-cyan-400/10">
                        <Mail size={17}/> {t.contactMe}
                    </a>
                    <a href={lang === "fr" ? "/CV_Ny_Aina_Fitiavana_Fitahiantsoa_fr.pdf" : "/CV_Ny_Aina_Fitiavana_Fitahiantsoa_en.pdf"}
                       target="_blank"
                       className="inline-flex h-10 items-center gap-2.5 rounded-xl border border-emerald-400/35 px-4 text-sm font-black text-emerald-300 transition hover:bg-emerald-400/10">
                        <Download size={17}/> {t.download}
                    </a>
                </div>
            </div>

            <div className="relative">
                <Globe/>
            </div>

            <a href="#about"
               className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.68rem] uppercase tracking-[0.35em] text-slate-500 lg:flex">
                {t.discover}
                <ArrowDown size={20} className="text-cyan-300"/>
            </a>
        </section>
    );
}
