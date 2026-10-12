import { useId } from 'react';

/*
 * Visuels originaux, 100 % SVG, inspirés du patrimoine malien :
 *  - motifs du bogolan (tissu de boue de Ségou / San)
 *  - architecture en banco de Djenné (tours, torons, pinacles)
 *  - le fleuve Niger
 * Aucune photo de stock : identité propre, légère et intemporelle.
 */

/* ── Tuile de bogolan réutilisable ────────────────────────── */
export function BogolanPattern({ color = 'currentColor', opacity = 0.18, scale = 1, className, style }) {
  const id = useId().replace(/:/g, '');
  const s = 64 * scale;
  return (
    <svg className={className} style={style} width="100%" height="100%" aria-hidden="true">
      <defs>
        <pattern id={`bg-${id}`} width={s} height={s} patternUnits="userSpaceOnUse">
          <g fill="none" stroke={color} strokeWidth={1.4 * scale} opacity={opacity} transform={`scale(${scale})`}>
            {/* chevrons */}
            <path d="M0 8 L8 2 L16 8 L24 2 L32 8" />
            <path d="M32 40 L40 34 L48 40 L56 34 L64 40" />
            {/* losange */}
            <path d="M48 8 L56 16 L48 24 L40 16 Z" />
            <path d="M16 40 L24 48 L16 56 L8 48 Z" />
            {/* traits en échelle */}
            <path d="M4 20 V30 M10 20 V30 M16 20 V30 M22 20 V30" />
            <path d="M36 52 V62 M42 52 V62 M48 52 V62 M54 52 V62" />
          </g>
          <g fill={color} opacity={opacity * 1.3} transform={`scale(${scale})`}>
            <circle cx="48" cy="16" r="1.6" />
            <circle cx="16" cy="48" r="1.6" />
            <circle cx="30" cy="26" r="1.2" />
            <circle cx="62" cy="58" r="1.2" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#bg-${id})`} />
    </svg>
  );
}

/* ── Bande de bogolan (frise horizontale) ─────────────────── */
export function BogolanBand({ height = 28, fg = '#F8F4EC', bg = '#0B1324', className }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg className={className} width="100%" height={height} aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <pattern id={`band-${id}`} width="56" height={height} patternUnits="userSpaceOnUse">
          <rect width="56" height={height} fill={bg} />
          <path d={`M0 ${height / 2} L7 4 L14 ${height / 2} L21 4 L28 ${height / 2}`} stroke={fg} strokeWidth="1.5" fill="none" />
          <path d={`M28 ${height / 2} L35 ${height - 4} L42 ${height / 2} L49 ${height - 4} L56 ${height / 2}`} stroke={fg} strokeWidth="1.5" fill="none" />
          <circle cx="7" cy={height - 6} r="1.6" fill={fg} />
          <circle cx="42" cy="6" r="1.6" fill={fg} />
        </pattern>
      </defs>
      <rect width="100%" height={height} fill={`url(#band-${id})`} />
    </svg>
  );
}

/* ── Tour en banco (style Djenné) ─────────────────────────── */
function Tower({ cx, base, top, yTop, yBase, fill, toron, rows = 5 }) {
  const hb = base / 2;
  const ht = top / 2;
  const d = `M${cx - hb} ${yBase} L${cx - ht} ${yTop + 18} Q${cx - ht} ${yTop} ${cx} ${yTop - 6} Q${cx + ht} ${yTop} ${cx + ht} ${yTop + 18} L${cx + hb} ${yBase} Z`;
  const step = (yBase - yTop - 40) / rows;
  const torons = [];
  for (let r = 0; r < rows; r++) {
    const y = yTop + 34 + r * step;
    const t = (y - yTop) / (yBase - yTop);
    const w = top + (base - top) * t;
    const n = Math.max(3, Math.round(w / 18));
    for (let i = 0; i < n; i++) {
      const x = cx - w / 2 + (w / n) * (i + 0.5);
      torons.push(<rect key={`${r}-${i}`} x={x - 5} y={y} width="10" height="3" rx="1.5" fill={toron} />);
    }
  }
  return (
    <g>
      <path d={d} fill={fill} />
      {/* pinacle sommital + œuf d'autruche */}
      <path d={`M${cx - 6} ${yTop - 4} L${cx} ${yTop - 30} L${cx + 6} ${yTop - 4} Z`} fill={fill} />
      <ellipse cx={cx} cy={yTop - 34} rx="5" ry="6.5" fill="#F8F4EC" />
      {torons}
    </g>
  );
}

