import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

// Ici tu importes ta font Google cleanement
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio Toriki",
  description: "Portfolio de Toriki TEMATAUA - Développeur Web & Java",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={inter.className}>
      <head>
        <title>Portfolio Toriki - Développeur Web & Java</title>
        <meta
          name="description"
          content="Découvrez mon portfolio : projets en Java, Spring Boot, Next.js et plus. Passionné par l'innovation web et mobile."
        />
        <meta
          name="keywords"
          content="Portfolio, Développeur Web, Java, Spring Boot, Next.js, React, Fullstack, Toriki"
        />
        <meta name="author" content="Toriki TEMATAUA" />
        <meta
          property="og:title"
          content="Portfolio Toriki - Développeur Web & Java"
        />
        <meta
          property="og:description"
          content="Découvrez mes projets et compétences en développement web et Java."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://tondomaine.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
