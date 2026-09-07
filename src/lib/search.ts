import Fuse from 'fuse.js'
import type { Article, Lang, Protocol } from '../types/content'
import { pick } from './i18nContent'
import { domainLabel, evidenceLabel, toxinLabel } from '../content/taxonomy'

export type ResultKind = 'article' | 'protocol'

export interface SearchDoc {
  kind: ResultKind
  slug: string
  title: string
  summary: string
  keywords: string
  body: string
}

function toDoc(item: Article | Protocol, kind: ResultKind, lang: Lang): SearchDoc {
  const keywords = [
    pick(toxinLabel(item.toxin), lang),
    ...item.domains.map((d) => pick(domainLabel(d), lang)),
    pick(evidenceLabel(item.evidence), lang),
  ].join(' ')

  const body =
    kind === 'article'
      ? pick((item as Article).body, lang)
      : (item as Protocol).days
          .flatMap((day) => [pick(day.title, lang), ...day.steps.map((s) => pick(s.text, lang))])
          .join(' ')

  return {
    kind,
    slug: item.slug,
    title: pick(item.title, lang),
    summary: pick(item.summary, lang),
    keywords,
    body,
  }
}

export function buildIndex(articles: Article[], protocols: Protocol[], lang: Lang) {
  const docs: SearchDoc[] = [
    ...articles.map((a) => toDoc(a, 'article', lang)),
    ...protocols.map((p) => toDoc(p, 'protocol', lang)),
  ]

  return new Fuse(docs, {
    includeScore: true,
    threshold: 0.38,
    ignoreLocation: true,
    minMatchCharLength: 2,
    keys: [
      { name: 'title', weight: 0.5 },
      { name: 'summary', weight: 0.25 },
      { name: 'keywords', weight: 0.15 },
      { name: 'body', weight: 0.1 },
    ],
  })
}

export function search(index: Fuse<SearchDoc>, query: string, limit = 20): SearchDoc[] {
  const trimmed = query.trim()
  if (trimmed.length < 2) return []
  return index.search(trimmed, { limit }).map((r) => r.item)
}
