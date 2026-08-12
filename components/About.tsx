import {CheckCircle2, Languages, Sparkles} from "lucide-react";
import {CopyShape} from "../lib/types";
import Section from "./ui/Section";
import InfoPanel from "./ui/InfoPanel";

type AboutProps = {
    t: CopyShape;
};

export default function About({t}: AboutProps) {
    return (
        <Section id="about" label="A propos" title={t.aboutTitle}>
            <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="glass rounded-2xl p-6">
                    <p className="text-base leading-7 text-slate-300">{t.aboutText}</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        {t.metrics.map((metric) => (
                            <div key={metric}
                                 className="rounded-xl border border-cyan-300/10 bg-cyan-300/5 p-3 text-sm font-bold text-slate-200">
                                <CheckCircle2 className="mb-3 text-cyan-300" size={20}/>
                                {metric}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid gap-5">
                    <InfoPanel icon={<Languages size={20}/>} title={t.languages}
                               lines={["Francais: courant", "English: professional B2/C1"]}/>
                    <InfoPanel icon={<Sparkles size={20}/>} title={t.certifications}
                               lines={["Duolingo English Test (DET), 2026", "Mobilite internationale", "Disponibilite immediate"]}/>
                </div>
            </div>
        </Section>
    );
}
