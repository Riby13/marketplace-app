// Silhouette-style icons

export function IconHome({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2L2 9v2h1v10h16V11h1V9L12 2m0 4l6 4v8H6v-8l6-4z" opacity="0.8"/>
    </svg>
  )
}

export function IconCreate({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" opacity="0.8"/>
      <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" opacity="0.8"/>
    </svg>
  )
}

export function IconDashboard({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <rect x="3" y="3" width="7" height="7" opacity="0.8"/>
      <rect x="14" y="3" width="7" height="7" opacity="0.8"/>
      <rect x="3" y="14" width="7" height="7" opacity="0.8"/>
      <rect x="14" y="14" width="7" height="7" opacity="0.8"/>
    </svg>
  )
}

export function IconLogin({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" opacity="0.8"/>
    </svg>
  )
}

export function IconSell({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" opacity="0.8"/>
    </svg>
  )
}

export function IconBuy({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M7 4V3h10v1h3.008c.548 0 .992.445.992.993v16.014c0 .548-.35 1.017-.843 1.017H3.843C3.35 21 3 20.531 3 19.993V4.993C3 4.445 3.35 4 3.843 4H7m0 2v12h10V6H7z" opacity="0.8"/>
    </svg>
  )
}

export function IconMessage({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" opacity="0.8"/>
    </svg>
  )
}

export function IconPayment({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke={color} strokeWidth="1.5" opacity="0.8"/>
      <line x1="2" y1="10" x2="22" y2="10" stroke={color} strokeWidth="1.5" opacity="0.8"/>
      <circle cx="12" cy="16" r="1.5" fill={color} opacity="0.8"/>
    </svg>
  )
}
