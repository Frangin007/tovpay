import DocumentLayout from '../components/DocumentLayout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useT } from '../i18n/language'
import { fr, en } from '../i18n/dictionaries/legal'

export default function LegalNotice() {
  const t = useT(fr, en)
  useDocumentMeta(t.meta.title, t.meta.description)
  return <DocumentLayout hero={t.hero} sections={t.sections} notice={t.notice} />
}
