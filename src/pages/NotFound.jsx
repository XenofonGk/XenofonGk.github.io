import { Link } from 'react-router'
import { useI18n } from '../i18n/index.jsx'

export default function NotFound() {
  const { t } = useI18n()

  return (
    <section className="section">
      <div className="wrap">
        <p className="mono callout">
          <span className="n">404</span>
          <span>{t('notFound.label')}</span>
          <span className="line" aria-hidden="true"></span>
        </p>
        <h1 className="display">{t('notFound.title')}</h1>
        <p className="lede" style={{ marginTop: '20px' }}>{t('notFound.body')}</p>
        <div className="cta-row" style={{ marginTop: '28px' }}>
          <Link className="btn solid" to="/">{t('notFound.home')}</Link>
          <Link className="btn" to="/projects">{t('notFound.projects')}</Link>
        </div>
      </div>
    </section>
  )
}
