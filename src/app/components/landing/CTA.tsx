import { Reveal } from "./SectionUI";
import { BtnPrimary, BtnSecondary } from "./Buttons";
import ArrowRight from "./ArrowRight";
import CatCtaSVG from "./CatCTASVG";

const CTA = () => (
  <section
    id="contacto"
    className="relative py-16 lg:py-24 px-6 md:px-12 text-center overflow-hidden bg-[var(--color-suido-0)]"
  >
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px]
                  rounded-full bg-[var(--color-suido-cat)]/15
                  blur-3xl pointer-events-none"
    />
    <Reveal className="relative z-10 max-w-xl mx-auto">
      <CatCtaSVG
        className="w-24 md:w-28 mx-auto mb-6"
        style={{
          animation: "var(--animate-float-cat)",
          filter: "drop-shadow(0 0 20px rgba(168,111,255,0.5))",
        }}
      />
      <h2
        className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white
                   tracking-tight leading-[1.1] mb-4"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        ¿Listo para quitarte
        <br />
        el <span className="text-[var(--color-suido-accent)]">antojo</span>?
      </h2>
      <p
        className="text-[0.95rem] md:text-base text-[var(--color-suido-4)] leading-relaxed mb-8 md:mb-10 px-4"
        style={{ fontFamily: "var(--font-dm)" }}
      >
       Visita nuestra pagina web para explorar nuestras opciones y no dejar que el hambre sea un problema
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto px-4">
        <BtnPrimary href="#" className="w-full sm:w-auto">
          Visitar la pagina <ArrowRight />
        </BtnPrimary>
      </div>
    </Reveal>
  </section>
);

export default CTA;
