import { Reveal, SectionBadge, SectionTitle } from "./SectionUI";

const HowItWorks = () => (
  <section id="como-funciona" className="bg-[var(--color-suido-1)] py-16 lg:py-24 px-6 md:px-12 lg:px-16">
    <div className="max-w-6xl mx-auto">
      <Reveal className="text-center mb-12 lg:mb-16">
        <SectionBadge>Cómo funciona</SectionBadge>
        <SectionTitle>Pedir nunca fue tan fácil</SectionTitle>
        <p
          className="text-[var(--color-suido-4)] text-[0.95rem] md:text-base leading-relaxed max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-dm)" }}
        >
          Desde que sientes hambre hasta que damos el primer toque en tu puerta.
          Un proceso diseñado para que no pierdas ni un segundo.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
        {/* Línea conectora (solo desktop) */}
        <div className="absolute top-[52px] left-[calc(16.66%+30px)] right-[calc(16.66%+30px)]
                        h-px bg-[var(--color-suido-3)]/40 z-0 hidden md:block" />

        {[
          { n: "01", title: "Elige tu antojo",     desc: "Navega por restaurantes y mercados locales. Filtra categoria o tu opcion preferida." },
          { n: "02", title: "Preparamos tu orden", desc: "El comercio recibe y prepara tu pedido al instante. Te notificamos el proceso." },
          { n: "03", title: "Recibe en tu puerta", desc: "Nuestro repartidor te lo lleva volando. Sigue la ruta en el mapa en tiempo real desde la app." },
        ].map(({ n, title, desc }, i) => (
          <Reveal
            key={n}
            delay={i * 100}
            className="relative z-10 bg-[var(--color-suido-0)]
                       border border-[var(--color-suido-3)]/20 rounded-2xl p-8 lg:p-10
                       hover:border-[var(--color-suido-3)]/50 hover:-translate-y-1.5
                       transition-all duration-300 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <div
              className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] bg-[var(--color-suido-2)]
                          border border-[var(--color-suido-3)]/30 rounded-xl
                          flex items-center justify-center mb-5 md:mb-6
                          text-[1.1rem] md:text-[1.3rem] font-bold text-[var(--color-suido-accent)]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {n}
            </div>
            <h3
              className="text-[1.1rem] md:text-[1.2rem] font-bold text-white tracking-tight mb-3"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {title}
            </h3>
            <p
              className="text-[0.85rem] md:text-[0.9rem] leading-relaxed text-[var(--color-suido-3)]"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              {desc}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
