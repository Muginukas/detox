import type { Article, Protocol } from '../types/content'
import { DOMAIN_IDS, EVIDENCE_IDS, TOXIN_IDS } from './taxonomy'
import { LANGS } from '../types/content'

const articleModules = import.meta.glob<{ article: Article }>('./articles/*.ts', { eager: true })
const protocolModules = import.meta.glob<{ protocol: Protocol }>('./protocols/*.ts', { eager: true })

function byTitle(a: { title: { lt: string } }, b: { title: { lt: string } }) {
  return a.title.lt.localeCompare(b.title.lt, 'lt')
}

export const ARTICLES: Article[] = Object.values(articleModules)
  .map((m) => m.article)
  .sort(byTitle)

export const PROTOCOLS: Protocol[] = Object.values(protocolModules)
  .map((m) => m.protocol)
  .sort((a, b) => a.duration - b.duration || byTitle(a, b))

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

export function getProtocol(slug: string): Protocol | undefined {
  return PROTOCOLS.find((p) => p.slug === slug)
}

/** Susiję straipsniai: ta pati tema, tada ta pati sritis. */
export function relatedArticles(article: Article, limit = 3): Article[] {
  const others = ARTICLES.filter((a) => a.slug !== article.slug)
  const sameToxin = others.filter((a) => a.toxin === article.toxin)
  const sameDomain = others.filter(
    (a) => a.toxin !== article.toxin && a.domains.some((d) => article.domains.includes(d)),
  )
  return [...sameToxin, ...sameDomain].slice(0, limit)
}

/**
 * Turinio validacija. Klaidos rodomos tik kūrimo metu — produkcijoje
 * neapkraunama, o trūkstamas vertimas vis tiek turi atsarginį variantą.
 */
export interface ContentIssue {
  where: string
  problem: string
}

export function validateContent(): ContentIssue[] {
  const issues: ContentIssue[] = []
  const seen = new Set<string>()

  const checkLocalized = (where: string, field: string, value: Record<string, string> | undefined) => {
    if (!value) return
    for (const lang of LANGS) {
      if (!value[lang]?.trim()) issues.push({ where, problem: `${field}: trūksta "${lang}" vertimo` })
    }
  }

  for (const a of ARTICLES) {
    const where = `article:${a.slug}`
    if (seen.has(where)) issues.push({ where, problem: 'pasikartojantis slug' })
    seen.add(where)
    if (!TOXIN_IDS.includes(a.toxin)) issues.push({ where, problem: `nežinoma tema "${a.toxin}"` })
    if (!EVIDENCE_IDS.includes(a.evidence)) issues.push({ where, problem: `nežinomas įrodymų lygis "${a.evidence}"` })
    if (a.domains.length === 0) issues.push({ where, problem: 'nenurodyta nė viena sritis' })
    for (const d of a.domains) {
      if (!DOMAIN_IDS.includes(d)) issues.push({ where, problem: `nežinoma sritis "${d}"` })
    }
    checkLocalized(where, 'title', a.title)
    checkLocalized(where, 'summary', a.summary)
    checkLocalized(where, 'body', a.body)
    checkLocalized(where, 'safety', a.safety)
  }

  for (const p of PROTOCOLS) {
    const where = `protocol:${p.slug}`
    if (seen.has(where)) issues.push({ where, problem: 'pasikartojantis slug' })
    seen.add(where)
    checkLocalized(where, 'title', p.title)
    checkLocalized(where, 'summary', p.summary)
    checkLocalized(where, 'intro', p.intro)
    checkLocalized(where, 'safety', p.safety)
    if (p.days.length === 0) issues.push({ where, problem: 'protokolas be dienų' })
    const stepIds = new Set<string>()
    for (const day of p.days) {
      checkLocalized(`${where}/d${day.day}`, 'title', day.title)
      checkLocalized(`${where}/d${day.day}`, 'focus', day.focus)
      for (const step of day.steps) {
        if (stepIds.has(step.id)) {
          issues.push({ where, problem: `pasikartojantis žingsnio id "${step.id}"` })
        }
        stepIds.add(step.id)
        checkLocalized(`${where}/${step.id}`, 'text', step.text)
        checkLocalized(`${where}/${step.id}`, 'note', step.note)
      }
    }
    for (const slug of p.related ?? []) {
      if (!getArticle(slug)) issues.push({ where, problem: `nurodytas neegzistuojantis straipsnis "${slug}"` })
    }
  }

  return issues
}
