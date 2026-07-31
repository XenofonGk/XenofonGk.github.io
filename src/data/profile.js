/*
 * Structural profile data. Translatable prose (bio paragraphs, job titles,
 * bullets, spec labels) lives in src/i18n/locales/* under `about`.
 */

export const profile = {
  name: "Xenofon Gkioka",
  email: "ksenofwn58@gmail.com",
  github: "https://github.com/XenofonGk",
  githubLabel: "github.com/XenofonGk",
  linkedin: "https://www.linkedin.com/in/xenofon-gkioka/",
  linkedinLabel: "https://www.linkedin.com/in/xenofon-gkioka/",
};

/* Keys map to about.specs.<key> and about.specValues.<key> in the locales. */
export const specKeys = [
  "based",
  "focus",
  "current",
  "education",
  "languages",
  "status",
];

/* Keys map to about.jobs.<key>; `co` is a company name, never translated. */
export const jobs = [
  { key: "mercell", co: "Mercell" },
  { key: "spinworks", co: "Spinworks" },
  { key: "canera", co: "CanEra Homes" },
  { key: "ssf", co: "Seneca Student Federation" },
];

/* Technology names are the same in every language, so only the group heading
   is translated — via about.skillGroups.<key>. */
export const skillGroups = [
  {
    key: "languages",
    items: ["C#", "TypeScript", "JavaScript", "PHP", "C", "C++"],
  },
  {
    key: "frameworks",
    items: ["ASP.NET Core MVC", "EF Core", "React", "Symfony", "OroCommerce"],
  },
  {
    key: "data",
    items: ["SQL Server", "PostgreSQL", "MySQL", "Docker", "Git"],
  },
  {
    key: "practice",
    items: [
      "OOP Design",
      "Agile / Scrum",
      "Relational DB Design",
      "WCAG / a11y",
    ],
  },
];
