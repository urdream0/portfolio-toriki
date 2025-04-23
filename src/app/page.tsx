'use client';

import Header from './components/Accueil/Header';
import HeroSection from './components/Accueil/HeroSection';
import ParcoursSection from './components/Accueil/ParcoursSection';
import DiscoverSection from './components/Accueil/DiscoverSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col gap-24 p-4 md:p-10">
        <HeroSection />
        <ParcoursSection />
        <DiscoverSection />
        <Footer />
      </main>
    </>
  );
}
