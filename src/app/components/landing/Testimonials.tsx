import { Reveal, SectionBadge, SectionTitle } from "./SectionUI";

const Testimonials = () => (
  <section id="opiniones" className="bg-[var(--color-suido-1)] py-16 lg:py-24 px-6 md:px-12 lg:px-16">
    <div className="max-w-6xl mx-auto">
      <Reveal className="text-center mb-12 lg:mb-14">
        <SectionBadge>Opiniones Reales</SectionBadge>
        <SectionTitle>Nuestros usuarios mandan</SectionTitle>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { init: "CM", name: "Carlos M.", role: "Usuario Supido Prime", text: "Increíble lo rápido que llega la comida. Los repartidores siempre son muy amables y mi pizza llegó hirviendo." },
          { init: "AV", name: "Ana V.",    role: "Dueña de negocio",    text: "Uso la sección de envíos para mandar documentos importantes de mi oficina y jamás me han fallado. Muy confiable." },
          { init: "DR", name: "David R.",  role: "Cliente frecuente",   text: "La app es súper fácil de usar y siempre encuentro promociones en mis restaurantes favoritos. Me salva en el trabajo." },
        ].map(({ init, name, role, text }, i) => (
          <Reveal
            key={name}
            delay={i * 100}
            className="bg-[var(--color-suido-0)] border border-[var(--color-suido-3)]/20
                       rounded-2xl p-6 lg:p-8 hover:border-[var(--color-suido-3)]/45
                       transition-colors duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="text-[var(--color-suido-accent)] tracking-[2px] text-sm mb-4">
                ★★★★★
              </div>
              <p
                className="text-[0.85rem] md:text-[0.9rem] leading-[1.75] text-[var(--color-suido-4)] italic mb-6"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                &ldquo;{text}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3 mt-auto">
              <div
                className="w-10 h-10 rounded-full bg-[var(--color-suido-2)]
                            border border-[var(--color-suido-3)]/30
                            flex items-center justify-center flex-shrink-0
                            text-[0.8rem] font-bold text-[var(--color-suido-accent)]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {init}
              </div>
              <div>
                <div
                  className="text-[0.88rem] font-semibold text-white"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {name}
                </div>
                <div className="text-[0.75rem] text-[var(--color-suido-3)]">{role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
