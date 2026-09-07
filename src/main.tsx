import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './i18n'
import App from './App'
import { validateContent } from './content/index'

if (import.meta.env.DEV) {
  const issues = validateContent()
  if (issues.length > 0) {
    console.group(`[detox] turinio problemos: ${issues.length}`)
    for (const issue of issues) console.warn(`${issue.where} — ${issue.problem}`)
    console.groupEnd()
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
