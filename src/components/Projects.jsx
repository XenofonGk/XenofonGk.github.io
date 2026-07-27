const projects = [
  {
    num: '01',
    title: 'Full-Stack CRUD App',
    desc: 'Self-directed CRUD web app, containerized with Docker and backed by SQL Server.',
    stack: 'ASP.NET Core MVC · EF Core · Docker',
    repo: 'https://github.com/xenofongk/DotNet',
  },
  {
    num: '02',
    title: 'ArenaCore RPG Engine',
    desc: 'C++ OOP-based engine applying abstract class hierarchies, Rule of Three, and operator overloading.',
    stack: 'C++',
    repo: 'https://github.com/xenofongk/Cpp',
  },
  {
    num: '03',
    title: 'TodoApi & Console Suite',
    desc: 'REST API plus C# console apps (bank simulator, library manager, grade tracker) built to lock in OOP and API fundamentals.',
    stack: 'C# · .NET · ASP.NET Core Web API',
    repo: 'https://github.com/xenofongk/DotNet',
  },
]

export default function Projects() {
  return (
    <section className="sheet" id="projects">
      <div className="wrap">
        <div className="title-block"><span className="num">04</span> Projects <span className="rule"></span> As-Built</div>
        <div className="proj-grid">
          {projects.map((p) => (
            <div className="proj" key={p.title}>
              <span className="pnum">/ {p.num}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="stack">{p.stack}</div>
              <a className="repo" href={p.repo} target="_blank" rel="noopener noreferrer">View repo ↗</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
