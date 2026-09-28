/*
 * Source of truth for every user-visible string.
 *
 * Only translatable prose lives here. Structural data that is the same in every
 * language — slugs, repo URLs, stack names, dates, email — stays in src/data.
 *
 * Keys must match exactly across locale files (npm run check:locales); a
 * missing key falls back to this file rather than rendering empty.
 */

export default {
  "nav": {
    "projects": "Projects",
    "about": "About",
    "contact": "Contact",
    "language": "Language",
    "theme": "Switch theme",
    "skip": "Skip to main content",
    "primary": "Primary",
    "work": "Work"
  },
  "home": {
    "eyebrow": "Full-stack developer · Toronto · open to work",
    "headline": "I build software the way I used to build houses: to spec, on time, and made to last.",
    "lede": "I'm Xenofon Gkioka, a full-stack developer working in React, TypeScript and C#/.NET. I've shipped production features at Mercell in Copenhagen, built two live client websites, and run my own projects on a server I set up and maintain.",
    "ctaWork": "See live work",
    "ctaProjects": "All projects",
    "ctaContact": "Get in touch",
    "live": "Live",
    "liveLabel": "Live now",
    "liveTitle": "Things you can open right now",
    "liveIntro": "Two client websites and two services running on my own server. Every link below is a real, public address.",
    "visit": "Visit",
    "caseStudy": "Case study",
    "details": "Details",
    "kinds": {
      "client": "Client website",
      "server": "Runs on my server"
    },
    "cards": {
      "azclean": {
        "title": "AZ Clean",
        "note": "Website for an upholstery and mattress cleaning business in Athens, Greece."
      },
      "way": {
        "title": "WAY Empowerment",
        "note": "Rebuilt website for a volunteer-run NGO supporting women and youth in Kenya."
      },
      "tasks": {
        "title": "TaskManager API",
        "note": "ASP.NET Core and PostgreSQL REST API with interactive Swagger docs."
      },
      "classifier": {
        "title": "Resume Classifier",
        "note": "Python machine-learning service that sorts resume text into five job families."
      }
    },
    "hostLabel": "How it runs",
    "hostTitle": "Hosted on hardware I run myself",
    "hostIntro": "The live services run on an old laptop I turned into a home server, set up the way production is, only smaller.",
    "hostPoints": [
      "No open ports on my router: traffic arrives through an outbound Cloudflare Tunnel.",
      "Every push to main builds, scans and signs a container image, and the server checks that signature before it deploys.",
      "Uptime monitoring, alerts to my phone, and backups that are tested by actually restoring them."
    ],
    "hostCta": "How the server is built",
    "featuredLabel": "Featured",
    "featuredTitle": "A C program, running here",
    "featuredBody": "The train yard validator is written in C and tested with MSTest. Because all of its console I/O is isolated in main.c, the logic layer compiles cleanly to WebAssembly — so the same code the test suite exercises runs directly in this page. Nothing is reimplemented in JavaScript.",
    "featuredCta": "Open the demo"
  },
  "projects": {
    "label": "Projects",
    "note": "As-built",
    "title": "Selected work",
    "intro": "Open any project for the write-up and, where there is one, a demo you can run here in the page.",
    "open": "Open",
    "repo": "View repository",
    "liveDemo": "Live demo",
    "alsoLabel": "Also built",
    "alsoTitle": "Smaller pieces",
    "stack": "Stack",
    "role": "Role",
    "source": "Source",
    "close": "Close",
    "liveNote": "Compiled from C to WebAssembly",
    "apiNote": "ASP.NET Core and PostgreSQL, verified on every push",
    "arenaNote": "Compiled from C++ to WebAssembly",
    "items": {
      "train-yard-manager": {
        "title": "Train Yard Management System",
        "role": "Group project, Seneca Polytechnic",
        "summary": "Rail inventory and safety validation in C. Enforces weight limits, locomotive pull capacity and car-type protocols, with a test suite driving the same logic layer.",
        "body": [
          "A train is only allowed to leave the yard if it satisfies a set of coupling and load rules. This system models the yard inventory and validates a train against those rules before it can be signed off.",
          "The interesting constraint is structural rather than algorithmic: engines must all sit at the front, freight weight cannot exceed the pull capacity the engines provide, wood and oil cars cannot be coupled adjacent to each other, and the first freight car can never be oil. Removing a car has to re-check all of it, because taking one out can invalidate what remains.",
          "All console I/O is isolated in main.c, so train_yard.c is pure logic with no printf or scanf anywhere in it. That separation is what lets the same functions be driven by the test suite, and it is also what made the browser demo possible — the C is compiled to WebAssembly and called directly, with nothing reimplemented in JavaScript."
        ]
      },
      "taskmanager-api": {
        "title": "TaskManager REST API",
        "role": "Self-directed",
        "summary": "Containerised REST API with EF Core and PostgreSQL, key-protected writes, and a signed image that my server deploys automatically.",
        "body": [
          "A REST API over a todo model, built to get hands-on with the ASP.NET Core request pipeline and Entity Framework Core. It is live on my home server, with interactive Swagger docs at tasks.xgbuilds.dev.",
          "The database schema is code-first: EF Core generates the migrations that build the PostgreSQL schema. Requests bind to DTOs rather than to the entity, so a caller cannot set its own id and overwrite a row it was never meant to touch.",
          "Reads are public; writes need an API key, compared in constant time. Every push to main runs the endpoint contract test against a real PostgreSQL, then builds, scans and signs the image that the server deploys."
        ]
      },
      "inventory-crud": {
        "title": "Inventory CRUD",
        "role": "Coursework, extended",
        "summary": "Category and supplier management on ASP.NET Core MVC — Razor views, view models, and EF Core migrations against SQL Server.",
        "body": [
          "A server-rendered MVC application covering the full create, read, update and delete cycle across two related entities.",
          "Built to understand the MVC pattern end to end: routing into controllers, controllers passing view models rather than entities into Razor views, and EF Core migrations keeping the SQL Server schema in step with the model."
        ]
      },
      "arenacore": {
        "title": "ArenaCore RPG Engine",
        "role": "Coursework",
        "summary": "C++ engine built around an abstract combatant hierarchy, applying the Rule of Three, operator overloading and manual memory management.",
        "body": [
          "A small turn-based arena used as a vehicle for C++ object-oriented fundamentals: an abstract combatant interface, concrete Warrior and Mage subclasses, and an Arena container that owns its roster through raw pointers.",
          "Because the Arena owns heap memory directly, it has to take a position on copying. It deletes the copy constructor and copy assignment outright rather than writing deep copies, which keeps ownership unambiguous."
        ]
      },
      "portfolio": {
        "title": "This Portfolio",
        "role": "Self-directed",
        "summary": "The site you are reading. React and Vite, a hand-built CSS design system, deployed to GitHub Pages by an Actions workflow on every push.",
        "body": [
          "Built without a UI framework or component library — the design system is a set of CSS custom properties, and every component is plain JSX.",
          "Deployment runs as a GitHub Actions workflow: it installs, builds, and publishes the output. Accessibility is checked with axe-core, and the bar is zero violations rather than a score."
        ]
      },
      "resume-classifier": {
        "title": "Resume Classifier API",
        "role": "Self-directed",
        "summary": "Sorts resume text into five job families with TF-IDF and logistic regression, served as an API from my home server.",
        "body": [
          "A scikit-learn pipeline (cleaning, TF-IDF features, logistic regression) served with FastAPI. It trains on a generated corpus, because real resumes are personal data.",
          "The first generator gave each role its own words and the model scored a perfect 1.00, which measured the dataset rather than the model. The corpus now shares filler and tools across fields, and 45% of resumes borrow a line from another field. Accuracy on generated text is about 0.98: proof the pipeline works end to end, and nothing more.",
          "Every label comes with a confidence. Unrelated text scores about 22%, barely above the 20% chance baseline, which is the model saying it has no idea."
        ]
      },
      "aoda-scan": {
        "title": "aoda-scan",
        "role": "Open source",
        "summary": "A command-line tool that crawls a whole website and grades it against WCAG 2.1 AA and Ontario’s AODA.",
        "body": [
          "Most accessibility tools check one page at a time, but a site fails as a whole: the same broken component fails on every page that uses it. aoda-scan crawls the site, tests every page with axe-core in a real browser, and rolls the results into a grade, a conformance percentage and a ranked list of what to fix first.",
          "Run it with npx aoda-scan and a URL. It prints a summary in the terminal and writes an HTML report next to it."
        ]
      },
      "agentmesh": {
        "title": "AgentMesh",
        "role": "Open source",
        "summary": "A self-hosted control plane for running AI coding agents across several model providers, where every user brings their own keys.",
        "body": [
          "AgentMesh is software you run, not a service you sign up for. A Next.js web app and a Fastify API drive agent runs across five providers (Claude, Gemini, DeepSeek, Grok and Ollama), with a live transcript and a screen for reviewing each change.",
          "Security is the point of the design. Provider keys sit in an encrypted vault, agents run in sandboxed containers that never see a key, and their requests pass through an internal proxy that adds the key, removes secrets from logs and limits the request rate. That is also why there is no public demo."
        ]
      },
      "home-server": {
        "title": "Home Server",
        "role": "Self-directed",
        "summary": "An old laptop run like production: Cloudflare Tunnel, signed pull-based deploys, monitoring and tested backups.",
        "body": [
          "The live projects on this site run on an old Asus laptop with 5.7 GB of RAM. That limit shaped every decision: each container has a memory cap, nothing touches the network settings, and no ports are open to the internet. Traffic arrives through an outbound Cloudflare Tunnel.",
          "Deploys are pull-based: CI publishes a signed image, and the server checks the signature against the exact workflow that built it before running it. Decisions are written down as architecture decision records, and outages get blameless postmortems."
        ]
      }
    },
    "also": {
      "c-projects": {
        "title": "C Projects",
        "note": "Baby name popularity search over census CSVs, and a train inventory console app."
      },
      "cpp-exercises": {
        "title": "C++ Exercises",
        "note": "Marketplace, credit card validation, restaurant ordering, sorting, and a lexical store engine."
      },
      "csharp-fundamentals": {
        "title": "C# Fundamentals",
        "note": "Console applications covering OOP basics — bank simulator, library manager, grade tracker."
      },
      "shell-scripts": {
        "title": "Shell Scripts",
        "note": "Utility scripts for development workflow automation."
      },
      "ai-tools": {
        "title": "AI Programming Tools",
        "note": "Notes and references on prompting, neural network fundamentals, and software licensing."
      }
    },
    "liveBadge": "Live",
    "openLive": "Open live"
  },
  "about": {
    "label": "About",
    "scale": "Scale 1:1",
    "title": "Blueprints to architecture diagrams",
    "paragraphs": [
      "I'm a Computer Programming & Analysis student at Seneca Polytechnic in Toronto, originally from Greece. I've also worked construction in Canada, promoted from crew member to site supervisor, running crews and hitting deadlines under real pressure. That background is why I don't romanticise “shipping fast”: I've managed timelines where the cost of missing one was a lot more concrete than a Jira ticket.",
      "I got into programming through a junior backend role at Spinworks in Athens, working with PHP, Symfony and OroCommerce on B2B e-commerce systems. That's where my interest in B2B SaaS started, which is what led me to Mercell.",
      "This summer I built front-end features in React and TypeScript at Mercell, a procurement SaaS company in Copenhagen. Now I’m back in Toronto finishing my diploma, building websites for clients, and running my own projects on a server I set up and maintain."
    ],
    "specs": {
      "based": "Based",
      "focus": "Focus",
      "current": "Current",
      "education": "Education",
      "languages": "Languages",
      "status": "Status"
    },
    "specValues": {
      "based": "Toronto, Canada",
      "focus": "Full-stack — React, C#/.NET",
      "current": "Open to junior and intermediate roles",
      "education": "Seneca Polytechnic",
      "languages": "Greek, English",
      "status": "CA PR · EU Citizen"
    },
    "experienceLabel": "Experience",
    "experienceNote": "Elevation",
    "experienceTitle": "Where I've worked",
    "skillsLabel": "Skills",
    "skillsNote": "Materials list",
    "skillsTitle": "Tools I reach for",
    "skillGroups": {
      "languages": "Languages",
      "frameworks": "Frameworks",
      "data": "Data & Infra",
      "practice": "Practice"
    },
    "jobs": {
      "mercell": {
        "title": "Software Engineer Intern",
        "date": "Jun – Aug 2026",
        "bullets": [
          "Built a document library and a shared file-uploader component in React and TypeScript, both shipped to production for platform users.",
          "Resolved accessibility violations across key user flows, bringing them into WCAG compliance.",
          "Delivered features in a fast-paced Agile environment — daily stand-ups, sprint planning, backlog refinement, PI planning."
        ]
      },
      "spinworks": {
        "title": "Junior Backend Developer",
        "date": "Aug 2021 – Aug 2022",
        "bullets": [
          "Built and maintained B2B e-commerce platforms using PHP, Symfony, and OroCommerce.",
          "Rewrote slow database queries impacting page load on high-traffic storefronts.",
          "Ran code reviews and integration testing in a Git-based workflow before production deploys."
        ]
      },
      "canera": {
        "title": "Site Supervisor",
        "date": "Sep 2022 – May 2026",
        "bullets": [
          "Promoted from crew member to supervisor; led crews and coordinated timelines under strict deadlines.",
          "Managed on-site conflict resolution and resource allocation in high-pressure environments."
        ]
      },
      "ssf": {
        "title": "Campus Coordinator",
        "date": "Feb 2026 – Present",
        "bullets": [
          "Elected to represent the student body at Newnham Campus, liaising between students, SSF, and administration."
        ]
      }
    }
  },
  "contact": {
    "label": "Contact",
    "note": "Sign-off",
    "title": "Building something in Copenhagen or Toronto?",
    "body": "I'm open to graduate and junior engineering roles, and happy to talk about front-end work, .NET, or anything close to the metal.",
    "email": "Email",
    "linkedin": "LinkedIn",
    "github": "GitHub"
  },
  "demo": {
    "intro": "A train may only leave the yard if it satisfies every coupling and load rule. Add cars and watch which rules refuse them — and note that removing a car is refused too when the train it would leave behind is unsafe.",
    "tryThis": "Try one of these",
    "sentenceEnd": ".",
    "rejectedBecause": "{type} car weighing {weight} rejected — {reason}",
    "removeRejectedBecause": "Car {i} cannot be removed — {reason}",
    "reasons": {
      "none": "accepted",
      "nullTrain": "no train",
      "trainFull": "the train is already at its 50-car limit",
      "badType": "that is not a valid car type",
      "badWeight": "a car must weigh more than nothing",
      "totalWeight": "the train would exceed its 20,000 total weight limit",
      "engineOrder": "engines must all sit at the front, and freight is already coupled",
      "oilFirstFreight": "the first freight car behind the engines may not be oil",
      "woodOilAdjacent": "it would put a wood car next to an oil car",
      "pullCapacity": "the freight would weigh more than the engines can pull",
      "badIndex": "there is no car at that position",
      "lastEngine": "a train must keep at least one engine"
    },
    "scenarios": {
      "oilFirst": {
        "label": "Oil first",
        "rejected": "Refused: {reason} Put a food or wood car behind the engine first, then the oil is allowed.",
        "accepted": "Accepted."
      },
      "buffer": {
        "label": "Remove the buffer",
        "rejected": "This is the interesting one. The train is Engine, Wood, Food, Oil — the food car keeps the wood and oil apart. Removing it is refused: {reason} The rules are symmetric, so what cannot be built cannot be uncovered either.",
        "accepted": "Accepted."
      },
      "capacity": {
        "label": "Overload the engines",
        "rejected": "Refused: {reason} Total weight and pull capacity are separate limits — this train is far under 20,000 but one engine can only pull 5,000.",
        "accepted": "Accepted."
      },
      "engineOrder": {
        "label": "Engine at the back",
        "rejected": "Refused: {reason} Engines can only be appended while every car ahead of them is also an engine.",
        "accepted": "Accepted."
      }
    },
    "carType": "Car type",
    "weight": "Weight",
    "addCar": "Add car",
    "reset": "Reset",
    "remove": "Remove",
    "removeCar": "Remove car {i}, {type}, weight {weight}",
    "cars": "Cars",
    "engines": "Engines",
    "totalWeight": "Total weight",
    "freightCapacity": "Freight / capacity",
    "status": "Status",
    "safe": "SAFE",
    "unsafe": "UNSAFE",
    "loading": "Loading the compiled validator…",
    "failed": "The interactive demo could not load in this browser. The source and test suite are linked above.",
    "added": "{type} car weighing {weight} added.",
    "rejected": "{type} car weighing {weight} rejected — it would break one of the rules below.",
    "removed": "Car {i} removed.",
    "removeRejected": "Car {i} cannot be removed — the remaining train would be invalid.",
    "resetDone": "Train reset.",
    "rulesTitle": "Rules enforced by the C validator",
    "rules": [
      "Engines must all sit at the front of the train.",
      "Total weight cannot exceed 20,000.",
      "Freight weight cannot exceed pull capacity (5,000 per engine).",
      "Wood and oil cars cannot be adjacent.",
      "The first freight car cannot be oil."
    ],
    "types": {
      "engine": "Engine",
      "food": "Food",
      "wood": "Wood",
      "oil": "Oil"
    }
  },
  "taskDemo": {
    "title": "Task title",
    "placeholder": "e.g. Review the pull request",
    "add": "Add task",
    "complete": "Complete",
    "reopen": "Reopen",
    "delete": "Delete",
    "created": "Task created — the API returned 201 with its location.",
    "rejected": "Rejected with 400 — a task needs a title.",
    "deleted": "Deleted — the API returned 204.",
    "waking": "Waking the database… it sleeps when idle on the free tier, so the first request takes a moment.",
    "offline": "The live API is not reachable right now, so this shows a recorded session instead. The source and the full request log are linked above.",
    "unhosted": "The API is live at tasks.xgbuilds.dev: open its Swagger page to call the read endpoints yourself. Writes need an API key, so here is a recorded session showing every endpoint and the status it returns.",
    "transcriptCaption": "Recorded requests against the API and the status each returned",
    "method": "Method",
    "endpoint": "Endpoint",
    "status": "Status",
    "notesTitle": "What this demonstrates",
    "notes": [
      "Every request hits a real ASP.NET Core service backed by PostgreSQL, not a mock.",
      "Requests bind to DTOs, so a caller cannot set the id or creation time — the server owns both.",
      "Status codes are the ones each verb is supposed to return: 201 with a location on create, 400 on an invalid body, 404 for an unknown id, 204 on update and delete.",
      "The database scales to zero when idle, so the first request after a pause has to wake it."
    ]
  },
  "arenaDemo": {
    "loading": "Loading the compiled arena…",
    "failed": "The interactive demo could not load in this browser. The source is linked above.",
    "warrior": "Warrior",
    "mage": "Mage",
    "health": "HP",
    "level": "Lv",
    "damage": "DMG",
    "takeTurn": "Take turn",
    "hint": "Level up to hit harder, take less, and strike first — the higher level always opens. Then pick an opponent and trade blows.",
    "defence": "DEF",
    "opponent": "Opponent",
    "ready": "Ready.",
    "reset": "Reset",
    "finished": "Fight over",
    "addPower": "+3 power",
    "levelUp": "Level up",
    "toAct": "to act.",
    "wins": "wins.",
    "notesTitle": "What this demonstrates",
    "notes": [
      "Warrior and Mage are compiled from the repository C++ and run here as WebAssembly — the combat is not reimplemented in JavaScript.",
      "Damage is dispatched through the abstract Character base, so which subclass is acting decides whether skills or spell power are summed.",
      "Health changes through the class's own operator+=, and adding power uses operator+= on the concrete type.",
      "The starting values come from the repository's roster file, so a fight here produces the same numbers as the native binary."
    ]
  },
  "footer": {
    "drawnBy": "Drawn by",
    "location": "Location",
    "contact": "Contact",
    "revision": "Revision"
  },
  "notFound": {
    "label": "Sheet not found",
    "title": "Not on any drawing",
    "body": "That page doesn't exist. It may have been renamed, or the link may be wrong.",
    "home": "Back to start",
    "projects": "See the projects"
  },
  "translationNote": "This page has been translated with machine assistance and reviewed as carefully as I could manage, but not by a professional translator. The English version is authoritative.",
  "translationNoteShort": "Machine-assisted translation",
  "work": {
    "label": "Client work",
    "title": "Websites for real clients",
    "intro": "Sites I built for a business and a non-profit, both live on their own domains.",
    "client": "Client",
    "role": "My role",
    "stack": "Stack",
    "year": "Year",
    "visit": "Visit the live site",
    "items": {
      "azclean": {
        "title": "AZ Clean",
        "tagline": "Upholstery and mattress cleaning, Glyfada",
        "client": "AZ Clean, a cleaning business in Glyfada, Athens",
        "role": "Design, build, domain and launch",
        "summary": "A fast, Greek-language website that tells people in the southern suburbs of Athens what the service is and how to book it.",
        "body": [
          "AZ Clean cleans sofas, mattresses, rugs, cars and boats at the customer’s location across Attica. The business needed a site that shows up in local searches and turns a visit from a phone into a booking.",
          "I built it as a React and Vite site, published as static files on GitHub Pages under the azclean.gr domain. I registered the domain, set up its DNS, and connected Google Search Console with a sitemap so the pages get indexed."
        ]
      },
      "way": {
        "title": "WAY Empowerment",
        "tagline": "Empowering women and youth in Kenya",
        "client": "WAY (Women and Youth) Empowerment, a volunteer-run NGO based in Denmark",
        "role": "Rebuild and relaunch",
        "summary": "A rebuilt website that explains what the NGO does and makes donating, joining and volunteering easy.",
        "body": [
          "WAY runs business projects for widows and sports programmes for young people in Kenya. Its old website was hard to navigate and did not make donating obvious.",
          "I rebuilt it as a custom WordPress block theme on the NGO’s existing one.com hosting, keeping its logo and content. The new site leads with the mission, gives each programme its own page, and puts donating, membership and volunteering one click away."
        ]
      }
    }
  }
}
