"use client";

import dynamic from "next/dynamic";
import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  X
} from "lucide-react";

const Globe = dynamic(() => import("../components/Globe"), { ssr: false });

type Lang = "fr" | "en";

const copy = {
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
    sent: "Message pret a etre envoye. Votre client email peut s'ouvrir si le serveur n'est pas configure.",
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
    sent: "Message ready to send. Your email client may open if the server is not configured.",
    error: "Unable to send right now. You can use the direct email.",
    languages: "Languages",
    certifications: "Certifications",
    footer: "Built with Next.js, Tailwind CSS and Three.js."
  }
};

const contact = {
  email: "ainafitiavana.project@gmail.com",
  phone1: "+261 34 47 237 02",
  phone2: "+261 34 20 348 90",
  location: "Antananarivo, Madagascar",
  github: "https://github.com/Nyainafitiavana",
  linkedin: "https://linkedin.com/in/ny-aina-fitiavana"
};

const skillGroups = [
  { title: "Langages", items: ["PHP", "JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { title: "Frameworks & libs", items: ["Symfony", "Laravel", "NestJS", "Express", "React.js", "Next.js", "Vue.js", "Nuxt.js", "Electron"] },
  { title: "CMS & integration", items: ["WordPress", "Elementor", "Themes sur mesure"] },
  { title: "Data & ORM", items: ["PostgreSQL", "MySQL", "SQL Server", "Prisma ORM", "Doctrine", "Eloquent"] },
  { title: "Methodes", items: ["API REST", "Web Services", "Git/GitHub", "Agile", "Performance", "Export PDF"] }
];

const experiences = [
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
];

const projects = [
  ["Plateforme agricole FIDA", "Interconnexion de systemes, API et interfaces pour un programme international.", ["Symfony", "React", "PostgreSQL"]],
  ["Reservation transport", "Application metier avec API backend et frontend moderne.", ["NestJS", "TypeScript", "Nuxt", "Prisma", "MySQL"]],
  ["Gestion administrative", "Solution administrative construite selon cahier des charges.", ["Symfony", "Next.js", "Tailwind"]],
  ["ARMP marches publics", "Optimisation d'exports PDF et developpement API/frontend.", ["NestJS", "Nuxt", "SQL Server"]],
  ["ERP entreprise", "Fonctionnalites metier pour la gestion d'entreprise.", ["Laravel", "React", "MySQL"]],
  ["Themes WordPress", "Themes sur mesure et integration Elementor.", ["WordPress", "PHP", "Elementor"]]
];

const education = [
  "Master 2 - Management et Informatique Appliquee a la Gestion, ESMIA (2025)",
  "Licence - Informatique Risque et Decision, ESMIA (2023)",
  "Duolingo English Test - Anglais professionnel (2025)"
];

const heroTechs = ["Next.js", "React", "TypeScript", "Symfony", "NestJS", "Laravel", "Vue/Nuxt", "Electron"];
const chipColors = ["chip-cyan", "chip-violet", "chip-blue", "chip-emerald", "chip-pink"];

function detectLang(): Lang {
  if (typeof navigator === "undefined") return "fr";
  return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const t = copy[lang];
  const nav = useMemo(
    () => [
      ["#home", t.nav[0]],
      ["#about", t.nav[1]],
      ["#skills", t.nav[2]],
      ["#experience", t.nav[3]],
      ["#projects", t.nav[4]],
      ["#contact", t.nav[5]]
    ],
    [t]
  );

  useEffect(() => {
    setLang(detectLang());
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("sending");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (data.mailto) window.location.href = data.mailto;
      setFormState(response.ok ? "sent" : "error");
      if (response.ok) event.currentTarget.reset();
    } catch {
      setFormState("error");
    }
  }

  return (
    <main id="home" className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-300/10 bg-night/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a href="#home" className="flex items-center gap-3 font-black tracking-wide">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 text-base text-white shadow-glow">N</span>
            <span className="gradient-text text-sm sm:text-base">NYAINA.DEV</span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-400 lg:flex">
            {nav.map(([href, label]) => (
              <a key={href} href={href} className="transition hover:text-cyan-300">
                {label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <a href={contact.github} target="_blank" className="inline-flex h-9 items-center gap-2 rounded-xl border border-cyan-400/35 px-4 text-sm font-bold text-cyan-300 transition hover:bg-cyan-400/10">
              <Code2 size={16} /> GitHub
            </a>
            <div className="flex rounded-xl border border-slate-700 bg-slate-900/80 p-1 text-xs font-black">
              {(["fr", "en"] as Lang[]).map((item) => (
                <button key={item} onClick={() => setLang(item)} className={`rounded-lg px-3 py-1.5 uppercase transition ${lang === item ? "bg-cyan-500/20 text-cyan-300" : "text-slate-500"}`}>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button aria-label="Menu" onClick={() => setMenuOpen((value) => !value)} className="grid size-11 place-items-center rounded-xl border border-slate-700 bg-slate-900/80 lg:hidden">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-cyan-300/10 bg-night px-5 py-4 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-3">
              {nav.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 text-slate-300 hover:bg-cyan-400/10">
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-5 pb-10 pt-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="section-label mb-6">{t.status}</div>
          <h1 className="text-5xl font-black leading-[0.95] tracking-normal text-slate-50 sm:text-6xl lg:text-[4.2rem]">
            NY AINA
            <span className="block gradient-text">FITIAVANA</span>
            <span className="block text-2xl font-extrabold text-slate-300 sm:text-3xl lg:text-[1.85rem]">FITAHIANTSOA</span>
          </h1>
          <div className="mt-5 flex items-center gap-4 text-base font-black text-cyan-300">
            <span className="h-px w-12 bg-gradient-to-r from-cyan-400 to-violet-500" />
            {t.role}
          </div>
          <p className="mt-5 max-w-xl text-[0.95rem] leading-6 text-slate-300">{t.intro}</p>
          <p className="mt-2 max-w-xl text-[0.95rem] leading-6 text-slate-300">{t.specialty}</p>

          <div className="mt-5 flex max-w-xl flex-wrap gap-2">
            {heroTechs.map((item, index) => (
              <span key={item} className={`chip ${chipColors[index % chipColors.length]} px-3 py-1.5 text-xs font-bold sm:text-sm`}>
                {item}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400 sm:text-sm">
            <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-orange-400" /> {contact.location}</span>
            <span className="inline-flex items-center gap-2"><Phone size={16} className="text-cyan-300" /> {contact.phone1}</span>
            <span className="inline-flex items-center gap-2"><Mail size={16} className="text-slate-200" /> {contact.email}</span>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href={contact.github} target="_blank" className="inline-flex h-10 items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 px-4 text-sm font-black text-white shadow-glow transition hover:scale-[1.02]">
              <Code2 size={17} /> {t.github}
            </a>
            <a href="#contact" className="inline-flex h-10 items-center gap-2.5 rounded-xl border border-cyan-400/35 px-4 text-sm font-black text-cyan-300 transition hover:bg-cyan-400/10">
              <Mail size={17} /> {t.contactMe}
            </a>
            <a href="/CV_Ny_Aina_Fitiavana_Fitahiantsoa_fr.pdf" className="inline-flex h-10 items-center gap-2.5 rounded-xl border border-emerald-400/35 px-4 text-sm font-black text-emerald-300 transition hover:bg-emerald-400/10">
              <Download size={17} /> {t.download}
            </a>
          </div>
        </div>

        <div className="relative">
          <Globe />
        </div>

        <a href="#about" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.68rem] uppercase tracking-[0.35em] text-slate-500 lg:flex">
          {t.discover}
          <ArrowDown size={20} className="text-cyan-300" />
        </a>
      </section>

      <Section id="about" label="A propos" title={t.aboutTitle}>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-2xl p-6">
            <p className="text-base leading-7 text-slate-300">{t.aboutText}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {t.metrics.map((metric) => (
                <div key={metric} className="rounded-xl border border-cyan-300/10 bg-cyan-300/5 p-3 text-sm font-bold text-slate-200">
                  <CheckCircle2 className="mb-3 text-cyan-300" size={20} />
                  {metric}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            <InfoPanel icon={<Languages size={20} />} title={t.languages} lines={["Francais: courant", "English: professional B2/C1"]} />
            <InfoPanel icon={<Sparkles size={20} />} title={t.certifications} lines={["Duolingo English Test (DET), 2025", "Mobilite internationale", "Disponibilite immediate"]} />
          </div>
        </div>
      </Section>

      <Section id="skills" label="Tech stack" title={t.skillsTitle}>
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass rounded-2xl p-5">
              <h3 className="mb-3 font-black text-slate-100">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, index) => (
                  <span key={item} className={`chip ${chipColors[index % chipColors.length]} px-3 py-1.5 text-sm`}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="experience" label="Parcours professionnel" title={t.experienceTitle}>
        <div className="space-y-5">
          {experiences.map((exp) => (
            <article key={`${exp.company}-${exp.period}`} className="glass rounded-2xl p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-wide text-cyan-300">{exp.company}</p>
                  <h3 className="mt-1 text-xl font-black text-slate-50">{exp.role}</h3>
                  <p className="mt-1 text-sm text-slate-500">{exp.period}</p>
                </div>
                <span className="rounded-full border border-violet-400/25 px-3 py-1 text-xs font-black text-violet-300">{exp.type}</span>
              </div>
              <ul className="mt-4 grid gap-2.5 text-sm leading-6 text-slate-300">
                {exp.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <BriefcaseBusiness className="mt-1 shrink-0 text-cyan-300" size={16} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((tag, index) => (
                  <span key={tag} className={`chip ${chipColors[index % chipColors.length]} px-3 py-1 text-xs font-bold`}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects" label="Realisations" title={t.projectsTitle}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(([title, description, tags]) => (
            <article key={title as string} className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-cyan-300/30">
              <ExternalLink className="mb-4 text-cyan-300" size={20} />
              <h3 className="text-lg font-black text-slate-50">{title}</h3>
              <p className="mt-3 min-h-16 text-sm leading-6 text-slate-400">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(tags as string[]).map((tag, index) => (
                  <span key={tag} className={`chip ${chipColors[index % chipColors.length]} px-3 py-1 text-xs font-bold`}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="education" label="Formation" title={t.educationTitle}>
        <div className="grid gap-5 md:grid-cols-3">
          {education.map((item) => (
            <div key={item} className="glass rounded-2xl p-5">
              <GraduationCap className="mb-4 text-yellow-300" />
              <p className="font-bold leading-7 text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" label="Contact" title={t.contactTitle} subtitle={t.contactSubtitle}>
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-3">
            <ContactLine icon={<Mail size={18} />} value={contact.email} href={`mailto:${contact.email}`} />
            <ContactLine icon={<Phone size={18} />} value={`${contact.phone1} / ${contact.phone2}`} href={`tel:${contact.phone1.replaceAll(" ", "")}`} />
            <ContactLine icon={<MapPin size={18} />} value={contact.location} />
            <ContactLine icon={<Code2 size={18} />} value="github.com/Nyainafitiavana" href={contact.github} />
          </div>

          <form onSubmit={handleSubmit} className="glass grid gap-3.5 rounded-2xl p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required name="name" className="contact-input" placeholder={t.name} />
              <input required name="email" type="email" className="contact-input" placeholder={t.email} />
            </div>
            <input required name="subject" className="contact-input" placeholder={t.subject} />
            <textarea required name="message" rows={4} className="contact-input resize-none" placeholder={t.message} />
            <button disabled={formState === "sending"} className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 px-5 py-3 text-sm font-black text-white shadow-glow transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70">
              <Send size={18} /> {formState === "sending" ? t.sending : t.send}
            </button>
            {formState === "sent" && <p className="text-sm text-emerald-300">{t.sent}</p>}
            {formState === "error" && <p className="text-sm text-rose-300">{t.error}</p>}
          </form>
        </div>
      </Section>

      <footer className="border-t border-cyan-300/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
          <p className="font-bold text-slate-300">Ny Aina Fitiavana Fitahiantsoa</p>
          <p>{t.footer}</p>
        </div>
      </footer>
    </main>
  );
}

function Section({
  id,
  label,
  title,
  subtitle,
  children
}: {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-[4.5rem] px-5 py-11">
      <div className="mb-6 text-center">
        <span className="section-label">{label}</span>
        <h2 className="mt-3 text-3xl font-black text-slate-50 sm:text-[2.1rem]">
          {title.split("&")[0]}
          {title.includes("&") && <span className="gradient-text">&{title.split("&")[1]}</span>}
        </h2>
        {subtitle && <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-400">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function InfoPanel({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-3 flex items-center gap-3 font-black text-cyan-300">
        {icon}
        <h3>{title}</h3>
      </div>
      <div className="grid gap-3">
        {lines.map((line) => (
          <p key={line} className="rounded-xl bg-slate-950/35 px-4 py-2.5 text-sm text-slate-300">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function ContactLine({ icon, value, href }: { icon: React.ReactNode; value: string; href?: string }) {
  const content = (
    <span className="glass flex items-center gap-3 rounded-xl p-3.5 text-sm text-slate-300 transition hover:border-cyan-300/30">
      <span className="text-cyan-300">{icon}</span>
      <span className="break-all">{value}</span>
    </span>
  );

  if (!href) return content;
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined}>
      {content}
    </a>
  );
}
