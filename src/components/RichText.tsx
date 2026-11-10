// Texte simple dont les adresses e-mail deviennent des liens mailto cliquables.
// Le groupe capturant fait apparaître les adresses aux indices impairs du split.
const EMAIL_RE = /([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/

type RichTextProps = {
  text: string
  linkClassName?: string
}

export default function RichText({ text, linkClassName = 'text-link' }: RichTextProps) {
  const parts = text.split(EMAIL_RE)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <a key={i} href={`mailto:${part}`} className={linkClassName}>{part}</a>
        ) : (
          part
        ),
      )}
    </>
  )
}
