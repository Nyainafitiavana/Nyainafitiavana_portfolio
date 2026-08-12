import {CopyShape, Lang} from "../lib/types";
import {skillGroups, chipColors} from "../lib/data";
import Section from "./ui/Section";

type SkillsProps = {
    t: CopyShape;
    lang: Lang;
};

export default function Skills({t, lang}: SkillsProps) {
    return (
        <Section id="skills" label="Tech stack" title={t.skillsTitle}>
            <div className="grid gap-5 md:grid-cols-2">
                {skillGroups[lang].map((group) => (
                    <div key={group.title} className="glass rounded-2xl p-5">
                        <h3 className="mb-3 font-black text-slate-100">{group.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((item, index) => (
                                <span key={item}
                                      className={`chip ${chipColors[index % chipColors.length]} px-3 py-1.5 text-sm`}>{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}