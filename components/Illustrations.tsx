// Hand-authored flat illustrations. Faceless on purpose: any woman can see herself.
// One palette, no outlines, light drawn as glow rather than icons.

const C = {
  bg: '#faf7fd',
  arch: '#e9e0f7',
  archIn: '#f4effc',
  dots: '#d3c3ef',
  leaf: '#b9a3e3',
  skin: '#a86b4c',
  skinShade: '#8e5a3f',
  hair: '#2b1d2b',
  kameez: '#7c5bd0',
  kameezShade: '#6a4bbf',
  salwar: '#4c3a78',
  orna: '#f2a7b5',
  ornaBack: '#e38c9f',
  teal: '#3f8f8a',
  tealShade: '#347a75',
  peach: '#f7d9cc',
  hijab: '#4c3a78',
  pati: '#ecdcb8',
  patiLine: '#d9c394',
  patiBorder: '#b8453c',
  ink: '#2a1f3d',
  screen: '#cdbcf2',
  spark: '#fff4ec',
};

function Leaf({ x, y, r = 0, s = 1 }: { x: number; y: number; r?: number; s?: number }) {
  return (
    <path d="M0 0 C6 -10 18 -12 24 -12 C22 -4 14 6 0 0 Z" fill={C.leaf} transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`} />
  );
}

function Spark({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <path
      d="M0 -7 C1 -2 2 -1 7 0 C2 1 1 2 0 7 C-1 2 -2 1 -7 0 C-2 -1 -1 -2 0 -7 Z"
      fill={C.spark}
      transform={`translate(${x} ${y}) scale(${s})`}
    />
  );
}

/** A woman seated on a shital pati under an arch of light, phone in her hands. */
export function HeroArt({ className, label }: { className?: string; label: string }) {
  return (
    <svg className={className} viewBox="0 0 320 300" role="img" aria-label={label}>
      <defs>
        <radialGradient id="hero-glow" cx="160" cy="150" r="130" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff6ef" />
          <stop offset="0.55" stopColor="#f6effc" />
          <stop offset="1" stopColor="#f4effc" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.bg} stopOpacity="0" />
          <stop offset="1" stopColor={C.bg} />
        </linearGradient>
      </defs>

      {/* arch, inner light, alpana dot border */}
      <path d="M36 300 V150 A124 124 0 0 1 284 150 V300 Z" fill={C.arch} />
      <path d="M62 300 V156 A98 98 0 0 1 258 156 V300 Z" fill={C.archIn} />
      <path d="M62 300 V156 A98 98 0 0 1 258 156 V300 Z" fill="url(#hero-glow)" />
      <path d="M49 300 V152 A111 111 0 0 1 271 152 V300" fill="none" stroke={C.dots} strokeWidth="3.2" strokeLinecap="round" strokeDasharray="0 11" />
      <Spark x={100} y={122} s={1.1} />
      <Spark x={226} y={104} s={0.8} />
      <Spark x={236} y={170} s={1.2} />
      <Spark x={88} y={184} s={0.7} />
      <Leaf x={42} y={236} r={-62} s={1.3} />
      <Leaf x={50} y={206} r={-38} s={0.9} />
      <Leaf x={278} y={240} r={-118} s={1.3} />
      <Leaf x={270} y={210} r={-142} s={0.9} />

      {/* shital pati mat */}
      <path d="M74 270 L246 270 L228 248 L92 248 Z" fill={C.pati} />
      <path d="M86 262 L234 262 M98 255 L222 255" stroke={C.patiLine} strokeWidth="2" />
      <path d="M126 248 L118 270 M160 248 L160 270 M194 248 L202 270" stroke={C.patiLine} strokeWidth="2" />
      <path d="M74 270 L246 270 L243 266 L77 266 Z" fill={C.patiBorder} />

      {/* orna tail falling behind her shoulder */}
      <path d="M140 150 C128 170 126 204 130 232 L140 232 C138 206 140 176 148 158 Z" fill={C.ornaBack} />
      {/* crossed legs in salwar, feet tucked */}
      <path d="M100 252 C104 232 136 225 160 227 C184 225 216 232 220 252 C198 260 122 260 100 252 Z" fill={C.salwar} />
      <ellipse cx="132" cy="252" rx="12" ry="5" fill={C.skin} />
      <ellipse cx="188" cy="252" rx="12" ry="5" fill={C.skin} />
      {/* kameez */}
      <path d="M116 240 C128 224 192 224 204 240 C188 249 132 249 116 240 Z" fill={C.kameezShade} />
      {/* neck runs under the kameez neckline */}
      <rect x="154" y="118" width="12" height="36" rx="5" fill={C.skinShade} />
      <path d="M136 234 C132 192 136 150 160 142 C184 150 188 192 184 234 Z" fill={C.kameez} />
      {/* orna over one shoulder, across the chest */}
      <path d="M138 146 C152 154 174 174 188 200 L181 211 C167 188 147 168 134 160 Z" fill={C.orna} />
      {/* arms: sleeves and forearms */}
      <path d="M142 156 L135 194" stroke={C.kameez} strokeWidth="13" strokeLinecap="round" />
      <path d="M178 156 L185 194" stroke={C.kameez} strokeWidth="13" strokeLinecap="round" />
      <path d="M135 194 L150 204" stroke={C.skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M185 194 L170 204" stroke={C.skin} strokeWidth="9" strokeLinecap="round" />
      {/* phone */}
      <rect x="150" y="186" width="20" height="30" rx="4" fill={C.ink} />
      <rect x="152.5" y="189" width="15" height="22" rx="2" fill={C.screen} />
      <path d="M160 204 C157 201.6 155.6 200.2 155.6 198.4 C155.6 197 156.8 196.2 157.9 196.2 C158.8 196.2 159.5 196.8 160 197.4 C160.5 196.8 161.2 196.2 162.1 196.2 C163.2 196.2 164.4 197 164.4 198.4 C164.4 200.2 163 201.6 160 204 Z" fill={C.kameezShade} />
      {/* mitten hands with thumbs */}
      <ellipse cx="151" cy="207" rx="6.5" ry="5.5" fill={C.skin} />
      <ellipse cx="153.5" cy="200" rx="2.6" ry="4" fill={C.skin} transform="rotate(-18 153.5 200)" />
      <ellipse cx="169" cy="207" rx="6.5" ry="5.5" fill={C.skin} />
      <ellipse cx="166.5" cy="200" rx="2.6" ry="4" fill={C.skin} transform="rotate(18 166.5 200)" />
      {/* head, tilted a little, hair as one silhouette with a braid over the shoulder */}
      <g transform="rotate(6 160 120)">
        <circle cx="161" cy="104" r="17" fill={C.skin} />
        <path
          d="M143.5 106 C141 88 152 80 162 80 C174 80 181 89 179 103 C182 116 186 134 184 158 C183 166 177 170 173 167 C177 146 176 126 172 112 C170 98 166 91 161 90 C157 91 152 96 149 106 Z"
          fill={C.hair}
        />
      </g>
      <rect x="0" y="272" width="320" height="28" fill="url(#hero-fade)" />
    </svg>
  );
}

/** Two friends side by side: one holds the other close. For friends, stories, about. */
export function TogetherArt({ className, label }: { className?: string; label: string }) {
  return (
    <svg className={className} viewBox="0 0 320 240" role="img" aria-label={label}>
      <defs>
        <radialGradient id="tog-glow" cx="160" cy="120" r="120" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff6ef" />
          <stop offset="1" stopColor={C.arch} />
        </radialGradient>
        <linearGradient id="tog-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.bg} stopOpacity="0" />
          <stop offset="1" stopColor={C.bg} />
        </linearGradient>
      </defs>
      <path d="M24 240 C24 128 84 44 160 44 C236 44 296 128 296 240 Z" fill="url(#tog-glow)" />
      <path d="M40 240 C40 140 94 60 160 60 C226 60 280 140 280 240" fill="none" stroke={C.dots} strokeWidth="3" strokeLinecap="round" strokeDasharray="0 11" />
      <Spark x={78} y={106} s={0.9} />
      <Spark x={250} y={92} s={1.1} />
      <Leaf x={38} y={214} r={-55} s={1.2} />
      <Leaf x={284} y={218} r={-125} s={1.2} />

      {/* left friend: hair behind, then her arm reaching behind her friend's neck */}
      <path d="M100 92 C92 118 94 146 102 162 L112 156 C106 138 106 114 110 98 Z" fill={C.hair} />
      <path d="M134 162 C160 150 196 146 226 152" stroke={C.teal} strokeWidth="14" strokeLinecap="round" fill="none" />

      {/* right friend in hijab (in front of the arm) */}
      <g>
        <path d="M168 240 C166 190 180 156 212 150 C244 156 258 190 256 240 Z" fill={C.kameez} />
        <path d="M188 108 C186 80 198 64 212 64 C228 64 240 80 238 108 C240 132 234 152 224 162 C216 156 208 156 200 162 C190 152 186 132 188 108 Z" fill={C.hijab} transform="rotate(-7 212 120)" />
        <circle cx="210" cy="106" r="20" fill={C.skin} />
        <path d="M188 100 C190 80 204 74 212 74 C222 74 234 82 234 100 C226 88 196 88 188 100 Z" fill={C.hijab} transform="rotate(-7 212 100)" />
      </g>
      {/* her friend's hand resting on the far shoulder */}
      <ellipse cx="232" cy="156" rx="8" ry="6.5" fill={C.skin} transform="rotate(-20 232 156)" />

      {/* left friend body, orna draped in front, head tilted in */}
      <rect x="112" y="120" width="14" height="38" rx="6" fill={C.skinShade} />
      <path d="M72 240 C70 190 86 150 120 146 C150 150 164 186 162 240 Z" fill={C.teal} />
      <path d="M92 156 C102 176 108 204 108 240 L96 240 C96 206 90 180 84 164 Z" fill={C.peach} />
      <path d="M150 158 C140 176 134 204 134 240 L146 240 C146 206 150 184 158 168 Z" fill={C.peach} />
      <g transform="rotate(8 120 110)">
        <circle cx="120" cy="104" r="20" fill={C.skin} />
        <path d="M99 108 C96 86 108 76 121 76 C136 76 144 88 142 104 C138 92 128 86 119 87 C110 88 103 96 101 110 Z" fill={C.hair} />
      </g>
      <rect x="0" y="212" width="320" height="28" fill="url(#tog-fade)" />
    </svg>
  );
}
