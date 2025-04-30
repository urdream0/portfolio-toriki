"use client";

import Image from "next/image";
import Link from "next/link";

export default function SocMarketPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-gray-800 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-8">
          SocMarket – Plateforme e-commerce interne
        </h1>

        <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed">
          SocMarket est un projet développé durant mon stage de deuxième année
          de BTS SIO SLAM. L&apos;application permet aux employés d&apos;une
          banque de publier et consulter des annonces d&apos;objets à vendre.
          Aucune transaction n&apos;est réalisée sur la plateforme. Le projet
          repose sur un backend Java/Spring Boot, une base PostgreSQL, et un
          frontend moderne en Next.js.
        </p>

        {/* Cahier des charges */}
        <div className="mb-14 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            📄 Cahier des charges
          </h2>
          <p className="text-gray-700 mb-4">
            Le cahier des charges décrit les objectifs, les fonctionnalités
            attendues et les contraintes techniques du projet.
          </p>
          <a
            href="https://docs.google.com/document/d/14ClkkfZ7OzYDUhkADrYtAmYsSnl36TrU"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mb-6 inline-block"
          >
            👉 Consulter le cahier des charges
          </a>
        </div>

        {/* Documentation technique */}
        <div className="mb-14 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            📘 Documentation technique
          </h2>
          <p className="text-gray-700 mb-4">
            Ce document présente la structure complète du projet : logique des
            contrôleurs, entités JPA, services, couches DTO, endpoints REST,
            gestion des rôles, sécurité JWT, etc.
          </p>
          <div className="aspect-video w-full border border-gray-300 rounded-md overflow-hidden">
            <iframe
              src="https://docs.google.com/document/d/1KUbCboBYTzFojYSFI8agvSK-ln-YM2MB/preview"
              width="100%"
              height="500"
              allow="autoplay"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Stack */}
        <div className="mb-12 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            🛠️ Outils & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Java 17",
              "Spring Boot",
              "Spring Security",
              "PostgreSQL",
              "Next.js",
              "Tailwind CSS",
              "GitHub",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Compétences BTS */}
        {[
          {
            title: "Travailler en mode projet",
            description:
              "Utilisation d’un tableau GitHub Kanban pour répartir les tâches et suivre l’évolution du projet.",
            image: "/images/kanban_socmarket.png",
          },
          {
            title: "Développer la présence en ligne de l’organisation",
            description:
              "Mise à disposition d’une plateforme accessible en ligne pour la consultation et la publication d’annonces internes à la banque.",
            image: "/images/bddsupabase.png",
          },
          {
            title:
              "Mettre à disposition des utilisateurs un service informatique",
            description:
              "Création et documentation d’API REST (GET, POST, PUT, DELETE) avec Spring Boot. Les utilisateurs peuvent s’enregistrer, publier un produit ou modifier leurs annonces.",
            image: "/images/socmarketproof.png",
          },
          {
            title: "Gérer le patrimoine informatique",
            description:
              "Application d’une architecture en couches (Controller, Service, Repository, DTO, Config). Respect des conventions de nommage, organisation claire des packages et gestion des erreurs. Architecture validée par le tuteur.",
            image: "/images/archisocmarket.png",
          },
          {
            title:
              "Répondre aux incidents et aux demandes d’assistance et d’évolution",
            description: (
              <>
                <p className="text-gray-700 mb-4">
                  Refactorisation guidée par mon tuteur de stage :
                </p>
                <p className="text-gray-700 mb-4">
                  Après avoir créé les entités JPA et les contrôleurs, mon
                  tuteur m’a recommandé de mettre en place des DTO (Data
                  Transfer Object).
                </p>
                <p className="text-gray-700 mb-4">
                  L’objectif était de mieux contrôler les données échangées dans
                  l’API — par exemple, ne transmettre que les champs nécessaires
                  lors de la création d’un produit.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    Sécuriser les échanges entre le frontend et le backend
                  </li>
                  <li>
                    Respecter le principe de séparation des responsabilités
                  </li>
                  <li>Faciliter l’évolution future du code</li>
                </ul>
              </>
            ),
            image: "/images/POSTMAN2.png",
          },
          {
            title: "Organiser son développement professionnel",
            description: (
              <>
                <div className="text-gray-700 mb-4">
                  Pour mener à bien ce projet, j’ai dû apprendre à utiliser
                  plusieurs technologies :<strong> Java 17</strong>,{" "}
                  <strong>Spring Boot 3.1</strong>, <strong>PostgreSQL</strong>,
                  <strong> JWT</strong> pour la sécurité, et
                  <strong> Next.js avec TypeScript</strong> pour le frontend.
                </div>
                <div className="text-gray-700 mb-2">
                  Pour cela, j’ai étudié les documentations officielles :
                </div>
                <ul className="list-disc list-inside mb-6 text-gray-700">
                  <li>
                    <a
                      href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      spring.io/spring-boot
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.spring.io/spring-security/reference/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      spring.io/spring-security
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.typescriptlang.org/docs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      typescriptlang.org
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://nextjs.org/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      nextjs.org/docs
                    </a>
                  </li>
                </ul>
                <div className="text-gray-700 mb-4">
                  J’ai aussi suivi des tutoriels sur YouTube et utilisé Stack
                  Overflow pour résoudre des problèmes spécifiques.
                </div>
                <div className="text-gray-700 mb-2">
                  Enfin, j’ai appris à respecter les conventions de code :
                </div>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <strong>Java :</strong> camelCase, organisation des
                    packages, logique REST, configuration via{" "}
                    <code>application.yml</code>
                  </li>
                  <li>
                    <strong>TypeScript :</strong> typage strict, composants
                    fonctionnels, props bien typées, structure claire des
                    dossiers
                  </li>
                </ul>
              </>
            ),
            image: null,
          },
        ].map((competence, index) => (
          <div
            key={index}
            className="mb-14 bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">
              ✅ {competence.title}
            </h2>
            <div className="text-gray-700 mb-4">{competence.description}</div>
            {competence.image && (
              <Image
                src={competence.image}
                alt={`Illustration pour la compétence : ${competence.title}`}
                width={1200}
                height={700}
                className="w-full object-contain max-h-[500px] rounded-xl border border-gray-300"
              />
            )}
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
