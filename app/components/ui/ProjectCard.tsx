import React from 'react';

interface Badge {
    icon: string;
    text: string;
}

interface ProjectCardProps {
    icon: string;
    title: string;
    description: string;
    tags?: string[];
    badge?: Badge;
    gradient?: 'orange' | 'yellow' | 'green' | 'blue' | 'purple';
    stats?: string;
}

export default function ProjectCard({
                                        icon,
                                        title,
                                        description,
                                        tags = [],
                                        badge,
                                        gradient = 'orange',
                                        stats
                                    }: ProjectCardProps) {
    const gradientClasses: Record<string, string> = {
        orange: 'from-orange-500 to-red-500',
        yellow: 'from-yellow-500 to-orange-500',
        green: 'from-green-500 to-emerald-600',
        blue: 'from-blue-500 to-indigo-600',
        purple: 'from-purple-500 to-pink-600',
    };

    const iconColorClasses: Record<string, string> = {
        orange: 'text-orange-600',
        yellow: 'text-yellow-600',
        green: 'text-green-600',
        blue: 'text-blue-600',
        purple: 'text-purple-600',
    };

    return (
        <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className={`h-48 bg-linear-to-br ${gradientClasses[gradient]} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                <i className={`fas fa-${icon} text-white text-6xl absolute bottom-4 right-4 opacity-50 group-hover:scale-110 transition`}></i>
                {badge && (
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                        <i className={`fas fa-${badge.icon} mr-1`}></i> {badge.text}
                    </div>
                )}
            </div>
            <div className="p-8">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <i className={`fas fa-${icon} ${iconColorClasses[gradient]}`}></i>
                    {title}
                </h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg text-xs">{tag}</span>
                    ))}
                </div>
                {stats && (
                    <div className="flex items-center text-sm text-gray-500">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        <span>{stats}</span>
                    </div>
                )}
            </div>
        </div>
    );
}