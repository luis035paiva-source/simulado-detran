/* Ilustrações das questões, desenhadas em SVG (não dependem de internet).
   Placas conforme o padrão do CONTRAN: advertência = losango amarelo,
   regulamentação = círculo branco com tarja vermelha, serviços auxiliares =
   retângulo azul, atrativos turísticos = retângulo marrom. */

const IMAGENS = {

/* ---------- ADVERTÊNCIA (losango amarelo) ---------- */

"A-17": `<svg viewBox="0 0 120 120" role="img" aria-label="Placa A-17, pista irregular">
  <polygon points="60,4 116,60 60,116 4,60" fill="#F5C518" stroke="#101010" stroke-width="6" stroke-linejoin="round"/>
  <path d="M24 74c8 0 8-18 17-18s9 18 18 18 9-18 18-18 8 18 17 18"
        fill="none" stroke="#101010" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M36 88h48" stroke="#101010" stroke-width="6" stroke-linecap="round" opacity=".5"/>
</svg>`,

"A-26a": `<svg viewBox="0 0 120 120" role="img" aria-label="Placa A-26a, sentido único">
  <polygon points="60,4 116,60 60,116 4,60" fill="#F5C518" stroke="#101010" stroke-width="6" stroke-linejoin="round"/>
  <path d="M30 60h44" stroke="#101010" stroke-width="10" stroke-linecap="butt"/>
  <polygon points="92,60 68,44 68,76" fill="#101010"/>
</svg>`,

"A-13b": `<svg viewBox="0 0 120 120" role="img" aria-label="Placa A-13b, confluência à direita">
  <polygon points="60,4 116,60 60,116 4,60" fill="#F5C518" stroke="#101010" stroke-width="6" stroke-linejoin="round"/>
  <path d="M54 104V50" stroke="#101010" stroke-width="11" stroke-linecap="butt"/>
  <polygon points="54,24 40,50 68,50" fill="#101010"/>
  <path d="M86 102c0-24-12-34-30-38" fill="none" stroke="#101010" stroke-width="10" stroke-linecap="round"/>
</svg>`,

"A-33b": `<svg viewBox="0 0 120 120" role="img" aria-label="Placa A-33b, passagem sinalizada de escolares">
  <polygon points="60,4 116,60 60,116 4,60" fill="#F5C518" stroke="#101010" stroke-width="6" stroke-linejoin="round"/>
  <g fill="#101010">
    <!-- criança maior -->
    <circle cx="72" cy="40" r="8"/>
    <path d="M72 50c7 0 11 5 11 11l2 14h-7l-2-10-1 27h-6l-2-18-3 18h-6l2-31c0-7 5-11 12-11z"/>
    <!-- criança menor -->
    <circle cx="45" cy="52" r="6.5"/>
    <path d="M45 60c6 0 9 4 9 9l1 11h-5l-2-8-1 22h-5l-1-14-2 14h-5l2-25c0-5 4-9 9-9z"/>
  </g>
  <path d="M44 96h32" stroke="#101010" stroke-width="6" stroke-linecap="round" opacity=".5"/>
</svg>`,

/* ---------- REGULAMENTAÇÃO (círculo com tarja vermelha) ---------- */

"R-4b": `<svg viewBox="0 0 120 120" role="img" aria-label="Placa R-4b, proibido virar à direita">
  <circle cx="60" cy="60" r="54" fill="#fff" stroke="#D5232C" stroke-width="11"/>
  <path d="M44 96V66c0-9 7-16 16-16h14" fill="none" stroke="#101010" stroke-width="11" stroke-linecap="butt"/>
  <polygon points="90,50 66,36 66,64" fill="#101010"/>
  <path d="M24 96 96 24" stroke="#D5232C" stroke-width="11" stroke-linecap="round"/>
</svg>`,

"R-20": `<svg viewBox="0 0 120 120" role="img" aria-label="Placa R-20, proibido acionar buzina">
  <circle cx="60" cy="60" r="54" fill="#fff" stroke="#D5232C" stroke-width="11"/>
  <rect x="26" y="52" width="16" height="16" rx="5" fill="#101010"/>
  <path d="M42 52l28-16v48L42 68z" fill="#101010"/>
  <path d="M80 44c7 9 7 23 0 32" fill="none" stroke="#101010" stroke-width="6" stroke-linecap="round"/>
  <path d="M92 34c12 15 12 37 0 52" fill="none" stroke="#101010" stroke-width="6" stroke-linecap="round"/>
  <path d="M24 96 96 24" stroke="#D5232C" stroke-width="11" stroke-linecap="round"/>
</svg>`,

"R-14": `<svg viewBox="0 0 120 120" role="img" aria-label="Placa R-14, peso bruto total máximo permitido 8 toneladas">
  <circle cx="60" cy="60" r="54" fill="#fff" stroke="#D5232C" stroke-width="11"/>
  <text x="60" y="76" text-anchor="middle" font-family="Arial,Helvetica,sans-serif"
        font-size="46" font-weight="700" fill="#101010">8t</text>
</svg>`,

"R-18": `<svg viewBox="0 0 120 120" role="img" aria-label="Placa R-18, comprimento máximo permitido 10 metros">
  <circle cx="60" cy="60" r="54" fill="#fff" stroke="#D5232C" stroke-width="11"/>
  <path d="M34 44h52" stroke="#101010" stroke-width="5"/>
  <polygon points="28,44 40,38 40,50" fill="#101010"/>
  <polygon points="92,44 80,38 80,50" fill="#101010"/>
  <text x="60" y="88" text-anchor="middle" font-family="Arial,Helvetica,sans-serif"
        font-size="32" font-weight="700" fill="#101010">10m</text>
</svg>`,

/* ---------- SERVIÇOS AUXILIARES / TURÍSTICA ---------- */

"SAU-18": `<svg viewBox="0 0 120 120" role="img" aria-label="Placa SAU-18, pedágio">
  <rect x="6" y="6" width="108" height="108" rx="6" fill="#0B4C9B" stroke="#fff" stroke-width="5"/>
  <g fill="#fff">
    <rect x="20" y="44" width="80" height="8" rx="2"/>
    <rect x="26" y="52" width="20" height="34" rx="2"/>
    <rect x="74" y="52" width="20" height="34" rx="2"/>
    <rect x="31" y="58" width="10" height="10" fill="#0B4C9B"/>
    <rect x="79" y="58" width="10" height="10" fill="#0B4C9B"/>
    <path d="M50 80h20l4 6v6H46v-6z"/>
    <rect x="50" y="72" width="16" height="8" rx="3"/>
  </g>
  <path d="M20 100h80" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
  <path d="M46 70h34" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".9"/>
</svg>`,

"TAR-03": `<svg viewBox="0 0 120 120" role="img" aria-label="Placa TAR-03, parque urbano">
  <rect x="6" y="6" width="108" height="108" rx="6" fill="#6B4226" stroke="#fff" stroke-width="5"/>
  <g fill="#fff">
    <circle cx="46" cy="44" r="20"/>
    <rect x="42" y="60" width="8" height="28" rx="2"/>
    <rect x="62" y="74" width="34" height="6" rx="2"/>
    <rect x="62" y="84" width="34" height="5" rx="2"/>
    <rect x="63" y="74" width="5" height="20" rx="2"/>
    <rect x="90" y="74" width="5" height="20" rx="2"/>
  </g>
  <path d="M18 98h84" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
</svg>`,

/* ---------- SITUAÇÕES ---------- */

"SEMAFORO-AMARELO": `<svg viewBox="0 0 120 120" role="img" aria-label="Semáforo com a luz amarela acesa">
  <rect x="36" y="8" width="48" height="104" rx="10" fill="#20303f" stroke="#0b1520" stroke-width="4"/>
  <circle cx="60" cy="34" r="14" fill="#3a1f1f"/>
  <circle cx="60" cy="60" r="14" fill="#FFC400"/>
  <circle cx="60" cy="86" r="14" fill="#1d3327"/>
  <g stroke="#FFC400" stroke-width="4" stroke-linecap="round" opacity=".85">
    <path d="M84 60h12"/><path d="M24 60h12"/><path d="M78 43l9-8"/><path d="M33 85l9-8"/>
  </g>
</svg>`,

"AGENTE-LANTERNA": `<svg viewBox="0 0 160 120" role="img" aria-label="Agente de trânsito à noite apontando a luz da lanterna para o veículo">
  <rect x="0" y="0" width="160" height="120" rx="8" fill="#101c28"/>
  <path d="M0 96h160" stroke="#2c3d4f" stroke-width="8"/>
  <!-- feixe de luz apontado para quem olha a placa -->
  <path d="M96 56 158 26v62z" fill="#FFC400" opacity=".28"/>
  <g fill="#e8f1fa">
    <circle cx="60" cy="30" r="11"/>
    <path d="M60 43c11 0 18 7 18 17v14H42V60c0-10 7-17 18-17z"/>
    <path d="M50 74h20l5 22h-9l-6-14-6 14h-9z"/>
    <path d="M74 58l22-6 3 9-22 6z"/>
  </g>
  <rect x="94" y="48" width="14" height="16" rx="3" fill="#FFC400"/>
  <text x="12" y="24" font-family="Arial,Helvetica,sans-serif" font-size="13" fill="#9fb2c4">à noite</text>
</svg>`,

"CRUZAMENTO-1-2": `<svg viewBox="0 0 160 140" role="img" aria-label="Cruzamento sem sinalização: o veículo 1 vem pela direita do veículo 2">
  <rect x="0" y="0" width="160" height="140" rx="8" fill="#1b2735"/>
  <rect x="0" y="46" width="160" height="48" fill="#33475d"/>
  <rect x="56" y="0" width="48" height="140" fill="#33475d"/>
  <g stroke="#e8f1fa" stroke-width="3" stroke-dasharray="9 9" opacity=".7">
    <path d="M0 70h56"/><path d="M104 70h56"/><path d="M80 0v46"/><path d="M80 94v46"/>
  </g>
  <!-- veículo 1: vem pela direita -->
  <g transform="translate(122,58)">
    <rect x="0" y="0" width="30" height="22" rx="5" fill="#3d9bff"/>
    <text x="15" y="16" text-anchor="middle" font-family="Arial,Helvetica,sans-serif"
          font-size="13" font-weight="700" fill="#04101d">1</text>
  </g>
  <path d="M120 69h-10" stroke="#3d9bff" stroke-width="4" stroke-linecap="round"/>
  <polygon points="104,69 114,64 114,74" fill="#3d9bff"/>
  <!-- veículo 2: vem de baixo -->
  <g transform="translate(66,104)">
    <rect x="0" y="0" width="22" height="30" rx="5" fill="#22c55e"/>
    <text x="11" y="20" text-anchor="middle" font-family="Arial,Helvetica,sans-serif"
          font-size="13" font-weight="700" fill="#04140b">2</text>
  </g>
  <path d="M77 102v-8" stroke="#22c55e" stroke-width="4" stroke-linecap="round"/>
  <polygon points="77,88 72,98 82,98" fill="#22c55e"/>
</svg>`

};
