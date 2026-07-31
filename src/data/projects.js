/*
 * Structural project data — the parts that are identical in every language.
 *
 * All prose (title, summary, role, body) lives in src/i18n/locales/*, keyed by
 * the `id` below under projects.items.<id>. Keeping them apart means adding a
 * language never touches this file, and adding a project never touches six
 * translation files at once.
 *
 * Accuracy rule: `repo` must point at something that exists.
 */

export const projects = [
  {
    id: 'train-yard-manager',
    slug: 'train-yard-manager',
    year: '2026',
    stack: ['C', 'MSTest (C++)', 'Make', 'WebAssembly'],
    repo: 'https://github.com/XenofonGk/train-yard-manager',
    demo: 'train-yard',
  },
  {
    id: 'taskmanager-api',
    slug: 'taskmanager-api',
    year: '2026',
    stack: ['ASP.NET Core', 'EF Core', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/XenofonGk/DotNet/tree/main/WebAPI/TaskManagerAPI',
  },
  {
    id: 'inventory-crud',
    slug: 'inventory-crud',
    year: '2026',
    stack: ['ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Razor'],
    repo: 'https://github.com/XenofonGk/DotNet/tree/main/aspnet-fundamentals/MyProject',
  },
  {
    id: 'arenacore',
    slug: 'arenacore',
    year: '2026',
    stack: ['C++17', 'CMake'],
    repo: 'https://github.com/XenofonGk/Cpp/tree/main/ArenaCore',
  },
  {
    id: 'portfolio',
    slug: 'portfolio',
    year: '2026',
    stack: ['React', 'Vite', 'React Router', 'GitHub Actions'],
    repo: 'https://github.com/XenofonGk/XenofonGk.github.io',
  },
]

export const findProject = (slug) => projects.find((p) => p.slug === slug)

/* Smaller pieces, listed but without their own view. */
export const alsoBuilt = [
  { id: 'c-projects', repo: 'https://github.com/XenofonGk/C-Projects' },
  { id: 'cpp-exercises', repo: 'https://github.com/XenofonGk/Cpp' },
  {
    id: 'csharp-fundamentals',
    repo: 'https://github.com/XenofonGk/DotNet/tree/main/csharp-fundamentals',
  },
  { id: 'shell-scripts', repo: 'https://github.com/XenofonGk/Shell-Scripts' },
  { id: 'ai-tools', repo: 'https://github.com/XenofonGk/ai-programming-tools' },
]
