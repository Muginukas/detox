import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PROTOCOLS } from '../content/index'
import { pick } from '../lib/i18nContent'
import { useLang } from '../lib/useLang'
import { useProgress } from '../state/ProgressContext'
import { ProgressRing } from '../components/ProgressRing'
import { EvidenceBadge } from '../components/EvidenceBadge'
import { toxinLabel } from '../content/taxonomy'

export function ProtocolsPage() {
  const { t } = useTranslation()
  const lang = useLang()
  const { state } = useProgress()

  return (
    <div className="page container">
      <div className="page__head">
        <h1>{t('protocols.title')}</h1>
        <p className="muted">{t('protocols.subtitle')}</p>
      </div>

      <div className="grid">
        {PROTOCOLS.map((protocol) => {
          const totalSteps = protocol.days.reduce((sum, d) => sum + d.steps.length, 0)
          const active = state.activeProtocols[protocol.slug]
          const done = active?.completedSteps.length ?? 0
          const status = !active
            ? t('protocols.notStarted')
            : done >= totalSteps
              ? t('protocols.completed')
              : t('protocols.inProgress')

          return (
            <Link
              key={protocol.slug}
              to={`/protokolai/${protocol.slug}`}
              className="card card--link articlecard"
              data-domain={protocol.domains[0]}
            >
              <div className="articlecard__top">
                <span className="chip chip--topic">{pick(toxinLabel(protocol.toxin), lang)}</span>
                <EvidenceBadge level={protocol.evidence} />
              </div>
              <div className="protocolcard__head">
                {active && <ProgressRing value={done} total={totalSteps} size={46} />}
                <h3 className="articlecard__title">{pick(protocol.title, lang)}</h3>
              </div>
              <p className="muted small articlecard__summary">{pick(protocol.summary, lang)}</p>
              <div className="articlecard__foot faint">
                <span>{t('common.days', { count: protocol.duration })}</span>
                <span>{status}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
