export function NeuralNetVisual({ active = false }: { active?: boolean }) {
  return (
    <svg
      viewBox="0 0 640 280"
      role="img"
      aria-label="Schéma simplifié du traitement dans un modèle"
      style={{
        width: '100%',
        maxHeight: '220px',
        display: 'block',
        borderRadius: 16,
        opacity: active ? 1 : 0.55,
        transition: 'opacity 0.35s ease',
        background: 'rgba(6, 16, 31, 0.55)',
        border: '1px solid rgba(56, 189, 248, 0.25)',
      }}
    >
      <g stroke="#38BDF8" strokeOpacity="0.35" strokeWidth="1.5">
        <path d="M120 60 L260 90" />
        <path d="M120 140 L260 90" />
        <path d="M120 220 L260 90" />
        <path d="M120 60 L260 140" />
        <path d="M120 140 L260 140" />
        <path d="M120 220 L260 140" />
        <path d="M120 60 L260 190" />
        <path d="M120 140 L260 190" />
        <path d="M120 220 L260 190" />
        <path d="M260 90 L400 115" />
        <path d="M260 140 L400 115" />
        <path d="M260 190 L400 115" />
        <path d="M260 90 L400 165" />
        <path d="M260 140 L400 165" />
        <path d="M260 190 L400 165" />
        <path d="M400 115 L520 140" />
        <path d="M400 165 L520 140" />
      </g>
      <g fill="#2DD4BF">
        <circle cx="120" cy="60" r="10" />
        <circle cx="120" cy="140" r="10" />
        <circle cx="120" cy="220" r="10" />
      </g>
      <g fill="#38BDF8">
        <circle cx="260" cy="90" r="10" />
        <circle cx="260" cy="140" r="10" />
        <circle cx="260" cy="190" r="10" />
        <circle cx="400" cy="115" r="10" />
        <circle cx="400" cy="165" r="10" />
      </g>
      <circle cx="520" cy="140" r="12" fill="#F59E0B" />
      <text
        x="320"
        y="255"
        fill="#94A3B8"
        fontFamily="Space Grotesk, Cairo, sans-serif"
        fontSize="14"
        textAnchor="middle"
      >
        Simplified model processing — teaching visual
      </text>
    </svg>
  )
}
