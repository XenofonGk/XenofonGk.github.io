/*
 * Every fact on the site lives here, so the pages stay layout-only.
 * Accuracy rule: a link must point at something that exists today. When a
 * thing is not public yet, leave the link out rather than pointing at a 404.
 */

export const site = {
  name: 'Xenofon Gkioka',
  brand: 'xgbuilds',
  url: 'https://xgbuilds.dev',
  email: 'ksenofwn58@gmail.com',
  github: 'https://github.com/XenofonGk',
  linkedin: 'https://www.linkedin.com/in/xenofon-gkioka',
  cv: '/cv/Xenofon_Gkioka_CV.pdf',
  cvA4: '/cv/Xenofon_Gkioka_CV_A4.pdf',
}

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`

export const timeline = [
  { when: '2016', what: 'IT support, Athens' },
  { when: '2021', what: 'Developer at Spinworks' },
  { when: 'Nov 2021', what: 'Moved to Toronto' },
  { when: '2025', what: 'Started at Seneca' },
  { when: '2026', what: 'Intern at Mercell, Copenhagen' },
]

export type ClientSite = {
  name: string
  domain: string
  url: string
  summary: string
  /** Optional screenshot in /public/work. Without one, the card shows the domain. */
  image?: string
}

export const clientSites: ClientSite[] = [
  {
    name: 'AZ Clean',
    domain: 'azclean.gr',
    url: 'https://azclean.gr',
    image: '/work/azclean.jpg',
    summary:
      'Website for a cleaning business in Greece, on its own domain, with Google Search set up so customers can find it.',
  },
  {
    name: 'WAY Empowerment',
    domain: 'wayempowerment.com',
    url: 'https://www.wayempowerment.com',
    image: '/work/wayempowerment.jpg',
    summary: 'A rebuilt website for WAY Empowerment, a non-profit organization.',
  },
  {
    name: 'Beauty by Beautia',
    domain: 'beautybybeautia.pages.dev',
    url: 'https://beautybybeautia.pages.dev',
    image: '/work/beautybybeautia.jpg',
    summary:
      'Website for a Toronto makeup and hair artist, with a Sanity editor so the owner can change text and photos without touching code.',
  },
]

export const packages = [
  {
    name: 'Website',
    for: 'For a business that needs a clear, fast presence online.',
    items: ['Up to 5 pages', 'Mobile-first, built to WCAG 2.1 AA', 'Basic SEO and Google setup', 'Contact by email'],
  },
  {
    name: 'Website you can edit',
    for: 'For owners who want to change text and photos themselves.',
    items: ['Everything in Website', 'Simple login to edit text and images', 'No code needed for updates', 'Handover session'],
  },
  {
    name: 'Online store',
    for: 'For selling your products online.',
    items: [
      'Products, cart and checkout',
      'Customer accounts',
      'Payments through Stripe, so card data never touches your site',
      'Orders and stock in one place',
    ],
  },
]

export const process = [
  { title: 'We talk', body: 'You tell me about your business and what the site needs to do. I reply with an idea and a quote.' },
  { title: 'You approve the design', body: 'You see the design in your colours before any code is written, and we adjust it together.' },
  { title: 'I build it', body: 'Mobile-first, accessible and tested on real phones, with your text and photos.' },
  { title: 'It goes live', body: 'On your domain, owned by you. Look after it yourself or add a care plan.' },
]

export const faq = [
  { q: 'Do I own the website?', a: 'Yes. The code and the domain are yours. If you ever want to move it, you can.' },
  { q: 'Can I update it myself?', a: 'With the editable package, yes: you log in and change text and photos without touching code.' },
  {
    q: 'What happens after launch?',
    a: 'You can look after it yourself, or choose a monthly care plan for hosting, backups, security updates and small edits.',
  },
  {
    q: 'Is it accessible?',
    a: "Every site is built to WCAG 2.1 AA, the standard Ontario's AODA points to, and checked with automated scans before launch.",
  },
]

export type Link = { label: string; href: string }

export type Project = {
  id: string
  title: string
  body: string
  tags: string[]
  links: Link[]
  stat?: { value: string; label: string }
  demo?: 'train-yard' | 'arenacore'
  details?: string[]
}

export const featured: Project = {
  id: 'ai-eng',
  title: 'Mutation testing for code changes',
  body: "A passing test suite tells you tests ran, not that they'd catch a bug. ai-eng mutates the lines a change touches, flipping a condition, a boundary or a sign, and checks whether the existing tests notice.",
  tags: ['TypeScript', 'Node.js', 'Testing'],
  stat: { value: '27 of 59', label: 'real bugs reintroduced from the zod library were flagged. The existing tests caught 0.' },
  links: [
    { label: 'Code', href: 'https://github.com/XenofonGk/ai-eng' },
    { label: 'Benchmark write-up', href: 'https://github.com/XenofonGk/ai-eng/blob/main/docs/progress/01-benchmark.md' },
  ],
}

export const projects: Project[] = [
  {
    id: 'train-yard',
    title: 'A train-yard validator in C, running here',
    body: 'Rules for building a safe train, written in C and compiled to WebAssembly. Try a move and the C decides whether it is allowed, and why.',
    tags: ['C', 'WebAssembly', 'Unit tests'],
    demo: 'train-yard',
    links: [{ label: 'Code', href: 'https://github.com/XenofonGk/train-yard-manager' }],
  },
  {
    id: 'arenacore',
    title: 'A C++ combat engine, running here',
    body: 'A turn-based engine built on abstract classes, operator overloading and manual memory management, compiled to WebAssembly.',
    tags: ['C++', 'OOP', 'WebAssembly'],
    demo: 'arenacore',
    links: [{ label: 'Code', href: 'https://github.com/XenofonGk/Cpp/tree/main/ArenaCore' }],
  },
  {
    id: 'aoda-scan',
    title: 'Whole-site accessibility audits',
    body: "Crawls an entire site, tests every page against WCAG 2.1 AA and Ontario's AODA, and turns the results into a grade and a ranked list of what to fix first.",
    tags: ['Node.js', 'Playwright', 'WCAG 2.1'],
    links: [{ label: 'Code', href: 'https://github.com/XenofonGk/aoda-scan' }],
  },
  {
    id: 'agentmesh',
    title: 'A self-hosted control plane for AI coding agents',
    body: 'Run coding agents on Claude, Gemini, DeepSeek, Grok or Ollama with your own keys. A credential vault keeps keys away from the agent, and every change goes through diff review.',
    tags: ['Next.js', 'Fastify', 'TypeScript'],
    links: [{ label: 'Code', href: 'https://github.com/XenofonGk/AgentMesh' }],
  },
  {
    id: 'kyklos',
    title: 'KykloC, a field-service app for trades',
    body: 'Client, appointment, job, payment and repeat job in one flow, for cleaners, electricians and plumbers. It started from a real business: AZ Clean. The live demo runs in your browser with no account.',
    tags: ['React', 'TanStack Start', 'Supabase'],
    links: [{ label: 'Try the live demo', href: 'https://pixel-perfect-recreation-892-alpha.vercel.app' }],
    details: [
      'Multi-tenant: every business is isolated in the database with PostgreSQL row-level security, not only in code.',
      'Staff see only their assigned jobs, through an API that leaves out prices, VAT and payment data.',
      'Built for patchy signal: failed saves wait in a persistent outbox and retry when the connection returns.',
      'Greek and English interface.',
      'Not yet: card payments and subscription billing. A customer trial is next.',
    ],
  },
]

export const moreProjects: { title: string; body: string; link?: Link }[] = [
  {
    title: 'Task Manager API',
    body: 'ASP.NET Core Web API on PostgreSQL with Entity Framework Core, fully containerized with Docker.',
    link: { label: 'Try the API', href: 'https://tasks.xgbuilds.dev/swagger' },
  },
  {
    title: 'Resume Classifier',
    body: 'Sorts resume text into five job families with TF-IDF and logistic regression. 97% holdout accuracy on synthetic data.',
    link: { label: 'Live demo', href: 'https://resume-classifier.xgbuilds.dev' },
  },
  {
    title: 'Bash games',
    body: 'Hangman, PsychoBot and a number-guessing game from my Seneca coursework. A version that runs in real Bash in your browser is on the way.',
    link: { label: 'Code', href: 'https://github.com/XenofonGk/Shell-Scripts' },
  },
  {
    title: 'Home server',
    body: 'The Ubuntu server that hosts these demos: Docker, a reverse proxy, a Cloudflare Tunnel and automatic backups.',
  },
]
