import {ExternalLink} from "lucide-react";
import {CopyShape, Lang} from "../lib/types";
import {projects, chipColors} from "../lib/data";
import Section from "./ui/Section";

type ProjectsProps = {
    t: CopyShape;
    lang: Lang;
};

export default function Projects({t, lang}: ProjectsProps) {
    return (
        <Section id="projects" label="Realisations" title={t.projectsTitle}>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {projects[lang].map(([title, description, tags]) => (
                    <article key={title}
                             className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-cyan-300/30">
                        <ExternalLink className="mb-4 text-cyan-300" size={20}/>
                        <h3 className="text-lg font-black text-slate-50">{title}</h3>
                        <p className="mt-3 min-h-16 text-sm leading-6 text-slate-400">{description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
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