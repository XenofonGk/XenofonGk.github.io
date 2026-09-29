/*
 * The CV as data, mirroring ~/cv/build-cv.js (the source of the PDFs in
 * public/cv/). English only: a CV is sent in the language of the application.
 * The phone number is left off the web version on purpose.
 */

export const cv = {
  name: 'Xenofon Gkioka',
  contact: ['Toronto, ON', 'ksenofwn58@gmail.com', 'Canadian PR and EU citizen'],
  links: [
    { label: 'xgbuilds.dev', href: 'https://xgbuilds.dev' },
    { label: 'linkedin.com/in/xenofon-gkioka', href: 'https://www.linkedin.com/in/xenofon-gkioka/' },
    { label: 'github.com/XenofonGk', href: 'https://github.com/XenofonGk' },
  ],
  summary:
    'Full-stack developer (React, TypeScript, C#/.NET) who ships to production and operates it: accessible front-end features at Mercell, B2B e-commerce at Spinworks, AI developer tooling, and 2 live APIs on self-built infrastructure',
  skills: [
    ['Languages', 'TypeScript, JavaScript, C#, Python, PHP, SQL, C, C++, Bash'],
    ['Front end', 'React, Next.js, NX, Module Federation, HTML5, CSS3, WCAG 2.1 AA, ARIA'],
    ['Back end', 'ASP.NET Core, Entity Framework Core, Node.js, Fastify, FastAPI, Symfony, OroCommerce'],
    ['Data and DevOps', 'PostgreSQL, SQL Server, MySQL, Docker, GitHub Actions, Cloudflare, OpenTofu, Prometheus'],
    ['AI and ML', 'LLM agents (Claude, Gemini, DeepSeek, Grok, Ollama), scikit-learn, TF-IDF, FastAPI model serving'],
    ['Testing', 'Jest, React Testing Library, Vitest, MSTest, axe-core, mutation testing'],
  ],
  experience: [
    { role: 'Software Engineer Intern', org: 'Mercell', when: 'Jun 2026 – Aug 2026', where: 'Copenhagen, Denmark',
      context: 'European public-procurement (e-tendering) SaaS platform',
      bullets: [
        'Built the Document Library micro-frontend in React and TypeScript with routing, i18n, and Module Federation',
        'Designed an accessible file-uploader library (drag-and-drop, progress tracking) adopted by 3+ internal apps',
        'Resolved over 60% of accessibility violations in shared UI components, tested with React Testing Library',
      ] },
    { role: 'Freelance Web Developer', org: '', when: '2026 – Present', where: 'Remote',
      context: 'Client websites for a small business and a non-profit',
      bullets: [
        'Built and launched azclean.gr, a React and Vite site for an Athens cleaning business, plus its domain and DNS',
        'Developed a before-and-after photo slider from scratch for mouse, touch, and keyboard',
        'Rebuilt wayempowerment.com as a custom WordPress block theme with donating one click from every page',
      ] },
    { role: 'Junior Software Developer', org: 'Spinworks', when: 'Aug 2021 – Aug 2022', where: 'Athens, Greece',
      context: 'B2B e-commerce platforms for client storefronts',
      bullets: [
        'Set up and optimized a Symfony and OroCommerce B2B platform for a client on a new Docker installation',
        'Built a Symfony storefront bundle (theming, layout and email templates) and updated Composer packages',
        'Rewrote slow database queries that delayed page loads on high-traffic storefronts',
      ] },
    { role: 'Web Developer (Volunteer)', org: 'WAY Empowerment (Awe Center Kenya)', when: 'Jan 2021 – Feb 2024', where: '',
      context: '',
      bullets: ['Designed and maintained a responsive WordPress site for an NGO supporting women and youth in Kenya'] },
  ],
  projects: [
    { name: 'Self-Hosted Production Platform', stack: 'Docker, Cloudflare, OpenTofu, GitHub Actions, Prometheus', link: 'xgbuilds.dev',
      bullets: [
        'Run 2 public APIs from a home server behind a Cloudflare Tunnel with no open ports, edge defined in OpenTofu',
        'Built a signed pipeline: CI scans each image, adds an SBOM, and signs it; the server verifies before deploy',
        'Automated 49 health checks, phone alerts, and encrypted nightly backups to local and offsite storage',
      ] },
    { name: 'TaskManager API', stack: 'C#, ASP.NET Core, EF Core, PostgreSQL', link: 'tasks.xgbuilds.dev',
      bullets: ['Built a live REST API with code-first migrations and key-protected writes, contract-tested on every push'] },
    { name: 'ai-eng', stack: 'JavaScript, mutation testing', link: 'github.com/XenofonGk/ai-eng',
      bullets: ['Built a mutation-testing tool for AI-written code: on 59 real zod bugs, it flagged 27 (45.8%); existing tests caught 0'] },
    { name: 'AgentMesh', stack: 'TypeScript, Next.js, Fastify, Docker', link: 'github.com/XenofonGk/AgentMesh',
      bullets: ['Built a self-hosted control plane for AI coding agents on 5 LLM providers, with API keys hidden from agents'] },
    { name: 'Resume Classifier', stack: 'Python, scikit-learn, FastAPI', link: 'resume-classifier.xgbuilds.dev',
      bullets: ['Deployed an ML API that sorts resumes into 5 job families with confidence scores, trained without personal data'] },
    { name: 'aoda-scan', stack: 'Node.js, axe-core, Playwright', link: 'github.com/XenofonGk/aoda-scan',
      bullets: ['Built an open-source CLI that crawls a whole site and grades it against WCAG 2.1 AA and Ontario AODA'] },
  ],
  education: [
    { school: 'Seneca Polytechnic', what: 'Advanced Diploma, Computer Programming', when: '2025 – 2027 (expected)' },
    { school: 'IEK Glyfadas', what: 'Technical Diploma, IT and Computer Science', when: '2016 – 2018' },
  ],
}
