import { useTranslation } from 'react-i18next'
import type { Localized } from '../types/content'
import { pick } from '../lib/i18nContent'
import { useLang } from '../lib/useLang'

export interface FilterGroupProps<T extends string> {
  legend: string
  options: { id: T; label: Localized }[]
  value: T | 'all'
  onChange: (next: T | 'all') => void
}

export function FilterGroup<T extends string>({
  legend,
  options,
  value,
  onChange,
}: FilterGroupProps<T>) {
  const { t } = useTranslation()
  const lang = useLang()

  return (
    <fieldset className="filtergroup">
      <legend className="filtergroup__legend">{legend}</legend>
      <div className="filtergroup__chips">
        <button
          type="button"
          className={`chip chip--button${value === 'all' ? ' chip--active' : ''}`}
          aria-pressed={value === 'all'}
          onClick={() => onChange('all')}
        >
          {t('common.all')}
        </button>
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`chip chip--button${value === option.id ? ' chip--active' : ''}`}
            aria-pressed={value === option.id}
            onClick={() => onChange(option.id)}
          >
            {pick(option.label, lang)}
          </button>
        ))}
      </div>
    </fieldset>
  )
}
