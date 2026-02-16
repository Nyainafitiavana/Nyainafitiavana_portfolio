'use client';

import { useState, useEffect } from 'react';
import LanguageSwitcher from './components/ui/LanguageSwitcher';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experiences from './components/sections/Experiences';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { translations } from './data/translations';

export default function Home() {
    const [language, setLanguage] = useState<string>('en');
    const [mounted, setMounted] = useState<boolean>(false);

    // Éviter l'hydratation mismatch
    useEffect(() => {
        setMounted(true);
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang) {
            setLanguage(savedLang);
        }
    }, []);

    if (!mounted) {
        return null; // Ou un loader
    }

    return (
        <>
            <LanguageSwitcher onLanguageChange={setLanguage} />
            <Navbar language={language} translations={translations} />

            <main>
                <Hero language={language} translations={translations} />
                <About language={language} translations={translations} />
                <Skills language={language} translations={translations} />
                <Experiences language={language} translations={translations} />
                <Projects language={language} translations={translations} />
                <Contact language={language} translations={translations} />
            </main>

            <Footer language={language} translations={translations} />
        </>
    );
}