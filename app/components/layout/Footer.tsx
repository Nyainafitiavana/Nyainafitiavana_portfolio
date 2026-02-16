import { Translations } from '@/app/types';

interface FooterProps {
    language: string;
    translations: Translations;
}

export default function Footer({ language, translations }: FooterProps) {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">
                        © 2026 Ny Aina Fitiavana FITAHIANTSOA. {translations[language]?.['footer-rights'] || 'All rights reserved'}
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a
                            href="https://github.com/Nyainafitiavana"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition"
                            aria-label="GitHub"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            href="https://linkedin.com/in/ny-aina-fitiavana"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}