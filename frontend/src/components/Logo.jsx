export default function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.3rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <span style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          color: '#666',
          lineHeight: 1,
          letterSpacing: '0.5px'
        }}>
          The
        </span>
        <svg width="120" height="24" viewBox="0 0 120 24" style={{ marginTop: '2px' }}>
          {/* "Offers" text with silhouette style */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1b5e20" />
              <stop offset="100%" stopColor="#2e7d32" />
            </linearGradient>
          </defs>
          {/* Decorative circle accent */}
          <circle cx="115" cy="12" r="7" fill="none" stroke="#1b5e20" strokeWidth="1.5" opacity="0.6" />
          {/* Text "Offers Point" */}
          <text x="2" y="18" fontSize="16" fontWeight="700" fill="url(#logoGradient)" fontFamily="sans-serif">
            Offers Point
          </text>
        </svg>
      </div>
    </div>
  )
}
