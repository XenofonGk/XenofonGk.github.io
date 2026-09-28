import { Link } from 'react-router'
import { profile } from '../data/profile.js'
import { useI18n } from '../i18n/index.jsx'

/* Site footer. The file keeps its old name so imports stay stable. */
export default function TitleBlock() {
  const { t, meta } = useI18n()

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link className="mark" to="/">XG</Link>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-meta">{t('about.specValues.based')}</p>
        </div>
        <ul className="footer-links" role="list">
          <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
        </ul>
      </div>
      <div className="wrap footer-base">
        <span>© 2026 {profile.name}</span>
        {/* Shown only when a machine-assisted locale is active. Stating this is
            the honest alternative to letting an unverified translation of
            someone's CV pass as their own writing. */}
        {!meta.verified && <span className="translation-note">{t('translationNote')}</span>}
      </div>
    </footer>
  )
}
