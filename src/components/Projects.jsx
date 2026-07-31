import TrainYardDemo from './TrainYardDemo.jsx'

const projects = [
  {
    num: '01',
    title: 'Train Yard Management System',
    desc: 'Rail inventory and safety-validation system in C. Enforces weight limits, locomotive pull capacity, and car-type protocols, with an MSTest suite driving the same logic layer.',
    stack: 'C · MSTest (C++) · Make',
    repo: 'https://github.com/XenofonGk/train-yard-manager',
  },
  {
    num: '02',
    title: 'TaskManager REST API',
    desc: 'Containerized todo API — EF Core with code-first migrations against PostgreSQL, brought up as a two-service stack with Docker Compose.',
    stack: 'ASP.NET Core Web API · EF Core · PostgreSQL · Docker',
    repo: 'https://github.com/XenofonGk/DotNet/tree/main/WebAPI/TaskManagerAPI',
  },
  {
    num: '03',
    title: 'Inventory CRUD (MVC)',
    desc: 'Category and supplier management built on ASP.NET Core MVC — Razor views, view models, and EF Core migrations against SQL Server.',
    stack: 'ASP.NET Core MVC · EF Core · SQL Server',
    repo: 'https://github.com/XenofonGk/DotNet/tree/main/aspnet-fundamentals/MyProject',
  },
  {
    num: '04',
    title: 'ArenaCore RPG Engine',
    desc: 'C++ OOP engine applying abstract class hierarchies, the Rule of Three, and operator overloading.',
    stack: 'C++ · CMake',
    repo: 'https://github.com/XenofonGk/Cpp/tree/main/ArenaCore',
  },
  {
    num: '05',
    title: 'This Portfolio',
    desc: 'The site you are reading. React and Vite, hand-built CSS design system, deployed to GitHub Pages by an Actions workflow on every push.',
    stack: 'React · Vite · GitHub Actions',
    repo: 'https://github.com/XenofonGk/XenofonGk.github.io',
  },
]

export default function Projects() {
  return (
    <section className="sheet" id="projects">
      <div className="wrap">
        <h2 className="title-block"><span className="num">04</span> Projects <span className="rule" aria-hidden="true"></span> As-Built</h2>

        <h3 className="demo-heading">Try it — the train yard validator, running here</h3>
        <p className="demo-intro">
          The C below is compiled to WebAssembly and running in your browser. It is the same
          translation unit the project&rsquo;s 21-test suite exercises — none of the rules are
          reimplemented in JavaScript. Build a train and watch it accept or reject each car.
        </p>
        <TrainYardDemo />

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
