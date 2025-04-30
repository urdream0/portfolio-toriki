"use client";

import Link from "next/link";
import Image from "next/image";

export default function GlidePage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-gray-800 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-8">
          Glide – Application de suivi d’investissements
        </h1>

        {/* Présentation du projet */}
        <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed">
          Durant mon stage, mon tuteur m’a confié la mission de créer une application SaaS simple pour suivre des investissements. J’ai choisi d’utiliser <strong>Glide</strong>, une solution no-code que j’ai apprise de façon totalement autonome. Ce projet a été l’occasion d’appliquer une solution rapide, moderne et fonctionnelle à une demande métier concrète.
        </p>

        {/* Objectifs et apprentissage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">📌 Objectif</h2>
            <p className="text-gray-700">
              Répondre à une demande métier par une application accessible, intuitive et rapide à déployer pour la gestion d’investissements.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">🧠 Apprentissage autonome</h2>
            <p className="text-gray-700">
              Découverte complète de Glide (formulaires, affichage conditionnel, base de données via Google Sheets, règles d’accès, actions personnalisées…).
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">🛠️ Outils utilisés</h2>
            <p className="text-gray-700">
              Glide App, Google Sheets (backend no-code), Glide Actions, UI Builder.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">✅ Compétence BTS SIO</h2>
            <p className="text-gray-700">
              <strong>Répondre aux incidents et aux demandes d’assistance et d’évolution</strong> :
              <br />
              Mise en place d’une solution SaaS no-code adaptée à un besoin métier, en autonomie et sans code backend.
            </p>
          </div>
        </div>

        {/* Captures d’écran */}
        <div className="mb-14 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            📸 Captures d’écran
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/images/investor.png"
              alt="Interface Glide"
              width={1200}
              height={700}
              className="w-full object-contain max-h-[500px] rounded-xl border border-gray-300"
            />
            <Image
              src="/images/bddinvestor.png"
              alt="Base Google Sheets"
              width={1200}
              height={700}
              className="w-full object-contain max-h-[500px] rounded-xl border border-gray-300"
            />
          </div>
        </div>

        {/* Bouton retour */}
        <div className="text-center">
          <Link
            href="/informatique#projets"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
          >
            ← Retour aux projets
          </Link>
        </div>
      </div>
    </main>
  );
}
