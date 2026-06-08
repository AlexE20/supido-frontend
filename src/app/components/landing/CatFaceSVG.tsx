const CatFaceSVG = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title id="catface-title">Logo de Supido Delivery — cara de gato</title>
    <rect width="60" height="60" rx="10" fill="#1E1C2E" />
    <polygon points="14,10 22,24 8,24"  fill="#2E2C45" />
    <polygon points="46,10 54,24 38,24" fill="#2E2C45" />
    <polygon points="15,12 21,23 10,23" fill="#6B68A8" opacity="0.5" />
    <polygon points="45,12 50,23 40,23" fill="#6B68A8" opacity="0.5" />
    <circle cx="30" cy="35" r="20" fill="#2E2C45" />
    <ellipse cx="22" cy="32" rx="4" ry="5" fill="#9B97CC" />
    <ellipse cx="38" cy="32" rx="4" ry="5" fill="#9B97CC" />
    <circle cx="22" cy="32" r="2.5" fill="#0D0B18" />
    <circle cx="38" cy="32" r="2.5" fill="#0D0B18" />
    <circle cx="23" cy="30.5" r="0.8" fill="white" />
    <circle cx="39" cy="30.5" r="0.8" fill="white" />
    <circle cx="30" cy="40" r="2" fill="#6B68A8" />
    <line x1="10" y1="39" x2="24" y2="40"   stroke="#6B68A8" strokeWidth="0.8" opacity="0.7" />
    <line x1="10" y1="42" x2="24" y2="41.5" stroke="#6B68A8" strokeWidth="0.8" opacity="0.7" />
    <line x1="50" y1="39" x2="36" y2="40"   stroke="#6B68A8" strokeWidth="0.8" opacity="0.7" />
    <line x1="50" y1="42" x2="36" y2="41.5" stroke="#6B68A8" strokeWidth="0.8" opacity="0.7" />
  </svg>
);

export default CatFaceSVG;