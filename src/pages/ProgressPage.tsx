import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useProgress } from '../state/ProgressContext'
import { HABITS } from '../content/habits'
import { PROTOCOLS } from '../content/index'
import { Checklist, ChecklistItem } from '../components/Checklist'
import { StreakGrid } from '../components/StreakGrid'
import { StatTile } from '../components/StatTile'
import { ProgressRing } from '../components/ProgressRing'
import { computeStreaks } from '../lib/streaks'
import { formatDate, today } from '../lib/dates'
import { pick } from '../lib/i18nContent'
import { useLang } from '../lib/useLang'

export function ProgressPage() {
  const { t } = useTranslation()
  const lang = useLang()
  const { state, toggleHabit, isHabitDone, setJournal } = useProgress()

  const day = today()
  const [draft, setDraft] = useState(state.journal[day] ?? '')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setDraft(state.journal[day] ?? '')
  }, [state.journal, day])

  const streak = computeStreaks(Object.keys(state.habitLog))
  const doneToday = state.habitLog[day]?.length ?? 0
  const pastEntries = Object.entries(state.journal)
    .filter(([date]) => date !== day)
    .sort(([a], [b]) => b.localeCompare(a))
    .slice(0, 10)

  const startedProtocols = PROTOCOLS.filter((p) => state.activeProtocols[p.slug])

  return (
    <div className="page container">
      <div className="page__head">
        <h1>{t('progress.title')}</h1>
        <p className="muted">{t('progress.subtitle')}</p>
      </div>

      <div className="stats">
        <StatTile value={streak.current} label={t('progress.currentStreak')} hint={t('home.streakDays')} />
        <StatTile value={streak.longest} label={t('progress.longestStreak')} hint={t('home.streakDays')} />
        <StatTile value={streak.totalDays} label={t('progress.totalDays')} />
        <StatTile value={`${doneToday}/${HABITS.length}`} label={t('progress.habitsToday')} />
      </div>

      <section className="section">
        <div className="section__head">
          <h2>{t('progress.last30')}</h2>
        </div>
        <div className="card">
          {streak.totalDays === 0 ? (
            <p className="muted small" style={{ margin: 0 }}>
              {t('progress.noActivity')}
            </p>
          ) : (
            <StreakGrid habitLog={state.habitLog} totalHabits={HABITS.length} />
          )}
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>{t('progress.habits')}</h2>
          <span className="faint">{formatDate(day, lang)}</span>
        </div>
        <div className="card">
          <Checklist>
            {HABITS.map((habit) => (
              <ChecklistItem
                key={habit.id}
                id={`p-${habit.id}`}
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

      {startedProtocols.length > 0 && (
        <section className="section">
          <div className="section__head">
            <h2>{t('progress.protocolsSection')}</h2>
          </div>
          <div className="grid">
            {startedProtocols.map((protocol) => {
              const total = protocol.days.reduce((sum, d) => sum + d.steps.length, 0)
              const done = state.activeProtocols[protocol.slug].completedSteps.length
              return (
                <Link
                  key={protocol.slug}
                  to={`/protokolai/${protocol.slug}`}
                  className="card card--link protocolcard"
                  data-domain={protocol.domains[0]}
                >
                  <div className="protocolcard__head">
                    <ProgressRing value={done} total={total} size={46} />
                    <div>
                      <h3 style={{ fontSize: '1rem' }}>{pick(protocol.title, lang)}</h3>
                      <p className="faint" style={{ margin: 0 }}>
                        {t('protocols.progressLabel', { done, total })}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      <section className="section">
        <div className="section__head">
          <h2>{t('progress.journal')}</h2>
          {saved && <span className="faint">{t('progress.journalSaved')}</span>}
        </div>
        <div className="card">
          <textarea
            value={draft}
            onChange={(e) => {
              setDraft(e.target.value)
              setSaved(false)
            }}
            placeholder={t('progress.journalPlaceholder')}
            aria-label={t('progress.journal')}
          />
          <div style={{ marginTop: 12 }}>
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => {
                setJournal(draft)
                setSaved(true)
              }}
            >
              {t('common.save')}
            </button>
          </div>
        </div>

        {pastEntries.length > 0 && (
          <div className="card" style={{ marginTop: 16 }}>
            <h3 style={{ fontSize: '0.95rem' }}>{t('progress.journalEntries')}</h3>
            {pastEntries.map(([date, text]) => (
              <div key={date} className="journal__entry">
                <span className="journal__date">{formatDate(date, lang)}</span>
                <p className="journal__text">{text}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
