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
    "Full-stack developer (React, TypeScript, C#/.NET) who ships to production and operates it: accessible micro-frontends at Mercell, B2B e-commerce at Spinworks, AI developer tooling, and a self-hosted platform with signed CI/CD",
  skills: [
    ["Languages", "TypeScript, JavaScript, C#, Python, PHP, SQL, C, C++, Bash"],
    ["Front end", "React, Next.js, NX, Module Federation, micro-frontends, HTML5, CSS3, WCAG 2.1 AA, ARIA"],
    ["Back end", "ASP.NET Core, Entity Framework Core, Node.js, Fastify, FastAPI, Symfony, REST APIs"],
    ["Cloud and DevOps", "Docker, GitHub Actions (CI/CD), Cloudflare, OpenTofu (IaC), Prometheus, Grafana, Linux"],
    ["Data", "PostgreSQL, SQL Server, MySQL"],
    ["AI and ML", "LLM agents (Claude, Gemini, Ollama), scikit-learn, TF-IDF, mutation testing of AI-generated code"],
    ["Testing", "Jest, React Testing Library, Vitest, MSTest, axe-core, contract testing"],
  ],
  experience: [
    { role: 'Software Engineer Intern', org: 'Mercell', when: 'Jun 2026 – Aug 2026', where: 'Copenhagen, Denmark',
      context: 'European public-procurement (e-tendering) SaaS platform', bullets: ["Shipped the Document Library micro-frontend to production (React, TypeScript, i18n, Module Federation)", "Designed a reusable, accessible file-uploader library now used by 3+ product teams, including bid delivery", "Cut accessibility violations in shared UI components by over 60%, locked in with React Testing Library"] },
    { role: 'Freelance Web Developer', org: '', when: 'Jan 2021 – Present', where: 'Remote',
      context: 'Websites for a small business and a non-profit, owned end to end', bullets: ["Delivered azclean.gr for an Athens business from design to launch: React, Vite, domain, DNS, indexing", "Built a before-and-after photo slider from scratch that works by mouse, touch, and keyboard", "Built, maintained, and in 2026 rebuilt the WordPress site of WAY Empowerment, an NGO in Kenya"] },
    { role: 'Junior Software Developer', org: 'Spinworks', when: 'Aug 2021 – Aug 2022', where: 'Athens, Greece',
      context: 'B2B e-commerce platforms for client storefronts', bullets: ["Stood up and tuned a Symfony and OroCommerce B2B platform for a client on a new Docker environment", "Rewrote slow database queries behind high-traffic storefront pages, shortening page loads", "Built a Symfony storefront bundle (theme, layouts, email templates) and kept dependencies current"] },
  ],
  projects: [
    { name: "Self-Hosted Production Platform", stack: "Docker, Cloudflare, OpenTofu, GitHub Actions, Prometheus", link: "xgbuilds.dev", bullets: ["Operate 2 public APIs from a home server with zero open ports, the edge defined as code in OpenTofu", "Built a signed supply chain: CI tests, scans, and signs each image; the server verifies it before deploying", "Automated 49 health checks, phone alerting, and encrypted nightly backups offsite, with restores tested"] },
    { name: "ai-eng", stack: "JavaScript, mutation testing", link: "github.com/XenofonGk/ai-eng", bullets: ["Mutation-tests AI-written code: on 59 real zod bugs it flagged 27 (45.8%); the existing tests caught 0"] },
    { name: "AgentMesh", stack: "TypeScript, Next.js, Fastify, Docker", link: "github.com/XenofonGk/AgentMesh", bullets: ["Architected a 14k-line TypeScript control plane for AI agents on 5 LLM providers, keys hidden from agents"] },
    { name: "Resume Classifier", stack: "Python, scikit-learn, FastAPI", link: "resume-classifier.xgbuilds.dev", bullets: ["Diagnosed a perfect 1.00 score as dataset leakage and rebuilt the corpus until the score meant something"] },
    { name: "TaskManager API", stack: "C#, ASP.NET Core, EF Core, PostgreSQL", link: "tasks.xgbuilds.dev", bullets: ["Deployed a live REST API with constant-time key checks and contract tests against real PostgreSQL in CI"] },
    { name: "aoda-scan", stack: "Node.js, axe-core, Playwright", link: "github.com/XenofonGk/aoda-scan", bullets: ["Built an open-source CLI that grades whole sites against WCAG 2.1 AA and AODA, grouping repeated faults"] },
  ],
  education: [
    { school: 'Seneca Polytechnic', what: 'Advanced Diploma, Computer Programming', when: '2025 – 2027 (expected)' },
    { school: 'IEK Glyfadas', what: 'Technical Diploma, IT and Computer Science', when: '2016 – 2018' },
  ],
}
