import http from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { resolve, extname, sep } from 'node:path'
const root = resolve(process.env.STATIC_ROOT || 'out')
const port = Number(process.env.PORT || 4173)
const types = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.wasm': 'application/wasm',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain',
}
http
  .createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(
        new URL(req.url, 'http://localhost').pathname,
      )
      const target = resolve(root, '.' + pathname)
      if (target !== root && !target.startsWith(root + sep)) {
        res.writeHead(403)
        res.end()
        return
      }
      const candidates =
        pathname === '/'
          ? [resolve(root, 'index.html')]
          : [target, target + '.html', resolve(target, 'index.html')]
      for (const file of candidates) {
        if (!(await stat(file).catch(() => null))?.isFile()) continue
        res.writeHead(200, {
          'Content-Type': types[extname(file)] || 'application/octet-stream',
        })
        res.end(await readFile(file))
        return
      }
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.end(await readFile(resolve(root, '404.html')))
    } catch {
      res.writeHead(500)
      res.end('Static server error')
    }
  })
  .listen(port, '127.0.0.1', () =>
    console.log(`Static preview: http://127.0.0.1:${port}`),
  )
