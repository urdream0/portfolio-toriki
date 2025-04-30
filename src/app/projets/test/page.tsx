"use client";

import Link from "next/link";

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-gray-800 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-8">
          Architecture en couches – Projet SocMarket
        </h1>

        <p className="text-gray-700 mb-6">
          Cette architecture en couches a été mise en place selon les conseils de mon tuteur de stage afin de garantir un code clair, maintenable et structuré.
          Chaque couche a une responsabilité spécifique, facilitant la compréhension, la réutilisabilité et l'évolution du projet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">🔵 Controller</h2>
            <p className="text-gray-700">
              Reçoit les requêtes HTTP entrantes (GET, POST, PUT, DELETE), appelle le service correspondant et renvoie la réponse.
              Exemple : <code>ProductController</code>, <code>CategoryController</code>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">🟢 Service</h2>
            <p className="text-gray-700">
              Contient la logique métier : vérification des rôles, contrôle des données, appels à la couche repository. Exemple : <code>ProductService</code>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">🟡 Repository</h2>
            <p className="text-gray-700">
              Accède à la base de données via Spring Data JPA. Interface avec les entités persistantes. Exemple : <code>ProductRepository</code>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">🟣 DTO (Data Transfer Object)</h2>
            <p className="text-gray-700">
              Sert à transférer uniquement les données nécessaires entre frontend et backend. Exemple : <code>ProductCreateRequest</code>, <code>ProductCreateResponse</code>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">⚙️ Config</h2>
            <p className="text-gray-700">
              Contient les paramètres de configuration : sécurité JWT, CORS, accès à la BDD. Exemple : <code>WebSecurityConfig</code>, <code>application.yml</code>
            </p>
          </div>
        </div>

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
