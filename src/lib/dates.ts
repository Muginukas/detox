/** ISO data be laiko zonos poslinkio: YYYY-MM-DD vietos laiku. */
export function toISODate(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function today(): string {
  return toISODate(new Date())
}

export function fromISODate(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, (m ?? 1) - 1, d ?? 1)
}

export function addDays(iso: string, days: number): string {
  const date = fromISODate(iso)
  date.setDate(date.getDate() + days)
  return toISODate(date)
}

/** Kiek pilnų dienų praėjo nuo `from` iki `to` (gali būti neigiama). */
export function daysBetween(from: string, to: string): number {
  const ms = fromISODate(to).getTime() - fromISODate(from).getTime()
  return Math.round(ms / 86_400_000)
}

/** Paskutinių `count` dienų sąrašas, seniausia pirma, baigiant `end` (numatytai — šiandien). */
export function lastNDays(count: number, end: string = today()): string[] {
  return Array.from({ length: count }, (_, i) => addDays(end, i - count + 1))
}

export function formatDate(iso: string, lang: string): string {
  return fromISODate(iso).toLocaleDateString(lang === 'lt' ? 'lt-LT' : lang === 'ru' ? 'ru-RU' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
