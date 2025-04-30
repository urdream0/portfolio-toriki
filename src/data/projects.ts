export const projets = [
    {
      slug: "ecommerce",
      titre: "Site E-commerce pour banque locale",
      description: "Plateforme de vente développée en Java 17, Spring Boot et React. Conçue pour le personnel d'une banque locale.",
      image: "/images/ecommerce.png",
      technologies: ["Java 17", "Spring Boot", "Next.js", "PostgreSQL"],
      github: "https://github.com/urdream0/SOCMarket",
      siteWeb: "projets/socmarket", // 🛠 Ajouté ici
    },
    // {
    //   slug: "portfolio",
    //   titre: "Portfolio Vitrine",
    //   description: "Mon site personnel développé avec Next.js 15 et Framer Motion.",
    //   image: "/images/portfolio.png",
    //   technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    //   github: "https://github.com/ton-repo/portfolio",
    //   siteWeb: "https://lien-vers-le-portfolio.com", // 🛠 Ajouté ici
    // },
    {
      slug: "polystore",
      titre: "Polystore – Boutique en ligne",
      description:
        "Polystore est une boutique en ligne développée en équipe, permettant la mise en vente de produits locaux.Le projet respecte l’architecture MVC et a été conteneurisé via Docker. Il a été mené dans un cadre scolaire, avec une forte dimension collaborative.",
      image: "/images/polystore.png", // 📌 Assure-toi que cette image existe dans public/images
      technologies: ["PHP", "HTML5", "CSS3", "MySQL", "Docker", "GitHub"],
      github: "https://github.com/tehaulp/polystore", // ➕ Remplace par ton vrai lien GitHub
      siteWeb: "/projets/polystore", // (facultatif) tu peux mettre le lien si hébergé quelque part
    },
    {
      slug: "carte-eau",
      titre: "Carte interactive – Points d’eau en Polynésie",
      description: "Application web affichant les points d’eau publics en Polynésie à partir des données du portail TeFenua, intégrées via l’API ArcGIS.",
      image: "/images/carte-eau-preview.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "ArcGIS API"],
      github: "", // Remplace si besoin
      siteWeb: "/projets/carte-eau",
    },
    {
      slug: "glide",
      titre: "Glide – Application de suivi d’investissements",
      description:
        "Application SaaS no-code développée avec Glide pour permettre à une entreprise de suivre facilement ses investissements via Google Sheets.",
      image: "/images/investor.png",
      technologies: ["Glide", "Google Sheets", "Glide Actions", "UI Builder"],
      github: "", // Pas nécessaire pour un projet Glide
      siteWeb: "/projets/glide",
    }
  ];