const specs = [
  ['Based', 'Toronto / Copenhagen'],
  ['Focus', 'Full-Stack — React, C#/.NET'],
  ['Current', 'SWE Intern, Mercell'],
  ['Education', 'Seneca Polytechnic'],
  ['Languages', 'Greek, English'],
  ['Status', 'CA PR · EU Citizen'],
]

export default function About() {
  return (
    <section className="sheet" id="about">
      <div className="wrap">
        <h2 className="title-block"><span className="num">01</span> About <span className="rule" aria-hidden="true"></span> Scale 1:1</h2>
        <div className="about-grid">
          <div>
            <p>
              I'm a 2nd-year Computer Programming & Analysis student at Seneca Polytechnic,
              originally from Greece, currently based between Toronto and Copenhagen. Before I
              wrote a line of code professionally, I worked construction in Canada —{' '}
              <strong>promoted from crew member to site supervisor</strong>, running crews and
              hitting deadlines under real pressure. That background is why I don't romanticize
              "shipping fast": I've managed timelines where the cost of missing one was a lot
              more concrete than a Jira ticket.
            </p>
            <p>
              I got into programming through a junior backend role at <strong>Spinworks</strong>{' '}
              in Athens, working PHP/Symfony/OroCommerce on B2B e-commerce systems. That's also
              where my interest in <strong>B2B SaaS</strong> started — which is what led me to
              Mercell.
            </p>
            <p>
              Right now I'm building front-end features in React and TypeScript at Mercell, a
              procurement SaaS company in Copenhagen, while finishing my diploma and self-teaching
              the C#/.NET stack on the side.
            </p>
          </div>
          <div className="spec-list">
            {specs.map(([k, v]) => (
              <div className="spec-row" key={k}>
                <span className="k">{k}</span>
                <span className="v">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
