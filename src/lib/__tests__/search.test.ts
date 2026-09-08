import { describe, expect, it } from 'vitest'
import { buildIndex, search } from '../search'
import { ARTICLES, PROTOCOLS } from '../../content/index'

describe('search', () => {
  const index = buildIndex(ARTICLES, PROTOCOLS, 'lt')

  it('ignoruoja per trumpą užklausą', () => {
    expect(search(index, 'a')).toEqual([])
    expect(search(index, '  ')).toEqual([])
  })

  it('randa straipsnį pagal pavadinimo žodį', () => {
    const hits = search(index, 'gyvsidabris')
    expect(hits.some((h) => h.slug === 'gyvsidabris')).toBe(true)
  })

  it('randa protokolą ir pažymi jo tipą', () => {
    const hits = search(index, 'švarus startas')
    const hit = hits.find((h) => h.slug === 'svarus-startas-7')
    expect(hit?.kind).toBe('protocol')
  })

  it('indeksuoja pagal pasirinktą kalbą', () => {
    const ru = buildIndex(ARTICLES, PROTOCOLS, 'ru')
    expect(search(ru, 'ртуть').some((h) => h.slug === 'gyvsidabris')).toBe(true)
  })

  it('grąžina tuščią sąrašą, kai nieko nerandama', () => {
    expect(search(index, 'qqqzzzxxx')).toEqual([])
  })
})
