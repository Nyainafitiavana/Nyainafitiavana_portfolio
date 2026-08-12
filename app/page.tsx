"use client";

import {useEffect, useState} from "react";
import {Lang} from "../lib/types";
import {copy} from "../lib/i18n";
import {contact} from "../lib/data";
import {detectLang} from "../lib/detectLang";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {
    const [lang, setLang] = useState<Lang>("fr");
    const t = copy[lang];

    useEffect(() => {
        setLang(detectLang());
    }, []);

    return (
        <main id="home" className="min-h-screen">
            <Header t={t} lang={lang} setLang={setLang} githubUrl={contact.github}/>
            <Hero t={t} lang={lang}/>
            <About t={t}/>
            <Skills t={t} lang={lang}/>
            <Experience t={t} lang={lang}/>
            <Projects t={t} lang={lang}/>
            <Education t={t} lang={lang}/>
            <Contact t={t}/>
            <Footer t={t}/>
        </main>
    );
}