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
  imageWidth?: number
  imageHeight?: number
  status?: 'in-progress'
}

export const clientSites: ClientSite[] = [
  {
    name: 'AZ Clean',
    domain: 'azclean.gr',
    url: 'https://azclean.gr',
    image: '/work/case-studies/az-clean/home-desktop.webp',
    imageWidth: 1440,
    imageHeight: 900,
    summary:
      'Website for a cleaning business in Greece, on its own domain, with Google Search set up so customers can find it.',
  },
  {
    name: 'WAY Empowerment',
    domain: 'wayempowerment.com',
    url: 'https://www.wayempowerment.com',
    image: '/work/wayempowerment.jpg',
    summary:
      'A rebuilt website for WAY Empowerment, a non-profit organization.',
  },
  {
    name: 'Beauty by Beautia',
    domain: 'beautybybeautia.pages.dev',
    url: 'https://beautybybeautia.pages.dev',
    status: 'in-progress',
    summary:
      'Website in development for a Toronto makeup and hair artist. The current preview still needs portfolio imagery.',
  },
]

export const packages = [
  {
    name: 'Website',
    for: 'For a business that needs a clear, fast presence online.',
    items: [
      'Up to 5 pages',
      'Responsive layouts and accessibility checks',
      'Basic SEO and Google setup',
      'Contact by email',
    ],
  },
  {
    name: 'Website you can edit',
    for: 'For owners who want to change text and photos themselves.',
    items: [
      'Everything in Website',
      'Simple login to edit text and images',
      'No code needed for updates',
      'Handover session',
    ],
  },
  {
    name: 'Online store',
    for: 'For selling your products online.',
    items: [
      'Products, cart and checkout',
      'Customer accounts',
      'Payment-provider integration scoped in your quote',
      'Orders and stock in one place',
    ],
  },
]

export const process = [
  {
    title: 'We talk',
    body: 'You tell me about your business and what the site needs to do. I reply with an idea and a quote.',
  },
  {
    title: 'You approve the design',
    body: 'You see the design in your colours before any code is written, and we adjust it together.',
  },
  {
    title: 'I build it',
    body: 'Responsive layouts, keyboard checks and browser testing, with your text and photos.',
  },
  {
    title: 'It goes live',
    body: 'On your domain, owned by you. Look after it yourself or add a care plan.',
  },
]

export const faq = [
  {
    q: 'Do I own the website?',
    a: 'Yes. The code and the domain are yours. If you ever want to move it, you can.',
  },
  {
    q: 'Can I update it myself?',
    a: 'With the editable package, yes: you log in and change text and photos without touching code.',
  },
  {
    q: 'What happens after launch?',
    a: 'You can look after it yourself, or choose a monthly care plan for hosting, backups, security updates and small edits.',
  },
  {
    q: 'Is it accessible?',
    a: 'Accessibility is part of the build, including keyboard use, contrast and automated checks. The agreed testing scope and remaining issues are covered at handover.',
  },
]
