import type { ReactNode } from 'react'

export function StatTile({
  value,
  label,
  hint,
}: {
  value: ReactNode
  label: string
  hint?: string
}) {
  return (
    <div className="stat">
      <span className="stat__value">{value}</span>
      <span className="stat__label">{label}</span>
      {hint && <span className="stat__hint faint">{hint}</span>}
    </div>
  )
}
