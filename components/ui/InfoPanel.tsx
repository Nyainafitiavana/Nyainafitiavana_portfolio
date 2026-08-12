import {ReactNode} from "react";

type InfoPanelProps = {
    icon: ReactNode;
    title: string;
    lines: string[];
};

export default function InfoPanel({icon, title, lines}: InfoPanelProps) {
    return (
        <div className="glass rounded-2xl p-5">
            <div className="mb-3 flex items-center gap-3 font-black text-cyan-300">
                {icon}
                <h3>{title}</h3>
            </div>
            <div className="grid gap-3">
                {lines.map((line) => (
                    <p key={line} className="rounded-xl bg-slate-950/35 px-4 py-2.5 text-sm text-slate-300">
                        {line}
                    </p>
                ))}
            </div>
        </div>
    );
}
