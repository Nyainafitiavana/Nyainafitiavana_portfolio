import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ny Aina Fitiavana Fitahiantsoa | Full Stack Developer",
  description:
    "Portfolio bilingue de Ny Aina Fitiavana Fitahiantsoa, developpeur web full stack JavaScript, TypeScript et PHP.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
