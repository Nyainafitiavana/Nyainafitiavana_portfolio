import {BriefcaseBusiness} from "lucide-react";
import {CopyShape, Lang} from "../lib/types";
import {experiences, chipColors} from "../lib/data";
import Section from "./ui/Section";

type ExperienceProps = {
    t: CopyShape;
    lang: Lang;
};

export default function Experience({t, lang}: ExperienceProps) {
    return (
        <Section id="experience" label="Parcours professionnel" title={t.experienceTitle}>
            <div className="space-y-5">
                {experiences[lang].map((exp) => (
                    <article key={`${exp.company}-${exp.period}`} className="glass rounded-2xl p-5">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                            <div>
                                <p className="text-sm font-black uppercase tracking-wide text-cyan-300">{exp.company}</p>
                                <h3 className="mt-1 text-xl font-black text-slate-50">{exp.role}</h3>
                                <p className="mt-1 text-sm text-slate-500">{exp.period}</p>
                            </div>
                            <span
                                className="rounded-full border border-violet-400/25 px-3 py-1 text-xs font-black text-violet-300">{exp.type}</span>
                        </div>
                        <ul className="mt-4 grid gap-2.5 text-sm leading-6 text-slate-300">
                            {exp.details.map((detail) => (
                                <li key={detail} className="flex gap-3">
                                    <BriefcaseBusiness className="mt-1 shrink-0 text-cyan-300" size={16}/>
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {exp.tags.map((tag, index) => (
                                <span key={tag}
                                      className={`chip ${chipColors[index % chipColors.length]} px-3 py-1 text-xs font-bold`}>{tag}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}