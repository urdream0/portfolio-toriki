'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-4 shadow-sm fixed top-0 left-0 bg-white dark:bg-gray-900 z-50 backdrop-blur-md bg-opacity-80 dark:bg-opacity-80 transition-all">
      <nav className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Toriki<span className="text-blue-600">.DEV</span>
        </Link>

        {/* Menu */}
        <div className="flex items-center space-x-8 text-sm font-semibold">
          <a href="#parcours" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
            Parcours
          </a>
          <a href="#decouvrir" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
            Découvrir
          </a>
        </div>
      </nav>
    </header>
  );
}
