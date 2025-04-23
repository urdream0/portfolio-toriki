'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

export default function ParcoursSection() {
  const parcours = [
    {
      title: "Baccalauréat Technologique STI2D - Option SIN",
      years: "2023",
      description: "Spécialité Systèmes d'Information et Numérique. Formation orientée réseaux intelligents et programmation embarquée.",
    },
    {
      title: "BTS Services Informatiques aux Organisations - Option SLAM",
      years: "2023 - 2025",
      description: "Développement d'applications web et mobiles, gestion de bases de données, projets Java/Spring Boot, Next.js et bien plus.",
    },
  ];

  return (
    <section id="parcours" className="w-full py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* Intro animée */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Mon Parcours
          </h2>
          <p className="text-gray-600 text-lg">
            Découvrez comment mes compétences se sont construites au fil du temps 📚
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-300 ml-4">
          {parcours.map((item, index) => (
            <motion.div
              key={index}
              className="group mb-16 ml-8 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Point timeline */}
              <div className="absolute -left-6 top-2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md flex items-center justify-center">
                <FaGraduationCap className="text-white text-xs" />
              </div>

              {/* Badge Année */}
              <span className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full shadow-sm">
                {item.years}
              </span>

              {/* Titre + Description */}
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
