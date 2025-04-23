'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function InformatiqueNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-600 tracking-wide">
          Toriki | Informatique
        </Link>

        {/* Hamburger */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-700 focus:outline-none relative w-10 h-10"
          aria-label="Toggle Menu"
        >
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-10">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-all duration-300">Accueil</Link>
          <a href="#competences" className="text-gray-700 hover:text-blue-600 transition-all duration-300">Compétences</a>
          <a href="#projets" className="text-gray-700 hover:text-blue-600 transition-all duration-300">Projets</a>
          <a href="#veille" className="text-gray-700 hover:text-blue-600 transition-all duration-300">Veille Technologique</a>
        </div>
      </nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden md:hidden bg-white border-t border-gray-200"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              <Link href="/" onClick={toggleMenu} className="text-lg text-gray-700 hover:text-blue-600 transition-all duration-300">
                Accueil
              </Link>
              <a href="#competences" onClick={toggleMenu} className="text-lg text-gray-700 hover:text-blue-600 transition-all duration-300">
                Compétences
              </a>
              <a href="#projets" onClick={toggleMenu} className="text-lg text-gray-700 hover:text-blue-600 transition-all duration-300">
                Projets
              </a>
              <a href="#veille" onClick={toggleMenu} className="text-lg text-gray-700 hover:text-blue-600 transition-all duration-300">
                Veille Technologique
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
