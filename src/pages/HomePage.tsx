import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useProgress } from '../state/ProgressContext'
import { HABITS } from '../content/habits'
import { ARTICLES, PROTOCOLS, getProtocol } from '../content/index'
import { Checklist, ChecklistItem } from '../components/Checklist'
import { ProgressRing } from '../components/ProgressRing'
import { ArticleCard } from '../components/ArticleCard'
import { StatTile } from '../components/StatTile'
import { pick } from '../lib/i18nContent'
import { useLang } from '../lib/useLang'
import { computeStreaks } from '../lib/streaks'
import { today } from '../lib/dates'

export function HomePage() {
  const { t } = useTranslation()
  const lang = useLang()
  const { state, toggleHabit, isHabitDone } = useProgress()

  const doneToday = state.habitLog[today()]?.length ?? 0
  const streak = computeStreaks(Object.keys(state.habitLog))

  const activeSlug = Object.keys(state.activeProtocols)[0]
  const activeProtocol = activeSlug ? getProtocol(activeSlug) : undefined
  const activeSteps = activeSlug ? state.activeProtocols[activeSlug].completedSteps.length : 0
  const totalSteps = activeProtocol
    ? activeProtocol.days.reduce((sum, d) => sum + d.steps.length, 0)
    : 0

  const featured = ARTICLES.slice(0, 3)

  return (
    <div className="page container">
      <section className="hero">
        <h1>
          {t('home.greeting')}. {t('app.tagline')}.
        </h1>
        <p>{t('home.subtitle')}</p>
        <div className="hero__actions">
          <Link to="/protokolai" className="btn btn--primary">
            {t('home.chooseProtocol')}
          </Link>
          <Link to="/zinynas" className="btn">
            {t('home.allArticles')}
          </Link>
        </div>
      </section>

      <div className="stats">
        <StatTile value={streak.current} label={t('home.streak')} hint={t('home.streakDays')} />
        <StatTile
          value={`${doneToday}/${HABITS.length}`}
          label={t('home.todayTitle')}
          hint={t('home.todaySubtitle')}
        />
        <StatTile value={ARTICLES.length} label={t('nav.library')} />
        <StatTile value={PROTOCOLS.length} label={t('nav.protocols')} />
      </div>

      <section className="section">
        <div className="section__head">
          <h2>{t('home.todayTitle')}</h2>
          <span className="faint">{t('home.todayDone', { done: doneToday, total: HABITS.length })}</span>
        </div>
        <div className="card">
          <Checklist>
            {HABITS.map((habit) => (
              <ChecklistItem
                key={habit.id}
                id={habit.id}
                icon={habit.icon}
                label={pick(habit.title, lang)}
                note={pick(habit.hint, lang)}
                checked={isHabitDone(habit.id)}
                onToggle={() => toggleHabit(habit.id)}
              />
            ))}
          </Checklist>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>{t('home.activeProtocol')}</h2>
          <Link to="/protokolai" className="small">
            {t('nav.protocols')} →
          </Link>
        </div>
        {activeProtocol ? (
          <Link
            to={`/protokolai/${activeProtocol.slug}`}
            className="card card--link protocolcard"
            data-domain={activeProtocol.domains[0]}
          >
            <div className="protocolcard__head">
              <ProgressRing value={activeSteps} total={totalSteps} />
              <div>
                <h3>{pick(activeProtocol.title, lang)}</h3>
                <p className="muted small" style={{ margin: 0 }}>
                  {t('protocols.progressLabel', { done: activeSteps, total: totalSteps })}
                </p>
              </div>
            </div>
          </Link>
        ) : (
          <div className="empty">
            <p>{t('home.noActiveProtocol')}</p>
            <Link to="/protokolai" className="btn btn--primary">
              {t('home.chooseProtocol')}
            </Link>
          </div>
        )}
      </section>

      <section className="section">
        <div className="section__head">
          <h2>{t('home.exploreTitle')}</h2>
          <Link to="/zinynas" className="small">
            {t('home.allArticles')} →
          </Link>
        </div>
        <div className="grid">
          {featured.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  )
}
