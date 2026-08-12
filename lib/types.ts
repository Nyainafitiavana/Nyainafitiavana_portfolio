export type Lang = "fr" | "en";

export type CopyShape = {
    nav: string[];
    status: string;
    intro: string;
    specialty: string;
    role: string;
    github: string;
    contactMe: string;
    download: string;
    discover: string;
    aboutTitle: string;
    aboutText: string;
    metrics: string[];
    skillsTitle: string;
    experienceTitle: string;
    projectsTitle: string;
    educationTitle: string;
    contactTitle: string;
    contactSubtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    sent: string;
    error: string;
    languages: string;
    certifications: string;
    footer: string;
};

export type FormState = "idle" | "sending" | "sent" | "error";