/* ── Illustration principale : la Grande Mosquée revisitée ── */
export function DjenneArt({ className }) {
  const id = useId().replace(/:/g, '');
  const pinnacles = [];
  for (let x = 48; x <= 512; x += 29) {
    pinnacles.push(
      <path key={x} d={`M${x - 7} 352 L${x - 7} 326 Q${x} 314 ${x + 7} 326 L${x + 7} 352 Z`} fill={`url(#wall-${id})`} />
    );
  }
  return (
    <svg className={className} viewBox="0 0 560 640" role="img" aria-label="Illustration inspirée de la Grande Mosquée de Djenné au soleil couchant">
      <defs>
        <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F3D9A8" />
          <stop offset=".55" stopColor="#EBA77A" />
          <stop offset="1" stopColor="#D9744E" />
        </linearGradient>
        <linearGradient id={`wall-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B65A31" />
          <stop offset="1" stopColor="#8D3F1F" />
        </linearGradient>
        <linearGradient id={`tower-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#A54B26" />
          <stop offset=".5" stopColor="#C2683B" />
          <stop offset="1" stopColor="#97431F" />
        </linearGradient>
        <linearGradient id={`river-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1D2A45" />
          <stop offset="1" stopColor="#0B1324" />
        </linearGradient>
        <clipPath id={`arch-${id}`}>
          <path d="M0 640 V280 A280 280 0 0 1 560 280 V640 Z" />
        </clipPath>
      </defs>

      <g clipPath={`url(#arch-${id})`}>
        <rect width="560" height="640" fill={`url(#sky-${id})`} />

        {/* soleil : écho au disque du logo */}
        <circle cx="280" cy="210" r="118" fill="#F0544F" opacity=".92" />
        <circle cx="280" cy="210" r="150" fill="none" stroke="#F8F4EC" strokeOpacity=".35" strokeWidth="1" />
        <circle cx="280" cy="210" r="182" fill="none" stroke="#F8F4EC" strokeOpacity=".2" strokeWidth="1" />

        {/* oiseaux */}
        <g fill="none" stroke="#0B1324" strokeWidth="1.6" strokeLinecap="round" opacity=".55">
          <path d="M92 150 q8 -8 16 0 q8 -8 16 0" />
          <path d="M132 120 q6 -6 12 0 q6 -6 12 0" />
          <path d="M430 132 q7 -7 14 0 q7 -7 14 0" />
        </g>

        {/* muraille + pinacles */}
        {pinnacles}
        <rect x="30" y="350" width="500" height="140" fill={`url(#wall-${id})`} />

        {/* tours */}
        <Tower cx={140} base={86} top={60} yTop={238} yBase={490} fill={`url(#tower-${id})`} toron="#6B2C14" rows={4} />
        <Tower cx={420} base={86} top={60} yTop={238} yBase={490} fill={`url(#tower-${id})`} toron="#6B2C14" rows={4} />
        <Tower cx={280} base={118} top={84} yTop={150} yBase={490} fill={`url(#tower-${id})`} toron="#6B2C14" rows={6} />

        {/* contreforts */}
        {[200, 230, 330, 360].map((x) => (
          <path key={x} d={`M${x - 6} 490 L${x - 4} 300 Q${x} 290 ${x + 4} 300 L${x + 6} 490 Z`} fill="#9C4724" />
        ))}

        {/* portail */}
        <path d="M262 490 V430 Q280 404 298 430 V490 Z" fill="#0B1324" opacity=".85" />

        {/* sol */}
        <rect x="0" y="488" width="560" height="30" fill="#C98A5A" />

        {/* le fleuve Niger */}
        <rect x="0" y="516" width="560" height="124" fill={`url(#river-${id})`} />
        <g fill="none" stroke="#38B2F5" strokeLinecap="round">
          <path d="M40 546 q40 -10 80 0 t80 0" strokeOpacity=".7" strokeWidth="2" />
          <path d="M300 562 q40 -10 80 0 t80 0" strokeOpacity=".5" strokeWidth="2" />
          <path d="M120 590 q40 -10 80 0 t80 0" strokeOpacity=".35" strokeWidth="2" />
          <path d="M360 612 q30 -8 60 0 t60 0" strokeOpacity=".25" strokeWidth="2" />
        </g>
        {/* reflet du soleil */}
        <g stroke="#F0544F" strokeLinecap="round" strokeWidth="3" opacity=".7">
          <path d="M250 536 H310" />
          <path d="M262 552 H298" />
          <path d="M272 568 H288" />
        </g>
        {/* pirogue */}
        <path d="M140 600 Q190 616 240 600 L232 606 Q190 618 148 606 Z" fill="#F8F4EC" opacity=".85" />
        <path d="M200 600 L204 570" stroke="#F8F4EC" strokeWidth="1.5" opacity=".85" />
      </g>

      {/* filet doré du cadre */}
      <path d="M1 639 V280 A279 279 0 0 1 559 280 V639" fill="none" stroke="#C99A4B" strokeOpacity=".6" strokeWidth="1.5" />
    </svg>
  );
}

/* ── Couvertures génératives (projets / articles) ─────────── */
const COVER_THEMES = {
  ERP:            { bg: '#0B1324', fg: '#C99A4B', accent: '#F0544F' },
  'Développement':{ bg: '#1D2A45', fg: '#38B2F5', accent: '#F8F4EC' },
  Audit:          { bg: '#8D3F1F', fg: '#F3D9A8', accent: '#0B1324' },
  Conseil:        { bg: '#EFE6D6', fg: '#B5562F', accent: '#0B1324' },
  'Cybersécurité':{ bg: '#131D33', fg: '#F0544F', accent: '#C99A4B' },
  Digital:        { bg: '#C99A4B', fg: '#0B1324', accent: '#F8F4EC' },
};

const GLYPHS = [
  // disque solaire + anneaux
  (t) => (
    <g>
      <circle cx="300" cy="150" r="70" fill={t.accent} opacity=".9" />
      <circle cx="300" cy="150" r="100" fill="none" stroke={t.fg} strokeOpacity=".5" />
      <circle cx="300" cy="150" r="130" fill="none" stroke={t.fg} strokeOpacity=".3" />
    </g>
  ),
  // arches de banco
  (t) => (
    <g fill="none" stroke={t.fg} strokeWidth="2">
      <path d="M220 260 V160 a40 40 0 0 1 80 0 V260" />
      <path d="M300 260 V130 a40 40 0 0 1 80 0 V260" strokeOpacity=".7" />
      <path d="M380 260 V180 a40 40 0 0 1 80 0 V260" strokeOpacity=".45" />
      <circle cx="340" cy="80" r="16" fill={t.accent} stroke="none" />
    </g>
  ),
  // grille de données (tissage)
  (t) => (
    <g>
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 8 }).map((__, c) => (
          <rect key={`${r}-${c}`} x={220 + c * 26} y={60 + r * 26} width="16" height="16" rx="3"
            fill={(r + c) % 3 === 0 ? t.accent : t.fg} opacity={(r * c) % 4 === 0 ? 0.9 : 0.35} />
        )),
      )}
    </g>
  ),
  // ondes du fleuve
  (t) => (
    <g fill="none" strokeLinecap="round" strokeWidth="3">
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M200 ${90 + i * 34} q35 -18 70 0 t70 0 t70 0 t70 0`} stroke={i === 2 ? t.accent : t.fg} strokeOpacity={1 - i * 0.15} />
      ))}
    </g>
  ),
];

export function Cover({ category, variant = 0, label }) {
  const t = COVER_THEMES[category] || COVER_THEMES.ERP;
  const Glyph = GLYPHS[variant % GLYPHS.length];
  return (
    <div style={{ position: 'absolute', inset: 0, background: t.bg, color: t.fg }}>
      <BogolanPattern color={t.fg} opacity={0.14} style={{ position: 'absolute', inset: 0 }} />
      <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice" width="100%" height="100%"
        style={{ position: 'absolute', inset: 0 }} role="img" aria-label={label || category}>
        {Glyph(t)}
      </svg>
    </div>
  );
}

export const ArrowIcon = ({ size = 16 }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="13 6 19 12 13 18" />
  </svg>
);
