import { describe, expect, it } from 'vitest'
import { ARTICLES, PROTOCOLS, getArticle, relatedArticles, validateContent } from '../index'
import { HABITS } from '../habits'
import { LANGS } from '../../types/content'

describe('turinys', () => {
  it('turi straipsnių ir protokolų', () => {
    expect(ARTICLES.length).toBeGreaterThan(0)
    expect(PROTOCOLS.length).toBeGreaterThan(0)
  })

  it('praeina validaciją be problemų', () => {
    expect(validateContent()).toEqual([])
  })

  it('turi unikalius straipsnių slug', () => {
    const slugs = ARTICLES.map((a) => a.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('turi unikalius protokolų slug', () => {
    const slugs = PROTOCOLS.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('kiekvienas įprotis išverstas į visas kalbas', () => {
    for (const habit of HABITS) {
      for (const lang of LANGS) {
        expect(habit.title[lang]?.trim(), `${habit.id}.title.${lang}`).toBeTruthy()
        expect(habit.hint[lang]?.trim(), `${habit.id}.hint.${lang}`).toBeTruthy()
      }
    }
  })

  it('protokolų dienos sunumeruotos nuo 1 be tarpų', () => {
    for (const protocol of PROTOCOLS) {
      const days = protocol.days.map((d) => d.day)
      expect(days, protocol.slug).toEqual(Array.from({ length: protocol.duration }, (_, i) => i + 1))
    }
  })

  it('kiekviena diena turi bent vieną žingsnį', () => {
    for (const protocol of PROTOCOLS) {
      for (const day of protocol.days) {
        expect(day.steps.length, `${protocol.slug}/d${day.day}`).toBeGreaterThan(0)
      }
    }
  })

  it('susiję straipsniai neįtraukia paties straipsnio', () => {
    const article = getArticle('kas-yra-detoksas')!
    const related = relatedArticles(article)
    expect(related.some((a) => a.slug === article.slug)).toBe(false)
  })
})
