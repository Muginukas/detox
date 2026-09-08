import { describe, expect, it } from 'vitest'
import { addDays, daysBetween, lastNDays, toISODate } from '../dates'

describe('dates', () => {
  it('formatuoja vietos datą be laiko zonos poslinkio', () => {
    expect(toISODate(new Date(2026, 0, 5))).toBe('2026-01-05')
  })

  it('prideda dienas per mėnesio ribą', () => {
    expect(addDays('2026-01-31', 1)).toBe('2026-02-01')
    expect(addDays('2026-03-01', -1)).toBe('2026-02-28')
  })

  it('skaičiuoja dienas tarp datų', () => {
    expect(daysBetween('2026-03-01', '2026-03-10')).toBe(9)
    expect(daysBetween('2026-03-10', '2026-03-01')).toBe(-9)
    expect(daysBetween('2026-03-10', '2026-03-10')).toBe(0)
  })

  it('nesuklysta per vasaros laiko perėjimą', () => {
    expect(daysBetween('2026-03-28', '2026-03-30')).toBe(2)
    expect(daysBetween('2026-10-24', '2026-10-26')).toBe(2)
  })

  it('grąžina paskutines N dienų, seniausią pirma', () => {
    const days = lastNDays(3, '2026-03-10')
    expect(days).toEqual(['2026-03-08', '2026-03-09', '2026-03-10'])
  })
})
