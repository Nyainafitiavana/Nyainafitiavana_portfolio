import {CopyShape} from "../lib/types";

type FooterProps = {
    t: CopyShape;
};

export default function Footer({t}: FooterProps) {
    return (
        <footer className="border-t border-cyan-300/10 px-5 py-8">
            <div
                className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
                <p className="font-bold text-slate-300">Ny Aina Fitiavana Fitahiantsoa</p>
                <p>{t.footer}</p>
            </div>
        </footer>
    );
}
