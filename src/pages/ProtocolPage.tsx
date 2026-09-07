import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getArticle, getProtocol } from '../content/index'
import { pick } from '../lib/i18nContent'
import { useLang } from '../lib/useLang'
import { useProgress } from '../state/ProgressContext'
import { Checklist, ChecklistItem } from '../components/Checklist'
import { ProgressRing } from '../components/ProgressRing'
import { EvidenceBadge } from '../components/EvidenceBadge'
import { SafetyNote } from '../components/SafetyNote'
import { ArticleCard } from '../components/ArticleCard'
import { daysBetween, formatDate, today } from '../lib/dates'

export function ProtocolPage() {
  const { slug = '' } = useParams()
  const { t } = useTranslation()
  const lang = useLang()
  const { state, startProtocol, restartProtocol, toggleStep, isStepDone } = useProgress()
  const protocol = getProtocol(slug)
  const active = state.activeProtocols[slug]
  const [openDay, setOpenDay] = useState<number | null>(null)

  if (!protocol) {
    return (
      <div className="page container">
        <div className="empty">
          <p>{t('protocol.notFound')}</p>
          <Link to="/protokolai" className="btn">
            {t('protocol.backToProtocols')}
          </Link>
        </div>
      </div>
    )
  }

  const totalSteps = protocol.days.reduce((sum, d) => sum + d.steps.length, 0)
  const doneSteps = active?.completedSteps.length ?? 0
  const currentDay = active ? daysBetween(active.startedAt, today()) + 1 : null
  const activeDay =
    currentDay !== null ? Math.min(Math.max(currentDay, 1), protocol.duration) : 1
  const expanded = openDay ?? activeDay

  const related = (protocol.related ?? [])
    .map((s) => getArticle(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))

  return (
    <div className="page container" data-domain={protocol.domains[0]}>
      <Link to="/protokolai" className="backlink">
        ← {t('protocol.backToProtocols')}
      </Link>

      <header className="article__head">
        <div className="article__meta">
          <EvidenceBadge level={protocol.evidence} withHint />
          <span className="faint">
            {t('protocols.duration')}: {t('common.days', { count: protocol.duration })}
          </span>
        </div>
        <h1>{pick(protocol.title, lang)}</h1>
        <p className="article__lede">{pick(protocol.intro, lang)}</p>
      </header>

      {protocol.safety && <SafetyNote text={pick(protocol.safety, lang)} />}

      <div className="card protocolcard__head" style={{ marginBottom: 24 }}>
        <ProgressRing value={doneSteps} total={totalSteps} />
        <div style={{ flex: 1 }}>
          <strong>{t('protocols.progressLabel', { done: doneSteps, total: totalSteps })}</strong>
          <p className="faint" style={{ margin: '2px 0 0' }}>
            {active
              ? currentDay !== null && currentDay > protocol.duration
                ? t('protocol.beyondEnd')
                : `${t('protocol.todayIs', { n: activeDay })} · ${t('protocols.startedOn', {
                    date: formatDate(active.startedAt, lang),
                  })}`
              : t('home.noActiveProtocol')}
          </p>
        </div>
        {active ? (
          <button
            type="button"
            className="btn btn--sm"
            onClick={() => {
              if (window.confirm(t('protocol.restartConfirm'))) restartProtocol(slug)
            }}
          >
            {t('common.restart')}
          </button>
        ) : (
          <button type="button" className="btn btn--primary" onClick={() => startProtocol(slug)}>
            {t('protocol.startProtocol')}
          </button>
        )}
      </div>

      {protocol.days.map((day) => {
        const dayDone = day.steps.filter((s) => isStepDone(slug, s.id)).length
        const isOpen = expanded === day.day
        return (
          <section
            key={day.day}
            className={`day${isOpen ? ' day--open' : ''}${
              dayDone === day.steps.length ? ' day--complete' : ''
            }${active && day.day === activeDay ? ' day--today' : ''}`}
          >
            <button
              type="button"
              className="day__head"
              aria-expanded={isOpen}
              onClick={() => setOpenDay(isOpen ? -1 : day.day)}
            >
              <span className="day__n">{day.day}</span>
              <span className="day__titles">
                <span className="day__title">{pick(day.title, lang)}</span>
                <span className="day__focus">{pick(day.focus, lang)}</span>
              </span>
              <span className="day__count">
                {dayDone}/{day.steps.length}
              </span>
            </button>
            {isOpen && (
              <div className="day__body">
                <Checklist>
                  {day.steps.map((step) => (
                    <ChecklistItem
                      key={step.id}
                      id={`${slug}-${step.id}`}
                      label={pick(step.text, lang)}
                      note={step.note ? pick(step.note, lang) : undefined}
                      checked={isStepDone(slug, step.id)}
                      onToggle={() => toggleStep(slug, step.id)}
                    />
                  ))}
                </Checklist>
              </div>
            )}
          </section>
        )
      })}

      {related.length > 0 && (
        <section className="section">
          <div className="section__head">
            <h2>{t('protocol.relatedArticles')}</h2>
          </div>
          <div className="grid">
            {related.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
