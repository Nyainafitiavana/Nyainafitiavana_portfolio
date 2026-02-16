'use client';

import React, { useState, useEffect } from 'react';
import { Translations } from '@/app/types';

interface NavbarProps {
    language: string;
    translations: Translations;
}

export default function Navbar({ language, translations }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('accueil');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);

        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 50);

            // Détecter la section active
            const sections = ['accueil', 'apropos', 'competences', 'experiences', 'projets', 'contact'];

            let currentSection = 'accueil';
            let minDistance = Infinity;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const distance = Math.abs(rect.top);

                    if (distance < minDistance) {
                        minDistance = distance;
                        currentSection = section;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Empêcher le scroll quand le menu mobile est ouvert
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navItems: Array<{ key: string; href: string; id: string }> = [
        { key: 'nav-home', href: '#accueil', id: 'accueil' },
        { key: 'nav-about', href: '#apropos', id: 'apropos' },
        { key: 'nav-skills', href: '#competences', id: 'competences' },
        { key: 'nav-experiences', href: '#experiences', id: 'experiences' },
        { key: 'nav-projects', href: '#projets', id: 'projets' },
        { key: 'nav-contact', href: '#contact', id: 'contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setActiveSection(id);

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        // Fermer le menu mobile après le clic
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className={`fixed w-full z-40 transition-all duration-500 ${
                isScrolled
                    ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
                    : 'bg-transparent py-4'
            }`}>
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-extrabold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            N.A.F
                        </div>

                        {/* Menu desktop */}
                        <div className="hidden md:flex space-x-1">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;

                                return (
                                    <a
                                        key={item.key}
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.id)}
                                        className={`
                      relative px-4 py-2 mx-1 rounded-lg font-medium transition-all duration-300
                      ${
                                            isScrolled
                                                ? isActive
                                                    ? 'text-indigo-600 bg-indigo-50'
                                                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                                                : isActive
                                                    ? 'text-white bg-white/20 backdrop-blur-sm'
                                                    : 'text-white/80 hover:text-white hover:bg-white/10'
                                        }
                    `}
                                    >
                                        {mounted ? (translations[language]?.[item.key] || item.key) : item.key}

                                        {isActive && (
                                            <span className={`
                        absolute bottom-0 left-1/2 transform -translate-x-1/2 
                        w-1 h-1 rounded-full transition-all duration-300
                        ${isScrolled ? 'bg-indigo-600' : 'bg-white'}
                      `} />
                                        )}
                                    </a>
                                );
                            })}
                        </div>

                        {/* Bouton hamburger */}
                        <button
                            className="md:hidden text-gray-600 focus:outline-none"
                            onClick={toggleMobileMenu}
                            aria-label="Menu"
                        >
                            <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'} text-2xl transition-transform duration-300 ${
                                isScrolled ? 'text-gray-600' : 'text-white'
                            }`}></i>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Menu mobile overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-30 md:hidden">
                    {/* Overlay sombre */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Panneau du menu */}
                    <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-2xl transform transition-transform duration-300">
                        <div className="flex flex-col pt-20 p-6 space-y-4">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;

                                return (
                                    <a
                                        key={item.key}
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.id)}
                                        className={`
                      flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300
                      ${isActive
                                            ? 'bg-indigo-600 text-white shadow-lg'
                                            : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                                        }
                    `}
                                    >
                    <span className="font-medium">
                      {mounted ? (translations[language]?.[item.key] || item.key) : item.key}
                    </span>
                                        {isActive && (
                                            <i className="fas fa-check ml-auto text-sm"></i>
                                        )}
                                    </a>
                                );
                            })}

                            {/* Lien CV dans le menu mobile */}
                            <div className="border-t border-gray-200 my-4"></div>
                            <a
                                href="#"
                                className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg"
                            >
                                <i className="fas fa-download"></i>
                                <span>{mounted ? (translations[language]?.['hero-download'] || 'Download CV') : 'CV'}</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}