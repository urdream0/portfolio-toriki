"use client";

import Image from "next/image";
import Link from "next/link";

export default function CarteEauPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-gray-800 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-8">
          Carte interactive des points d&apos;eau en Polynésie
        </h1>

        {/* Intro */}
        <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed">
          Ce projet a été réalisé dans le cadre de mon apprentissage personnel
          pour comprendre l&apos;utilisation d&apos;API publiques et le traitement de
          données géographiques. J’ai utilisé une API du portail open data
          TeFenua pour récupérer des données au format GeoJSON et afficher
          dynamiquement les points d’eau sur une carte interactive. Le tout est
          hébergé via GitHub Pages pour permettre un accès public simple et
          rapide.
        </p>

        {/* Stack technologique */}
        <div className="mb-12 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            🛠️ Outils & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {["HTML5", "CSS3", "JavaScript", "API TeFenua", "ArcGIS Web Viewer", "GitHub Pages"].map((tech) => (
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
        {[{
          title: "Développer la présence en ligne de l’organisation",
          description: (
            <>
              J’ai mis en ligne une application web statique sur GitHub Pages
              pour rendre accessible des données publiques géographiques
              utiles aux usagers polynésiens.
              <br />
              <br />
              Le site permet de visualiser ces données en temps réel grâce à
              une carte interactive construite à partir des services
              disponibles sur la plateforme TeFenua.
            </>
          ),
          image: "/images/carte-eau-preview.png",
        },
        {
          title: "Organiser son développement professionnel",
          description: (
            <>
              J’ai appris à manipuler des API publiques en consultant les
              ressources proposées par TeFenua (
              <a
                href="https://www.tefenua.data.gov.pf"
                className="text-blue-600 underline"
                target="_blank"
              >
                tefenua.data.gov.pf
              </a>
              ), en analysant les structures GeoJSON et en testant les
              requêtes via le service REST fourni.
              <br />
              <br />
              Ce projet m’a permis d&apos;améliorer mes compétences en JavaScript,
              intégration d&apos;API REST, et en conception d&apos;interfaces
              interactives accessibles.
            </>
          ),
          image: "/images/carte-gov.png",
        }].map((competence, index) => (
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
              className="w-full object-contain max-h-[500px] rounded-xl border border-gray-300"
            />
          </div>
        ))}

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