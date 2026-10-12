import { useId } from 'react';

/*
 * Illustrations SVG aux couleurs ISIS (bleu #1E88E5 / rouge #FF4D4F).
 * Elles remplacent les photos de stock : légères, nettes à toutes les
 * tailles et ancrées dans le contexte de Bamako.
 */

const useUid = () => useId().replace(/:/g, '');

/* ── Motif léger (inspiré du bogolan) ─────────────────────── */
export function PatternBg({ color = '#FFFFFF', opacity = 0.12, className, style }) {
  const id = useUid();
  return (
    <svg className={className} style={style} width="100%" height="100%" aria-hidden="true">
      <defs>
        <pattern id={`p-${id}`} width="56" height="56" patternUnits="userSpaceOnUse">
          <g fill="none" stroke={color} strokeWidth="1.2" opacity={opacity}>
            <path d="M0 7 L7 2 L14 7 L21 2 L28 7" />
            <path d="M28 35 L35 30 L42 35 L49 30 L56 35" />
            <path d="M42 7 L49 14 L42 21 L35 14 Z" />
            <path d="M14 35 L21 42 L14 49 L7 42 Z" />
          </g>
          <g fill={color} opacity={opacity * 1.4}>
            <circle cx="42" cy="14" r="1.5" />
            <circle cx="14" cy="42" r="1.5" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#p-${id})`} />
    </svg>
  );
}

/* ── Hero : tableau de bord ERP ───────────────────────────── */
export function DashboardArt({ className }) {
  const id = useUid();
  const bars = [42, 58, 50, 72, 64, 88, 80];
  return (
    <svg className={className} viewBox="0 0 600 520" role="img" aria-label="Tableau de bord de gestion ERP">
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1E88E5" />
          <stop offset="1" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id={`area-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1E88E5" stopOpacity=".35" />
          <stop offset="1" stopColor="#1E88E5" stopOpacity="0" />
        </linearGradient>
        <filter id={`sh-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#0D47A1" floodOpacity=".28" />
        </filter>
      </defs>

      <rect width="600" height="520" fill={`url(#bg-${id})`} />
      <circle cx="540" cy="40" r="180" fill="#fff" opacity=".06" />
      <circle cx="40" cy="500" r="140" fill="#FF4D4F" opacity=".12" />

      {/* fenêtre principale */}
      <g filter={`url(#sh-${id})`}>
        <rect x="48" y="56" width="420" height="300" rx="16" fill="#fff" />
      </g>
      <rect x="48" y="56" width="420" height="40" rx="16" fill="#F8FAFC" />
      <rect x="48" y="80" width="420" height="16" fill="#F8FAFC" />
      <circle cx="72" cy="76" r="5" fill="#FF4D4F" />
      <circle cx="88" cy="76" r="5" fill="#FFC542" />
      <circle cx="104" cy="76" r="5" fill="#34C38F" />
      <rect x="180" y="69" width="160" height="14" rx="7" fill="#E2E8F0" />

      {/* barre latérale */}
      <rect x="64" y="112" width="80" height="228" rx="10" fill="#F1F7FE" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="76" y={128 + i * 34} width="12" height="12" rx="3" fill={i === 1 ? '#1E88E5' : '#BBD7F5'} />
          <rect x="94" y={131 + i * 34} width={i === 1 ? 38 : 30} height="6" rx="3" fill={i === 1 ? '#1E88E5' : '#CBD5E1'} />
        </g>
      ))}

      {/* KPI */}
      <text x="160" y="128" fontFamily="Poppins, sans-serif" fontSize="11" fill="#64748B">Chiffre d'affaires</text>
      <text x="160" y="152" fontFamily="Poppins, sans-serif" fontSize="20" fontWeight="700" fill="#0F172A">48,6 M FCFA</text>
      <rect x="300" y="138" width="44" height="18" rx="9" fill="#E8F8F1" />
      <text x="322" y="151" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="10" fontWeight="700" fill="#16A34A">+18%</text>

      {/* graphique */}
      <path d="M160 300 C185 285 200 262 225 266 S270 236 295 240 S335 205 360 190 V320 H160 Z" fill={`url(#area-${id})`} />
      <path d="M160 300 C185 285 200 262 225 266 S270 236 295 240 S335 205 360 190" fill="none" stroke="#1E88E5" strokeWidth="3" strokeLinecap="round" />
      <circle cx="360" cy="190" r="6" fill="#fff" stroke="#1E88E5" strokeWidth="3" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="160" x2="360" y1={190 + i * 40} y2={190 + i * 40} stroke="#E2E8F0" strokeDasharray="3 5" />
      ))}

      {/* carte secondaire : ventes */}
      <g filter={`url(#sh-${id})`}>
        <rect x="372" y="196" width="196" height="150" rx="16" fill="#fff" />
      </g>
      <text x="390" y="226" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="600" fill="#0F172A">Ventes · Bamako</text>
      {bars.map((h, i) => (
        <rect key={i} x={390 + i * 24} y={326 - h} width="14" height={h} rx="4" fill={i === 5 ? '#FF4D4F' : '#1E88E5'} opacity={i === 5 ? 1 : 0.25 + i * 0.1} />
      ))}
    </svg>
  );
}

