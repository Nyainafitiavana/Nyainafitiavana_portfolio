import {Lang} from "./types";

export const contact = {
    email: "fitahiantsoanyainafitiavana@gmail.com",
    phone1: "+261 34 47 237 02",
    phone2: "+261 34 20 348 90",
    location: "Antananarivo, Madagascar",
    github: "https://github.com/Nyainafitiavana",
    linkedin: "https://linkedin.com/in/ny-aina-fitiavana"
};

export const heroTechs = ["Next.js", "React", "TypeScript", "Symfony", "NestJS", "Laravel", "Vue/Nuxt", "Electron"];

export const chipColors = ["chip-cyan", "chip-violet", "chip-blue", "chip-emerald", "chip-pink"];

type SkillGroup = { title: string; items: string[] };

export const skillGroups: Record<Lang, SkillGroup[]> = {
    fr: [
        {title: "Langages", items: ["PHP", "JavaScript", "TypeScript", "HTML5", "CSS3"]},
        {
            title: "Frameworks & libs",
            items: ["Symfony", "Laravel", "NestJS", "Express", "React.js", "Next.js", "Vue.js", "Nuxt.js", "Electron"]
        },
        {title: "CMS & integration", items: ["WordPress", "Elementor", "Themes sur mesure"]},
        {title: "Data & ORM", items: ["PostgreSQL", "MySQL", "SQL Server", "Prisma ORM", "Doctrine", "Eloquent"]},
        {title: "Methodes", items: ["API REST", "Web Services", "Git/GitHub", "Agile", "Performance", "Export PDF"]}
    ],
    en: [
        {title: "Languages", items: ["PHP", "JavaScript", "TypeScript", "HTML5", "CSS3"]},
        {
            title: "Frameworks & libs",
            items: ["Symfony", "Laravel", "NestJS", "Express", "React.js", "Next.js", "Vue.js", "Nuxt.js", "Electron"]
        },
        {title: "CMS & integration", items: ["WordPress", "Elementor", "Custom themes"]},
        {title: "Data & ORM", items: ["PostgreSQL", "MySQL", "SQL Server", "Prisma ORM", "Doctrine", "Eloquent"]},
        {title: "Methods", items: ["REST API", "Web Services", "Git/GitHub", "Agile", "Performance", "PDF export"]}
    ]
};

type Experience = {
    role: string;
    company: string;
    period: string;
    type: string;
    details: string[];
    tags: string[];
};

