import { Link } from 'react-router'
import { useI18n } from '../i18n/index.jsx'
import HeroGrid from '../components/HeroGrid.jsx'

export default function Home() {
  const { t } = useI18n()
  const dims = t('home.dims')
  const tags = t('home.tags')

  return (
    <>
      <section className="hero">
        <HeroGrid />
        <div className="wrap hero-inner">
          <p className="mono callout" data-reveal>
            <span className="n">§00</span>
            <span>{t('home.eyebrow')}</span>
            <span className="line" aria-hidden="true"></span>
            <span>{t('home.revision')}</span>
          </p>
          {/* No space between the two halves — the separator lives in
              headlineStart so that scripts which do not space words (Chinese)
              can omit it. */}
          <h1 className="display" data-reveal>
            {t('home.headlineStart')}<em>{t('home.headlineAccent')}</em>
          </h1>
          <p className="lede" data-reveal>{t('home.lede')}</p>
          <div className="hero-meta mono" data-reveal>
            {tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="cta-row" data-reveal>
            <Link className="btn solid" to="/projects">{t('home.ctaWork')}</Link>
            <Link className="btn" to="/about">{t('home.ctaAbout')}</Link>
            <Link className="btn" to="/contact">{t('home.ctaContact')}</Link>
          </div>

          <div className="dims" data-reveal>
            {dims.map((d) => (
              <div className="d" key={d.lbl}>
                <span className="num">{d.num}</span>
                <span className="lbl">{d.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="mono callout" data-reveal>
            <span className="n">§01</span>
            <span>{t('home.featuredLabel')}</span>
            <span className="line" aria-hidden="true"></span>
            <span>{t('home.featuredNote')}</span>
          </p>
          <h2 data-reveal>{t('home.featuredTitle')}</h2>
          <div className="prose" data-reveal>
            <p>{t('home.featuredBody')}</p>
          </div>
          <div className="cta-row" data-reveal style={{ marginTop: '24px' }}>
            <Link className="btn solid" to="/projects/train-yard-manager">
              {t('home.featuredCta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
