/** As-built request path for the home server, drawn as a section through
    the stack. Facts come from the reviewed configuration (see content). */
export default function ServerDiagram() {
  return (
    <div className="server-diagram">
      <span className="eyebrow">Request path / Simplified</span>
      <ol aria-label="How requests reach the hosted applications">
        <li>
          Cloudflare <span aria-hidden="true">↓</span>
        </li>
        <li>
          Cloudflare Tunnel <span aria-hidden="true">↓</span>
        </li>
        <li>
          Caddy reverse proxy <span aria-hidden="true">↓</span>
        </li>
        <li>Docker services</li>
      </ol>
      <p>Encrypted nightly backups are copied offsite, with restores tested.</p>
    </div>
  )
}
