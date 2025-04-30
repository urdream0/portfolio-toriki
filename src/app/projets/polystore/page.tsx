"use client";

import Image from "next/image";
import Link from "next/link";

export default function PolystorePage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-gray-800 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-8">
          Polystore – Boutique en ligne de produits locaux
        </h1>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-12 shadow-sm">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Polystore est une boutique en ligne développée en équipe lors du BTS
            SIO SLAM. L’objectif : proposer une plateforme de vente de produits
            locaux. Le projet suit une architecture MVC codée en PHP, avec une
            base de données MySQL, et a été conteneurisé avec Docker. Le travail
            en équipe s&apos;est organisé via un tableau GitHub Kanban.
          </p>
        </div>

        {/* Stack */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-12 shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            🛠️ Outils & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {["PHP", "HTML5", "CSS3", "MySQL", "Docker", "GitHub"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Compétences BTS */}
        {[
          {
            title: "Travailler en mode projet",
            description:
              "Utilisation d’un tableau Kanban sur GitHub pour organiser les tâches, suivre l’avancement et collaborer efficacement.",
            image: "/images/PolystoreKanban.png",
          },
          {
            title: "Gérer le patrimoine informatique",
            description: (
              <>
                J&apos;ai conçu et développé la base de données relationnelle du
                projet Polystore.
                <br />
                <br />
                Elle contient les entités principales suivantes :
                <strong> utilisateur</strong>, <strong>produit</strong>,{" "}
                <strong>commande</strong>, <strong>categorie</strong> et{" "}
                <strong>detail_commande</strong>.<br />
                <br />
                Chaque <strong>produit</strong> appartient à une catégorie.
                Chaque <strong>commande</strong> est liée à un utilisateur, et
                chaque commande contient un ou plusieurs produits via la table
                de liaison <strong>detail_commande</strong>.<br />
                <br />
                Ce schéma permet de gérer efficacement les ventes, les stocks,
                et l&apos;organisation des produits, tout en respectant les
                contraintes d&apos;intégrité relationnelle.
              </>
            ),
            image: "/images/bddPolystore.png",
          },
        ].map((competence, index) => (
          <div
            key={index}
            className="mb-14 bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">
              ✅ {competence.title}
            </h2>
            <p className="text-gray-700 mb-4">{competence.description}</p>
            <Image
              src={competence.image}
              alt={`Illustration pour la compétence : ${competence.title}`}
              width={1200}
              height={700}
              className="w-full rounded-xl border border-gray-300"
            />
          </div>
        ))}

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
