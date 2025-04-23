import Image from "next/image";
import { projets } from "@/data/projects";
import { notFound } from "next/navigation";
import { use } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projets.map((projet) => ({
    slug: projet.slug,
  }));
}

export default function ProjectPage({ params }: Props) {
  const { slug } = use(params); // très important pour débloquer la promesse !

  const projet = projets.find((p) => p.slug === slug);

  if (!projet) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">{projet.titre}</h1>
      <Image
        src={projet.image}
        alt={projet.titre}
        width={800} // adapte selon ton design
        height={450} // adapte selon ton design
        className="w-full max-w-2xl rounded shadow-lg mb-6 object-cover"
      />
      <p className="max-w-2xl text-center mb-6">{projet.description}</p>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {projet.technologies.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {projet.github && (
        <a
          href={projet.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Voir sur GitHub
        </a>
      )}
    </div>
  );
}
