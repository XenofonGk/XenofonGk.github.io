const categories = [
  { name: 'Languages', items: ['C#', 'TypeScript', 'JavaScript', 'PHP', 'C', 'C++'] },
  { name: 'Frameworks', items: ['ASP.NET Core MVC', 'EF Core', 'React', 'Symfony', 'OroCommerce'] },
  { name: 'Data & Infra', items: ['SQL Server', 'MySQL', 'Docker', 'AWS', 'Git'] },
  { name: 'Practice', items: ['OOP Design', 'Agile / Scrum', 'Relational DB Design', 'WCAG / a11y'] },
]

export default function Skills() {
  return (
    <section className="sheet" id="skills">
      <div className="wrap">
        <h2 className="title-block"><span className="num">03</span> Skills <span className="rule" aria-hidden="true"></span> Materials List</h2>
        <div className="skills-grid">
          {categories.map((cat) => (
            <div key={cat.name}>
              <div className="skill-cat">{cat.name}</div>
              <div className="chip-row">
                {cat.items.map((item) => <span className="chip" key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
