const Footer = () => (
  <footer
    className="bg-[var(--color-suido-1)] border-t border-[var(--color-suido-3)]/15
               px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
  >
    <div className="text-center md:text-left">
      <div
        className="text-xl font-extrabold text-white tracking-tight"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        Supi<span className="text-[var(--color-suido-accent)]">|</span>do
      </div>
      <div
        className="text-[0.75rem] md:text-[0.78rem] text-[var(--color-suido-3)] mt-2 md:mt-1"
        style={{ fontFamily: "var(--font-dm)" }}
      >
        © 2026 Supido Delivery App. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
