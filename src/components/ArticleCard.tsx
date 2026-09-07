import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { Article } from '../types/content'
import { pick } from '../lib/i18nContent'
import { useLang } from '../lib/useLang'
import { domainLabel, toxinLabel } from '../content/taxonomy'
import { EvidenceBadge } from './EvidenceBadge'

export function ArticleCard({ article }: { article: Article }) {
  const { t } = useTranslation()
  const lang = useLang()

  return (
    <Link
      to={`/zinynas/${article.slug}`}
      className="card card--link articlecard"
      data-domain={article.domains[0]}
    >
      <div className="articlecard__top">
        <span className="chip chip--topic">{pick(toxinLabel(article.toxin), lang)}</span>
        <EvidenceBadge level={article.evidence} />
      </div>
      <h3 className="articlecard__title">{pick(article.title, lang)}</h3>
      <p className="muted small articlecard__summary">{pick(article.summary, lang)}</p>
      <div className="articlecard__foot faint">
        <span>{article.domains.map((d) => pick(domainLabel(d), lang)).join(' · ')}</span>
        <span>{t('common.minutes', { count: article.readingMinutes })}</span>
      </div>
    </Link>
  )
}
