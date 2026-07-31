import { specs, jobs, skills } from '../data/profile.js'

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <p className="mono callout">
            <span className="n">§01</span>
            <span>About</span>
            <span className="line" aria-hidden="true"></span>
            <span>Scale 1:1</span>
          </p>
          <h2>Blueprints to architecture diagrams</h2>
          <div className="prose">
            <p>
              I&rsquo;m a second-year Computer Programming student at Seneca Polytechnic,
              originally from Greece, currently based between Toronto and Copenhagen. Before I
              wrote a line of code professionally I worked construction in Canada —{' '}
              <strong>promoted from crew member to site supervisor</strong>, running crews and
              hitting deadlines under real pressure. That background is why I don&rsquo;t
              romanticise &ldquo;shipping fast&rdquo;: I&rsquo;ve managed timelines where the
              cost of missing one was a lot more concrete than a Jira ticket.
            </p>
            <p>
              I got into programming through a junior backend role at <strong>Spinworks</strong>{' '}
              in Athens, working PHP, Symfony and OroCommerce on B2B e-commerce systems.
              That&rsquo;s where my interest in <strong>B2B SaaS</strong> started, which is what
              led me to Mercell.
            </p>
            <p>
              Right now I build front-end features in React and TypeScript at Mercell, a
              procurement SaaS company in Copenhagen, while finishing my diploma and teaching
              myself the C#/.NET stack on the side.
            </p>
          </div>

          <div className="spec-table">
            {specs.map(([k, v]) => (
              <div className="cell" key={k}>
                <span className="k">{k}</span>
                <span className="v">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="mono callout">
            <span className="n">§02</span>
            <span>Experience</span>
            <span className="line" aria-hidden="true"></span>
            <span>Elevation</span>
          </p>
          <h2>Where I&rsquo;ve worked</h2>
          {jobs.map((job) => (
            <div className="job" key={job.co}>
              <div className="when">{job.date}</div>
              <div>
                <h3>
                  {job.title} <span className="co">— {job.co}</span>
                </h3>
                <ul>
                  {job.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="mono callout">
            <span className="n">§03</span>
            <span>Skills</span>
            <span className="line" aria-hidden="true"></span>
            <span>Materials list</span>
          </p>
          <h2>Tools I reach for</h2>
          <div className="chip-grid">
            {skills.map((cat) => (
              <div key={cat.name}>
                <h3>{cat.name}</h3>
                <div className="chip-row">
                  {cat.items.map((item) => <span className="chip" key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
