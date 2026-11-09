import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { links } from "./data.js";

const copy = {
  fr: {
    meta: {
      title: "Moïse Techer — Sites WordPress et sites personnalisés",
      description:
        "Moïse Techer, intégrateur web. Sites WordPress entre 100 et 500 €, et sites personnalisés sur devis.",
    },
    langLabel: "Langue",
    navLabel: "Navigation principale",
    mobileNavLabel: "Navigation mobile",
    homeLabel: "Moïse Techer — accueil",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    quote: "Demander un devis",
    nav: [
      { href: "#offres", label: "Offres" },
      { href: "#methode", label: "Méthode" },
      { href: "#realisations", label: "Réalisations" },
      { href: "#tarifs", label: "Tarifs" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      eyebrow: "Intégrateur web · France",
      titleBefore: "Des sites clairs, ",
      titleEm: "utiles",
      titleAfter: ", prêts à convertir.",
      copy: "Je livre des sites WordPress entre 100 et 500 €, ou un site personnalisé chiffré sur devis. HTML, CSS, JavaScript et React, en direct.",
      offers: "Voir les offres",
    },
    offers: {
      eyebrow: "Offres",
      title: "Deux façons de construire votre présence en ligne",
      lead: "Choisissez selon votre rythme, votre budget et le niveau de personnalisation dont vous avez vraiment besoin.",
      items: [
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
      ],
    },
    method: {
      eyebrow: "Méthode",
      title: "Un processus court, lisible, sans surprise",
      lead: "Chaque étape a un livrable. Vous savez où on en est, ce qui reste à décider, et quand le site est prêt.",
      steps: [
        { title: "Brief & cadrage", text: "Objectifs, audience, contenus existants et contraintes techniques." },
        { title: "Structure & design", text: "Architecture des pages, direction visuelle, validation avant développement." },
        { title: "Construction", text: "Intégration, contenus, formulaires, responsive et réglages essentiels." },
        { title: "Mise en ligne", text: "Tests, publication, passation et conseils pour la suite." },
      ],
    },
    work: {
      eyebrow: "Réalisations",
      title: "Projets web",
      lead: "Le portfolio, Wast’O chez Techer Digital, et Galileo Bank sur GitLab.",
      items: [
        {
          year: "2026",
          title: "Portfolio",
          href: links.portfolio,
          description: "Site vitrine en React pour présenter les projets, avec une grille claire et un mode sombre.",
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
          description: "Application bancaire sur GitLab : interface React, API Node.js et comptes, virements et tableau de bord.",
          tag: "GitLab",
        },
      ],
    },
    pricing: {
      eyebrow: "Tarifs indicatifs",
      title: "Deux tarifs, rien d’autre",
      lead: "WordPress est compris entre 100 et 500 € selon le nombre de pages et les contenus. Tout le reste se chiffre après le brief.",
      plans: [
        {
          id: "wordpress",
          label: "Forfait",
          name: "WordPress",
          amount: "100–500 €",
          description: "Un site WordPress pour présenter une activité et recevoir des messages.",
          features: ["Vitrine responsive", "Formulaire de contact", "Contenus que vous pouvez modifier", "Mise en ligne"],
          cta: "Choisir WordPress",
          featured: true,
        },
        {
          id: "devis",
          label: "Hors forfait",
          name: "Site personnalisé",
          amount: "Sur devis",
          description: "Un site personnalisé quand le parcours ou l’identité ne tient pas dans un thème WordPress.",
          features: ["HTML, CSS, JavaScript ou React", "Parcours défini avec vous", "Intégrations si le besoin est là", "Prix annoncé avant de commencer"],
          cta: "Choisir le site personnalisé",
          featured: false,
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlez-moi de votre projet",
      lead: "Décrivez le besoin en quelques lignes. Le formulaire ouvre un email vers",
      fields: { name: "Nom", email: "Email", project: "Type de projet", message: "Votre besoin" },
      placeholder: "Contexte, pages prévues, délai souhaité…",
      select: "Sélectionnez une option",
      options: [
        { value: "wordpress", label: "Site WordPress — 100 à 500 €" },
        { value: "devis", label: "Site personnalisé" },
      ],
      send: "Envoyer la demande",
      sending: "Envoi…",
      note: "Champs marqués d’un * obligatoires. L’envoi ouvre un email vers",
      successTitle: "Message bien reçu",
      success: "Votre logiciel mail s’ouvre avec le message adressé à",
      successAfter: "Envoyez-le pour que je le reçoive.",
      again: "Envoyer une autre demande",
      summary: (count) => `Veuillez corriger ${count} champ${count > 1 ? "s" : ""} :`,
      mailName: "Nom",
      mailEmail: "Email",
      mailProject: "Projet",
      mailSubject: "Demande de site",
      cvLabel: "Télécharger le CV",
    },
    errors: {
      name: "Indiquez votre nom.",
      email: "Entrez une adresse email valide.",
      project: "Choisissez un type de projet.",
      message: "Décrivez brièvement votre besoin (au moins 20 caractères).",
    },
    footer: "Sites WordPress entre 100 et 500 €, et sites personnalisés sur devis.",
  },
  en: {
    meta: {
      title: "Moïse Techer — WordPress sites and custom sites",
      description:
        "Moïse Techer, web developer. WordPress sites from €100 to €500, and custom sites priced on request.",
    },
    langLabel: "Language",
    navLabel: "Main navigation",
    mobileNavLabel: "Mobile navigation",
    homeLabel: "Moïse Techer — home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    quote: "Request a quote",
    nav: [
      { href: "#offres", label: "Offers" },
      { href: "#methode", label: "Method" },
      { href: "#realisations", label: "Work" },
      { href: "#tarifs", label: "Pricing" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      eyebrow: "Web developer · France",
      titleBefore: "Clear, ",
      titleEm: "useful",
      titleAfter: " sites, ready to convert.",
      copy: "I deliver WordPress sites from €100 to €500, or a custom site priced on request. HTML, CSS, JavaScript and React, directly.",
      offers: "See the offers",
    },
    offers: {
      eyebrow: "Offers",
      title: "Two ways to build your online presence",
      lead: "Choose according to your pace, your budget, and how much customisation you actually need.",
      items: [
        {
          id: "wordpress",
          index: "01",
          title: "WordPress site",
          text: "To launch a clear showcase, publish it yourself, and be contacted without waiting for a custom build.",
          points: [
            "Clear structure, sober and responsive design",
            "Pages, contact form and basic SEO",
            "Content you can edit on your own",
            "Launch and handover",
          ],
          price: "€100 to €500",
          cta: "Choose WordPress",
        },
        {
          id: "devis",
          index: "02",
          title: "Custom site",
          text: "When the journey, the identity or the interactions do not fit a WordPress theme.",
          points: [
            "Interface in HTML, CSS, JavaScript or React",
            "Journey and integrations defined with you",
            "Scope and price set after the brief",
            "Readable code, ready to evolve",
          ],
          price: "On request",
          cta: "Choose the custom site",
        },
      ],
    },
    method: {
      eyebrow: "Method",
      title: "A short process, easy to follow, with no surprises",
      lead: "Each step has a deliverable. You know where things stand, what is still to decide, and when the site is ready.",
      steps: [
        { title: "Brief & scope", text: "Goals, audience, existing content and technical constraints." },
        { title: "Structure & design", text: "Page architecture, visual direction, sign-off before development." },
        { title: "Build", text: "Integration, content, forms, responsive layout and the essential settings." },
        { title: "Launch", text: "Testing, publication, handover and advice for what comes next." },
      ],
    },
    work: {
      eyebrow: "Selected work",
      title: "Web projects",
      lead: "The portfolio, Wast’O at Techer Digital, and Galileo Bank on GitLab.",
      items: [
        {
          year: "2026",
          title: "Portfolio",
          href: links.portfolio,
          description: "A React showcase for presenting projects, with a clear grid and a dark mode.",
          tag: "React",
        },
        {
          year: "2026",
          title: "Wast’O",
          description:
            "A sorting platform for local authorities: a calendar and instructions widget, and a chatbot based on local rules. Front end and fixes at Techer Digital.",
          tag: "Product",
        },
        {
          year: "2026",
          title: "Galileo Bank",
          href: "https://gitlab.com/techermoisearhel/aurabank",
          description: "A banking app on GitLab: React interface, Node.js API, accounts, transfers and a dashboard.",
          tag: "GitLab",
        },
      ],
    },
    pricing: {
      eyebrow: "Guide prices",
      title: "Two prices, nothing else",
      lead: "WordPress is between €100 and €500 depending on the number of pages and the content. Everything else is priced after the brief.",
      plans: [
        {
          id: "wordpress",
          label: "Package",
          name: "WordPress",
          amount: "€100–500",
          description: "A WordPress site to present a business and receive messages.",
          features: ["Responsive showcase", "Contact form", "Content you can edit", "Launch"],
          cta: "Choose WordPress",
          featured: true,
        },
        {
          id: "devis",
          label: "Outside the package",
          name: "Custom site",
          amount: "On request",
          description: "A custom site when the journey or the identity does not fit a WordPress theme.",
          features: ["HTML, CSS, JavaScript or React", "Journey defined with you", "Integrations if the need is there", "Price announced before we start"],
          cta: "Choose the custom site",
          featured: false,
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell me about your project",
      lead: "Describe the need in a few lines. The form opens an email to",
      fields: { name: "Name", email: "Email", project: "Project type", message: "Your need" },
      placeholder: "Context, planned pages, desired timeline…",
      select: "Select an option",
      options: [
        { value: "wordpress", label: "WordPress site — €100 to €500" },
        { value: "devis", label: "Custom site" },
      ],
      send: "Send the request",
      sending: "Sending…",
      note: "Fields marked with * are required. Sending opens an email to",
      successTitle: "Message ready",
      success: "Your mail app opens with the message addressed to",
      successAfter: "Send it so I receive it.",
      again: "Send another request",
      summary: (count) => `Please correct ${count} field${count > 1 ? "s" : ""}:`,
      mailName: "Name",
      mailEmail: "Email",
      mailProject: "Project",
      mailSubject: "Website request",
      cvLabel: "Download CV",
    },
    errors: {
      name: "Enter your name.",
      email: "Enter a valid email address.",
      project: "Choose a project type.",
      message: "Describe your need briefly (at least 20 characters).",
    },
    footer: "WordPress sites from €100 to €500, and custom sites on request.",
  },
};

const LanguageContext = createContext(null);

function storedLang() {
  try {
    const saved = localStorage.getItem("site-offre-lang");
    if (saved === "en" || saved === "fr") return saved;
  } catch {
    /* ignore private-mode storage errors */
  }
  return "fr";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(storedLang);
  const value = useMemo(() => ({ lang, setLang, t: copy[lang] }), [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = copy[lang].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy[lang].meta.description);
    try {
      localStorage.setItem("site-offre-lang", lang);
    } catch {
      /* ignore private-mode storage errors */
    }
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useI18n must be used within LanguageProvider");
  return value;
}
