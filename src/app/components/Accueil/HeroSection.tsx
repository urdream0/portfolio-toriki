"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Petit texte d'intro */}
        <motion.p
          className="text-sm text-gray-500 uppercase tracking-[0.3em] mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          Bienvenue sur mon portfolio
        </motion.p>

        {/* Prénom animé */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
        >
          Salut, je suis{" "}
          <span className="text-blue-600">
            <Typewriter
              words={["Toriki TEMATAUA"]}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
              loop={1}
            />
          </span>
        </motion.h1>

        {/* Baseline */}
        <motion.h2
          className="text-xl md:text-2xl font-medium text-gray-600 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeInOut" }}
        >
          Développeur Fullstack | Passionné par le Web & Java 🚀
        </motion.h2>

        {/* Boutons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6, ease: "easeInOut" }}
        >
          <a
            href="/cv.pdf"
            download
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Télécharger mon CV
          </a>
          <a
  href="#parcours"
  className="px-8 py-3 border-2 border-blue-600 text-black bg-transparent rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all shadow hover:shadow-md"
>
  Voir mon parcours
</a>

        </motion.div>
      </div>
    </section>
  );
}
