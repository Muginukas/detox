import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { isAvailable, readJSON, remove, writeJSON } from '../lib/storage'
import { today } from '../lib/dates'

export const STORAGE_KEY = 'detox.progress.v1'
export const STATE_VERSION = 1

export type Theme = 'light' | 'dark' | 'system'

export interface ProtocolState {
  startedAt: string
  completedSteps: string[]
}

export interface ProgressState {
  version: number
  activeProtocols: Record<string, ProtocolState>
  /** ISO data -> tą dieną atliktų įpročių id. */
  habitLog: Record<string, string[]>
  journal: Record<string, string>
  settings: { theme: Theme }
}

export function emptyState(): ProgressState {
  return {
    version: STATE_VERSION,
    activeProtocols: {},
    habitLog: {},
    journal: {},
    settings: { theme: 'system' },
  }
}

/** Priima bet kokį JSON ir grąžina saugią būseną (naudojama ir importui). */
export function normalizeState(input: unknown): ProgressState | null {
  if (typeof input !== 'object' || input === null) return null
  const raw = input as Partial<ProgressState>
  if (typeof raw.version !== 'number') return null

  const base = emptyState()

  if (raw.activeProtocols && typeof raw.activeProtocols === 'object') {
    for (const [slug, value] of Object.entries(raw.activeProtocols)) {
      if (!value || typeof value !== 'object') continue
      const p = value as Partial<ProtocolState>
      base.activeProtocols[slug] = {
        startedAt: typeof p.startedAt === 'string' ? p.startedAt : today(),
        completedSteps: Array.isArray(p.completedSteps)
          ? p.completedSteps.filter((s): s is string => typeof s === 'string')
          : [],
      }
    }
  }

  if (raw.habitLog && typeof raw.habitLog === 'object') {
    for (const [date, ids] of Object.entries(raw.habitLog)) {
      if (Array.isArray(ids)) {
        base.habitLog[date] = ids.filter((id): id is string => typeof id === 'string')
      }
    }
  }

  if (raw.journal && typeof raw.journal === 'object') {
    for (const [date, text] of Object.entries(raw.journal)) {
      if (typeof text === 'string') base.journal[date] = text
    }
  }

  const theme = raw.settings?.theme
  if (theme === 'light' || theme === 'dark' || theme === 'system') {
    base.settings.theme = theme
  }

  return base
}

interface ProgressContextValue {
  state: ProgressState
  storageAvailable: boolean
  toggleHabit: (habitId: string, date?: string) => void
  isHabitDone: (habitId: string, date?: string) => boolean
  setJournal: (text: string, date?: string) => void
  startProtocol: (slug: string) => void
  restartProtocol: (slug: string) => void
  toggleStep: (slug: string, stepId: string) => void
  isStepDone: (slug: string, stepId: string) => boolean
  setTheme: (theme: Theme) => void
  replaceState: (next: ProgressState) => void
  resetAll: () => void
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

function applyTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === 'system') {
    root.removeAttribute('data-theme')
  } else {
    root.setAttribute('data-theme', theme)
  }
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(
    () => normalizeState(readJSON<unknown>(STORAGE_KEY, null)) ?? emptyState(),
  )
  const [storageAvailable] = useState(() => isAvailable())

  useEffect(() => {
    writeJSON(STORAGE_KEY, state)
  }, [state])

  useEffect(() => {
    applyTheme(state.settings.theme)
  }, [state.settings.theme])

  const toggleHabit = useCallback((habitId: string, date: string = today()) => {
    setState((prev) => {
      const forDay = prev.habitLog[date] ?? []
      const next = forDay.includes(habitId)
        ? forDay.filter((id) => id !== habitId)
        : [...forDay, habitId]
      const habitLog = { ...prev.habitLog }
      if (next.length === 0) delete habitLog[date]
      else habitLog[date] = next
      return { ...prev, habitLog }
    })
  }, [])

  const isHabitDone = useCallback(
    (habitId: string, date: string = today()) => (state.habitLog[date] ?? []).includes(habitId),
    [state.habitLog],
  )

  const setJournal = useCallback((text: string, date: string = today()) => {
    setState((prev) => {
      const journal = { ...prev.journal }
      if (text.trim() === '') delete journal[date]
      else journal[date] = text
      return { ...prev, journal }
    })
  }, [])

  const startProtocol = useCallback((slug: string) => {
    setState((prev) =>
      prev.activeProtocols[slug]
        ? prev
        : {
            ...prev,
            activeProtocols: {
              ...prev.activeProtocols,
              [slug]: { startedAt: today(), completedSteps: [] },
            },
          },
    )
  }, [])

  const restartProtocol = useCallback((slug: string) => {
    setState((prev) => ({
      ...prev,
      activeProtocols: {
        ...prev.activeProtocols,
        [slug]: { startedAt: today(), completedSteps: [] },
      },
    }))
  }, [])

  const toggleStep = useCallback((slug: string, stepId: string) => {
    setState((prev) => {
      const current = prev.activeProtocols[slug] ?? { startedAt: today(), completedSteps: [] }
      const completedSteps = current.completedSteps.includes(stepId)
        ? current.completedSteps.filter((id) => id !== stepId)
        : [...current.completedSteps, stepId]
      return {
        ...prev,
        activeProtocols: { ...prev.activeProtocols, [slug]: { ...current, completedSteps } },
      }
    })
  }, [])

  const isStepDone = useCallback(
    (slug: string, stepId: string) =>
      (state.activeProtocols[slug]?.completedSteps ?? []).includes(stepId),
    [state.activeProtocols],
  )

  const setTheme = useCallback((theme: Theme) => {
    setState((prev) => ({ ...prev, settings: { ...prev.settings, theme } }))
  }, [])

  const replaceState = useCallback((next: ProgressState) => setState(next), [])

  const resetAll = useCallback(() => {
    remove(STORAGE_KEY)
    setState(emptyState())
  }, [])

  const value = useMemo<ProgressContextValue>(
    () => ({
      state,
      storageAvailable,
      toggleHabit,
      isHabitDone,
      setJournal,
      startProtocol,
      restartProtocol,
      toggleStep,
      isStepDone,
      setTheme,
      replaceState,
      resetAll,
    }),
    [
      state,
      storageAvailable,
      toggleHabit,
      isHabitDone,
      setJournal,
      startProtocol,
      restartProtocol,
      toggleStep,
      isStepDone,
      setTheme,
      replaceState,
      resetAll,
    ],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used inside <ProgressProvider>')
  return ctx
}
