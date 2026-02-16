'use client';

import {Translations} from "@/app/types";

interface AboutProps {
    language: string;
    translations: Translations;
}

export default function About({ language, translations }: AboutProps) {
    return (
        <section id="apropos" className="py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            {translations[language]?.['about-badge'] || 'About'}
          </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">
                        {translations[language]?.['about-title'] || 'Passionate Full Stack Developer'}
                    </h2>
                    <div className="prose prose-lg text-gray-600">
                        <p
                            className="leading-relaxed"
                            dangerouslySetInnerHTML={{
                                __html: translations[language]?.['about-text'] || 'With over 4 years of experience in web development, I combine technical expertise and business vision to create innovative solutions.'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}