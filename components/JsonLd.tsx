/** Structured data for search engines. The payload is built from typed site
    content, never from user input, and `<` is escaped so it cannot close the
    script element. */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
