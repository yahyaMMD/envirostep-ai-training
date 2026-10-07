export function CloudComputeVisual() {
  return (
    <svg
      viewBox="0 0 640 240"
      role="img"
      aria-label="رسم توضيحي للحوسبة السحابية"
      style={{
        width: '100%',
        maxHeight: '200px',
        display: 'block',
        borderRadius: 16,
        background: 'rgba(248, 250, 252, 0.96)',
        border: '1px solid rgba(56, 189, 248, 0.35)',
      }}
    >
      <ellipse cx="320" cy="90" rx="140" ry="55" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="3" />
      <ellipse cx="250" cy="110" rx="70" ry="35" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="3" />
      <ellipse cx="390" cy="110" rx="80" ry="38" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="3" />
      <rect x="200" y="155" width="240" height="40" rx="10" fill="#0B1D36" />
      <text
        x="320"
        y="181"
        fill="#2DD4BF"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="15"
        textAnchor="middle"
      >
        GPU · Servers · Storage
      </text>
    </svg>
  )
}
