import { profile } from '../data/profile.js'
import { useI18n } from '../i18n/index.jsx'

export default function ContactPage() {
  const { t } = useI18n()

  const channels = [
    { k: t('contact.email'), v: profile.email, href: `mailto:${profile.email}` },
    { k: t('contact.linkedin'), v: profile.linkedinLabel, href: profile.linkedin },
    { k: t('contact.github'), v: profile.githubLabel, href: profile.github },
  ]

  return (
    <section className="section">
      <div className="wrap">
        <p className="mono callout" data-reveal>
          <span className="n">§04</span>
          <span>{t('contact.label')}</span>
          <span className="line" aria-hidden="true"></span>
          <span>{t('contact.note')}</span>
        </p>
        <h1 data-reveal>{t('contact.title')}</h1>
        <div className="prose" data-reveal>
          <p>{t('contact.body')}</p>
        </div>

        <div className="contact-links" data-reveal>
          {channels.map((c) => (
            <a
              key={c.k}
              href={c.href}
              {...(c.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <span className="k">{c.k}</span>
              <span className="v">{c.v}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
