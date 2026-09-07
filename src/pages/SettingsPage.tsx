import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '../components/LanguageSwitcher'
import { Disclaimer } from '../components/Disclaimer'
import { normalizeState, useProgress } from '../state/ProgressContext'
import type { Theme } from '../state/ProgressContext'
import { today } from '../lib/dates'

const THEMES: Theme[] = ['system', 'light', 'dark']

export function SettingsPage() {
  const { t } = useTranslation()
  const { state, storageAvailable, setTheme, replaceState, resetAll } = useProgress()
  const fileInput = useRef<HTMLInputElement>(null)
  const [notice, setNotice] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null)

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `detox-${today()}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = async (file: File) => {
    try {
      const parsed: unknown = JSON.parse(await file.text())
      const next = normalizeState(parsed)
      if (!next) throw new Error('invalid')
      replaceState(next)
      setNotice({ kind: 'ok', text: t('settings.importSuccess') })
    } catch {
      setNotice({ kind: 'err', text: t('settings.importError') })
    }
  }

  return (
    <div className="page container">
      <div className="page__head">
        <h1>{t('settings.title')}</h1>
      </div>

      {!storageAvailable && (
        <div className="notice notice--err" style={{ marginBottom: 20 }}>
          {t('settings.storageUnavailable')}
        </div>
      )}

      <div className="card">
        <div className="setting">
          <span className="setting__title">{t('settings.language')}</span>
          <LanguageSwitcher full />
        </div>

        <div className="setting">
          <span className="setting__title">{t('settings.theme')}</span>
          <div className="setting__row">
            {THEMES.map((theme) => (
              <button
                key={theme}
                type="button"
                className={`chip chip--button${state.settings.theme === theme ? ' chip--active' : ''}`}
                aria-pressed={state.settings.theme === theme}
                onClick={() => setTheme(theme)}
              >
                {t(
                  theme === 'light'
                    ? 'settings.themeLight'
                    : theme === 'dark'
                      ? 'settings.themeDark'
                      : 'settings.themeSystem',
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="setting">
          <span className="setting__title">{t('settings.data')}</span>
          <p className="muted small" style={{ margin: 0 }}>
            {t('settings.dataHint')}
          </p>
          <div className="setting__row">
            <button type="button" className="btn" onClick={handleExport}>
              {t('settings.export')}
            </button>
            <button type="button" className="btn" onClick={() => fileInput.current?.click()}>
              {t('settings.import')}
            </button>
            <button
              type="button"
              className="btn btn--danger"
              onClick={() => {
                if (window.confirm(t('settings.resetConfirm'))) {
                  resetAll()
                  setNotice({ kind: 'ok', text: t('settings.resetDone') })
                }
              }}
            >
              {t('settings.reset')}
            </button>
          </div>
          <input
            ref={fileInput}
            type="file"
            accept="application/json,.json"
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) void handleImport(file)
              e.target.value = ''
            }}
          />
          {notice && <div className={`notice notice--${notice.kind}`}>{notice.text}</div>}
        </div>

        <div className="setting">
          <span className="setting__title">{t('settings.about')}</span>
          <p className="muted small" style={{ margin: 0 }}>
            {t('settings.aboutText')}
          </p>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <Disclaimer />
      </div>
    </div>
  )
}
