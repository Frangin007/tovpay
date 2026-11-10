import type { ReactNode } from 'react'
import RichText from './RichText'
import SmartLink from './SmartLink'
import { ExternalIcon } from './Icon'

// Blocs de contenu des pages de type document (mentions légales, confidentialité).
type DocLink = { label: string; href: string; external?: boolean }
type DocBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'rows'; rows: { label: string; value: string; href?: string; external?: boolean }[] }
  | { type: 'links'; links: DocLink[] }
export type DocSection = { title: string; blocks: DocBlock[] }

function DocAnchor({ href, external, children }: { href: string; external?: boolean; children: ReactNode }) {
  return (
    <SmartLink href={href} external={external} className="text-link">
      {children}
      {external && <ExternalIcon className="inline ml-1 align-[-2px]" />}
    </SmartLink>
  )
}

export default function DocumentSections({ sections }: { sections: DocSection[] }) {
  return (
    <div className="flex flex-col gap-10">
      {sections.map((section, si) => (
        <section key={si} aria-labelledby={`doc-section-${si}`}>
          <h2 id={`doc-section-${si}`} className="font-display font-bold text-navy text-xl sm:text-2xl mb-4">
            {section.title}
          </h2>
          <div className="flex flex-col gap-3 text-g600 text-[15px] leading-relaxed">
            {section.blocks.map((block, bi) => {
              switch (block.type) {
                case 'p':
                  return <p key={bi}><RichText text={block.text} /></p>
                case 'list':
                  return (
                    <ul key={bi} className="flex flex-col gap-2.5 pl-5 list-disc marker:text-teal">
                      {block.items.map((item, ii) => <li key={ii}><RichText text={item} /></li>)}
                    </ul>
                  )
                case 'rows':
                  return (
                    <dl key={bi} className="grid sm:grid-cols-[minmax(0,240px)_1fr] gap-x-6 gap-y-2 rounded-lg border border-g200 bg-g50 p-5">
                      {block.rows.map((row, ri) => (
                        <div key={ri} className="contents">
                          <dt className="font-semibold text-navy">{row.label}</dt>
                          <dd className="mb-2 sm:mb-0 break-words">
                            {row.href ? (
                              <DocAnchor href={row.href} external={row.external}>{row.value}</DocAnchor>
                            ) : (
                              row.value
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )
                case 'links':
                  return (
                    <ul key={bi} className="flex flex-col gap-2">
                      {block.links.map((l, li) => (
                        <li key={li}>
                          <DocAnchor href={l.href} external={l.external}>{l.label}</DocAnchor>
                        </li>
                      ))}
                    </ul>
                  )
              }
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
