'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DiscoverSection() {
  return (
    <section id="decouvrir" className="w-full py-20 bg-blue-50 flex flex-col justify-center items-center">
      <motion.div
        className="max-w-3xl mx-auto text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Envie d&apos;en savoir plus sur mon parcours&nbsp;?
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Découvrez mes compétences techniques, projets réalisés et ma veille technologique !
        </p>
        <Link
          href="/informatique"
          className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all text-lg"
        >
          Découvrir
        </Link>
      </motion.div>
    </section>
  );
}
