/*
 * Every project on the site. The index page and the per-project pages both read
 * from here, so a project is added or edited in exactly one place.
 *
 * Accuracy rule: `repo` must point at something that exists, and `summary` must
 * describe what is actually in it. No invented metrics.
 */

export const projects = [
  {
    slug: 'train-yard-manager',
    title: 'Train Yard Management System',
    summary:
      'Rail inventory and safety validation in C. Enforces weight limits, locomotive pull capacity and car-type protocols, with a test suite driving the same logic layer.',
    stack: ['C', 'MSTest (C++)', 'Make', 'WebAssembly'],
    repo: 'https://github.com/XenofonGk/train-yard-manager',
    role: 'Group project, Seneca Polytechnic',
    year: '2026',
    demo: 'train-yard',
    body: [
      'A train is only allowed to leave the yard if it satisfies a set of coupling and load rules. This system models the yard inventory and validates a train against those rules before it can be signed off.',
      'The interesting constraint is structural rather than algorithmic: engines must all sit at the front, freight weight cannot exceed the pull capacity the engines provide, wood and oil cars cannot be coupled adjacent to each other, and the first freight car can never be oil. Removing a car has to re-check all of it, because taking one out can invalidate what remains.',
      'All console I/O is isolated in main.c, so train_yard.c is pure logic with no printf or scanf anywhere in it. That separation is what lets the same functions be driven by the MSTest suite, and it is also what made the browser demo above possible — the C is compiled to WebAssembly and called directly, with nothing reimplemented in JavaScript.',
    ],
  },
  {
    slug: 'taskmanager-api',
    title: 'TaskManager REST API',
    summary:
      'Containerised todo API — Entity Framework Core with code-first migrations against PostgreSQL, brought up as a two-service stack with Docker Compose.',
    stack: ['ASP.NET Core', 'EF Core', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/XenofonGk/DotNet/tree/main/WebAPI/TaskManagerAPI',
    role: 'Self-directed',
    year: '2026',
    body: [
      'A REST API over a todo model, built to get hands-on with the ASP.NET Core request pipeline and Entity Framework Core rather than to ship a product.',
      'The database schema is code-first: the model is defined in C#, and EF Core generates the migrations that build the PostgreSQL schema. Docker Compose brings the API and the database up together as one stack, so the whole thing runs from a single command on a clean machine.',
      'Connection strings are supplied through environment variables and .NET user-secrets rather than committed to the repository.',
    ],
  },
  {
    slug: 'inventory-crud',
    title: 'Inventory CRUD',
    summary:
      'Category and supplier management on ASP.NET Core MVC — Razor views, view models, and EF Core migrations against SQL Server.',
    stack: ['ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Razor'],
    repo: 'https://github.com/XenofonGk/DotNet/tree/main/aspnet-fundamentals/MyProject',
    role: 'Coursework, extended',
    year: '2026',
    body: [
      'A server-rendered MVC application covering the full create, read, update and delete cycle across two related entities.',
      'Built to understand the MVC pattern end to end: routing into controllers, controllers passing view models rather than entities into Razor views, and EF Core migrations keeping the SQL Server schema in step with the model.',
    ],
  },
  {
    slug: 'arenacore',
    title: 'ArenaCore RPG Engine',
    summary:
      'C++ engine built around an abstract combatant hierarchy, applying the Rule of Three, operator overloading and manual memory management.',
    stack: ['C++17', 'CMake'],
    repo: 'https://github.com/XenofonGk/Cpp/tree/main/ArenaCore',
    role: 'Coursework',
    year: '2026',
    body: [
      'A small turn-based arena used as a vehicle for C++ object-oriented fundamentals: an abstract combatant interface, concrete Warrior and Mage subclasses, and an Arena container that owns its roster through raw pointers.',
      'Because the Arena owns heap memory directly, it has to take a position on copying. It deletes the copy constructor and copy assignment outright rather than writing deep copies, which keeps ownership unambiguous.',
    ],
  },
  {
    slug: 'portfolio',
    title: 'This Portfolio',
    summary:
      'The site you are reading. React and Vite, a hand-built CSS design system, deployed to GitHub Pages by an Actions workflow on every push.',
    stack: ['React', 'Vite', 'React Router', 'GitHub Actions'],
    repo: 'https://github.com/XenofonGk/XenofonGk.github.io',
    role: 'Self-directed',
    year: '2026',
    body: [
      'Built without a UI framework or component library — the design system is a set of CSS custom properties, and every component is plain JSX.',
      'Deployment runs as a GitHub Actions workflow: it installs, builds, and publishes the output. Accessibility is checked with axe-core, and the bar is zero violations rather than a score.',
    ],
  },
]

export const findProject = (slug) => projects.find((p) => p.slug === slug)

/* Smaller pieces, listed but not given their own page. */
export const alsoBuilt = [
  {
    title: 'C Projects',
    note: 'Baby name popularity search over ~2.7 MB of census CSVs, and a train inventory console app.',
    repo: 'https://github.com/XenofonGk/C-Projects',
  },
  {
    title: 'C++ Exercises',
    note: 'Marketplace, credit card validation, restaurant ordering, sorting, and a lexical store engine.',
    repo: 'https://github.com/XenofonGk/Cpp',
  },
  {
    title: 'C# Fundamentals',
    note: 'Console applications covering OOP basics — bank simulator, library manager, grade tracker.',
    repo: 'https://github.com/XenofonGk/DotNet/tree/main/csharp-fundamentals',
  },
  {
    title: 'Shell Scripts',
    note: 'Utility scripts for development workflow automation.',
    repo: 'https://github.com/XenofonGk/Shell-Scripts',
  },
  {
    title: 'AI Programming Tools',
    note: 'Notes and references on prompting, neural network fundamentals, and software licensing.',
    repo: 'https://github.com/XenofonGk/ai-programming-tools',
  },
]
