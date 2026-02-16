'use client';

import {Translations} from "@/app/types";

interface SkillsProps {
    language: string;
    translations: Translations;
}

export default function Skills({ language, translations }: SkillsProps) {
    return (
        <section id="competences" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            {translations[language]?.['skills-badge'] || 'Expertise'}
          </span>
                    <h2 className="text-4xl font-bold text-gray-900">
                        {translations[language]?.['skills-title'] || 'Technical Skills'}
                    </h2>
                </div>

                {/* Languages */}
                <div className="mb-16">
                    <h3 className="text-xl font-semibold text-gray-800 mb-8 flex items-center gap-3">
                        <span className="w-1 h-8 bg-indigo-600 rounded-full"></span>
                        <i className="fas fa-code text-indigo-600"></i>
                        <span>{translations[language]?.['skills-languages'] || 'Programming Languages'}</span>
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {['PHP', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'].map((skill) => (
                            <span key={skill} className="skill-tag bg-indigo-50 text-indigo-700 px-5 py-2.5 rounded-xl font-medium border border-indigo-100">
                {skill}
              </span>
                        ))}
                    </div>
                </div>

                {/* Frameworks */}
                <div className="mb-16">
                    <h3 className="text-xl font-semibold text-gray-800 mb-8 flex items-center gap-3">
                        <span className="w-1 h-8 bg-indigo-600 rounded-full"></span>
                        <i className="fas fa-cubes text-indigo-600"></i>
                        <span>{translations[language]?.['skills-frameworks'] || 'Frameworks & Libraries'}</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { name: 'Symfony', icon: 'fab fa-symfony', color: 'text-indigo-600' },
                            { name: 'Laravel', icon: 'fab fa-laravel', color: 'text-red-500' },
                            { name: 'Node.js', icon: 'fab fa-node', color: 'text-green-600' },
                            { name: 'React.js', icon: 'fab fa-react', color: 'text-blue-500' },
                            { name: 'Vue.js', icon: 'fab fa-vuejs', color: 'text-green-500' },
                            { name: 'NestJS', icon: 'fas fa-code', color: 'text-indigo-600' },
                            { name: 'Next.js', icon: 'fas fa-code', color: 'text-indigo-600' },
                            { name: 'Nuxt.js', icon: 'fas fa-code', color: 'text-indigo-600' },
                            { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'text-purple-600' },
                            { name: 'Tailwind', icon: 'fas fa-code', color: 'text-indigo-600' },
                        ].map((framework, index) => (
                            <div key={index} className="bg-gray-50 p-5 rounded-xl text-center hover:shadow-lg transition-all border border-gray-100 hover:border-indigo-200 group">
                                <i className={`${framework.icon} text-3xl ${framework.color} mb-2`}></i>
                                <p className="font-medium text-gray-700 group-hover:text-indigo-600">{framework.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CMS & Databases */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-indigo-600 rounded-full"></span>
                            <i className="fab fa-wordpress text-indigo-600"></i>
                            <span>{translations[language]?.['skills-cms'] || 'CMS & Integration'}</span>
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {['WordPress', 'Elementor', 'Thèmes personnalisés'].map((skill) => (
                                <span key={skill} className="skill-tag bg-blue-50 text-blue-700 px-5 py-2.5 rounded-xl border border-blue-100">
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-indigo-600 rounded-full"></span>
                            <i className="fas fa-database text-indigo-600"></i>
                            <span>{translations[language]?.['skills-databases'] || 'Databases'}</span>
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {['PostgreSQL', 'MySQL', 'SQL Server'].map((skill) => (
                                <span key={skill} className="skill-tag bg-green-50 text-green-700 px-5 py-2.5 rounded-xl border border-green-100">
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ORM & Tools */}
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-indigo-600 rounded-full"></span>
                            <i className="fas fa-link text-indigo-600"></i>
                            <span>{translations[language]?.['skills-orm'] || 'ORM'}</span>
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {['Prisma ORM', 'Doctrine ORM', 'Eloquent ORM'].map((skill) => (
                                <span key={skill} className="skill-tag bg-orange-50 text-orange-700 px-5 py-2.5 rounded-xl border border-orange-100">
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-indigo-600 rounded-full"></span>
                            <i className="fas fa-tools text-indigo-600"></i>
                            <span>{translations[language]?.['skills-tools'] || 'Tools & Methodologies'}</span>
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {['API REST', 'Web Services', 'Git/GitHub', 'Agile', 'Optimization', 'PDF Export'].map((skill) => (
                                <span key={skill} className="skill-tag bg-gray-100 text-gray-700 px-5 py-2.5 rounded-xl">
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}