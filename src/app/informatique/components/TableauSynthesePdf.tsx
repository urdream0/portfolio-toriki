"use client";

export default function TableauSynthesePdf() {
  return (
    <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-xl p-6 shadow-sm mt-24 mb-12 px-4">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        📄 Tableau de synthèse E5 – Projets BTS SIO SLAM
      </h2>
      <p className="text-gray-700 mb-6">
        Ce document récapitule tous les projets que j’ai réalisés ou auxquels j’ai contribué, 
        en les associant aux compétences du référentiel BTS SIO SLAM.
      </p>

      <div className="aspect-video w-full border border-gray-300 rounded-md overflow-hidden mb-6">
        <iframe
          src="import/Tableau_Synthese_E5_TEMATAUA.pdf#view=Fit"
          width="100%"
          height="500"
          className="w-full h-full"
        ></iframe>
      </div>

      <a
        href="import/Tableau_Synthese_E5_TEMATAUA.pdf"
        download
        className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
      >
        ⬇️ Télécharger le PDF
      </a>
    </div>
  );
}
