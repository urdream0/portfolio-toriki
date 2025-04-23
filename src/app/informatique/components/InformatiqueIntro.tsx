'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function InformatiqueIntro() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation en 1s
      once: true, // joue l'animation qu'une seule fois
    });
  }, []);

  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center" data-aos="fade-up">
        <h1 className="relative inline-block text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 mb-4">
          Parcours Informatique
          {/* underline animé */}
          <span className="block h-1 w-1/2 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 absolute left-1/2 transform -translate-x-1/2 mt-2 animate-pulse"></span>
        </h1>

        <p className="text-lg text-gray-600 mt-6" data-aos="fade-up" data-aos-delay="300">
          Découvrez mon univers de développeur : compétences techniques, projets réalisés et veille technologique.
        </p>
      </div>
    </section>
  );
}
