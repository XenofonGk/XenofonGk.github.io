import { useI18n } from '../i18n/index.jsx'

const LINKS = {
  github: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
  cloudflare: 'https://www.cloudflare.com/privacypolicy/',
}

export default function PrivacyPage() {
  const { t } = useI18n()
  const sections = t('privacy.sections')

  return (
    <section className="section page-head legal">
      <div className="wrap">
        <p className="page-kicker mono">{t('privacy.updated')}</p>
        <h1 className="stencil">{t('privacy.title')}</h1>
        <p className="lede">{t('privacy.short')}</p>
        <div className="legal-body">
          {sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              <p>{s.p}</p>
            </section>
          ))}
          <p className="fine">
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub privacy statement</a>
            {' · '}
            <a href={LINKS.cloudflare} target="_blank" rel="noopener noreferrer">Cloudflare privacy policy</a>
          </p>
        </div>
      </div>
    </section>
  )
}
