import type { ReactNode } from 'react'
import PageHero from './PageHero'
import DocumentSections, { type DocSection } from './DocumentSections'

/** Textes d'une page de type document : forme commune des dictionnaires legal et privacy. */
export type DocumentPageTexts = {
  meta: { title: string; description: string }
  hero: { breadcrumb: string; title: string; desc: string }
  notice?: string
  sections: DocSection[]
}

type DocumentLayoutProps = Pick<DocumentPageTexts, 'hero' | 'sections' | 'notice'> & {
  before?: ReactNode
  after?: ReactNode
}

/** Mise en page des pages de type document (mentions légales, confidentialité du site). */
export default function DocumentLayout({ hero, sections, notice, before, after }: DocumentLayoutProps) {
  return (
    <>
      <PageHero breadcrumb={hero.breadcrumb} title={hero.title} desc={hero.desc} />
      <section className="py-16 sm:py-20 px-[5%] bg-white">
        <div className="max-w-[820px] mx-auto">
          {notice && (
            <p className="mb-8 rounded-lg border border-g200 bg-g50 px-5 py-3.5 text-g600 text-sm">{notice}</p>
          )}
          {before}
          <DocumentSections sections={sections} />
          {after}
        </div>
      </section>
    </>
  )
}
