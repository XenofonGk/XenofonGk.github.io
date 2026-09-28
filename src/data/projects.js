/*
 * Structural project data — the parts that are identical in every language.
 *
 * All prose (title, summary, role, body) lives in src/i18n/locales/*, keyed by
 * the `id` below under projects.items.<id>. Keeping them apart means adding a
 * language never touches this file, and adding a project never touches six
 * translation files at once.
 *
 * Accuracy rules: `repo` must point at something that exists, and `live` is
 * set only for a public URL that is actually serving.
 */

export const projects = [
  {
    id: 'taskmanager-api',
    slug: 'taskmanager-api',
    year: '2026',
    stack: ['ASP.NET Core', 'EF Core', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/XenofonGk/DotNet/tree/main/WebAPI/TaskManagerAPI',
    live: 'https://tasks.xgbuilds.dev/swagger',
    demo: 'task-manager',
  },
  {
    id: 'resume-classifier',
    slug: 'resume-classifier',
    year: '2026',
    stack: ['Python', 'scikit-learn', 'FastAPI', 'Docker'],
    repo: 'https://github.com/XenofonGk/ai-programming-tools/tree/main/AI%20Resume%20Classifier%20(NLP%20%2B%20ML)',
    live: 'https://resume-classifier.xgbuilds.dev',
  },
  {
    id: 'aoda-scan',
    slug: 'aoda-scan',
    year: '2026',
    stack: ['Node.js', 'Playwright', 'axe-core'],
    repo: 'https://github.com/XenofonGk/aoda-scan',
    live: 'https://www.npmjs.com/package/aoda-scan',
  },
  {
    id: 'agentmesh',
    slug: 'agentmesh',
    year: '2026',
    stack: ['TypeScript', 'Next.js', 'Fastify', 'Docker'],
    repo: 'https://github.com/XenofonGk/AgentMesh',
  },
  {
    id: 'home-server',
    slug: 'home-server',
    year: '2026',
    stack: ['Ubuntu', 'Docker Compose', 'Cloudflare Tunnel', 'Bash', 'Ansible'],
    repo: 'https://github.com/XenofonGk/home-server',
  },
  {
    id: 'train-yard-manager',
    slug: 'train-yard-manager',
    year: '2026',
    stack: ['C', 'MSTest (C++)', 'Make', 'WebAssembly'],
    repo: 'https://github.com/XenofonGk/train-yard-manager',
    demo: 'train-yard',
  },
  {
    id: 'arenacore',
    slug: 'arenacore',
    year: '2026',
    stack: ['C++17', 'CMake', 'WebAssembly'],
    repo: 'https://github.com/XenofonGk/Cpp/tree/main/ArenaCore',
    demo: 'arenacore',
  },
  {
    id: 'inventory-crud',
    slug: 'inventory-crud',
    year: '2026',
    stack: ['ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Razor'],
    repo: 'https://github.com/XenofonGk/DotNet/tree/main/aspnet-fundamentals/MyProject',
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

/*
 * Client websites. Prose lives under work.items.<id>. These are hosted by the
 * client, not on the home server, so `url` is their own domain.
 */
export const clientWork = [
  {
    id: 'azclean',
    url: 'https://azclean.gr',
    domain: 'azclean.gr',
    year: '2026',
    stack: ['React', 'Vite', 'GitHub Pages', 'Google Search Console'],
  },
  {
    id: 'way',
    url: 'https://www.wayempowerment.com',
    domain: 'wayempowerment.com',
    year: '2026',
    stack: ['WordPress block theme', 'PHP', 'one.com hosting'],
  },
]

/* Cards in the home page "Live now" grid, in display order. `to` is the
   internal page with the write-up; `url` is the public address. */
export const liveNow = [
  { id: 'azclean', kind: 'client', url: 'https://azclean.gr', domain: 'azclean.gr', to: '/work#azclean' },
  { id: 'way', kind: 'client', url: 'https://www.wayempowerment.com', domain: 'wayempowerment.com', to: '/work#way' },
  { id: 'tasks', kind: 'server', url: 'https://tasks.xgbuilds.dev/swagger', domain: 'tasks.xgbuilds.dev', to: '/projects/taskmanager-api' },
  { id: 'classifier', kind: 'server', url: 'https://resume-classifier.xgbuilds.dev', domain: 'resume-classifier.xgbuilds.dev', to: '/projects/resume-classifier' },
]
