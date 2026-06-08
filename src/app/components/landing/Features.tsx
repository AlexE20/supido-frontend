import { Reveal, SectionBadge, SectionTitle } from "./SectionUI";
import { BtnPrimary } from "./Buttons";

const Features = () => (
  <section
    id="servicios"
    className="py-16 lg:py-24 px-6 md:px-12 lg:px-16 bg-[var(--color-suido-0)] overflow-hidden"
  >
    <div className="max-w-6xl mx-auto">
      <Reveal className="text-center lg:text-left">
        <SectionBadge>Nuestros servicios</SectionBadge>
        <SectionTitle>
          Llevamos tu ciudad <br className="hidden lg:block" /> a tu bolsillo
        </SectionTitle>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-10 lg:mt-16">
        {/* Grid de tarjetas */}
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Tarjeta destacada */}
            <div
              className="col-span-1 sm:col-span-2 bg-gradient-to-br from-[var(--color-suido-cat)]/25
                          to-[var(--color-suido-2)]/80 border border-[var(--color-suido-cat)]/40
                          rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="text-2xl mb-3">⚡</div>
              <div
                className="text-[1rem] md:text-[0.95rem] font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Supido al alcance de tu mano
              </div>
              <div
                className="text-[0.85rem] text-[var(--color-suido-3)] leading-relaxed"
                style={{ fontFamily: "var(--font-dm)" }}
              >
               ¿Tienes un antojo de algo en especial? Pide lo que quieras y nosotros vamos por ti.
              </div>
            </div>

            {[
              { icon: "🍔", name: "Restaurantes", desc: "Tus platillos favoritos calientes." },
              { icon: "🛍️", name: "Tiendas",      desc: "Lo que necesites de tiendas locales." },
            ].map(({ icon, name, desc }) => (
              <div
                key={name}
                className="bg-[var(--color-suido-1)] border border-[var(--color-suido-3)]/20
                           rounded-2xl p-6 hover:border-[var(--color-suido-accent)]/40
                           hover:scale-[1.02] transition-all duration-200"
              >
                <div className="text-2xl mb-3">{icon}</div>
                <div
                  className="text-[0.95rem] font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {name}
                </div>
                <div
                  className="text-[0.82rem] text-[var(--color-suido-3)] leading-relaxed"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Lista de ventajas */}
        <Reveal delay={200} className="lg:pl-4">
          <p
            className="text-[0.95rem] md:text-base leading-relaxed text-[var(--color-suido-4)] mb-8 text-center lg:text-left"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            Nos adaptamos a tu estilo de vida. Ya sea que no tengas tiempo de cocinar,
            necesites abastecer la nevera o requieras algo urgente de la farmacia.
          </p>
          <ul className="space-y-6">
            {[
              { title: "Sin pedido mínimo",   desc: "Pide desde un café hasta la cena para toda la familia sin recargos sorpresa." },
              { title: "Soporte humano 24/7", desc: "¿Problemas con tu orden? Habla con personas reales que te darán solución al instante." },
              { title: "Supido Prime",         desc: "Suscríbete y obtén envíos gratis ilimitados, además de descuentos exclusivos." },
            ].map(({ title, desc }) => (
              <li key={title} className="flex gap-4 items-start">
                <div
                  className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-[var(--color-suido-cat)]/20
                              border border-[var(--color-suido-cat)]/40
                              flex items-center justify-center flex-shrink-0 mt-0.5
                              text-[var(--color-suido-accent)] text-xs font-bold"
                >
                  ✓
                </div>
                <div>
                  <div
                    className="text-[0.95rem] md:text-base font-semibold text-white mb-1"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {title}
                  </div>
                  <div
                    className="text-[0.85rem] md:text-[0.88rem] text-[var(--color-suido-4)] leading-relaxed"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {desc}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Features;
