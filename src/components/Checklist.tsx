import type { ReactNode } from 'react'

export interface ChecklistItemProps {
  id: string
  label: ReactNode
  note?: ReactNode
  icon?: string
  checked: boolean
  onToggle: () => void
}

export function ChecklistItem({ id, label, note, icon, checked, onToggle }: ChecklistItemProps) {
  return (
    <li className={`check${checked ? ' check--done' : ''}`}>
      <label className="check__label" htmlFor={`check-${id}`}>
        <input
          id={`check-${id}`}
          type="checkbox"
          checked={checked}
          onChange={onToggle}
          className="check__input"
        />
        <span className="check__box" aria-hidden="true">
          {checked ? '✓' : ''}
        </span>
        <span className="check__body">
          <span className="check__text">
            {icon && (
              <span className="check__icon" aria-hidden="true">
                {icon}
              </span>
            )}
            {label}
          </span>
          {note && <span className="check__note faint">{note}</span>}
        </span>
      </label>
    </li>
  )
}

export function Checklist({ children }: { children: ReactNode }) {
  return <ul className="checklist">{children}</ul>
}
