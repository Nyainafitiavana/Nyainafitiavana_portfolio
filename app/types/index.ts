// Types pour les traductions
export interface Translations {
    [key: string]: {
        [key: string]: string;
    };
}

// Types pour les projets
export interface Project {
    id: string;
    title: string;
    description: string;
    icon: string;
    gradient: 'orange' | 'yellow' | 'green' | 'blue' | 'purple';
    tags: string[];
    badge?: {
        icon: string;
        text: string;
    };
    stats?: string;
}

// Types pour les compétences
export interface Skill {
    name: string;
    category: 'language' | 'framework' | 'cms' | 'database' | 'orm' | 'tool';
    icon?: string;
    color?: string;
}

// Types pour les expériences
export interface Experience {
    id: string;
    company: string;
    position: string;
    type: 'cdi' | 'cdd' | 'intern' | 'freelance';
    startDate: string;
    endDate: string;
    projects: ExperienceProject[];
}

export interface ExperienceProject {
    title: string;
    icon: string;
    borderColor: string;
    badge?: {
        text: string;
        bgColor: string;
        textColor: string;
    };
    descriptions: string[];
    tags: string[];
}