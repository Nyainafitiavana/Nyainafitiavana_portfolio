import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Ny Aina Fitiavana - Full Stack Developer",
    description: "Portfolio of Ny Aina Fitiavana FITAHIANTSOA, Full Stack Developer with 4+ years of experience",
    keywords: "Full Stack Developer, Symfony, React, Next.js, Node.js, Madagascar, PHP, TypeScript",
    authors: [{ name: "Ny Aina Fitiavana FITAHIANTSOA" }],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Ny Aina Fitiavana FITAHIANTSOA</title>
        </head>
        <body className="font-sans antialiased bg-gray-50">
        <main className="min-h-screen">
            {children}
        </main>
        </body>
        </html>
    );
}