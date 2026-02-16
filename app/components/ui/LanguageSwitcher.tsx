'use client';

import { useState, useEffect } from 'react';

interface LanguageSwitcherProps {
    onLanguageChange: (lang: string) => void;
}

export default function LanguageSwitcher({ onLanguageChange }: LanguageSwitcherProps) {
    const [language, setLanguage] = useState<string>('en');
    const [mounted, setMounted] = useState(false);

    // IMPORTANT: Ne pas exécuter côté serveur
    useEffect(() => {
        setMounted(true);

        // Détection de la langue uniquement côté client
        const savedLang = localStorage.getItem('preferred-language');
        const browserLang = navigator.language.split('-')[0];
        const defaultLang = savedLang || (browserLang === 'fr' ? 'fr' : 'en');

        setLanguage(defaultLang);
        onLanguageChange(defaultLang);
    }, [onLanguageChange]);

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        onLanguageChange(lang);
        localStorage.setItem('preferred-language', lang);
        document.documentElement.lang = lang;
    };

    // Éviter l'hydratation mismatch en rendant un placeholder côté serveur
    if (!mounted) {
        return (
            <div className="fixed top-24 right-6 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-1 border border-gray-200">
                <button className="px-4 py-2 rounded-xl text-sm font-medium bg-indigo-600 text-white">EN</button>
                <button className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600">FR</button>
            </div>
        );
    }

    return (
        <div className="fixed top-24 right-6 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-1 border border-gray-200">
            <button
                onClick={() => handleLanguageChange('fr')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    language === 'fr'
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
                FR
            </button>
            <button
                onClick={() => handleLanguageChange('en')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    language === 'en'
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
                EN
            </button>
        </div>
    );
}