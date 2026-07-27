const jobs = [
  {
    title: 'Software Engineer Intern',
    co: 'Mercell',
    date: 'Jun 2026 – Present',
    bullets: [
      'Built a document library and a shared file-uploader component in React and TypeScript, both shipped to production for platform users.',
      'Resolved 400 accessibility violations across key user flows, bringing them into WCAG compliance.',
      'Delivered features in a fast-paced Agile environment — daily stand-ups, sprint planning, backlog refinement, PI planning.',
    ],
  },
  {
    title: 'Junior Backend Developer',
    co: 'Spinworks',
    date: 'Aug 2021 – Aug 2022',
    bullets: [
      'Built and maintained B2B e-commerce platforms using PHP, Symfony, and OroCommerce.',
      'Rewrote slow database queries impacting page load on high-traffic storefronts.',
      'Ran code reviews and integration testing in a Git-based workflow before production deploys.',
    ],
  },
  {
    title: 'Site Supervisor',
    co: 'CanEra Homes',
    date: 'Sep 2022 – May 2026',
    bullets: [
      'Promoted from crew member to supervisor; led crews and coordinated timelines under strict deadlines.',
      'Managed on-site conflict resolution and resource allocation in high-pressure environments.',
    ],
  },
  {
    title: 'Campus Coordinator',
    co: 'Seneca Student Federation',
    date: 'Feb 2026 – Present',
    bullets: [
      'Elected to represent the student body at Newnham Campus, liaising between students, SSF, and administration.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="sheet" id="experience">
      <div className="wrap">
        <div className="title-block"><span className="num">02</span> Experience <span className="rule"></span> Elevation</div>
        {jobs.map((job) => (
          <div className="job" key={job.co}>
            <div className="job-head">
              <h3>{job.title} <span className="co">— {job.co}</span></h3>
              <span className="date">{job.date}</span>
            </div>
            <ul>
              {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
