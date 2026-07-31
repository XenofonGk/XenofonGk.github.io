import { profile } from '../data/profile.js'

const channels = [
  { k: 'Email', v: profile.email, href: `mailto:${profile.email}` },
  { k: 'LinkedIn', v: 'linkedin.com/in/xenofongkioka', href: profile.linkedin },
  { k: 'GitHub', v: 'github.com/XenofonGk', href: profile.github },
]

export default function ContactPage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="mono callout">
          <span className="n">§04</span>
          <span>Contact</span>
          <span className="line" aria-hidden="true"></span>
          <span>Sign-off</span>
        </p>
        <h2>Building something in Copenhagen or Toronto?</h2>
        <div className="prose">
          <p>
            I&rsquo;m open to graduate and junior engineering roles, and happy to talk about
            front-end work, .NET, or anything close to the metal.
          </p>
        </div>

        <div className="contact-links">
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
