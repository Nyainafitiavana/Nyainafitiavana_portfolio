'use client';

import {Translations} from "@/app/types";

interface ExperiencesProps {
    language: string;
    translations: Translations;
}

export default function Experiences({ language, translations }: ExperiencesProps) {
    return (
        <section id="experiences" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            {translations[language]?.['exp-badge'] || 'Career'}
          </span>
                    <h2 className="text-4xl font-bold text-gray-900">
                        {translations[language]?.['exp-title'] || 'Professional Experiences'}
                    </h2>
                </div>

                <div className="space-y-8">
                    {/* INGENOSYA - CDI (Fév 2023 - Présent) */}
                    <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all border border-gray-100">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Full Stack Web Developer</h3>
                                    <p className="text-indigo-600 font-medium">
                                        {translations[language]?.['exp-cdi-company'] || 'INGENOSYA MADAGASCAR · Permanent'}
                                    </p>
                                </div>
                            </div>
                            <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl font-semibold mt-4 md:mt-0 flex items-center gap-2">
                <i className="far fa-calendar-alt"></i>
                <span>{translations[language]?.['exp-cdi-date'] || 'Feb 2023 – Present'}</span>
              </span>
                        </div>

                        <div className="space-y-4 mt-6">
                            {/* Projet 1: DEFIS (Agriculture Inclusive) */}
                            <div className="project-card bg-gray-50 p-6 rounded-xl border-l-4 border-green-500">
                                <div className="flex items-start gap-3 mb-3">
                                    <span className="text-2xl">🌾</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            {translations[language]?.['exp-project1-title'] || 'Agricultural Management Platform'}
                                        </h4>
                                        <span className="badge-modern bg-green-100 text-green-700 mt-1 inline-block">
                      {translations[language]?.['exp-project1-badge'] || 'International Program'}
                    </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-600 ml-8 list-disc">
                                    <li>{translations[language]?.['exp-project1-desc1'] || 'API development and integration for system interconnection'}</li>
                                    <li>{translations[language]?.['exp-project1-desc2'] || 'Frontend application development'}</li>
                                    <li>{translations[language]?.['exp-project1-desc3'] || 'Bug fixing and feature optimization'}</li>
                                </ul>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {['Symfony', 'React.js', 'PostgreSQL', 'Bootstrap'].map((tag) => (
                                        <span key={tag} className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg text-xs font-medium">
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>

                            {/* Projet 2: CARLY TAXI */}
                            <div className="project-card bg-gray-50 p-6 rounded-xl border-l-4 border-yellow-500">
                                <div className="flex items-start gap-3 mb-3">
                                    <span className="text-2xl">🚖</span>
                                    <h4 className="font-semibold text-gray-800">
                                        {translations[language]?.['exp-project2-title'] || 'Transport Booking Application'}
                                    </h4>
                                </div>
                                <ul className="space-y-2 text-gray-600 ml-8 list-disc">
                                    <li>{translations[language]?.['exp-project2-desc1'] || 'Backend API development'}</li>
                                    <li>{translations[language]?.['exp-project2-desc2'] || 'Frontend application development'}</li>
                                </ul>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {['NestJS', 'TypeScript', 'Nuxt.js', 'Prisma ORM', 'MySQL'].map((tag) => (
                                        <span key={tag} className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg text-xs font-medium">
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>

                            {/* Projet 3: AMIT (CDI) */}
                            <div className="project-card bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500">
                                <div className="flex items-start gap-3 mb-3">
                                    <span className="text-2xl">📋</span>
                                    <h4 className="font-semibold text-gray-800">
                                        {translations[language]?.['exp-project3-title'] || 'Administrative Management System'}
                                    </h4>
                                </div>
                                <ul className="space-y-2 text-gray-600 ml-8 list-disc">
                                    <li>{translations[language]?.['exp-project3-desc1'] || 'Feature development according to specifications'}</li>
                                </ul>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {['Symfony', 'Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'].map((tag) => (
                                        <span key={tag} className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg text-xs font-medium">
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>

                            {/* Projet 4: RAVINALA */}
                            <div className="project-card bg-gray-50 p-6 rounded-xl border-l-4 border-purple-500">
                                <div className="flex items-start gap-3 mb-3">
                                    <span className="text-2xl">🌐</span>
                                    <h4 className="font-semibold text-gray-800">
                                        {translations[language]?.['exp-project4-title'] || 'Institutional Website'}
                                    </h4>
                                </div>
                                <ul className="space-y-2 text-gray-600 ml-8 list-disc">
                                    <li>{translations[language]?.['exp-project4-desc1'] || 'Custom WordPress theme creation'}</li>
                                    <li>{translations[language]?.['exp-project4-desc2'] || 'Complete Elementor integration'}</li>
                                </ul>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {['WordPress', 'PHP', 'MySQL', 'Elementor'].map((tag) => (
                                        <span key={tag} className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg text-xs font-medium">
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>

                            {/* Projet 5: e-GP ARMP */}
                            <div className="project-card bg-gray-50 p-6 rounded-xl border-l-4 border-orange-500">
                                <div className="flex items-start gap-3 mb-3">
                                    <span className="text-2xl">📊</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            {translations[language]?.['exp-project5-title'] || 'Public Procurement Platform'}
                                        </h4>
                                        <span className="badge-modern bg-orange-100 text-orange-700 mt-1 inline-block">
                      {translations[language]?.['exp-project5-badge'] || 'Regulatory Authority'}
                    </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-600 ml-8 list-disc">
                                    <li>{translations[language]?.['exp-project5-desc1'] || 'PDF export optimization'}</li>
                                    <li>{translations[language]?.['exp-project5-desc2'] || 'API development and integration'}</li>
                                    <li>{translations[language]?.['exp-project5-desc3'] || 'Frontend application development'}</li>
                                </ul>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {['NestJS', 'Nuxt.js', 'TypeScript', 'Prisma ORM', 'SQL Server'].map((tag) => (
                                        <span key={tag} className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg text-xs font-medium">
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* INGENOSYA - CDD (Août 2022 – Janvier 2023) */}
                    <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all border border-gray-100">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Full Stack Web Developer</h3>
                                    <p className="text-indigo-600 font-medium">
                                        {translations[language]?.['exp-cdd-company'] || 'INGENOSYA MADAGASCAR · Fixed-term'}
                                    </p>
                                </div>
                            </div>
                            <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl font-semibold mt-4 md:mt-0 flex items-center gap-2">
                <i className="far fa-calendar-alt"></i>
                <span>{translations[language]?.['exp-cdd-date'] || 'Aug 2022 – Jan 2023'}</span>
              </span>
                        </div>

                        <div className="project-card bg-gray-50 p-6 rounded-xl border-l-4 border-yellow-500">
                            <div className="flex items-start gap-3 mb-3">
                                <span className="text-2xl">🏢</span>
                                <h4 className="font-semibold text-gray-800">
                                    {translations[language]?.['exp-cdd-title'] || 'ERP System (Business Management)'}
                                </h4>
                            </div>
                            <ul className="space-y-2 text-gray-600 ml-8 list-disc">
                                <li>{translations[language]?.['exp-cdd-desc1'] || 'Business feature development according to specifications'}</li>
                            </ul>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {['Laravel', 'React.js', 'MySQL', 'Bootstrap'].map((tag) => (
                                    <span key={tag} className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg text-xs font-medium">
                    {tag}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* INGENOSYA - Stage (Fév 2022 – Juillet 2022) */}
                    <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all border border-gray-100">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                                    <i className="fas fa-graduation-cap"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Backend Developer Intern</h3>
                                    <p className="text-indigo-600 font-medium">
                                        {translations[language]?.['exp-intern-company'] || 'INGENOSYA MADAGASCAR'}
                                    </p>
                                </div>
                            </div>
                            <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl font-semibold mt-4 md:mt-0 flex items-center gap-2">
                <i className="far fa-calendar-alt"></i>
                <span>{translations[language]?.['exp-intern-date'] || 'Feb 2022 – Jul 2022'}</span>
              </span>
                        </div>

                        <div className="project-card bg-gray-50 p-6 rounded-xl border-l-4 border-indigo-500">
                            <div className="flex items-start gap-3 mb-3">
                                <span className="text-2xl">📱</span>
                                <h4 className="font-semibold text-gray-800">
                                    {translations[language]?.['exp-intern-title'] || 'API for Management Application'}
                                </h4>
                            </div>
                            <ul className="space-y-2 text-gray-600 ml-8 list-disc">
                                <li>{translations[language]?.['exp-intern-desc1'] || 'REST API development'}</li>
                            </ul>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {['Symfony', 'PostgreSQL'].map((tag) => (
                                    <span key={tag} className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg text-xs font-medium">
                    {tag}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Freelance et Stage Universitaire */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* WEB AGENCE RUN - Freelance */}
                        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all border border-gray-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                                    <i className="fas fa-globe text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        {translations[language]?.['exp-freelance-title'] || 'WordPress Integrator Freelance'}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {translations[language]?.['exp-freelance-company'] || 'WEB AGENCY RUN (Réunion)'}
                                    </p>
                                </div>
                                <span className="ml-auto text-sm bg-gray-100 px-3 py-1 rounded-full">
                  {translations[language]?.['exp-freelance-date'] || '2021 – 2022'}
                </span>
                            </div>
                            <ul className="space-y-2 text-gray-600 ml-4 list-disc text-sm">
                                <li>{translations[language]?.['exp-freelance-desc1'] || 'WordPress site integration with Elementor'}</li>
                            </ul>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {['WordPress', 'PHP', 'Elementor'].map((tag) => (
                                    <span key={tag} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-lg text-xs">
                    {tag}
                  </span>
                                ))}
                            </div>
                        </div>

                        {/* ESMIA Madagascar - Stage */}
                        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all border border-gray-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                                    <i className="fas fa-university text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        {translations[language]?.['exp-univ-title'] || 'Web Developer Intern'}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {translations[language]?.['exp-univ-company'] || 'ESMIA MADAGASCAR'}
                                    </p>
                                </div>
                                <span className="ml-auto text-sm bg-gray-100 px-3 py-1 rounded-full">
                  {translations[language]?.['exp-univ-date'] || 'Feb 2020 – Jul 2020'}
                </span>
                            </div>
                            <div className="border-l-4 border-teal-500 pl-3 ml-2">
                                <p className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                                    <i className="fas fa-book text-teal-600"></i>
                                    <span>{translations[language]?.['exp-univ-project'] || 'University Library Management System'}</span>
                                </p>
                                <ul className="space-y-1 text-gray-600 ml-4 list-disc text-sm">
                                    <li>{translations[language]?.['exp-univ-desc1'] || 'Web application development for book and loan management'}</li>
                                    <li>{translations[language]?.['exp-univ-desc2'] || 'Database design'}</li>
                                    <li>{translations[language]?.['exp-univ-desc3'] || 'Frontend interface development for consultation and search'}</li>
                                </ul>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {['Symfony', 'React.js', 'PostgreSQL', 'Tailwind'].map((tag) => (
                                    <span key={tag} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-lg text-xs">
                    {tag}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}