export const experiences: Record<Lang, Experience[]> = {
    fr: [
        {
            role: "Developpeur Web Full Stack",
            company: "Ingenosya Madagascar",
            period: "Fevrier 2023 - Present",
            type: "CDI",
            details: [
                "Plateforme de Gestion Agricole FIDA: API, frontend, correction et optimisation.",
                "Application de reservation de transport: backend NestJS et frontend Nuxt.",
                "Systeme de gestion administrative: Symfony, Next.js, PostgreSQL et Tailwind CSS.",
                "Plateforme ARMP: optimisation des exports PDF avec +60% de performance."
            ],
            tags: ["Symfony", "NestJS", "React", "Next.js", "Nuxt.js", "PostgreSQL", "SQL Server"]
        },
        {
            role: "Developpeur Web Full Stack",
            company: "Ingenosya Madagascar",
            period: "Aout 2022 - Janvier 2023",
            type: "CDD",
            details: ["Systeme ERP de gestion d'entreprise et developpement de fonctionnalites metier."],
            tags: ["Laravel", "React.js", "MySQL", "Bootstrap"]
        },
        {
            role: "Stagiaire Developpeur Backend",
            company: "Ingenosya Madagascar",
            period: "Fevrier 2022 - Juillet 2022",
            type: "Stage",
            details: ["Developpement d'API REST pour une application de gestion."],
            tags: ["Symfony", "PostgreSQL", "API REST"]
        },
        {
            role: "Integrateur WordPress",
            company: "Web Agence Run | La Reunion",
            period: "2021 - 2022",
            type: "Freelance",
            details: ["Integration de sites WordPress avec Elementor pour des clients reunionnais."],
            tags: ["WordPress", "PHP", "MySQL", "Elementor"]
        },
        {
            role: "Stagiaire Developpeur Web",
            company: "ESMIA Madagascar",
            period: "Fevrier 2020 - Juillet 2020",
            type: "Stage",
            details: ["Application de gestion de bibliotheque universitaire avec version bureau Electron."],
            tags: ["Symfony", "React.js", "PostgreSQL", "Tailwind CSS", "Electron"]
        }
    ],
    en: [
        {
            role: "Full Stack Web Developer",
            company: "Ingenosya Madagascar",
            period: "February 2023 - Present",
            type: "Full-time",
            details: [
                "FIDA Agricultural Management Platform: API, frontend, bug fixing and optimization.",
                "Transport booking application: NestJS backend and Nuxt frontend.",
                "Administrative management system: Symfony, Next.js, PostgreSQL and Tailwind CSS.",
                "ARMP platform: PDF export optimization with +60% performance improvement."
            ],
            tags: ["Symfony", "NestJS", "React", "Next.js", "Nuxt.js", "PostgreSQL", "SQL Server"]
        },
        {
            role: "Full Stack Web Developer",
            company: "Ingenosya Madagascar",
            period: "August 2022 - January 2023",
            type: "Fixed-term",
            details: ["Enterprise ERP management system and business feature development."],
            tags: ["Laravel", "React.js", "MySQL", "Bootstrap"]
        },
        {
            role: "Backend Developer Intern",
            company: "Ingenosya Madagascar",
            period: "February 2022 - July 2022",
            type: "Internship",
            details: ["REST API development for a management application."],
            tags: ["Symfony", "PostgreSQL", "REST API"]
        },
        {
            role: "WordPress Integrator",
            company: "Web Agence Run | La Reunion",
            period: "2021 - 2022",
            type: "Freelance",
            details: ["WordPress site integration with Elementor for clients based in Reunion."],
            tags: ["WordPress", "PHP", "MySQL", "Elementor"]
        },
        {
            role: "Web Developer Intern",
            company: "ESMIA Madagascar",
            period: "February 2020 - July 2020",
            type: "Internship",
            details: ["University library management application with an Electron desktop version."],
            tags: ["Symfony", "React.js", "PostgreSQL", "Tailwind CSS", "Electron"]
        }
    ]
};

type Project = [string, string, string[]];

export const projects: Record<Lang, Project[]> = {
    fr: [
        ["Plateforme agricole FIDA", "Interconnexion de systemes, API et interfaces pour un programme international.", ["Symfony", "React", "PostgreSQL"]],
        ["Reservation transport", "Application metier avec API backend et frontend moderne.", ["NestJS", "TypeScript", "Nuxt", "Prisma", "MySQL"]],
        ["Gestion administrative", "Solution administrative construite selon cahier des charges.", ["Symfony", "Next.js", "Tailwind"]],
        ["ARMP marches publics", "Optimisation d'exports PDF et developpement API/frontend.", ["NestJS", "Nuxt", "SQL Server"]],
        ["ERP entreprise", "Fonctionnalites metier pour la gestion d'entreprise.", ["Laravel", "React", "MySQL"]],
        ["Themes WordPress", "Themes sur mesure et integration Elementor.", ["WordPress", "PHP", "Elementor"]]
    ],
    en: [
        ["FIDA Agricultural Platform", "System interconnection, API and interfaces for an international program.", ["Symfony", "React", "PostgreSQL"]],
        ["Transport Booking", "Business application with backend API and modern frontend.", ["NestJS", "TypeScript", "Nuxt", "Prisma", "MySQL"]],
        ["Administrative Management", "Administrative solution built to specifications.", ["Symfony", "Next.js", "Tailwind"]],
        ["ARMP Public Procurement", "PDF export optimization and API/frontend development.", ["NestJS", "Nuxt", "SQL Server"]],
        ["Enterprise ERP", "Business features for enterprise management.", ["Laravel", "React", "MySQL"]],
        ["WordPress Themes", "Custom themes and Elementor integration.", ["WordPress", "PHP", "Elementor"]]
    ]
};

export const education: Record<Lang, string[]> = {
    fr: [
        "Master 2 - Management et Informatique Appliquee a la Gestion, ESMIA (2025)",
        "Licence - Informatique Risque et Decision, ESMIA (2023)",
        "Duolingo English Test - Anglais professionnel (2026)"
    ],
    en: [
        "Master's Degree - Management and Applied Computer Science, ESMIA (2025)",
        "Bachelor's Degree - Computer Science, Risk and Decision, ESMIA (2023)",
        "Duolingo English Test - Professional English (2026)"
    ]
};