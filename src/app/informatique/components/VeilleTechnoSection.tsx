"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function VeilleTechnoSection() {
  type Topic = {
    title: string;
    description: string;
    link: string;
  };

  const topics: Topic[] = [
    {
      title: "L'essor de l'IA générative",
      description:
        "Comment l'IA transforme le développement logiciel avec des outils comme GitHub Copilot, ChatGPT, et plus.",
      link: "/veille/ia-generative",
    },
    {
      title: "Frameworks Frontend nouvelle génération",
      description:
        "Next.js 14, Astro, Remix... l'évolution rapide du développement web moderne.",
      link: "/veille/frameworks",
    },
    {
      title: "Cybersécurité en 2025",
      description:
        "Les tendances à surveiller : MFA obligatoire, Zero Trust, et sécurisation du cloud.",
      link: "/veille/cybersecurite",
    },
  ];

  return (
    <section id="veille" className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre Section */}
        <motion.h2
          className="text-5xl font-extrabold text-center text-gray-900 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Ma Veille Technologique
        </motion.h2>

        {/* Sous-titre */}
        <motion.p
          className="text-center text-gray-500 text-lg mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Rester à jour dans un monde numérique en constante évolution est
          essentiel 📚
        </motion.p>

        {/* Cartes Thématiques */}
        <div className="grid md:grid-cols-3 gap-12">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">
                    {topic.description}
                  </p>
                </div>
                <Link href={topic.link}>
                  <span className="text-blue-600 hover:underline text-sm font-semibold mt-auto cursor-pointer">
                    Lire l&apos;article →
                  </span>
                </Link>
              </div>

              {/* Hover Overlay Light */}
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-all duration-500 pointer-events-none rounded-3xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
