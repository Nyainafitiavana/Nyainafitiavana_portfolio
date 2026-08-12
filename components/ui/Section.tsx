import {ReactNode} from "react";

type SectionProps = {
    id: string;
    label: string;
    title: string;
    subtitle?: string;
    children: ReactNode;
};

export default function Section({id, label, title, subtitle, children}: SectionProps) {
    return (
        <section id={id} className="mx-auto max-w-7xl scroll-mt-[4.5rem] px-5 py-11">
            <div className="mb-6 text-center">
                <span className="section-label">{label}</span>
                <h2 className="mt-3 text-3xl font-black text-slate-50 sm:text-[2.1rem]">
                    {title.split("&")[0]}
                    {title.includes("&") && <span className="gradient-text">&{title.split("&")[1]}</span>}
                </h2>
                {subtitle && <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-400">{subtitle}</p>}
            </div>
            {children}
        </section>
    );
}
