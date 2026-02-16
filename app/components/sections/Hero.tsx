'use client';

import {Translations} from "@/app/types";

interface HeroProps {
    language: string;
    translations: Translations;
}

export default function Hero({ language, translations }: HeroProps) {
    return (
        <section id="accueil" className="pt-32 pb-20 gradient-bg text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium mb-6 border border-white/20">
                            <i className="fas fa-code mr-2"></i>
                            <span>{translations[language]?.['hero-badge'] || 'Full Stack Developer'}</span>
                        </div>
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
                            dangerouslySetInnerHTML={{
                                __html: translations[language]?.['hero-name'] || 'Ny Aina Fitiavana <br>FITAHIANTSOA'
                            }}
                        />
                        <h2 className="text-2xl md:text-3xl mb-6 text-indigo-200 font-light">
                            {translations[language]?.['hero-experience'] || '4+ years of experience'}
                        </h2>
                        <p className="text-lg mb-8 text-gray-200 max-w-xl">
                            {translations[language]?.['hero-description'] || 'Full Stack Developer passionate about creating performant and scalable web applications.'}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#contact" className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                                <i className="fas fa-paper-plane"></i>
                                <span>{translations[language]?.['hero-cta'] || 'Contact me'}</span>
                            </a>
                            <a href={translations[language]?.['cv-link'] || '/cv/ny_aina_fitiavana_fitahiantsoa_cv-en.pdf'} target="_blank" className="border-2 border-white/30 backdrop-blur-lg text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition-all duration-300 flex items-center gap-2">
                                <i className="fas fa-download"></i>
                                <span>{translations[language]?.['hero-download'] || 'Download CV'}</span>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                            <div className="space-y-5">
                                <div className="flex items-center space-x-4 group hover:translate-x-2 transition">
                                    <div className="icon-circle">
                                        <i className="fas fa-envelope text-sm"></i>
                                    </div>
                                    <span className="text-sm">ainafitiavana.project@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-4 group hover:translate-x-2 transition">
                                    <div className="icon-circle">
                                        <i className="fas fa-phone-alt text-sm"></i>
                                    </div>
                                    <span className="text-sm">+261 34 47 237 02 / +261 34 20 348 90</span>
                                </div>
                                <div className="flex items-center space-x-4 group hover:translate-x-2 transition">
                                    <div className="icon-circle">
                                        <i className="fab fa-linkedin-in text-sm"></i>
                                    </div>
                                    <span className="text-sm">/ny-aina-fitiavana</span>
                                </div>
                                <div className="flex items-center space-x-4 group hover:translate-x-2 transition">
                                    <div className="icon-circle">
                                        <i className="fab fa-github text-sm"></i>
                                    </div>
                                    <span className="text-sm">/Nyainafitiavana</span>
                                </div>
                                <div className="flex items-center space-x-4 group hover:translate-x-2 transition">
                                    <div className="icon-circle">
                                        <i className="fas fa-map-marker-alt text-sm"></i>
                                    </div>
                                    <span className="text-sm">Madagascar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}