/* fr strings. Keys mirror en.js exactly (npm run check:locales). */

export default {
  "nav": {
    "projects": "Projets",
    "about": "À propos",
    "contact": "Contact",
    "language": "Langue",
    "theme": "Changer de thème",
    "skip": "Aller au contenu principal",
    "primary": "Principal",
    "work": "Réalisations",
    "sites": "Chantiers",
    "clients": "Clients",
    "engineRoom": "Salle des machines",
    "cv": "CV",
    "palette": "Aller à…",
    "paletteLabel": "Ouvrir la palette de commandes"
  },
  "home": {
    "eyebrow": "Développeur full-stack · Toronto · disponible",
    "headline": "Je construis des logiciels comme je construisais des maisons : conformes au plan, livrés à temps et faits pour durer.",
    "lede": "Je suis Xenofon Gkioka, développeur full-stack en React, TypeScript et C#/.NET. J'ai livré des fonctionnalités en production chez Mercell à Copenhague, réalisé deux sites clients en ligne, et j'héberge mes propres projets sur un serveur que j'ai installé et que j'entretiens.",
    "ctaWork": "Voir ce qui est en ligne",
    "ctaProjects": "Tous les projets",
    "ctaContact": "Me contacter",
    "live": "En ligne",
    "liveLabel": "En ligne",
    "liveTitle": "Ce que vous pouvez ouvrir dès maintenant",
    "liveIntro": "Deux sites clients et deux services qui tournent sur mon propre serveur. Chaque lien est une vraie adresse publique.",
    "visit": "Ouvrir",
    "caseStudy": "Étude de cas",
    "details": "Détails",
    "kinds": {
      "client": "Site client",
      "server": "Sur mon serveur"
    },
    "cards": {
      "azclean": {
        "title": "AZ Clean",
        "note": "Site d'une entreprise de nettoyage de canapés et de matelas à Athènes, en Grèce."
      },
      "way": {
        "title": "WAY Empowerment",
        "note": "Nouveau site pour une ONG bénévole qui soutient les femmes et les jeunes au Kenya."
      },
      "tasks": {
        "title": "TaskManager API",
        "note": "API REST en ASP.NET Core et PostgreSQL avec une documentation Swagger interactive."
      },
      "classifier": {
        "title": "Resume Classifier",
        "note": "Service d'apprentissage automatique en Python qui classe des CV en cinq familles de métiers."
      }
    },
    "hostLabel": "Comment ça tourne",
    "hostTitle": "Hébergé sur du matériel que je gère moi-même",
    "hostIntro": "Les services tournent sur un vieil ordinateur portable transformé en serveur domestique, configuré comme un environnement de production, en plus petit.",
    "hostPoints": [
      "Aucun port ouvert sur mon routeur : le trafic arrive par un tunnel Cloudflare sortant.",
      "Chaque push sur main compile, analyse et signe une image de conteneur, et le serveur vérifie la signature avant de la déployer.",
      "Supervision, alertes sur mon téléphone et sauvegardes testées par une vraie restauration."
    ],
    "hostCta": "Comment le serveur est construit",
    "featuredLabel": "À la une",
    "featuredTitle": "Un programme en C, exécuté ici",
    "featuredBody": "Le validateur de gare de triage est écrit en C et testé avec MSTest. Comme toutes ses entrées-sorties console sont isolées dans main.c, la couche logique se compile proprement vers WebAssembly — si bien que le même code exercé par la suite de tests s'exécute directement dans cette page. Rien n'est réimplémenté en JavaScript.",
    "featuredCta": "Ouvrir la démo",
    "notice": "Avis de travaux en cours · Toronto",
    "permitTitle": "Logiciel en construction.",
    "permitLede": "Quatre ans à superviser des chantiers de maisons à Toronto. Aujourd'hui je construis du logiciel de la même façon : selon le cahier des charges, dans les délais, fait pour durer. Full-stack en React, TypeScript et C#/.NET, et ce que je construis tourne sur mon propre serveur.",
    "ctaSites": "Visiter les chantiers",
    "ctaCv": "Imprimer mon CV",
    "permit": {
      "title": "Permis de construire",
      "no": "N° XG-2026-05",
      "contractor": "Entrepreneur",
      "status": "Statut",
      "statusValue": "Disponible",
      "trade": "Métier",
      "tradeValue": "Full-stack · DevOps",
      "licensed": "Autorisé à travailler",
      "licensedValue": "Canada (RP) · UE",
      "log": "Journal des inspections · en direct de mon serveur",
      "last": "Dernière inspection",
      "offline": "Aucun relevé pour le moment : le serveur est peut-être en veille.",
      "passed": "Conforme",
      "failed": "Échec",
      "deploy": "Déploiement signé vérifié",
      "backup": "Sauvegarde vérifiée",
      "checks": "Contrôles de santé réussis",
      "post": "À afficher de façon visible"
    },
    "sitesTitle": "Chantiers actifs",
    "sitesHint": "Choisissez un chantier pour ouvrir son dossier",
    "site": "Chantier",
    "stamps": {
      "live": "En ligne",
      "down": "Hors ligne",
      "result": "0 → 27/59",
      "open": "Open source",
      "progress": "En cours"
    },
    "file": {
      "label": "Dossier de permis",
      "problem": "Problème",
      "approach": "Approche",
      "hard": "La partie difficile",
      "result": "Résultat",
      "open": "Ouvrir le dossier complet",
      "source": "Code",
      "live": "Voir en ligne"
    },
    "clientsTitle": "Sites pour des clients",
    "clientsIntro": "Des sites que j’ai construits pour une entreprise à Athènes et une ONG au Kenya, en ligne sur leurs propres domaines.",
    "clientsCta": "Voir le travail pour les clients",
    "engineTitle": "La salle des machines",
    "engineIntro": "Tout ce qui précède tourne sur un vieux portable configuré comme en production. Voyez comment il est construit et ce qu’il fait en ce moment.",
    "engineCta": "Visiter la salle des machines",
    "contactTitle": "Vous recrutez ? Parlons-en.",
    "contactBody": "Postes full-stack au Canada ou dans l’UE. Je réponds sous un jour.",
    "contactCta": "M’écrire",
    "diagram": {
      "title": "Comment une requête atteint mon serveur",
      "alt": "Schéma : un visiteur atteint le réseau Cloudflare, qui transmet par un tunnel sortant à Caddy sur le serveur maison, puis aux conteneurs. Séparément, GitHub Actions construit et signe une image que le serveur récupère et vérifie avant de la déployer. Les sauvegardes nocturnes et les alertes sur téléphone tournent sur le serveur.",
      "visitor": "Visiteur",
      "edge": "Réseau Cloudflare",
      "tunnel": "Tunnel sortant",
      "proxy": "Caddy",
      "apps": "Conteneurs",
      "ci": "GitHub Actions",
      "registry": "Image signée",
      "deploy": "Récupération + vérif.",
      "backup": "Sauvegarde nocturne",
      "alerts": "Alertes sur téléphone",
      "router": "Box internet : aucun port ouvert",
      "host": "Serveur maison"
    },
    "inspect": {
      "title": "Visite de chantier",
      "live": "Relevé en direct",
      "loading": "Relevé en cours…",
      "unavailable": "Aucun relevé pour le moment. Le serveur est peut-être en veille ou redémarre ; les liens du tableau ci-dessus indiquent si chaque service répond.",
      "taken": "Relevé effectué",
      "services": "Services qui répondent",
      "deploy": "Dernier déploiement",
      "verified": "signature vérifiée",
      "backup": "Dernière sauvegarde",
      "checks": "Contrôles de santé réussis",
      "uptime": "En marche depuis",
      "days": "{n} j",
      "hours": "{n} h"
    }
  },
  "projects": {
    "label": "Projets",
    "note": "Tel que construit",
    "title": "Travaux choisis",
    "intro": "Ouvrez un projet pour lire la présentation et, quand il y en a une, tester une démo directement sur cette page.",
    "open": "Ouvrir",
    "repo": "Voir le dépôt",
    "liveDemo": "Démo en direct",
    "alsoLabel": "Autres réalisations",
    "alsoTitle": "Projets plus modestes",
    "stack": "Stack",
    "role": "Rôle",
    "source": "Source",
    "close": "Fermer",
    "liveNote": "Compilé du C vers WebAssembly",
    "apiNote": "ASP.NET Core et PostgreSQL, vérifié à chaque push",
    "arenaNote": "Compilé de C++ vers WebAssembly",
    "items": {
      "train-yard-manager": {
        "title": "Système de gestion de gare de triage",
        "role": "Projet de groupe, Seneca Polytechnic",
        "summary": "Inventaire ferroviaire et validation de sécurité en C. Applique les limites de poids, la capacité de traction des locomotives et les protocoles de type de wagon, avec une suite de tests qui exerce la même couche logique.",
        "body": [
          "Un train ne peut quitter la gare de triage que s'il respecte un ensemble de règles d'attelage et de charge. Ce système modélise l'inventaire de la gare et valide un train par rapport à ces règles avant qu'il ne soit approuvé.",
          "La contrainte intéressante est structurelle plutôt qu'algorithmique : les locomotives doivent toutes être en tête, le poids du fret ne peut pas dépasser la capacité de traction fournie par les locomotives, les wagons de bois et de pétrole ne peuvent pas être attelés l'un à côté de l'autre, et le premier wagon de fret ne peut jamais être un wagon de pétrole. Retirer un wagon oblige à tout revérifier, car en enlever un peut invalider ce qui reste.",
          "Toutes les entrées-sorties console sont isolées dans main.c, si bien que train_yard.c ne contient que de la logique pure, sans aucun printf ni scanf. Cette séparation permet aux mêmes fonctions d'être pilotées par la suite de tests, et c'est aussi ce qui a rendu la démo dans le navigateur possible — le C est compilé vers WebAssembly et appelé directement, sans rien réimplémenter en JavaScript."
        ]
      },
      "taskmanager-api": {
        "title": "TaskManager REST API",
        "role": "Projet personnel",
        "summary": "API REST conteneurisée avec EF Core et PostgreSQL, écritures protégées par clé et image signée que mon serveur déploie automatiquement.",
        "body": [
          "Une API REST autour d'un modèle de tâches, conçue pour pratiquer le pipeline de requêtes d'ASP.NET Core et Entity Framework Core. Elle est en ligne sur mon serveur domestique, avec une documentation Swagger interactive sur tasks.xgbuilds.dev.",
          "Le schéma est code-first : EF Core génère les migrations qui créent le schéma PostgreSQL. Les requêtes sont liées à des DTO et non à l'entité, pour qu'un appelant ne puisse pas fixer son propre id et écraser une ligne qui ne le concerne pas.",
          "Les lectures sont publiques ; les écritures exigent une clé API, comparée en temps constant. Chaque push sur main lance le test de contrat contre un vrai PostgreSQL, puis compile, analyse et signe l’image que le serveur déploie."
        ],
        "file": {
          "problem": "Construire une API REST comme on construit celles de production, pas une liste de tâches de tutoriel.",
          "approach": "Migrations code-first avec EF Core, DTO pour que personne ne fixe son propre id, lectures publiques et écritures protégées par clé, dans Docker.",
          "hard": "La rendre sûre à laisser sur internet : la clé d’API est comparée en temps constant, et chaque push lance le test de contrat contre une vraie PostgreSQL avant de signer l’image.",
          "result": "En ligne sur tasks.xgbuilds.dev avec la documentation Swagger, déployée automatiquement dès qu’une nouvelle image signée apparaît."
        }
      },
      "inventory-crud": {
        "title": "Inventory CRUD",
        "role": "Travail de cours, approfondi",
        "summary": "Gestion des catégories et des fournisseurs sur ASP.NET Core MVC — vues Razor, view models, et migrations EF Core vers SQL Server.",
        "body": [
          "Une application MVC rendue côté serveur couvrant l'intégralité du cycle création, lecture, mise à jour et suppression sur deux entités liées.",
          "Réalisée pour comprendre le pattern MVC de bout en bout : le routage vers les contrôleurs, les contrôleurs qui transmettent des view models plutôt que des entités aux vues Razor, et les migrations EF Core qui maintiennent le schéma SQL Server aligné avec le modèle."
        ]
      },
      "arenacore": {
        "title": "Moteur de RPG ArenaCore",
        "role": "Travail de cours",
        "summary": "Moteur en C++ construit autour d'une hiérarchie abstraite de combattants, appliquant la règle de trois, la surcharge d'opérateurs et la gestion manuelle de la mémoire.",
        "body": [
          "Une petite arène au tour par tour utilisée comme support pour les fondamentaux de la programmation orientée objet en C++ : une interface abstraite de combattant, des sous-classes concrètes Warrior et Mage, et un conteneur Arena qui possède sa liste de combattants via des pointeurs bruts.",
          "Comme Arena possède directement de la mémoire sur le tas, elle doit adopter une position claire sur la copie. Elle supprime purement et simplement le constructeur de copie et l'opérateur d'affectation par copie plutôt que d'écrire des copies profondes, ce qui garde la question de la possession sans ambiguïté."
        ]
      },
      "portfolio": {
        "title": "Ce portfolio",
        "role": "Projet personnel",
        "summary": "Le site que vous consultez en ce moment. React et Vite, un design system CSS fait main, déployé sur GitHub Pages par un workflow Actions à chaque push.",
        "body": [
          "Construit sans framework d'interface ni bibliothèque de composants — le design system repose sur un ensemble de propriétés CSS personnalisées, et chaque composant est du JSX pur.",
          "Le déploiement s'exécute comme un workflow GitHub Actions : il installe, compile et publie le résultat. L'accessibilité est vérifiée avec axe-core, et l'objectif est zéro violation plutôt qu'un score."
        ]
      },
      "resume-classifier": {
        "title": "Resume Classifier API",
        "role": "Projet personnel",
        "summary": "Classe des textes de CV en cinq familles de métiers avec TF-IDF et une régression logistique, servi comme API depuis mon serveur domestique.",
        "body": [
          "Un pipeline scikit-learn (nettoyage, caractéristiques TF-IDF, régression logistique) servi avec FastAPI. Il est entraîné sur un corpus généré, car de vrais CV sont des données personnelles.",
          "Le premier générateur donnait à chaque métier son propre vocabulaire et le modèle obtenait un 1,00 parfait, qui mesurait le jeu de données et non le modèle. Le corpus partage désormais des formules et des outils entre métiers, et 45 % des CV empruntent une ligne à un autre domaine. La précision sur du texte généré est d'environ 0,98 : la preuve que le pipeline fonctionne de bout en bout, rien de plus.",
          "Chaque étiquette est accompagnée d'un indice de confiance. Un texte sans rapport obtient environ 22 %, à peine au-dessus des 20 % du hasard : c'est le modèle qui dit qu'il ne sait pas."
        ],
        "file": {
          "problem": "Classer des CV par famille de métiers sans entraîner sur les données personnelles de quiconque.",
          "approach": "Un corpus généré, des caractéristiques TF-IDF et une régression logistique, servis avec FastAPI dans un conteneur signé.",
          "hard": "Le premier modèle a obtenu un 1.00 parfait. Cela mesurait le jeu de données, pas le modèle : chaque métier avait ses propres mots. J’ai refait le corpus avec du vocabulaire et des outils partagés jusqu’à ce que le score veuille dire quelque chose.",
          "result": "En ligne et honnête : chaque étiquette a un niveau de confiance, et un texte sans rapport obtient environ 22 %, près des 20 % du hasard."
        }
      },
      "aoda-scan": {
        "title": "aoda-scan",
        "role": "Open source",
        "summary": "Outil en ligne de commande qui parcourt tout un site et l'évalue selon WCAG 2.1 AA et l'AODA de l'Ontario.",
        "body": [
          "La plupart des outils d'accessibilité testent une page à la fois, mais un site échoue dans son ensemble : le même composant défaillant échoue sur chaque page qui l'utilise. aoda-scan parcourt le site, teste chaque page avec axe-core dans un vrai navigateur et résume les résultats en une note, un taux de conformité et une liste de priorités.",
          "Il se lance avec npx aoda-scan et une URL. Il affiche un résumé dans le terminal et écrit un rapport HTML à côté."
        ],
        "file": {
          "problem": "Les outils d’accessibilité vérifient une page à la fois, mais les vrais sites échouent de la même façon sur cinquante.",
          "approach": "Parcourir tout le site, lancer axe-core sur chaque page avec Playwright, et tout résumer en une note et une liste de corrections par priorité.",
          "hard": "Transformer le bruit en travail : un défaut dans un en-tête partagé apparaît sur chaque page, donc le rapport le regroupe en une correction au lieu de cinquante constats.",
          "result": "Open source, testé sur Node 20, 22 et 24, avec une GitHub Action qui vérifie un site à chaque push."
        }
      },
      "agentmesh": {
        "title": "AgentMesh",
        "role": "Open source",
        "summary": "Plateforme auto-hébergée pour faire tourner des agents de code IA chez plusieurs fournisseurs de modèles, où chaque utilisateur apporte ses propres clés.",
        "body": [
          "AgentMesh est un logiciel que vous faites tourner, pas un service auquel on s'inscrit. Une application Next.js et une API Fastify pilotent des agents chez cinq fournisseurs (Claude, Gemini, DeepSeek, Grok et Ollama), avec une transcription en direct et un écran de revue de chaque modification.",
          "La sécurité est au cœur de la conception. Les clés des fournisseurs sont dans un coffre chiffré, les agents tournent dans des conteneurs isolés qui ne voient jamais de clé, et leurs requêtes passent par un proxy interne qui ajoute la clé, retire les secrets des journaux et limite le débit. C'est aussi pourquoi il n'y a pas de démo publique."
        ],
        "file": {
          "problem": "Faire tourner des agents de code IA chez plusieurs fournisseurs sans leur confier vos clés d’API.",
          "approach": "Un coffre d’identifiants et un proxy, cinq adaptateurs de fournisseurs, un exécuteur isolé et un écran de relecture de ce que l’agent a modifié.",
          "hard": "La frontière de sécurité : les clés ne vivent que dans le coffre, le proxy les injecte à chaque requête, et l’exécuteur n’a accès à aucun des deux.",
          "result": "Phases 0 à 5 construites et testées ; la publication en open source est en cours."
        }
      },
      "home-server": {
        "title": "Serveur domestique",
        "role": "Projet personnel",
        "summary": "Un vieux portable géré comme de la production : Cloudflare Tunnel, déploiements signés en pull, supervision et sauvegardes testées.",
        "body": [
          "Les projets en ligne de ce site tournent sur un vieux portable Asus avec 5,7 Go de RAM. Cette limite a guidé chaque décision : chaque conteneur a un plafond de mémoire, rien ne touche aux réglages réseau et aucun port n'est ouvert sur internet. Le trafic arrive par un tunnel Cloudflare sortant.",
          "Les déploiements se font en pull : la CI publie une image signée et le serveur vérifie la signature par rapport au workflow exact qui l'a construite avant de la lancer. Les décisions sont consignées dans des architecture decision records, et chaque panne a son postmortem sans recherche de coupable."
        ],
        "file": {
          "problem": "Héberger mes projets depuis un portable à la maison, en Wi-Fi, sans ouvrir un seul port sur la box.",
          "approach": "Cloudflare Tunnel devant, Caddy dedans, la périphérie écrite en code avec OpenTofu, et des images signées vérifiées avant chaque déploiement.",
          "hard": "Des sauvegardes qui avaient seulement l’air bonnes : un cron sautait des nuits en silence quand le portable était éteint. Je l’ai remplacé par un minuteur systemd qui rattrape, plus un interrupteur d’homme mort qui m’écrit quand une nuit manque.",
          "result": "Deux API publiques en ligne, 49 contrôles automatiques réussis, des alertes sur mon téléphone et des restaurations prouvées, pas supposées."
        }
      },
      "ai-eng": {
        "title": "ai-eng",
        "role": "Projet personnel",
        "summary": "Applique le mutation testing à un diff écrit par une IA pour voir si vos tests attraperaient un vrai bug. Sur 59 vrais bugs de zod, il en a signalé 27 ; les tests existants n’en ont attrapé aucun.",
        "body": [
          "Une suite de tests au vert dit que les tests ont tourné. Elle ne dit pas s’ils remarqueraient que le code est faux, et plus l’IA écrit de code, plus cet écart compte.",
          "ai-eng prend un diff, ne mute que les lignes modifiées (conditions inversées, bornes décalées, signes échangés) et lance la suite existante contre chaque mutant. Un mutant qui survit signale du code qu’aucun test ne vérifie vraiment.",
          "Pour le mesurer honnêtement, j’ai réintroduit 60 vrais bugs de la bibliothèque zod en annulant leurs correctifs, et j’ai gardé le test de chaque correctif comme corrigé."
        ],
        "file": {
          "problem": "Une suite au vert dit que les tests ont tourné, pas qu’ils attraperaient un bug dans du code qu’une IA vient d’écrire.",
          "approach": "Mutation testing du diff : inverser une condition, une borne ou un signe dans les lignes modifiées, et voir si un test le remarque.",
          "hard": "Le prouver sur de vrais bugs plutôt que sur des jouets. J’ai annulé 60 vrais correctifs de la bibliothèque zod et gardé le test de chaque correctif comme corrigé.",
          "result": "Les tests existants ont attrapé 0 des 59 bugs réintroduits. ai-eng a signalé les lignes fautives dans 27 cas (45,8 %)."
        }
      }
    },
    "also": {
      "c-projects": {
        "title": "Projets en C",
        "note": "Recherche de popularité de prénoms sur des fichiers CSV de recensement, et une application console d'inventaire ferroviaire."
      },
      "cpp-exercises": {
        "title": "Exercices en C++",
        "note": "Marketplace, validation de carte bancaire, commande de restaurant, tri, et un moteur de magasin lexical."
      },
      "csharp-fundamentals": {
        "title": "Fondamentaux du C#",
        "note": "Applications console couvrant les bases de la POO — simulateur bancaire, gestionnaire de bibliothèque, suivi de notes."
      },
      "shell-scripts": {
        "title": "Scripts Shell",
        "note": "Scripts utilitaires pour automatiser le flux de développement."
      },
      "ai-tools": {
        "title": "Outils de programmation IA",
        "note": "Notes et références sur le prompting, les fondamentaux des réseaux de neurones, et les licences logicielles."
      }
    },
    "liveBadge": "En ligne",
    "openLive": "Ouvrir en ligne",
    "fileTitle": "Dossier de permis"
  },
  "about": {
    "label": "À propos",
    "scale": "Échelle 1:1",
    "title": "Des plans de construction aux diagrammes d'architecture",
    "paragraphs": [
      "J'étudie Computer Programming & Analysis au Seneca Polytechnic à Toronto, et je suis originaire de Grèce. J'ai aussi travaillé dans la construction au Canada, passant de membre d'équipe à chef de chantier, à diriger des équipes et tenir des délais sous une vraie pression. C'est pourquoi je n'idéalise pas le « livrer vite » : j'ai géré des plannings où le coût d'un retard était bien plus concret qu'un ticket Jira.",
      "J'ai commencé la programmation dans un poste de développeur backend junior chez Spinworks à Athènes, en PHP, Symfony et OroCommerce sur des systèmes de e-commerce B2B. C'est là qu'est né mon intérêt pour le SaaS B2B, qui m'a mené chez Mercell.",
      "Cet été, j'ai développé des fonctionnalités front-end en React et TypeScript chez Mercell, une entreprise SaaS d'achats publics à Copenhague. Je suis maintenant de retour à Toronto pour terminer mon diplôme, je réalise des sites pour des clients et j'héberge mes propres projets sur un serveur que j'ai installé et que j'entretiens."
    ],
    "specs": {
      "based": "Basé",
      "focus": "Focus",
      "current": "Actuel",
      "education": "Formation",
      "languages": "Langues",
      "status": "Statut"
    },
    "specValues": {
      "based": "Toronto, Canada",
      "focus": "Full-stack — React, C#/.NET",
      "current": "Disponible pour des postes junior et intermédiaires",
      "education": "Seneca Polytechnic",
      "languages": "Grec, Anglais",
      "status": "RP Canada · Citoyen UE"
    },
    "experienceLabel": "Expérience",
    "experienceNote": "Élévation",
    "experienceTitle": "Où j'ai travaillé",
    "skillsLabel": "Compétences",
    "skillsNote": "Liste des matériaux",
    "skillsTitle": "Outils que j'utilise",
    "skillGroups": {
      "languages": "Langages",
      "frameworks": "Frameworks",
      "data": "Données & Infra",
      "practice": "Pratiques"
    },
    "jobs": {
      "mercell": {
        "title": "Stagiaire ingénieur logiciel",
        "date": "juin – août 2026",
        "bullets": [
          "Développé une bibliothèque de documents et un composant partagé de téléversement de fichiers en React et TypeScript, tous deux déployés en production pour les utilisateurs de la plateforme.",
          "Résolu des violations d'accessibilité sur des parcours utilisateurs clés, les rendant conformes aux normes WCAG.",
          "Livré des fonctionnalités dans un environnement Agile au rythme soutenu — daily stand-ups, sprint planning, backlog refinement, PI planning."
        ]
      },
      "spinworks": {
        "title": "Développeur Backend Junior",
        "date": "Août 2021 – Août 2022",
        "bullets": [
          "Développé et maintenu des plateformes e-commerce B2B avec PHP, Symfony et OroCommerce.",
          "Réécrit des requêtes de base de données lentes affectant le temps de chargement sur des boutiques à fort trafic.",
          "Mené des revues de code et des tests d'intégration dans un workflow basé sur Git avant chaque déploiement en production."
        ]
      },
      "canera": {
        "title": "Chef de chantier",
        "date": "Sept. 2022 – Mai 2026",
        "bullets": [
          "Promu de membre d'équipe à chef de chantier ; dirigé des équipes et coordonné les délais sous contraintes strictes.",
          "Géré la résolution de conflits sur site et l'allocation des ressources dans des environnements sous forte pression."
        ]
      },
      "ssf": {
        "title": "Coordinateur de campus",
        "date": "Fév. 2026 – Présent",
        "bullets": [
          "Élu pour représenter les étudiants au campus Newnham, assurant la liaison entre les étudiants, le SSF et l'administration."
        ]
      }
    }
  },
  "contact": {
    "label": "Contact",
    "note": "Approbation",
    "title": "Un projet à construire à Copenhague ou à Toronto ?",
    "body": "Je suis ouvert aux postes d'ingénieur débutant ou junior, et je serais ravi d'échanger sur le front-end, .NET, ou tout ce qui touche de près au matériel.",
    "email": "E-mail",
    "linkedin": "LinkedIn",
    "github": "GitHub"
  },
  "demo": {
    "intro": "Un train ne peut quitter le triage que s'il respecte toutes les règles d'attelage et de chargement. Ajoutez des wagons et observez lesquelles les refusent — et notez que retirer un wagon est aussi refusé lorsque le train qui en résulterait ne serait pas sûr.",
    "tryThis": "Essayez l’un de ceux-ci",
    "sentenceEnd": ".",
    "rejectedBecause": "Wagon de type {type} pesant {weight} refusé — {reason}",
    "removeRejectedBecause": "Le wagon {i} ne peut pas être retiré — {reason}",
    "reasons": {
      "none": "accepté",
      "nullTrain": "aucun train",
      "trainFull": "le train a déjà atteint sa limite de 50 wagons",
      "badType": "ce n'est pas un type de wagon valide",
      "badWeight": "un wagon doit peser plus que rien",
      "totalWeight": "le train dépasserait sa limite de poids total de 20 000",
      "engineOrder": "les locomotives doivent toutes être en tête, or du fret est déjà attelé",
      "oilFirstFreight": "le premier wagon de fret derrière les locomotives ne peut pas être un wagon-citerne",
      "woodOilAdjacent": "cela placerait un wagon de bois à côté d’un wagon-citerne",
      "pullCapacity": "le fret pèserait plus que ce que les locomotives peuvent tracter",
      "badIndex": "il n'y a aucun wagon à cette position",
      "lastEngine": "un train doit conserver au moins une locomotive"
    },
    "scenarios": {
      "oilFirst": {
        "label": "Citerne en premier",
        "rejected": "Refusé : {reason} Placez d'abord un wagon de vivres ou de bois derrière la locomotive, alors le wagon-citerne sera autorisé.",
        "accepted": "Accepté."
      },
      "buffer": {
        "label": "Retirer le tampon",
        "rejected": "C'est le cas intéressant. Le train est Locomotive, Bois, Vivres, Citerne — le wagon de vivres sépare le bois et la citerne. Le retirer est refusé : {reason} Les règles sont symétriques, donc ce qui ne peut pas être construit ne peut pas non plus être défait.",
        "accepted": "Accepté."
      },
      "capacity": {
        "label": "Surcharger les locomotives",
        "rejected": "Refusé : {reason} Le poids total et la capacité de traction sont des limites distinctes — ce train est bien en dessous de 20 000, mais une locomotive ne peut tracter que 5 000.",
        "accepted": "Accepté."
      },
      "engineOrder": {
        "label": "Locomotive à l’arrière",
        "rejected": "Refusé : {reason} Les locomotives ne peuvent être ajoutées que si tous les wagons devant elles sont aussi des locomotives.",
        "accepted": "Accepté."
      }
    },
    "carType": "Type de wagon",
    "weight": "Poids",
    "addCar": "Ajouter un wagon",
    "reset": "Réinitialiser",
    "remove": "Retirer",
    "removeCar": "Retirer le wagon {i}, {type}, poids {weight}",
    "cars": "Wagons",
    "engines": "Locomotives",
    "totalWeight": "Poids total",
    "freightCapacity": "Fret / capacité",
    "status": "État",
    "safe": "SAFE",
    "unsafe": "UNSAFE",
    "loading": "Chargement du validateur compilé…",
    "failed": "La démo interactive n'a pas pu se charger dans ce navigateur. Le code source et la suite de tests sont liés ci-dessus.",
    "added": "Wagon {type} de poids {weight} ajouté.",
    "rejected": "Wagon {type} de poids {weight} rejeté — il enfreindrait l'une des règles ci-dessous.",
    "removed": "Wagon {i} retiré.",
    "removeRejected": "Le wagon {i} ne peut pas être retiré — le train restant serait invalide.",
    "resetDone": "Train réinitialisé.",
    "rulesTitle": "Règles appliquées par le validateur en C",
    "rules": [
      "Les locomotives doivent toutes être en tête du train.",
      "Le poids total ne peut pas dépasser 20 000.",
      "Le poids du fret ne peut pas dépasser la capacité de traction (5 000 par locomotive).",
      "Les wagons de bois et de pétrole ne peuvent pas être adjacents.",
      "Le premier wagon de fret ne peut pas être un wagon de pétrole."
    ],
    "types": {
      "engine": "Locomotive",
      "food": "Nourriture",
      "wood": "Bois",
      "oil": "Pétrole"
    }
  },
  "taskDemo": {
    "title": "Titre de la tâche",
    "placeholder": "p. ex. Relire la pull request",
    "add": "Ajouter la tâche",
    "complete": "Terminer",
    "reopen": "Rouvrir",
    "delete": "Supprimer",
    "created": "Tâche créée — l'API a renvoyé 201 avec son location.",
    "rejected": "Rejetée avec 400 — une tâche a besoin d'un titre.",
    "deleted": "Supprimée — l'API a renvoyé 204.",
    "waking": "La base de données se réveille… elle s'endort quand elle est inactive sur le palier gratuit, donc la première requête prend un instant.",
    "offline": "L'API en direct n'est pas joignable pour le moment, donc une session enregistrée est affichée à la place. Le code source et le journal complet des requêtes sont liés ci-dessus.",
    "unhosted": "L'API est en ligne sur tasks.xgbuilds.dev : ouvrez sa page Swagger pour appeler vous-même les endpoints de lecture. Les écritures exigent une clé API, voici donc une session enregistrée avec chaque endpoint et le code qu'il renvoie.",
    "transcriptCaption": "Requêtes enregistrées vers l'API et le statut renvoyé par chacune",
    "method": "Méthode",
    "endpoint": "Endpoint",
    "status": "Statut",
    "notesTitle": "Ce que cela démontre",
    "notes": [
      "Chaque requête atteint un vrai service ASP.NET Core adossé à PostgreSQL, pas un mock.",
      "Les requêtes se lient à des DTOs, donc l'appelant ne peut pas fixer l'id ni l'heure de création — c'est le serveur qui les gère.",
      "Les codes de statut sont ceux attendus pour chaque verbe : 201 avec location à la création, 400 pour un corps invalide, 404 pour un id inconnu, 204 pour la mise à jour et la suppression.",
      "La base de données redescend à zéro instance quand elle est inactive, donc la première requête après une pause doit la réveiller."
    ]
  },
  "arenaDemo": {
    "loading": "Chargement de l'arène compilée…",
    "failed": "La démo interactive n'a pas pu se charger dans ce navigateur. Le code source est lié ci-dessus.",
    "warrior": "Guerrier",
    "mage": "Mage",
    "health": "PV",
    "level": "Niv.",
    "damage": "DGT",
    "takeTurn": "Jouer le tour",
    "hint": "Montez de niveau pour frapper plus fort, encaisser moins et agir en premier : le plus haut niveau ouvre toujours. Choisissez ensuite un adversaire.",
    "defence": "DEF",
    "opponent": "Adversaire",
    "ready": "Prêt.",
    "reset": "Réinitialiser",
    "finished": "Combat terminé",
    "addPower": "+3 puissance",
    "levelUp": "Monter de niveau",
    "toAct": "joue.",
    "wins": "gagne.",
    "notesTitle": "Ce que cela démontre",
    "notes": [
      "Guerrier et Mage sont compilés à partir du C++ du dépôt et s'exécutent ici en WebAssembly — le combat n'est pas réimplémenté en JavaScript.",
      "Les dégâts sont transmis via la classe de base abstraite Character, donc la sous-classe qui agit détermine si des compétences ou de la puissance magique sont additionnées.",
      "Les changements de santé passent par l'operator+= propre à la classe, et l'ajout de puissance utilise operator+= sur le type concret.",
      "Les valeurs de départ proviennent du fichier de roster du dépôt, donc un combat ici produit les mêmes chiffres que le binaire natif."
    ]
  },
  "footer": {
    "drawnBy": "Dessiné par",
    "location": "Lieu",
    "contact": "Contact",
    "revision": "Révision"
  },
  "notFound": {
    "label": "Feuille introuvable",
    "title": "Sur aucun plan",
    "body": "Cette page n'existe pas. Elle a peut-être été renommée, ou le lien est peut-être incorrect.",
    "home": "Retour à l'accueil",
    "projects": "Voir les projets"
  },
  "translationNote": "Cette page a été traduite avec une assistance automatisée et relue aussi soigneusement que possible, mais pas par un traducteur professionnel. La version anglaise fait foi.",
  "translationNoteShort": "Traduction assistée par ordinateur",
  "work": {
    "label": "Travaux clients",
    "title": "Des sites pour de vrais clients",
    "intro": "Des sites réalisés pour une entreprise et une association, tous deux en ligne sur leur propre domaine.",
    "client": "Client",
    "role": "Mon rôle",
    "stack": "Technologies",
    "year": "Année",
    "visit": "Ouvrir le site",
    "items": {
      "azclean": {
        "title": "AZ Clean",
        "tagline": "Nettoyage de canapés et de matelas, Glyfada",
        "client": "AZ Clean, entreprise de nettoyage à Glyfada, Athènes",
        "role": "Conception, développement, domaine et mise en ligne",
        "summary": "Un site rapide en grec qui explique aux habitants du sud d’Athènes ce que propose le service et comment réserver.",
        "body": [
          "AZ Clean nettoie canapés, matelas, tapis, voitures et bateaux chez le client, partout en Attique. L'entreprise avait besoin d'un site visible dans les recherches locales, qui transforme une visite sur mobile en réservation.",
          "Je l'ai développé avec React et Vite et publié en fichiers statiques sur GitHub Pages sous le domaine azclean.gr. J'ai enregistré le domaine, configuré le DNS et connecté Google Search Console avec un sitemap pour que les pages soient indexées."
        ]
      },
      "way": {
        "title": "WAY Empowerment",
        "tagline": "Autonomiser les femmes et les jeunes au Kenya",
        "client": "WAY (Women and Youth) Empowerment, ONG bénévole basée au Danemark",
        "role": "Refonte et relance",
        "summary": "Un site refait qui explique l'action de l'ONG et rend faciles le don, l'adhésion et le bénévolat.",
        "body": [
          "WAY mène des projets d'activité économique pour des veuves et des programmes sportifs pour des jeunes au Kenya. L'ancien site était difficile à parcourir et ne mettait pas le don en évidence.",
          "Je l'ai refait sous forme de thème de blocs WordPress sur mesure, sur l'hébergement one.com existant de l'ONG, en gardant son logo et son contenu. Le nouveau site commence par la mission, donne une page à chaque programme et place le don, l'adhésion et le bénévolat à un clic."
        ]
      }
    }
  },
  "engine": {
    "label": "Salle des machines",
    "title": "Le serveur maison, tel que construit",
    "intro": "Un vieux portable derrière un Cloudflare Tunnel, configuré comme en production. Aucun port ouvert sur ma box, chaque image signée, et chaque nuit une sauvegarde vérifiée.",
    "statusTitle": "En ce moment",
    "stepsTitle": "Comment un changement arrive en production",
    "steps": [
      "Je pousse sur main. GitHub Actions lance les tests, construit l’image, l’analyse et la signe.",
      "L’image part dans le registre GitHub avec sa signature et une nomenclature (SBOM).",
      "Toutes les quelques minutes, le serveur cherche une nouvelle image et vérifie la signature avant de lancer quoi que ce soit.",
      "Seule une image vérifiée remplace celle en place, et si un contrôle de santé échoue, je reçois une alerte Telegram."
    ],
    "backupTitle": "Des sauvegardes que j’ai vraiment restaurées",
    "backupBody": "Chaque nuit, restic fait une sauvegarde chiffrée sur un disque USB et sur Backblaze B2, puis la vérifie. Un interrupteur d’homme mort m’écrit si une nuit manque, et la restauration est testée, pas supposée.",
    "privateNote": "Le code du serveur est dans un dépôt privé le temps que je vérifie qu’il ne contient aucun secret."
  },
  "cv": {
    "label": "CV",
    "title": "Curriculum vitae",
    "intro": "Une page, identique au PDF. Imprimez-le ou téléchargez-le.",
    "print": "Imprimer",
    "pdfLetter": "PDF · Letter (Canada)",
    "pdfA4": "PDF · A4 (UE)",
    "englishOnly": "Le CV lui-même est rédigé en anglais."
  },
  "palette": {
    "placeholder": "Aller à un chantier, une page ou une action…",
    "pages": "Pages",
    "sites": "Chantiers",
    "actions": "Actions",
    "copyEmail": "Copier l’adresse e-mail",
    "copied": "E-mail copié",
    "theme": "Changer d’équipe jour / nuit",
    "language": "Langue",
    "empty": "Aucun résultat",
    "hint": "↑ ↓ pour naviguer · Entrée pour ouvrir · Échap pour fermer",
    "close": "Fermer"
  },
  "privacy": {
    "label": "Confidentialité",
    "title": "Confidentialité",
    "updated": "Dernière mise à jour : 29 septembre 2026",
    "short": "En bref : aucun cookie, aucune mesure d’audience, aucune publicité, aucun pistage. Rien de votre visite ne m’est envoyé.",
    "sections": [
      {
        "h": "Qui gère ce site",
        "p": "Xenofon Gkioka, Toronto, Canada. Pour toute question sur vos données : ksenofwn58@gmail.com."
      },
      {
        "h": "Ce que garde votre navigateur",
        "p": "Si vous choisissez une langue ou passez du mode clair au mode sombre, votre navigateur retient ce choix dans son stockage local. Il ne quitte jamais votre appareil et vous pouvez l’effacer à tout moment dans les réglages. Il n’y a aucun cookie."
      },
      {
        "h": "Ce que voient les hébergeurs",
        "p": "Comme tout site web, les serveurs qui le diffusent traitent votre adresse IP pour vous envoyer les pages et se protéger des abus. Ce site est hébergé par GitHub Pages (voir la déclaration de confidentialité de GitHub). Les démos en direct et l’état du serveur viennent de mon propre serveur via Cloudflare, qui peut poser un cookie de sécurité strictement nécessaire (__cf_bm) sur ces adresses pour filtrer les robots (voir la politique de confidentialité de Cloudflare). Mon serveur ne conserve pas les adresses IP des visiteurs."
      },
      {
        "h": "Les démos en direct",
        "p": "Le texte collé dans le Resume Classifier est classé en mémoire et n’est jamais enregistré ni journalisé. Évitez tout de même d’y coller de vraies données personnelles. L’API TaskManager ne permet aux visiteurs que de lire des données d’exemple."
      },
      {
        "h": "Polices",
        "p": "Toutes les polices sont servies par ce site. Votre navigateur n’envoie aucune requête à Google ni à un autre service de polices."
      },
      {
        "h": "Si vous m’écrivez",
        "p": "J’utilise votre e-mail uniquement pour vous répondre. Demandez-le et je le supprime."
      },
      {
        "h": "Vos droits",
        "p": "En vertu du RGPD et du droit canadien, vous pouvez demander quelles données je détiens sur vous, et les faire corriger ou supprimer. Ce site ne collectant rien, la réponse se limite en général à vos e-mails. Écrivez à l’adresse ci-dessus."
      }
    ]
  }
}
