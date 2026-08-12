import {CopyShape, Lang} from "./types";

export const copy: Record<Lang, CopyShape> = {
    fr: {
        nav: ["Accueil", "A propos", "Competences", "Experiences", "Projets", "Contact"],
        status: "Disponible pour de nouvelles opportunites",
        intro:
            "Developpeur Web Full Stack avec plus de 4 ans d'experience dans la conception, le developpement et la maintenance d'applications web performantes.",
        specialty:
            "Specialise en backend PHP/Node.js, API REST, frontend React/Next/Vue et applications desktop avec Electron.",
        role: "Developpeur Web Full Stack",
        github: "Profil GitHub",
        contactMe: "Me contacter",
        download: "Telecharger CV",
        discover: "Decouvrir",
        aboutTitle: "Mon histoire",
        aboutText:
            "J'aide les equipes a transformer des besoins metiers en produits fiables: API, plateformes institutionnelles, ERP, exports PDF optimises et interfaces web modernes. Mon parcours combine Symfony, Laravel, NestJS, React, Next.js, Vue/Nuxt et WordPress sur mesure.",
        metrics: ["4+ ans d'experience", "10+ projets", "International mobile"],
        skillsTitle: "Competences & technologies",
        experienceTitle: "Experiences professionnelles",
        projectsTitle: "Mes projets",
        educationTitle: "Etudes & formations",
        contactTitle: "Travaillons ensemble",
        contactSubtitle: "Disponible immediatement pour des opportunites full stack, freelance ou collaboration.",
        name: "Votre nom",
        email: "email@exemple.com",
        subject: "Sujet du message",
        message: "Votre message...",
        send: "Envoyer le message",
        sending: "Envoi en cours...",
        sent: "Message envoyé avec succès. Merci pour votre message !",
        error: "Impossible d'envoyer pour le moment. Vous pouvez utiliser l'email direct.",
        languages: "Langues",
        certifications: "Certifications",
        footer: "Concu avec Next.js, Tailwind CSS et Three.js."
    },
    en: {
        nav: ["Home", "About", "Skills", "Experience", "Projects", "Contact"],
        status: "Available for new opportunities",
        intro:
            "Full Stack Web Developer with 4+ years of experience designing, building and maintaining high-performing web applications.",
        specialty:
            "Focused on PHP/Node.js backends, REST APIs, React/Next/Vue frontends and Electron desktop applications.",
        role: "Full Stack Web Developer",
        github: "GitHub Profile",
        contactMe: "Contact me",
        download: "Download CV",
        discover: "Discover",
        aboutTitle: "My story",
        aboutText:
            "I help teams turn business requirements into reliable products: APIs, institutional platforms, ERP modules, optimized PDF exports and modern web interfaces. My stack combines Symfony, Laravel, NestJS, React, Next.js, Vue/Nuxt and custom WordPress.",
        metrics: ["4+ years experience", "10+ projects", "International mobility"],
        skillsTitle: "Skills & technologies",
        experienceTitle: "Professional experience",
        projectsTitle: "My projects",
        educationTitle: "Education & training",
        contactTitle: "Let's work together",
        contactSubtitle: "Immediately available for full stack roles, freelance projects or collaboration.",
        name: "Your name",
        email: "email@example.com",
        subject: "Message subject",
        message: "Your message...",
        send: "Send message",
        sending: "Sending...",
        sent: "Message sent successfully. Thank you for your message!",
        error: "Unable to send right now. You can use the direct email.",
        languages: "Languages",
        certifications: "Certifications",
        footer: "Built with Next.js, Tailwind CSS and Three.js."
    }
};
