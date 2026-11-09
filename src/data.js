export const nav = [
  { href: "#offres", label: "Offres" },
  { href: "#methode", label: "Méthode" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#contact", label: "Contact" },
];

export const links = {
  email: "techermoisearhel@gmail.com",
  cv: "https://vinapol.github.io/Portfolio/cv-moise-techer.pdf",
  linkedin: "https://www.linkedin.com/in/mo%C3%AFse-techer-36a168328",
  linkedinLabel: "linkedin.com/in/moïse-techer",
  malt: "https://www.malt.fr/profile/moisearheltecher",
  maltLabel: "malt.fr/profile/moisearheltecher",
  portfolio: "https://vinapol.github.io/Portfolio/",
  portfolioLabel: "vinapol.github.io/Portfolio",
};

export const offers = [
  {
    id: "wordpress",
    index: "01",
    title: "Site WordPress",
    text: "Pour lancer une vitrine claire, publier soi-même et être contacté sans attendre un développement sur mesure.",
    points: [
      "Structure claire, design sobre et responsive",
      "Pages, formulaire de contact et bases SEO",
      "Édition autonome du contenu",
      "Mise en ligne et prise en main",
    ],
    price: "100 à 500 €",
    cta: "Choisir WordPress",
  },
  {
    id: "devis",
    index: "02",
    title: "Site personnalisé",
    text: "Quand le parcours, l’identité ou les interactions ne rentrent pas dans un thème WordPress.",
    points: [
      "Interface en HTML, CSS, JavaScript ou React",
      "Parcours et intégrations définis avec vous",
      "Périmètre et prix fixés après le brief",
      "Code lisible, prêt à faire évoluer",
    ],
    price: "Sur devis",
    cta: "Choisir le site personnalisé",
  },
];

export const steps = [
  {
    title: "Brief & cadrage",
    text: "Objectifs, audience, contenus existants et contraintes techniques.",
  },
  {
    title: "Structure & design",
    text: "Architecture des pages, direction visuelle, validation avant développement.",
  },
  {
    title: "Construction",
    text: "Intégration, contenus, formulaires, responsive et réglages essentiels.",
  },
  {
    title: "Mise en ligne",
    text: "Tests, publication, passation et conseils pour la suite.",
  },
];

export const projects = [
  {
    year: "2026",
    title: "Portfolio",
    href: links.portfolio,
    description:
      "Site vitrine en React pour présenter les projets, avec une grille claire et un mode sombre.",
    tag: "React",
  },
  {
    year: "2026",
    title: "Wast’O",
    description:
      "Plateforme de tri pour les collectivités : widget de calendrier et de consignes, chatbot fondé sur les règles locales. Front et correctifs chez Techer Digital.",
    tag: "Produit",
  },
  {
    year: "2026",
    title: "Galileo Bank",
    href: "https://gitlab.com/techermoisearhel/aurabank",
    description:
      "Application bancaire sur GitLab : interface React, API Node.js et comptes, virements et tableau de bord.",
    tag: "GitLab",
  },
];

export const plans = [
  {
    id: "wordpress",
    label: "Forfait",
    name: "WordPress",
    amount: "100–500 €",
    description: "Un site WordPress pour présenter une activité et recevoir des messages.",
    features: [
      "Vitrine responsive",
      "Formulaire de contact",
      "Contenus que vous pouvez modifier",
      "Mise en ligne",
    ],
    cta: "Choisir WordPress",
    featured: true,
  },
  {
    id: "devis",
    label: "Hors forfait",
    name: "Site personnalisé",
    amount: "Sur devis",
    description: "Un site personnalisé quand le parcours ou l’identité ne tient pas dans un thème WordPress.",
    features: [
      "HTML, CSS, JavaScript ou React",
      "Parcours défini avec vous",
      "Intégrations si le besoin est là",
      "Prix annoncé avant de commencer",
    ],
    cta: "Choisir le site personnalisé",
    featured: false,
  },
];

export const projectOptions = [
  { value: "wordpress", label: "Site WordPress — 100 à 500 €" },
  { value: "devis", label: "Site personnalisé" },
];
