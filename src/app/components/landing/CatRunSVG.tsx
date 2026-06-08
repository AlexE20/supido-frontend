interface CatRunSVGProps {
  className?: string;
  style?: React.CSSProperties;
}

const CatRunSVG = ({ className = "", style }: CatRunSVGProps) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 300 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="catrun-title"
  >
    <title id="catrun-title">Gato corriendo — mascota de Supido Delivery</title>
    <ellipse cx="160" cy="155" rx="65" ry="50" fill="#6B2FCC" />
    <circle cx="105" cy="120" r="52" fill="#7B3FDC" />
    <polygon points="80,75 92,100 68,100"  fill="#6B2FCC" />
    <polygon points="130,70 142,98 118,98" fill="#6B2FCC" />
    <polygon points="82,78 90,96 74,96"    fill="#C891F0" opacity="0.6" />
    <polygon points="130,73 140,96 120,96" fill="#C891F0" opacity="0.6" />
    <polygon points="165,75 155,95 163,95 153,115 172,92 163,92 174,75" fill="#A86FFF" opacity="0.8" />
    <ellipse cx="93"  cy="118" rx="11" ry="13" fill="white" />
    <ellipse cx="118" cy="115" rx="11" ry="13" fill="white" />
    <circle cx="96"  cy="119" r="7" fill="#6B2FCC" />
    <circle cx="121" cy="116" r="7" fill="#6B2FCC" />
    <circle cx="98"  cy="116" r="2.5" fill="white" />
    <circle cx="123" cy="113" r="2.5" fill="white" />
    <ellipse cx="80"  cy="130" rx="10" ry="5" fill="#C891F0" opacity="0.3" />
    <ellipse cx="132" cy="127" rx="10" ry="5" fill="#C891F0" opacity="0.3" />
    <ellipse cx="106" cy="132" rx="5"  ry="3" fill="#C891F0" />
    <path d="M92 140 Q106 152 122 140" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <line x1="94"  y1="140" x2="90"  y2="148" stroke="white" strokeWidth="2" />
    <line x1="120" y1="140" x2="124" y2="148" stroke="white" strokeWidth="2" />
    <line x1="50"  y1="126" x2="85"  y2="128" stroke="white" strokeWidth="1.5" opacity="0.7" />
    <line x1="50"  y1="133" x2="85"  y2="131" stroke="white" strokeWidth="1.5" opacity="0.7" />
    <line x1="130" y1="127" x2="164" y2="124" stroke="white" strokeWidth="1.5" opacity="0.7" />
    <line x1="130" y1="133" x2="164" y2="131" stroke="white" strokeWidth="1.5" opacity="0.7" />
    <rect x="60" y="160" width="22" height="80" rx="11" fill="#5A1FB8" transform="rotate(-20, 71, 160)" />
    <ellipse cx="55"  cy="232" rx="14" ry="8" fill="#4A1A99" />
    <rect x="195" y="165" width="22" height="60" rx="11" fill="#5A1FB8" transform="rotate(15, 206, 165)" />
    <ellipse cx="210" cy="218" rx="14" ry="8" fill="#4A1A99" />
    <path d="M220 140 Q270 100 255 160 Q245 200 230 185" stroke="#5A1FB8" strokeWidth="18" fill="none" strokeLinecap="round" />
  </svg>
);

export default CatRunSVG;
