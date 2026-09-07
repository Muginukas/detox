import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ARTICLES, PROTOCOLS } from '../content/index'
import { DOMAINS, EVIDENCE_LEVELS, TOXINS } from '../content/taxonomy'
import type { Domain, EvidenceLevel, Toxin } from '../types/content'
import { ArticleCard } from '../components/ArticleCard'
import { FilterGroup } from '../components/FilterBar'
import { SearchBox } from '../components/SearchBox'
import { buildIndex, search } from '../lib/search'
import { useLang } from '../lib/useLang'
import { Link } from 'react-router-dom'
import { pick } from '../lib/i18nContent'

export function LibraryPage() {
  const { t } = useTranslation()
  const lang = useLang()

  const [query, setQuery] = useState('')
  const [domain, setDomain] = useState<Domain | 'all'>('all')
  const [toxin, setToxin] = useState<Toxin | 'all'>('all')
  const [evidence, setEvidence] = useState<EvidenceLevel | 'all'>('all')

  const index = useMemo(() => buildIndex(ARTICLES, PROTOCOLS, lang), [lang])
  const hits = useMemo(() => search(index, query), [index, query])

  const filtered = useMemo(() => {
    const searching = query.trim().length >= 2
    const allowed = searching
      ? new Set(hits.filter((h) => h.kind === 'article').map((h) => h.slug))
      : null

    return ARTICLES.filter((a) => {
      if (allowed && !allowed.has(a.slug)) return false
      if (domain !== 'all' && !a.domains.includes(domain)) return false
      if (toxin !== 'all' && a.toxin !== toxin) return false
      if (evidence !== 'all' && a.evidence !== evidence) return false
      return true
    })
  }, [query, hits, domain, toxin, evidence])

  const protocolHits = useMemo(
    () => hits.filter((h) => h.kind === 'protocol'),
    [hits],
  )

  const hasFilters = domain !== 'all' || toxin !== 'all' || evidence !== 'all' || query !== ''

  return (
    <div className="page container">
      <div className="page__head">
        <h1>{t('library.title')}</h1>
        <p className="muted">{t('library.subtitle')}</p>
      </div>

      <SearchBox value={query} onChange={setQuery} />

      <div className="filters">
        <FilterGroup legend={t('library.domain')} options={DOMAINS} value={domain} onChange={setDomain} />
        <FilterGroup legend={t('library.toxin')} options={TOXINS} value={toxin} onChange={setToxin} />
        <FilterGroup
          legend={t('library.evidenceFilter')}
          options={EVIDENCE_LEVELS}
          value={evidence}
          onChange={setEvidence}
        />
      </div>

      <div className="results-bar">
        <span className="muted small">{t('library.results', { count: filtered.length })}</span>
        {hasFilters && (
          <button
            type="button"
            className="btn btn--ghost btn--sm"
            onClick={() => {
              setQuery('')
              setDomain('all')
              setToxin('all')
              setEvidence('all')
            }}
          >
            {t('library.resetFilters')}
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="grid">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="empty">{t('library.noResults')}</div>
      )}

      {protocolHits.length > 0 && (
        <section className="section">
          <div className="section__head">
            <h2>{t('nav.protocols')}</h2>
          </div>
          <div className="grid">
            {protocolHits.map((hit) => {
              const protocol = PROTOCOLS.find((p) => p.slug === hit.slug)
              if (!protocol) return null
              return (
                <Link
                  key={hit.slug}
                  to={`/protokolai/${hit.slug}`}
                  className="card card--link articlecard"
                  data-domain={protocol.domains[0]}
                >
                  <span className="chip chip--topic">{t('common.protocol')}</span>
                  <h3 className="articlecard__title">{pick(protocol.title, lang)}</h3>
                  <p className="muted small articlecard__summary">{pick(protocol.summary, lang)}</p>
                </Link>
              )
            })}
          </div>
        </section>
      )}
    </div>
  )
}
