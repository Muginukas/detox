import { useTranslation } from 'react-i18next'
import { formatDate, lastNDays } from '../lib/dates'
import { useLang } from '../lib/useLang'

/**
 * 30 dienų juosta: vieno atspalvio sekvencinė skalė, kur intensyvumas =
 * tą dieną atliktų įpročių dalis. Kiekvienas langelis turi tooltip'ą.
 */
export function StreakGrid({
  habitLog,
  totalHabits,
  days = 30,
}: {
  habitLog: Record<string, string[]>
  totalHabits: number
  days?: number
}) {
  const { t } = useTranslation()
  const lang = useLang()
  const dates = lastNDays(days)

  const level = (count: number): 0 | 1 | 2 | 3 | 4 => {
    if (count === 0) return 0
    const ratio = totalHabits > 0 ? count / totalHabits : 0
    if (ratio >= 0.8) return 4
    if (ratio >= 0.5) return 3
    if (ratio >= 0.25) return 2
    return 1
  }

  return (
    <div className="heat">
      <ol className="heat__grid">
        {dates.map((date) => {
          const count = habitLog[date]?.length ?? 0
          return (
            <li
              key={date}
              className="heat__cell"
              data-level={level(count)}
              title={`${formatDate(date, lang)} — ${count}/${totalHabits}`}
            >
              <span className="sr-only">
                {formatDate(date, lang)}: {count}/{totalHabits}
              </span>
            </li>
          )
        })}
      </ol>
      <div className="heat__legend faint">
        <span>{t('progress.last30')}</span>
        <span className="heat__scale">
          {[0, 1, 2, 3, 4].map((l) => (
            <span key={l} className="heat__cell heat__cell--legend" data-level={l} />
          ))}
        </span>
      </div>
    </div>
  )
}
