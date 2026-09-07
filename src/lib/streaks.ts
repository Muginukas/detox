import { addDays, today } from './dates'

export interface StreakResult {
  current: number
  longest: number
  totalDays: number
}

/**
 * Serijos skaičiuojamos iš dienų, kuriomis buvo bent vienas atliktas įprotis.
 * Dabartinė serija nenutrūksta, jei šiandien dar nieko nepažymėta, bet vakar buvo —
 * diena dar nesibaigė.
 */
export function computeStreaks(activeDays: Iterable<string>, now: string = today()): StreakResult {
  const days = new Set(activeDays)
  if (days.size === 0) return { current: 0, longest: 0, totalDays: 0 }

  const sorted = [...days].sort()

  let longest = 1
  let run = 1
  for (let i = 1; i < sorted.length; i++) {
    run = addDays(sorted[i - 1], 1) === sorted[i] ? run + 1 : 1
    if (run > longest) longest = run
  }

  let cursor = days.has(now) ? now : addDays(now, -1)
  let current = 0
  while (days.has(cursor)) {
    current++
    cursor = addDays(cursor, -1)
  }

  return { current, longest, totalDays: days.size }
}
