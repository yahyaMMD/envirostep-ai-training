import { useState } from 'react'
import { TagCloud } from './ui'

export function YesNoChoices({
  onYes,
  onNo,
}: {
  onYes?: () => void
  onNo?: () => void
}) {
  const [choice, setChoice] = useState<'yes' | 'no' | null>(null)
  return (
    <div className="grid-2">
      <button
        type="button"
        className={`choice-btn choice-yes${choice === 'yes' ? ' selected' : ''}`}
        onClick={() => {
          setChoice('yes')
          onYes?.()
        }}
      >
        <span>🟢 نعم</span>
        <span className="tiny">أستعمل AI في عملي</span>
      </button>
      <button
        type="button"
        className={`choice-btn choice-no${choice === 'no' ? ' selected' : ''}`}
        onClick={() => {
          setChoice('no')
          onNo?.()
        }}
      >
        <span>🔴 لا</span>
        <span className="tiny">لم أبدأ بعد</span>
      </button>
    </div>
  )
}

export function SelectableTags({ tags }: { tags: string[] }) {
  const [active, setActive] = useState<Set<string>>(new Set())
  return (
    <TagCloud
      tags={tags}
      interactive
      active={active}
      onToggle={(tag) => {
        setActive((prev) => {
          const next = new Set(prev)
          if (next.has(tag)) next.delete(tag)
          else next.add(tag)
          return next
        })
      }}
    />
  )
}
