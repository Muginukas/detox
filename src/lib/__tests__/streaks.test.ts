import { describe, expect, it } from 'vitest'
import { computeStreaks } from '../streaks'

describe('computeStreaks', () => {
  it('grąžina nulius, kai istorijos nėra', () => {
    expect(computeStreaks([], '2026-03-10')).toEqual({ current: 0, longest: 0, totalDays: 0 })
  })

  it('skaičiuoja seriją, kuri baigiasi šiandien', () => {
    const result = computeStreaks(['2026-03-08', '2026-03-09', '2026-03-10'], '2026-03-10')
    expect(result.current).toBe(3)
    expect(result.longest).toBe(3)
    expect(result.totalDays).toBe(3)
  })

  it('nenutraukia serijos, kai šiandien dar nieko nepažymėta', () => {
    const result = computeStreaks(['2026-03-08', '2026-03-09'], '2026-03-10')
    expect(result.current).toBe(2)
  })

  it('nutraukia seriją, kai praleistos dvi dienos', () => {
    const result = computeStreaks(['2026-03-05', '2026-03-06'], '2026-03-10')
    expect(result.current).toBe(0)
    expect(result.longest).toBe(2)
  })

  it('randa ilgiausią seriją praeityje', () => {
    const days = ['2026-02-01', '2026-02-02', '2026-02-03', '2026-02-04', '2026-03-09', '2026-03-10']
    const result = computeStreaks(days, '2026-03-10')
    expect(result.current).toBe(2)
    expect(result.longest).toBe(4)
    expect(result.totalDays).toBe(6)
  })

  it('nesuklysta dėl pasikartojančių datų ir netvarkingos eilės', () => {
    const result = computeStreaks(['2026-03-10', '2026-03-08', '2026-03-09', '2026-03-09'], '2026-03-10')
    expect(result.current).toBe(3)
    expect(result.totalDays).toBe(3)
  })

  it('veikia per mėnesio ir metų ribą', () => {
    const result = computeStreaks(['2025-12-30', '2025-12-31', '2026-01-01'], '2026-01-01')
    expect(result.current).toBe(3)
  })
})
