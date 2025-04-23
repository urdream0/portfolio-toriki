'use client';

import React from 'react';
import { projets } from '@/data/projects';
import ProjectCard from '@/app/components/ProjectCard';
import { motion } from 'framer-motion';

export default function ProjetsSection() {
  return (
    <section id="projets" className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Mes Projets
          </h2>
          <p className="text-gray-600 text-lg">
            Une sélection de projets qui illustrent mes compétences techniques et ma passion pour le développement.
          </p>
        </motion.div>

        {/* Affichage dynamique */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projets.map((projet) => (
            <ProjectCard
              key={projet.slug}
              titre={projet.titre}
              description={projet.description}
              image={projet.image}
              technologies={projet.technologies}
              github={projet.github}
              siteWeb={projet.siteWeb}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
