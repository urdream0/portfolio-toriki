"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  titre: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  siteWeb?: string;
}

export default function ProjectCard({
  titre,
  description,
  image,
  technologies,
  github,
  siteWeb,
}: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all p-6 flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Image
        src={image}
        alt={titre}
        width={600} // ou adapte selon ton design
        height={300} // idem
        className="rounded-lg mb-6 object-cover w-full h-48"
        priority // optionnel : pour prioriser le chargement de l'image si besoin
      />

      <h3 className="text-2xl font-bold text-gray-800 mb-2">{titre}</h3>
      <p className="text-gray-600 text-base mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-4">
        {siteWeb && (
          <a
            href={siteWeb}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-sm"
          >
            Voir le projet
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition text-sm"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
