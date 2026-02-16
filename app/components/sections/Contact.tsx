'use client';

import { useState, FormEvent } from 'react';
import {Translations} from "@/app/types";

interface ContactProps {
    language: string;
    translations: Translations;
}

export default function Contact({ language, translations }: ContactProps) {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
        type: null,
        message: ''
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Message sent successfully!'
                });
                (e.target as HTMLFormElement).reset();
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: result.error || 'An error occurred'
                });
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Network error. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus({ type: null, message: '' }), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 gradient-bg text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        {translations[language]?.['contact-title'] || "Let's work together"}
                    </h2>
                    <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
                        {translations[language]?.['contact-subtitle'] || 'Have a project? Let\'s discuss how I can help you achieve it.'}
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition cursor-pointer">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                    <i className="fas fa-envelope text-xl"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-indigo-200">{translations[language]?.['contact-email'] || 'Email'}</p>
                                    <p className="font-medium">ainafitiavana.project@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition cursor-pointer">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                    <i className="fas fa-phone-alt text-xl"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-indigo-200">{translations[language]?.['contact-phone'] || 'Phone'}</p>
                                    <p className="font-medium">+261 34 47 237 02</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition cursor-pointer">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                    <i className="fab fa-linkedin-in text-xl"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-indigo-200">LinkedIn</p>
                                    <p className="font-medium">/ny-aina-fitiavana</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={translations[language]?.['contact-name-placeholder'] || 'Your name'}
                                    required
                                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/20 transition"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={translations[language]?.['contact-email-placeholder'] || 'Your email'}
                                    required
                                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/20 transition"
                                />
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder={translations[language]?.['contact-message-placeholder'] || 'Your message'}
                                    required
                                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/20 transition"
                                />

                                {submitStatus.type && (
                                    <div className={`p-4 rounded-xl ${
                                        submitStatus.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'
                                    }`}>
                                        {submitStatus.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-white text-indigo-700 px-6 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <i className="fas fa-paper-plane"></i>
                                    <span>{isSubmitting ? 'Sending...' : (translations[language]?.['contact-send'] || 'Send message')}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}