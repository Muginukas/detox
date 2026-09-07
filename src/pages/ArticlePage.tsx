import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getArticle, relatedArticles } from '../content/index'
import { domainLabel, toxinLabel } from '../content/taxonomy'
import { pick } from '../lib/i18nContent'
import { useLang } from '../lib/useLang'
import { Markdown } from '../components/Markdown'
import { EvidenceBadge } from '../components/EvidenceBadge'
import { SafetyNote } from '../components/SafetyNote'
import { ArticleCard } from '../components/ArticleCard'

export function ArticlePage() {
  const { slug = '' } = useParams()
  const { t } = useTranslation()
  const lang = useLang()
  const article = getArticle(slug)

  if (!article) {
    return (
      <div className="page container">
        <div className="empty">
          <p>{t('article.notFound')}</p>
          <Link to="/zinynas" className="btn">
            {t('article.backToLibrary')}
          </Link>
        </div>
      </div>
    )
  }

  const related = relatedArticles(article)

  return (
    <article className="page container" data-domain={article.domains[0]}>
      <Link to="/zinynas" className="backlink">
        ← {t('article.backToLibrary')}
      </Link>

      <header className="article__head">
        <div className="article__meta">
          <span className="chip chip--topic">{pick(toxinLabel(article.toxin), lang)}</span>
          <EvidenceBadge level={article.evidence} withHint />
          <span className="faint">{t('common.minutes', { count: article.readingMinutes })}</span>
        </div>
        <h1>{pick(article.title, lang)}</h1>
        <p className="article__lede">{pick(article.summary, lang)}</p>
        <div className="tag-row">
          {article.domains.map((d) => (
            <span key={d} className="chip">
              {pick(domainLabel(d), lang)}
            </span>
          ))}
        </div>
      </header>

      {article.safety && <SafetyNote text={pick(article.safety, lang)} />}

      <Markdown>{pick(article.body, lang)}</Markdown>

      {article.sources && article.sources.length > 0 && (
        <section className="sources">
          <h2>{t('article.sources')}</h2>
          <ol>
            {article.sources.map((source) => (
              <li key={source.title}>
                {source.url ? (
                  <a href={source.url} target="_blank" rel="noreferrer noopener">
                    {source.title}
                  </a>
                ) : (
                  source.title
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      {related.length > 0 && (
        <section className="section">
          <div className="section__head">
            <h2>{t('article.related')}</h2>
          </div>
          <div className="grid">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
