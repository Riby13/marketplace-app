export default function Logo() {
  return (
    <svg width="180" height="60" viewBox="0 0 680 320" style={{ display: 'block' }}>
      {/* THE */}
      <text x="340" y="118" textAnchor="middle" fontFamily="Raleway, Helvetica Neue, sans-serif" fontSize="15" fontWeight="600" letterSpacing="10" fill="#C8976A">THE</text>

      {/* OFFER */}
      <text x="253" y="172" textAnchor="start" fontFamily="Playfair Display, Georgia, serif" fontSize="72" fontWeight="700" fill="#F5EDE0">OFFER</text>

      {/* POINT — italic */}
      <text x="253" y="232" textAnchor="start" fontFamily="Playfair Display, Georgia, serif" fontSize="72" fontStyle="italic" fontWeight="400" fill="#F5EDE0">Point</text>

      {/* Gold accent dot */}
      <circle cx="242" cy="221" r="7" fill="#C8976A" />

      {/* Hand-drawn flowing line */}
      <circle cx="148" cy="262" r="5.5" fill="#C8976A" />
      <path d="M153 262 Q165 268 178 264 Q192 260 205 266 Q220 272 235 267 Q252 261 268 268 Q285 275 302 269 Q320 263 338 270 Q357 277 376 271 Q396 264 416 272 Q438 280 460 270 Q478 262 496 255 Q514 247 528 238 Q540 228 548 215 Q556 200 552 186 Q548 172 540 168"
            fill="none" stroke="#F5EDE0" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
