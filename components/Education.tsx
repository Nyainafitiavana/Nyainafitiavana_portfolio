import {GraduationCap} from "lucide-react";
import {CopyShape, Lang} from "../lib/types";
import {education} from "../lib/data";
import Section from "./ui/Section";

type EducationProps = {
    t: CopyShape;
    lang: Lang;
};

export default function Education({t, lang}: EducationProps) {
    return (
        <Section id="education" label="Formation" title={t.educationTitle}>
            <div className="grid gap-5 md:grid-cols-3">
                {education[lang].map((item) => (
                    <div key={item} className="glass rounded-2xl p-5">
                        <GraduationCap className="mb-4 text-yellow-300"/>
                        <p className="font-bold leading-7 text-slate-200">{item}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}