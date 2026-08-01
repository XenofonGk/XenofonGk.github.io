/*
 * Source of truth for every user-visible string.
 *
 * Only translatable prose lives here. Structural data that is the same in every
 * language — slugs, repo URLs, stack names, dates, email — stays in src/data.
 *
 * Keys must match exactly across locale files; a missing key falls back to this
 * file rather than rendering empty.
 */

export default {
  nav: {
    projects: 'Projets',
    about: 'À propos',
    contact: 'Contact',
    language: 'Langue',
    theme: 'Changer de thème',
    skip: 'Aller au contenu principal',
    primary: 'Principal',
  },

  home: {
    eyebrow: 'Toronto → Copenhague',
    revision: 'Rév. 2026',
    headlineStart: 'Je construis des logiciels comme je construisais ',
    headlineAccent: 'des maisons',
    lede: "Xenofon Gkioka — développeur full-stack en C#/.NET, React et TypeScript. Stagiaire ingénieur logiciel chez Mercell à Copenhague. Auparavant chef de chantier à Toronto.",
    tags: ['Selon les normes', 'Dans les délais', 'Porteur'],
    ctaWork: 'Voir le travail',
    ctaAbout: 'À propos de moi',
    ctaContact: 'Me contacter',
    dims: [
      { num: '4', lbl: 'Années à construire' },
      { num: '2', lbl: 'Pays de déploiement' },
      { num: 'C→WASM', lbl: 'Compilé pour tourner dans votre navigateur' },
      { num: '0', lbl: "Violations d'accessibilité" },
    ],
    featuredLabel: 'À la une',
    featuredNote: 'Tourne dans le navigateur',
    featuredTitle: 'Un programme en C, exécuté ici',
    featuredBody:
      "Le validateur de gare de triage est écrit en C et testé avec MSTest. Comme toutes ses entrées-sorties console sont isolées dans main.c, la couche logique se compile proprement vers WebAssembly — si bien que le même code exercé par la suite de tests s'exécute directement dans cette page. Rien n'est réimplémenté en JavaScript.",
    featuredCta: 'Ouvrir la démo',
  },

  projects: {
    label: 'Projets',
    note: 'Tel que construit',
    title: 'Travaux choisis',
    intro:
      "Ouvrez un projet pour lire la présentation et, quand il y en a une, tester une démo directement sur cette page.",
    open: 'Ouvrir',
    repo: 'Voir le dépôt',
    liveDemo: 'Démo en direct',
    alsoLabel: 'Autres réalisations',
    alsoTitle: 'Projets plus modestes',
    stack: 'Stack',
    role: 'Rôle',
    source: 'Source',
    close: 'Fermer',
    liveNote: 'Compilé du C vers WebAssembly',
    apiNote: 'ASP.NET Core et PostgreSQL, vérifié à chaque push',

    items: {
      'train-yard-manager': {
        title: 'Système de gestion de gare de triage',
        role: 'Projet de groupe, Seneca Polytechnic',
        summary:
          "Inventaire ferroviaire et validation de sécurité en C. Applique les limites de poids, la capacité de traction des locomotives et les protocoles de type de wagon, avec une suite de tests qui exerce la même couche logique.",
        body: [
          "Un train ne peut quitter la gare de triage que s'il respecte un ensemble de règles d'attelage et de charge. Ce système modélise l'inventaire de la gare et valide un train par rapport à ces règles avant qu'il ne soit approuvé.",
          "La contrainte intéressante est structurelle plutôt qu'algorithmique : les locomotives doivent toutes être en tête, le poids du fret ne peut pas dépasser la capacité de traction fournie par les locomotives, les wagons de bois et de pétrole ne peuvent pas être attelés l'un à côté de l'autre, et le premier wagon de fret ne peut jamais être un wagon de pétrole. Retirer un wagon oblige à tout revérifier, car en enlever un peut invalider ce qui reste.",
          "Toutes les entrées-sorties console sont isolées dans main.c, si bien que train_yard.c ne contient que de la logique pure, sans aucun printf ni scanf. Cette séparation permet aux mêmes fonctions d'être pilotées par la suite de tests, et c'est aussi ce qui a rendu la démo dans le navigateur possible — le C est compilé vers WebAssembly et appelé directement, sans rien réimplémenter en JavaScript.",
        ],
      },
      'taskmanager-api': {
        title: 'TaskManager REST API',
        role: 'Projet personnel',
        summary:
          "API de tâches conteneurisée — Entity Framework Core avec migrations code-first vers PostgreSQL, déployée comme une stack à deux services avec Docker Compose.",
        body: [
          "Une API REST construite autour d'un modèle de tâches, réalisée pour me familiariser avec le pipeline de requêtes d'ASP.NET Core et Entity Framework Core, plus que pour livrer un produit.",
          "Le schéma de base de données est code-first : le modèle est défini en C#, et EF Core génère les migrations qui construisent le schéma PostgreSQL. Docker Compose démarre l'API et la base de données ensemble comme une seule stack, si bien que tout se lance avec une seule commande sur une machine vierge.",
          "Les requêtes sont liées à des DTOs plutôt qu'à l'entité elle-même. Un binding direct sur l'entité permettrait à un appelant de fournir son propre id et EF Core l'accepterait, si bien qu'une requête désignant une ligne existante pourrait écraser une entrée qu'elle n'était jamais censée toucher. Les chaînes de connexion sont fournies via des variables d'environnement et les user-secrets .NET plutôt que d'être versionnées dans le dépôt.",
        ],
      },
      'inventory-crud': {
        title: 'Inventory CRUD',
        role: 'Travail de cours, approfondi',
        summary:
          "Gestion des catégories et des fournisseurs sur ASP.NET Core MVC — vues Razor, view models, et migrations EF Core vers SQL Server.",
        body: [
          "Une application MVC rendue côté serveur couvrant l'intégralité du cycle création, lecture, mise à jour et suppression sur deux entités liées.",
          "Réalisée pour comprendre le pattern MVC de bout en bout : le routage vers les contrôleurs, les contrôleurs qui transmettent des view models plutôt que des entités aux vues Razor, et les migrations EF Core qui maintiennent le schéma SQL Server aligné avec le modèle.",
        ],
      },
      arenacore: {
        title: 'Moteur de RPG ArenaCore',
        role: 'Travail de cours',
        summary:
          "Moteur en C++ construit autour d'une hiérarchie abstraite de combattants, appliquant la règle de trois, la surcharge d'opérateurs et la gestion manuelle de la mémoire.",
        body: [
          "Une petite arène au tour par tour utilisée comme support pour les fondamentaux de la programmation orientée objet en C++ : une interface abstraite de combattant, des sous-classes concrètes Warrior et Mage, et un conteneur Arena qui possède sa liste de combattants via des pointeurs bruts.",
          "Comme Arena possède directement de la mémoire sur le tas, elle doit adopter une position claire sur la copie. Elle supprime purement et simplement le constructeur de copie et l'opérateur d'affectation par copie plutôt que d'écrire des copies profondes, ce qui garde la question de la possession sans ambiguïté.",
        ],
      },
      portfolio: {
        title: 'Ce portfolio',
        role: 'Projet personnel',
        summary:
          "Le site que vous consultez en ce moment. React et Vite, un design system CSS fait main, déployé sur GitHub Pages par un workflow Actions à chaque push.",
        body: [
          "Construit sans framework d'interface ni bibliothèque de composants — le design system repose sur un ensemble de propriétés CSS personnalisées, et chaque composant est du JSX pur.",
          "Le déploiement s'exécute comme un workflow GitHub Actions : il installe, compile et publie le résultat. L'accessibilité est vérifiée avec axe-core, et l'objectif est zéro violation plutôt qu'un score.",
        ],
      },
    },

    also: {
      'c-projects': {
        title: 'Projets en C',
        note: "Recherche de popularité de prénoms sur des fichiers CSV de recensement, et une application console d'inventaire ferroviaire.",
      },
      'cpp-exercises': {
        title: 'Exercices en C++',
        note: 'Marketplace, validation de carte bancaire, commande de restaurant, tri, et un moteur de magasin lexical.',
      },
      'csharp-fundamentals': {
        title: 'Fondamentaux du C#',
        note: 'Applications console couvrant les bases de la POO — simulateur bancaire, gestionnaire de bibliothèque, suivi de notes.',
      },
      'shell-scripts': {
        title: 'Scripts Shell',
        note: 'Scripts utilitaires pour automatiser le flux de développement.',
      },
      'ai-tools': {
        title: 'Outils de programmation IA',
        note: 'Notes et références sur le prompting, les fondamentaux des réseaux de neurones, et les licences logicielles.',
      },
    },
  },

  about: {
    label: 'À propos',
    scale: 'Échelle 1:1',
    title: "Des plans de construction aux diagrammes d'architecture",
    paragraphs: [
      "Je suis étudiant en deuxième année de programmation informatique à Seneca Polytechnic, originaire de Grèce, actuellement basé entre Toronto et Copenhague. Avant d'écrire une ligne de code professionnellement, j'ai travaillé dans la construction au Canada — promu de membre d'équipe à chef de chantier, dirigeant des équipes et tenant des délais sous une pression bien réelle. C'est ce parcours qui explique pourquoi je ne romantise pas le « shipper vite » : j'ai géré des échéances où le coût d'un retard était bien plus concret qu'un ticket Jira.",
      "Je suis venu à la programmation via un poste de développeur backend junior chez Spinworks à Athènes, où je travaillais en PHP, Symfony et OroCommerce sur des systèmes e-commerce B2B. C'est là qu'est né mon intérêt pour le SaaS B2B, qui m'a mené jusqu'à Mercell.",
      "En ce moment, je développe des fonctionnalités front-end en React et TypeScript chez Mercell, une entreprise de SaaS dédiée aux achats à Copenhague, tout en terminant mon diplôme et en apprenant la stack C#/.NET en autodidacte.",
    ],
    specs: {
      based: 'Basé',
      focus: 'Focus',
      current: 'Actuel',
      education: 'Formation',
      languages: 'Langues',
      status: 'Statut',
    },
    specValues: {
      based: 'Toronto / Copenhague',
      focus: 'Full-stack — React, C#/.NET',
      current: 'Stagiaire ingénieur logiciel, Mercell',
      education: 'Seneca Polytechnic',
      languages: 'Grec, Anglais',
      status: 'RP Canada · Citoyen UE',
    },
    experienceLabel: 'Expérience',
    experienceNote: 'Élévation',
    experienceTitle: "Où j'ai travaillé",
    skillsLabel: 'Compétences',
    skillsNote: 'Liste des matériaux',
    skillsTitle: "Outils que j'utilise",
    skillGroups: {
      languages: 'Langages',
      frameworks: 'Frameworks',
      data: 'Données & Infra',
      practice: 'Pratiques',
    },
    jobs: {
      mercell: {
        title: 'Stagiaire ingénieur logiciel',
        date: 'Juin 2026 – Présent',
        bullets: [
          "Développé une bibliothèque de documents et un composant partagé de téléversement de fichiers en React et TypeScript, tous deux déployés en production pour les utilisateurs de la plateforme.",
          "Résolu des violations d'accessibilité sur des parcours utilisateurs clés, les rendant conformes aux normes WCAG.",
          "Livré des fonctionnalités dans un environnement Agile au rythme soutenu — daily stand-ups, sprint planning, backlog refinement, PI planning.",
        ],
      },
      spinworks: {
        title: 'Développeur Backend Junior',
        date: 'Août 2021 – Août 2022',
        bullets: [
          'Développé et maintenu des plateformes e-commerce B2B avec PHP, Symfony et OroCommerce.',
          'Réécrit des requêtes de base de données lentes affectant le temps de chargement sur des boutiques à fort trafic.',
          "Mené des revues de code et des tests d'intégration dans un workflow basé sur Git avant chaque déploiement en production.",
        ],
      },
      canera: {
        title: 'Chef de chantier',
        date: 'Sept. 2022 – Mai 2026',
        bullets: [
          "Promu de membre d'équipe à chef de chantier ; dirigé des équipes et coordonné les délais sous contraintes strictes.",
          "Géré la résolution de conflits sur site et l'allocation des ressources dans des environnements sous forte pression.",
        ],
      },
      ssf: {
        title: 'Coordinateur de campus',
        date: 'Fév. 2026 – Présent',
        bullets: [
          'Élu pour représenter les étudiants au campus Newnham, assurant la liaison entre les étudiants, le SSF et l\'administration.',
        ],
      },
    },
  },

  contact: {
    label: 'Contact',
    note: 'Approbation',
    title: 'Un projet à construire à Copenhague ou à Toronto ?',
    body: "Je suis ouvert aux postes d'ingénieur débutant ou junior, et je serais ravi d'échanger sur le front-end, .NET, ou tout ce qui touche de près au matériel.",
    email: 'E-mail',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },

  demo: {
    carType: 'Type de wagon',
    weight: 'Poids',
    addCar: 'Ajouter un wagon',
    reset: 'Réinitialiser',
    remove: 'Retirer',
    removeCar: 'Retirer le wagon {i}, {type}, poids {weight}',
    cars: 'Wagons',
    engines: 'Locomotives',
    totalWeight: 'Poids total',
    freightCapacity: 'Fret / capacité',
    status: 'État',
    safe: 'SAFE',
    unsafe: 'UNSAFE',
    loading: 'Chargement du validateur compilé…',
    failed: "La démo interactive n'a pas pu se charger dans ce navigateur. Le code source et la suite de tests sont liés ci-dessus.",
    added: 'Wagon {type} de poids {weight} ajouté.',
    rejected: "Wagon {type} de poids {weight} rejeté — il enfreindrait l'une des règles ci-dessous.",
    removed: 'Wagon {i} retiré.',
    removeRejected: 'Le wagon {i} ne peut pas être retiré — le train restant serait invalide.',
    resetDone: 'Train réinitialisé.',
    rulesTitle: 'Règles appliquées par le validateur en C',
    rules: [
      'Les locomotives doivent toutes être en tête du train.',
      'Le poids total ne peut pas dépasser 20 000.',
      'Le poids du fret ne peut pas dépasser la capacité de traction (5 000 par locomotive).',
      'Les wagons de bois et de pétrole ne peuvent pas être adjacents.',
      'Le premier wagon de fret ne peut pas être un wagon de pétrole.',
    ],
    types: {
      engine: 'Locomotive',
      food: 'Nourriture',
      wood: 'Bois',
      oil: 'Pétrole',
    },
  },

  taskDemo: {
    title: 'Titre de la tâche',
    placeholder: 'p. ex. Relire la pull request',
    add: 'Ajouter la tâche',
    complete: 'Terminer',
    reopen: 'Rouvrir',
    delete: 'Supprimer',
    created: "Tâche créée — l'API a renvoyé 201 avec son location.",
    rejected: "Rejetée avec 400 — une tâche a besoin d'un titre.",
    deleted: "Supprimée — l'API a renvoyé 204.",
    waking: "La base de données se réveille… elle s'endort quand elle est inactive sur le palier gratuit, donc la première requête prend un instant.",
    offline: "L'API en direct n'est pas joignable pour le moment, donc une session enregistrée est affichée à la place. Le code source et le journal complet des requêtes sont liés ci-dessus.",
    unhosted: "Cette API n'est pas déployée sur un hôte public. Elle démarre avec une seule commande via Docker Compose, et chaque endpoint ci-dessous est revérifié sur une véritable PostgreSQL à chaque push — le badge du dépôt affiche le dernier résultat.",
    transcriptCaption: "Requêtes enregistrées vers l'API et le statut renvoyé par chacune",
    method: 'Méthode',
    endpoint: 'Endpoint',
    status: 'Statut',
    notesTitle: 'Ce que cela démontre',
    notes: [
      "Chaque requête atteint un vrai service ASP.NET Core adossé à PostgreSQL, pas un mock.",
      "Les requêtes se lient à des DTOs, donc l'appelant ne peut pas fixer l'id ni l'heure de création — c'est le serveur qui les gère.",
      "Les codes de statut sont ceux attendus pour chaque verbe : 201 avec location à la création, 400 pour un corps invalide, 404 pour un id inconnu, 204 pour la mise à jour et la suppression.",
      "La base de données redescend à zéro instance quand elle est inactive, donc la première requête après une pause doit la réveiller.",
    ],
  },

  footer: {
    drawnBy: 'Dessiné par',
    location: 'Lieu',
    contact: 'Contact',
    revision: 'Révision',
  },

  notFound: {
    label: 'Feuille introuvable',
    title: 'Sur aucun plan',
    body: "Cette page n'existe pas. Elle a peut-être été renommée, ou le lien est peut-être incorrect.",
    home: "Retour à l'accueil",
    projects: 'Voir les projets',
  },

  /* Shown in the language menu and the footer whenever a non-verified locale is
     active. Deliberately plain — it is a statement about provenance, not an
     apology. */
  translationNote:
    "Cette page a été traduite avec une assistance automatisée et relue aussi soigneusement que possible, mais pas par un traducteur professionnel. La version anglaise fait foi.",
  translationNoteShort: 'Traduction assistée par ordinateur',
}
