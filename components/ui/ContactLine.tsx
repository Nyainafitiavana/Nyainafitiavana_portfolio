import {ReactNode} from "react";

type ContactLineProps = {
    icon: ReactNode;
    value: string;
    href?: string;
};

export default function ContactLine({icon, value, href}: ContactLineProps) {
    const content = (
        <span
            className="glass flex items-center gap-3 rounded-xl p-3.5 text-sm text-slate-300 transition hover:border-cyan-300/30">
            <span className="text-cyan-300">{icon}</span>
            <span className="break-all">{value}</span>
        </span>
    );

    if (!href) return content;
    return (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined}>
            {content}
        </a>
    );
}
