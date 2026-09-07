import { useTranslation } from 'react-i18next'

export function SearchBox({
  value,
  onChange,
}: {
  value: string
  onChange: (next: string) => void
}) {
  const { t } = useTranslation()
  return (
    <div className="searchbox">
      <span className="searchbox__icon" aria-hidden="true">
        ⌕
      </span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('library.searchPlaceholder')}
        aria-label={t('common.search')}
      />
      {value && (
        <button type="button" className="searchbox__clear" onClick={() => onChange('')}>
          {t('common.clear')}
        </button>
      )}
    </div>
  )
}
