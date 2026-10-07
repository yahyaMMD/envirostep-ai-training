import type { ReactNode } from 'react'

export function Kicker({ children }: { children: ReactNode }) {
  return <div className="slide-kicker">{children}</div>
}

export function Title({
  children,
  wide,
}: {
  children: ReactNode
  wide?: boolean
}) {
  return <h1 className={`slide-title${wide ? ' wide' : ''}`}>{children}</h1>
}

export function Subtitle({ children }: { children: ReactNode }) {
  return <p className="slide-subtitle">{children}</p>
}

export function Card({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`card ${className}`}>{children}</div>
}

export function Pill({ children }: { children: ReactNode }) {
  return <span className="pill">{children}</span>
}

export function Flow({ nodes, accentIndex }: { nodes: string[]; accentIndex?: number }) {
  return (
    <div className="flow" dir="ltr">
      {nodes.map((node, i) => (
        <div key={`${node}-${i}`} style={{ display: 'contents' }}>
          {i > 0 && <span className="flow-arrow">→</span>}
          <div className={`flow-node${accentIndex === i ? ' accent' : ''}`}>
            <span className="en">{node}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export function VerticalFlow({ nodes }: { nodes: string[] }) {
  return (
    <div className="stack" style={{ alignItems: 'center' }}>
      {nodes.map((node, i) => (
        <div key={`${node}-${i}`} className="stack" style={{ alignItems: 'center', gap: '0.35rem' }}>
          <div className={`flow-node${i === Math.floor(nodes.length / 2) ? ' accent' : ''}`}>
            {node}
          </div>
          {i < nodes.length - 1 && <span className="flow-arrow" style={{ transform: 'rotate(90deg)' }}>→</span>}
        </div>
      ))}
    </div>
  )
}

/** Optional calm discussion prompt for the room — no emojis, no “vote now” tone */
export function Discussion({ children }: { children: ReactNode }) {
  return <div className="discussion-note">{children}</div>
}

export function Quote({ children }: { children: ReactNode }) {
  return <blockquote className="quote">{children}</blockquote>
}

export function Compare({
  bad,
  good,
  badLabel = 'Faible',
  goodLabel = 'Fort',
}: {
  bad: ReactNode
  good: ReactNode
  badLabel?: string
  goodLabel?: string
}) {
  return (
    <div className="compare">
      <div className="compare-bad">
        <div className="compare-label">✗ {badLabel}</div>
        {bad}
      </div>
      <div className="compare-good">
        <div className="compare-label">✓ {goodLabel}</div>
        {good}
      </div>
    </div>
  )
}

export function Formula({ parts }: { parts: string[] }) {
  return (
    <div className="formula">
      {parts.map((part, i) => (
        <div key={part} style={{ display: 'contents' }}>
          {i > 0 && <span className="formula-plus">+</span>}
          <span className="formula-part en">{part}</span>
        </div>
      ))}
    </div>
  )
}

export function TagCloud({
  tags,
  interactive,
  active,
  onToggle,
}: {
  tags: string[]
  interactive?: boolean
  active?: Set<string>
  onToggle?: (tag: string) => void
}) {
  return (
    <div className="tag-list">
      {tags.map((tag) => {
        const isActive = active?.has(tag)
        return (
          <button
            key={tag}
            type="button"
            className={`tag${interactive ? ' interactive' : ''}${isActive ? ' active' : ''}`}
            onClick={() => onToggle?.(tag)}
          >
            {tag}
          </button>
        )
      })}
    </div>
  )
}
