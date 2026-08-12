// components/Logo.tsx
//
// Usage examples:
//   <Logo />                          — icon + wordmark, dark theme
//   <Logo theme="light" />            — light background variant
//   <Logo iconOnly size={32} />       — just the compass rose icon
//   <Logo size={52} className="..." />

interface LogoProps {
  size?: number;          // icon size in px (default 44)
  theme?: "dark" | "light";
  iconOnly?: boolean;     // render icon alone, no text
  className?: string;
}

export default function Logo({
  size = 44,
  theme = "dark",
  iconOnly = false,
  className,
}: LogoProps) {
  const teal    = theme === "light" ? "#0d9488" : "#2dd4bf";
  const gold    = theme === "light" ? "#9a7830" : "#C9A84C";
  const goldLt  = theme === "light" ? "#b8922a" : "#e2bc6a";
  const bg1     = theme === "light" ? "#dff4f1" : "#0C1B30";
  const bg2     = theme === "light" ? "#c8ede8" : "#071525";
  const primary = theme === "light" ? "#0d9488" : "#2dd4bf";   // "TSMB" text
  const sub     = theme === "light" ? "#9a7830" : "#C9A84C";   // tagline text
  const id      = `tsmb-${theme}`;                             // SSR-safe, stable

  const icon = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={!iconOnly}
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={bg1} />
          <stop offset="100%" stopColor={bg2} />
        </linearGradient>
      </defs>

      {/* Background tile */}
      <rect width="64" height="64" rx="16" fill={`url(#${id}-bg)`} />

      {/* Dashed outer ring — blueprint detail */}
      <circle cx="32" cy="32" r="27" stroke={teal} strokeWidth="0.6" strokeDasharray="2 3" opacity="0.3" />

      {/* Cardinal points — teal */}
      <polygon points="32,5 36,23 32,19 28,23"  fill={teal} />
      <polygon points="32,59 36,41 32,45 28,41" fill={teal} opacity="0.4" />
      <polygon points="59,32 41,28 45,32 41,36" fill={teal} opacity="0.55" />
      <polygon points="5,32  23,28 19,32 23,36" fill={teal} opacity="0.55" />

      {/* Diagonal points — gold */}
      <polygon points="53,11 40,25 43,22 46,19" fill={gold} opacity="0.95" />
      <polygon points="11,11 24,25 21,22 18,19" fill={gold} opacity="0.95" />
      <polygon points="53,53 40,39 43,42 46,45" fill={gold} opacity="0.55" />
      <polygon points="11,53 24,39 21,42 18,45" fill={gold} opacity="0.55" />

      {/* Center ring */}
      <circle cx="32" cy="32" r="7"  fill={bg2}  stroke={teal} strokeWidth="1.5" />
      <circle cx="32" cy="32" r="11" fill="none" stroke={gold} strokeWidth="0.7" opacity="0.5" />

      {/* Center gold diamond */}
      <polygon points="32,25 35.5,32 32,39 28.5,32" fill={gold} />

      {/* North tick */}
      <line x1="32" y1="3" x2="32" y2="6" stroke={goldLt} strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
    </svg>
  );

  if (iconOnly) return icon;

  return (
    <div
      className={className}
      style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
      aria-label="TSMB — The Smart Money Blueprint"
    >
      {icon}

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {/* Primary wordmark */}
        <span
          style={{
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: primary,
            lineHeight: 1,
            textShadow: theme === "dark" ? "0 0 12px rgba(45,212,191,0.3)" : "none",
          }}
        >
          TSMB
        </span>

        {/* Tagline */}
        <span
          style={{
            fontSize: 7.5,
            fontWeight: 500,
            letterSpacing: "1.8px",
            textTransform: "uppercase",
            color: sub,
            lineHeight: 1,
            opacity: 0.85,
          }}
        >
          The Smart Money Blueprint
        </span>
      </div>
    </div>
  );
}
