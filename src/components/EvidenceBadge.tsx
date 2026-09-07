import { useTranslation } from 'react-i18next'
import type { EvidenceLevel } from '../types/content'

export function EvidenceBadge({
  level,
  withHint = false,
}: {
  level: EvidenceLevel
  withHint?: boolean
}) {
  const { t } = useTranslation()
  return (
    <span
      className={`badge badge--${level}`}
      title={withHint ? t(`evidence.${level}Hint`) : undefined}
    >
      <span className="dot" aria-hidden="true" />
      {t(`evidence.${level}`)}
    </span>
  )
}
