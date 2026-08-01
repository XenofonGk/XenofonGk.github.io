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
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    language: 'Language',
    theme: 'Switch theme',
    skip: 'Skip to main content',
    primary: 'Primary',
  },

  home: {
    eyebrow: 'Toronto → Copenhagen',
    revision: 'Rev. 2026',
    headlineStart: 'I build software the way I used to build ',
    headlineAccent: 'houses',
    lede: 'Xenofon Gkioka — full-stack developer working in C#/.NET, React and TypeScript. Software Engineer Intern at Mercell in Copenhagen. Formerly a construction site supervisor in Toronto.',
    tags: ['On spec', 'On time', 'Load-bearing'],
    ctaWork: 'See the work',
    ctaAbout: 'About me',
    ctaContact: 'Get in touch',
    dims: [
      { num: '4', lbl: 'Years building things' },
      { num: '2', lbl: 'Countries shipped from' },
      { num: 'C→WASM', lbl: 'Compiled to run in your browser' },
      { num: '0', lbl: 'Accessibility violations' },
    ],
    featuredLabel: 'Featured',
    featuredNote: 'Runs in browser',
    featuredTitle: 'A C program, running here',
    featuredBody:
      'The train yard validator is written in C and tested with MSTest. Because all of its console I/O is isolated in main.c, the logic layer compiles cleanly to WebAssembly — so the same code the test suite exercises runs directly in this page. Nothing is reimplemented in JavaScript.',
    featuredCta: 'Open the demo',
  },

  projects: {
    label: 'Projects',
    note: 'As-built',
    title: 'Selected work',
    intro:
      'Open any project for the write-up and, where there is one, a demo you can run here in the page.',
    open: 'Open',
    repo: 'View repository',
    liveDemo: 'Live demo',
    alsoLabel: 'Also built',
    alsoTitle: 'Smaller pieces',
    stack: 'Stack',
    role: 'Role',
    source: 'Source',
    close: 'Close',
    liveNote: 'Compiled from C to WebAssembly',
    apiNote: 'ASP.NET Core and PostgreSQL, verified on every push',
    arenaNote: 'Compiled from C++ to WebAssembly',

    items: {
      'train-yard-manager': {
        title: 'Train Yard Management System',
        role: 'Group project, Seneca Polytechnic',
        summary:
          'Rail inventory and safety validation in C. Enforces weight limits, locomotive pull capacity and car-type protocols, with a test suite driving the same logic layer.',
        body: [
          'A train is only allowed to leave the yard if it satisfies a set of coupling and load rules. This system models the yard inventory and validates a train against those rules before it can be signed off.',
          'The interesting constraint is structural rather than algorithmic: engines must all sit at the front, freight weight cannot exceed the pull capacity the engines provide, wood and oil cars cannot be coupled adjacent to each other, and the first freight car can never be oil. Removing a car has to re-check all of it, because taking one out can invalidate what remains.',
          'All console I/O is isolated in main.c, so train_yard.c is pure logic with no printf or scanf anywhere in it. That separation is what lets the same functions be driven by the test suite, and it is also what made the browser demo possible — the C is compiled to WebAssembly and called directly, with nothing reimplemented in JavaScript.',
        ],
      },
      'taskmanager-api': {
        title: 'TaskManager REST API',
        role: 'Self-directed',
        summary:
          'Containerised todo API — Entity Framework Core with code-first migrations against PostgreSQL, brought up as a two-service stack with Docker Compose.',
        body: [
          'A REST API over a todo model, built to get hands-on with the ASP.NET Core request pipeline and Entity Framework Core rather than to ship a product.',
          'The database schema is code-first: the model is defined in C#, and EF Core generates the migrations that build the PostgreSQL schema. Docker Compose brings the API and the database up together as one stack, so the whole thing runs from a single command on a clean machine.',
          'Requests bind to DTOs rather than to the entity itself. Binding straight to the entity would let a caller post its own id and have EF Core accept it, so a request naming an existing row could overwrite one it was never meant to touch. Connection strings come from environment variables and .NET user-secrets rather than the repository.',
        ],
      },
      'inventory-crud': {
        title: 'Inventory CRUD',
        role: 'Coursework, extended',
        summary:
          'Category and supplier management on ASP.NET Core MVC — Razor views, view models, and EF Core migrations against SQL Server.',
        body: [
          'A server-rendered MVC application covering the full create, read, update and delete cycle across two related entities.',
          'Built to understand the MVC pattern end to end: routing into controllers, controllers passing view models rather than entities into Razor views, and EF Core migrations keeping the SQL Server schema in step with the model.',
        ],
      },
      arenacore: {
        title: 'ArenaCore RPG Engine',
        role: 'Coursework',
        summary:
          'C++ engine built around an abstract combatant hierarchy, applying the Rule of Three, operator overloading and manual memory management.',
        body: [
          'A small turn-based arena used as a vehicle for C++ object-oriented fundamentals: an abstract combatant interface, concrete Warrior and Mage subclasses, and an Arena container that owns its roster through raw pointers.',
          'Because the Arena owns heap memory directly, it has to take a position on copying. It deletes the copy constructor and copy assignment outright rather than writing deep copies, which keeps ownership unambiguous.',
        ],
      },
      portfolio: {
        title: 'This Portfolio',
        role: 'Self-directed',
        summary:
          'The site you are reading. React and Vite, a hand-built CSS design system, deployed to GitHub Pages by an Actions workflow on every push.',
        body: [
          'Built without a UI framework or component library — the design system is a set of CSS custom properties, and every component is plain JSX.',
          'Deployment runs as a GitHub Actions workflow: it installs, builds, and publishes the output. Accessibility is checked with axe-core, and the bar is zero violations rather than a score.',
        ],
      },
    },

    also: {
      'c-projects': {
        title: 'C Projects',
        note: 'Baby name popularity search over census CSVs, and a train inventory console app.',
      },
      'cpp-exercises': {
        title: 'C++ Exercises',
        note: 'Marketplace, credit card validation, restaurant ordering, sorting, and a lexical store engine.',
      },
      'csharp-fundamentals': {
        title: 'C# Fundamentals',
        note: 'Console applications covering OOP basics — bank simulator, library manager, grade tracker.',
      },
      'shell-scripts': {
        title: 'Shell Scripts',
        note: 'Utility scripts for development workflow automation.',
      },
      'ai-tools': {
        title: 'AI Programming Tools',
        note: 'Notes and references on prompting, neural network fundamentals, and software licensing.',
      },
    },
  },

  about: {
    label: 'About',
    scale: 'Scale 1:1',
    title: 'Blueprints to architecture diagrams',
    paragraphs: [
      "I'm a second-year Computer Programming student at Seneca Polytechnic, originally from Greece, currently based between Toronto and Copenhagen. Before I wrote a line of code professionally I worked construction in Canada — promoted from crew member to site supervisor, running crews and hitting deadlines under real pressure. That background is why I don't romanticise “shipping fast”: I've managed timelines where the cost of missing one was a lot more concrete than a Jira ticket.",
      "I got into programming through a junior backend role at Spinworks in Athens, working PHP, Symfony and OroCommerce on B2B e-commerce systems. That's where my interest in B2B SaaS started, which is what led me to Mercell.",
      'Right now I build front-end features in React and TypeScript at Mercell, a procurement SaaS company in Copenhagen, while finishing my diploma and teaching myself the C#/.NET stack on the side.',
    ],
    specs: {
      based: 'Based',
      focus: 'Focus',
      current: 'Current',
      education: 'Education',
      languages: 'Languages',
      status: 'Status',
    },
    specValues: {
      based: 'Toronto / Copenhagen',
      focus: 'Full-stack — React, C#/.NET',
      current: 'SWE Intern, Mercell',
      education: 'Seneca Polytechnic',
      languages: 'Greek, English',
      status: 'CA PR · EU Citizen',
    },
    experienceLabel: 'Experience',
    experienceNote: 'Elevation',
    experienceTitle: "Where I've worked",
    skillsLabel: 'Skills',
    skillsNote: 'Materials list',
    skillsTitle: 'Tools I reach for',
    skillGroups: {
      languages: 'Languages',
      frameworks: 'Frameworks',
      data: 'Data & Infra',
      practice: 'Practice',
    },
    jobs: {
      mercell: {
        title: 'Software Engineer Intern',
        date: 'Jun 2026 – Present',
        bullets: [
          'Built a document library and a shared file-uploader component in React and TypeScript, both shipped to production for platform users.',
          'Resolved accessibility violations across key user flows, bringing them into WCAG compliance.',
          'Delivered features in a fast-paced Agile environment — daily stand-ups, sprint planning, backlog refinement, PI planning.',
        ],
      },
      spinworks: {
        title: 'Junior Backend Developer',
        date: 'Aug 2021 – Aug 2022',
        bullets: [
          'Built and maintained B2B e-commerce platforms using PHP, Symfony, and OroCommerce.',
          'Rewrote slow database queries impacting page load on high-traffic storefronts.',
          'Ran code reviews and integration testing in a Git-based workflow before production deploys.',
        ],
      },
      canera: {
        title: 'Site Supervisor',
        date: 'Sep 2022 – May 2026',
        bullets: [
          'Promoted from crew member to supervisor; led crews and coordinated timelines under strict deadlines.',
          'Managed on-site conflict resolution and resource allocation in high-pressure environments.',
        ],
      },
      ssf: {
        title: 'Campus Coordinator',
        date: 'Feb 2026 – Present',
        bullets: [
          'Elected to represent the student body at Newnham Campus, liaising between students, SSF, and administration.',
        ],
      },
    },
  },

  contact: {
    label: 'Contact',
    note: 'Sign-off',
    title: 'Building something in Copenhagen or Toronto?',
    body: "I'm open to graduate and junior engineering roles, and happy to talk about front-end work, .NET, or anything close to the metal.",
    email: 'Email',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },

  demo: {
    carType: 'Car type',
    weight: 'Weight',
    addCar: 'Add car',
    reset: 'Reset',
    remove: 'Remove',
    removeCar: 'Remove car {i}, {type}, weight {weight}',
    cars: 'Cars',
    engines: 'Engines',
    totalWeight: 'Total weight',
    freightCapacity: 'Freight / capacity',
    status: 'Status',
    safe: 'SAFE',
    unsafe: 'UNSAFE',
    loading: 'Loading the compiled validator…',
    failed: 'The interactive demo could not load in this browser. The source and test suite are linked above.',
    added: '{type} car weighing {weight} added.',
    rejected: '{type} car weighing {weight} rejected — it would break one of the rules below.',
    removed: 'Car {i} removed.',
    removeRejected: 'Car {i} cannot be removed — the remaining train would be invalid.',
    resetDone: 'Train reset.',
    rulesTitle: 'Rules enforced by the C validator',
    rules: [
      'Engines must all sit at the front of the train.',
      'Total weight cannot exceed 20,000.',
      'Freight weight cannot exceed pull capacity (5,000 per engine).',
      'Wood and oil cars cannot be adjacent.',
      'The first freight car cannot be oil.',
    ],
    types: {
      engine: 'Engine',
      food: 'Food',
      wood: 'Wood',
      oil: 'Oil',
    },
  },

  /* Live CRUD demo against the deployed ASP.NET Core API. */
  taskDemo: {
    title: 'Task title',
    placeholder: 'e.g. Review the pull request',
    add: 'Add task',
    complete: 'Complete',
    reopen: 'Reopen',
    delete: 'Delete',
    created: 'Task created — the API returned 201 with its location.',
    rejected: 'Rejected with 400 — a task needs a title.',
    deleted: 'Deleted — the API returned 204.',
    waking: 'Waking the database… it sleeps when idle on the free tier, so the first request takes a moment.',
    offline: 'The live API is not reachable right now, so this shows a recorded session instead. The source and the full request log are linked above.',
    unhosted: 'This API is not deployed to a public host. It runs from one command with Docker Compose, and every endpoint below is re-verified against a real PostgreSQL on each push — the badge in the repository shows the latest result.',
    transcriptCaption: 'Recorded requests against the API and the status each returned',
    method: 'Method',
    endpoint: 'Endpoint',
    status: 'Status',
    notesTitle: 'What this demonstrates',
    notes: [
      'Every request hits a real ASP.NET Core service backed by PostgreSQL, not a mock.',
      'Requests bind to DTOs, so a caller cannot set the id or creation time — the server owns both.',
      'Status codes are the ones each verb is supposed to return: 201 with a location on create, 400 on an invalid body, 404 for an unknown id, 204 on update and delete.',
      'The database scales to zero when idle, so the first request after a pause has to wake it.',
    ],
  },

  /* Turn-based fight running the compiled C++ classes. */
  arenaDemo: {
    loading: 'Loading the compiled arena…',
    failed: 'The interactive demo could not load in this browser. The source is linked above.',
    warrior: 'Warrior',
    mage: 'Mage',
    health: 'HP',
    level: 'Lv',
    damage: 'DMG',
    takeTurn: 'Take turn',
    hint: 'Level up to hit harder, take less, and strike first — the higher level always opens. Then pick an opponent and trade blows.',
    defence: 'DEF',
    opponent: 'Opponent',
    ready: 'Ready.',
    reset: 'Reset',
    finished: 'Fight over',
    addPower: '+3 power',
    levelUp: 'Level up',
    toAct: 'to act.',
    wins: 'wins.',
    notesTitle: 'What this demonstrates',
    notes: [
      'Warrior and Mage are compiled from the repository C++ and run here as WebAssembly — the combat is not reimplemented in JavaScript.',
      'Damage is dispatched through the abstract Character base, so which subclass is acting decides whether skills or spell power are summed.',
      'Health changes through the class\'s own operator+=, and adding power uses operator+= on the concrete type.',
      'The starting values come from the repository\'s roster file, so a fight here produces the same numbers as the native binary.',
    ],
  },

  footer: {
    drawnBy: 'Drawn by',
    location: 'Location',
    contact: 'Contact',
    revision: 'Revision',
  },

  notFound: {
    label: 'Sheet not found',
    title: 'Not on any drawing',
    body: "That page doesn't exist. It may have been renamed, or the link may be wrong.",
    home: 'Back to start',
    projects: 'See the projects',
  },

  /* Shown in the language menu and the footer whenever a non-verified locale is
     active. Deliberately plain — it is a statement about provenance, not an
     apology. */
  translationNote:
    'This page has been translated with machine assistance and reviewed as carefully as I could manage, but not by a professional translator. The English version is authoritative.',
  translationNoteShort: 'Machine-assisted translation',
}