/* ── Bamako : la tour BCEAO, le fleuve Niger, le pont ─────── */
export function BamakoArt({ className }) {
  const id = useUid();
  return (
    <svg className={className} viewBox="0 0 800 520" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration de Bamako au bord du fleuve Niger">
      <defs>
        <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E3F2FD" />
          <stop offset="1" stopColor="#FFF1F1" />
        </linearGradient>
        <linearGradient id={`b1-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1E88E5" />
          <stop offset="1" stopColor="#1565C0" />
        </linearGradient>
        <linearGradient id={`b2-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#64B5F6" />
          <stop offset="1" stopColor="#42A5F5" />
        </linearGradient>
        <linearGradient id={`water-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1565C0" />
          <stop offset="1" stopColor="#0D47A1" />
        </linearGradient>
      </defs>

      <rect width="800" height="520" fill={`url(#sky-${id})`} />
      <circle cx="600" cy="150" r="70" fill="#FF4D4F" opacity=".9" />
      <circle cx="600" cy="150" r="100" fill="#FF4D4F" opacity=".08" />

      {/* collines (Koulouba) */}
      <path d="M0 330 Q120 250 260 300 T520 290 T800 300 V380 H0 Z" fill="#BBDEFB" />

      {/* immeubles arrière-plan */}
      <g fill={`url(#b2-${id})`} opacity=".75">
        <rect x="60" y="280" width="50" height="100" />
        <rect x="120" y="250" width="40" height="130" />
        <rect x="430" y="270" width="54" height="110" />
        <rect x="560" y="260" width="44" height="120" />
        <rect x="680" y="290" width="60" height="90" />
      </g>

      {/* tour BCEAO stylisée */}
      <g>
        <path d="M300 380 V170 Q300 150 316 140 L330 92 L344 140 Q360 150 360 170 V380 Z" fill={`url(#b1-${id})`} />
        <path d="M322 100 L330 60 L338 100 Z" fill="#1565C0" />
        {Array.from({ length: 9 }).map((_, i) => (
          <rect key={i} x="310" y={176 + i * 22} width="40" height="6" rx="2" fill="#fff" opacity=".35" />
        ))}
      </g>

      {/* immeubles premier plan */}
      <g fill={`url(#b1-${id})`}>
        <rect x="200" y="300" width="70" height="80" />
        <rect x="380" y="290" width="40" height="90" />
        <rect x="610" y="310" width="56" height="70" />
      </g>
      <g fill="#fff" opacity=".4">
        {[0, 1, 2].map((r) => [0, 1, 2].map((c) => (
          <rect key={`${r}${c}`} x={210 + c * 20} y={312 + r * 20} width="10" height="10" rx="2" />
        )))}
      </g>

      {/* fleuve Niger */}
      <rect x="0" y="380" width="800" height="140" fill={`url(#water-${id})`} />
      <g stroke="#fff" strokeLinecap="round" fill="none">
        <path d="M60 420 q30 -8 60 0 t60 0" strokeOpacity=".35" strokeWidth="2" />
        <path d="M420 450 q30 -8 60 0 t60 0" strokeOpacity=".25" strokeWidth="2" />
        <path d="M200 480 q30 -8 60 0 t60 0" strokeOpacity=".2" strokeWidth="2" />
      </g>
      <g stroke="#FF4D4F" strokeLinecap="round" strokeWidth="3" opacity=".65">
        <path d="M570 410 H630" />
        <path d="M584 428 H616" />
      </g>

      {/* pont sur le Niger */}
      <rect x="0" y="384" width="800" height="8" fill="#0F172A" opacity=".85" />
      {Array.from({ length: 11 }).map((_, i) => (
        <rect key={i} x={30 + i * 76} y="392" width="8" height="28" fill="#0F172A" opacity=".7" />
      ))}

      {/* pirogue */}
      <path d="M120 470 Q170 486 220 470 L212 477 Q170 488 128 477 Z" fill="#fff" opacity=".9" />
    </svg>
  );
}

/* ── Couvertures des réalisations / articles ──────────────── */
const THEMES = [
  { bg: ['#1E88E5', '#0D47A1'], fg: '#FFFFFF', accent: '#FF4D4F' },
  { bg: ['#0F172A', '#1E3A8A'], fg: '#90CAF9', accent: '#FF4D4F' },
  { bg: ['#FF4D4F', '#C62828'], fg: '#FFFFFF', accent: '#0F172A' },
  { bg: ['#E3F2FD', '#BBDEFB'], fg: '#1565C0', accent: '#FF4D4F' },
];

const CATEGORY_ICON = {
  ERP: <><rect x="-26" y="-26" width="22" height="22" rx="5" /><rect x="4" y="-26" width="22" height="22" rx="5" /><rect x="-26" y="4" width="22" height="22" rx="5" /><rect x="4" y="4" width="22" height="22" rx="5" /></>,
  'Développement': <><polyline points="-10 -22 -30 0 -10 22" /><polyline points="10 -22 30 0 10 22" /></>,
  Audit: <><path d="M0 30s24-12 24-30V-18L0-28l-24 10V0c0 18 24 30 24 30z" /><polyline points="-9 0 -2 7 11 -6" /></>,
  'Cybersécurité': <><rect x="-20" y="-4" width="40" height="30" rx="5" /><path d="M-12-4v-8a12 12 0 0 1 24 0v8" /></>,
  Conseil: <><circle r="26" /><polygon points="10 -10 4 4 -10 10 -4 -4" /></>,
  Digital: <><rect x="-30" y="-22" width="60" height="40" rx="5" /><line x1="-12" y1="28" x2="12" y2="28" /><line x1="0" y1="18" x2="0" y2="28" /></>,
};

export function Cover({ category, seed = 0, label }) {
  const id = useUid();
  const t = THEMES[seed % THEMES.length];
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label || category}
      style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id={`c-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={t.bg[0]} />
          <stop offset="1" stopColor={t.bg[1]} />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill={`url(#c-${id})`} />
      <PatternBg color={t.fg} opacity={0.14} />
      <circle cx="470" cy="90" r="120" fill={t.fg} opacity=".07" />
      <circle cx="110" cy="360" r="90" fill={t.accent} opacity=".18" />
      <g transform="translate(300 200)">
        <circle r="70" fill={t.fg} opacity=".12" />
        <circle r="96" fill="none" stroke={t.fg} strokeOpacity=".25" />
        <g transform="scale(1.4)" fill="none" stroke={t.fg} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          {CATEGORY_ICON[category] || CATEGORY_ICON.Digital}
        </g>
      </g>
    </svg>
  );
}
