'use client';

import ProjectCard from '../ui/ProjectCard';
import {Translations} from "@/app/types";

interface ProjectsProps {
    language: string;
    translations: Translations;
}

export default function Projects({ language, translations }: ProjectsProps) {
    return (
        <section id="projets" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            {translations[language]?.['projects-badge'] || 'Achievements'}
          </span>
                    <h2 className="text-4xl font-bold text-gray-900">
                        {translations[language]?.['projects-title'] || 'Featured Projects'}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Projet 1 - e-GP */}
                    <ProjectCard
                        icon="gavel"
                        title={translations[language]?.['project1-title'] || 'Public Management Platform'}
                        description={translations[language]?.['project1-desc'] || 'Management system for Regulatory Authority'}
                        tags={['NestJS', 'Nuxt.js', 'Prisma']}
                        badge={{ icon: 'chart-line', text: 'Performance +60%' }}
                        gradient="orange"
                        stats="PDF Optimization"
                    />

                    {/* Projet 2 - CARLY TAXI */}
                    <ProjectCard
                        icon="taxi"
                        title={translations[language]?.['project2-title'] || 'Transport Application'}
                        description={translations[language]?.['project2-desc'] || 'Booking application with modern backend'}
                        tags={['NestJS', 'Nuxt.js', 'Prisma']}
                        badge={{ icon: 'mobile-alt', text: 'Mobile Ready' }}
                        gradient="yellow"
                        stats="Complete API"
                    />

                    {/* Projet 3 - DEFIS */}
                    <ProjectCard
                        icon="seedling"
                        title={translations[language]?.['project3-title'] || 'Agricultural Platform'}
                        description={translations[language]?.['project3-desc'] || 'Inclusive agriculture program'}
                        tags={['Symfony', 'React.js', 'PostgreSQL']}
                        badge={{ icon: 'leaf', text: 'International Program' }}
                        gradient="green"
                        stats="In production"
                    />
                </div>
            </div>
        </section>
    );
}