import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <div className="wrap">
        <Link className="mark" to="/">
          XG<span className="dash">—</span>02
        </Link>
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
