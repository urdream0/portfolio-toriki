'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function CompetencesSection() {
  const skills = {
    "Développement Web": ["HTML5", "CSS3", "JavaScript", "React", "Next.js"],
    "Backend & APIs": ["Java", "Spring Boot", "PostgreSQL", "REST API"],
    "Outils & Méthodes": ["Git", "GitHub", "Agile", "Docker"],
  };

  return (
    <section id="competences" className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Titre */}
        <motion.h2 
          className="text-5xl font-extrabold text-center text-gray-900 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Mes Compétences Techniques
        </motion.h2>

        {/* Sous-texte */}
        <motion.p 
          className="text-center text-gray-500 text-lg mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Les outils et technologies que je maîtrise pour donner vie à vos projets.
        </motion.p>

        {/* Grille ultra stylée */}
        <div className="grid md:grid-cols-3 gap-10">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skillList.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
