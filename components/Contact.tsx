"use client";

import {FormEvent, useState} from "react";
import {Code2, Mail, MapPin, Phone, Send} from "lucide-react";
import {CopyShape} from "../lib/types";
import {contact} from "../lib/data";
import Section from "./ui/Section";
import ContactLine from "./ui/ContactLine";

type ContactProps = {
    t: CopyShape;
};

export default function Contact({t}: ContactProps) {
    const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setFormState("sending");

        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            await response.json();

            if (!response.ok) {
                setFormState("error");
                return;
            }

            setFormState("sent");

            form.reset();
        } catch (error) {
            console.error("CONTACT ERROR:", error);
            setFormState("error");
        }
    }

    return (
        <Section id="contact" label="Contact" title={t.contactTitle} subtitle={t.contactSubtitle}>
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="grid gap-3">
                    <ContactLine icon={<Mail size={18}/>} value={contact.email} href={`mailto:${contact.email}`}/>
                    <ContactLine icon={<Phone size={18}/>} value={`${contact.phone1} / ${contact.phone2}`}
                                 href={`tel:${contact.phone1.replaceAll(" ", "")}`}/>
                    <ContactLine icon={<MapPin size={18}/>} value={contact.location}/>
                    <ContactLine icon={<Code2 size={18}/>} value="github.com/Nyainafitiavana"
                                 href={contact.github}/>
                </div>

                <form onSubmit={handleSubmit} className="glass grid gap-3.5 rounded-2xl p-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <input required name="name" className="contact-input" placeholder={t.name}/>
                        <input required name="email" type="email" className="contact-input" placeholder={t.email}/>
                    </div>
                    <input required name="subject" className="contact-input" placeholder={t.subject}/>
                    <textarea required name="message" rows={4} className="contact-input resize-none"
                              placeholder={t.message}/>
                    <button disabled={formState === "sending"}
                            className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 px-5 py-3 text-sm font-black text-white shadow-glow transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70">
                        <Send size={18}/> {formState === "sending" ? t.sending : t.send}
                    </button>
                    {formState === "sent" && <p className="text-sm text-emerald-300">{t.sent}</p>}
                    {formState === "error" && <p className="text-sm text-rose-300">{t.error}</p>}
                </form>
            </div>
        </Section>
    );
}
