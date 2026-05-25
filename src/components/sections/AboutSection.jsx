import { motion } from "framer-motion";

import vanIllustration from "../../assets/images/about/vanlife.JPG";

function AboutSection() {
  return (
    <section
      id="nosotros"
      className="
        relative
        py-32
        px-6
        bg-[#09090B]
        overflow-hidden
      "
    >
      {/* Glow background */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-[#67C7C9]/10
          blur-[140px]
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-20
          items-center
        "
      >
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow detrás de la van */}
          <div
            className="
              absolute
              inset-0
              bg-[#EFE29A]/10
              blur-3xl
              rounded-full
              scale-90
            "
          />

          <img
            src={vanIllustration}
            alt="Con la Marea Van"
            className="
              relative
              z-10
              w-full
              drop-shadow-[0_20px_80px_rgba(0,0,0,0.7)]
            "
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-[#67C7C9]
              text-sm
              mb-6
            "
          >
            Nosotros
          </p>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-black
              leading-none
              tracking-tight
              text-white
              mb-8
            "
          >
            Más que viajar,
            <span className="block text-[#EFE29A]">
              elegimos otra forma de vivir.
            </span>
          </h2>

          <div className="space-y-6 text-white/75 text-lg leading-relaxed">
            <p>
              Somos Flor y Gonza. Creamos Con la Marea Van
              para compartir nuestra vida viajando por Argentina
              mientras desarrollamos proyectos digitales,
              trabajamos remoto y construimos una vida
              más libre y consciente.
            </p>

            <p>
              Entre rutas, mates, montañas y océanos,
              combinamos creatividad, contenido,
              marketing digital y experiencias reales
              para conectar con personas y marcas
              desde un lugar auténtico.
            </p>

            <p>
              Este proyecto nació como un viaje,
              pero terminó convirtiéndose en una forma
              de entender la vida:
              movernos más lento,
              vivir más simple
              y crear desde lo que realmente somos.
            </p>
          </div>

          {/* Stats */}
          <div
            className="
              grid
              grid-cols-3
              gap-6
              mt-14
            "
          >
            <div
              className="
                p-6
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
              "
            >
              <h3 className="text-4xl font-black text-[#67C7C9]">
                6
              </h3>

              <p className="text-white/60 text-sm mt-2">
                Provincias recorridas
              </p>
            </div>

            <div
              className="
                p-6
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
              "
            >
              <h3 className="text-4xl font-black text-[#EFE29A]">
                10
              </h3>

              <p className="text-white/60 text-sm mt-2">
                Clientes acompañados
              </p>
            </div>

            <div
              className="
                p-6
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
              "
            >
              <h3 className="text-4xl font-black text-white">
                10.000
              </h3>

              <p className="text-white/60 text-sm mt-2">
                Kilómetros vividos
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;