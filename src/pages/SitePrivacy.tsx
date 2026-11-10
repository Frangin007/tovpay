import DocumentLayout from '../components/DocumentLayout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useT } from '../i18n/language'
import { fr, en } from '../i18n/dictionaries/privacy'

export default function SitePrivacy() {
  const t = useT(fr, en)
  useDocumentMeta(t.meta.title, t.meta.description)
  return (
    <DocumentLayout
      hero={t.hero}
      sections={t.sections}
      notice={t.notice}
      before={<p className="text-g600 text-[15px] leading-relaxed mb-10">{t.intro}</p>}
      after={<p className="mt-12 pt-6 border-t border-g100 text-g600 text-sm">{t.updated}</p>}
    />
  )
}
