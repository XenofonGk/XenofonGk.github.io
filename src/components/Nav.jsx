import { NavLink, Link } from "react-router";
import { useI18n } from "../i18n/index.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function Nav() {
  const { t } = useI18n();

  const links = [
    { to: "/projects", label: t("nav.projects") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="nav" aria-label={t("nav.primary")}>
      <div className="wrap">
        <Link className="mark" to="/">
          XG
        </Link>
        <div className="nav-right">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav-tools">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
