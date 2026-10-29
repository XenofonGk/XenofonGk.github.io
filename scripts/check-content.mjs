import { readFile, access } from 'node:fs/promises'
import Ajv from 'ajv'
const content = JSON.parse(await readFile('content/portfolio.json', 'utf8'))
const schema = JSON.parse(
  await readFile('content/portfolio.schema.json', 'utf8'),
)
const validate = new Ajv({ allErrors: true, validateFormats: false }).compile(
  schema,
)
if (!validate(content)) throw new Error(JSON.stringify(validate.errors))
for (const id of ['ai-eng', 'kykloc', 'az-clean']) {
  const p = content.projects.find((p) => p.id === id)
  if (!p?.caseStudy || !p.media.length || !p.evidence.length)
    throw new Error(
      `${id}: completed case study, real media and scoped evidence required before release`,
    )
  for (const key of ['constraints', 'decisions', 'limitations'])
    if (!p.caseStudy[key].length) throw new Error(`${id}: missing ${key}`)
  for (const m of p.media) await access('public' + m.src)
}
console.log(
  'Release content: three complete featured case studies with real media and scoped evidence.',
)
