import { afterEach, describe, expect, it, vi } from 'vitest'
import { isAvailable, readJSON, remove, writeJSON } from '../storage'

afterEach(() => {
  vi.restoreAllMocks()
  window.localStorage.clear()
})

describe('storage', () => {
  it('įrašo ir nuskaito reikšmę', () => {
    writeJSON('k', { a: 1 })
    expect(readJSON('k', null)).toEqual({ a: 1 })
  })

  it('grąžina atsarginę reikšmę, kai rakto nėra', () => {
    expect(readJSON('nera', 'fallback')).toBe('fallback')
  })

  it('grąžina atsarginę reikšmę, kai JSON sugadintas', () => {
    window.localStorage.setItem('blogas', '{ne json')
    expect(readJSON('blogas', 'fallback')).toBe('fallback')
  })

  it('nemeta klaidos, kai saugykla išjungta', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError')
    })
    expect(writeJSON('k', 1)).toBe(false)
    expect(isAvailable()).toBe(false)
    expect(() => remove('k')).not.toThrow()
  })
})
