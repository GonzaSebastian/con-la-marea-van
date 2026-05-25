import { motion } from "framer-motion";

import {
  Megaphone,
  HeartPulse,
  Languages,
  ShoppingBag,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description:
      "Ayudamos a marcas y emprendimientos a comunicar desde un lugar más humano, auténtico y estratégico.",
    color: "#67C7C9",
  },

  {
    icon: HeartPulse,
    title: "Nutrición",
    description:
      "Consultas online con una mirada flexible, consciente y adaptada a cada estilo de vida.",
    color: "#EFE29A",
  },

  {
    icon: Languages,
    title: "Clases de Inglés",
    description:
      "Aprender inglés de forma práctica, relajada y enfocada en comunicación real.",
    color: "#3C972C",
  },

  {
    icon: ShoppingBag,
    title: "Tienda Artesanal",
    description:
      "Objetos y creaciones inspiradas en los viajes, la naturaleza y la vida en movimiento.",
    color: "#67C7C9",
  },
];

function ServicesSection() {
  return (
    <section
      id="servicios"
      className="
        relative
        py-32
        px-6
        bg-[#09090B]
        overflow-hidden
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          bottom-0
          right-0
          w-[600px]
          h-[600px]
          bg-[#EFE29A]/5
          blur-[140px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
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
            Lo que hacemos
          </p>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-black
              leading-none
              tracking-tight
              text-white
            "
          >
            Proyectos
            <span className="block text-[#EFE29A]">
              que nos acompañan.
            </span>
          </h2>

          <p
            className="
              mt-8
              text-white/65
              text-lg
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Entre rutas y kilómetros construimos
            proyectos que mezclan creatividad,
            bienestar, comunicación y estilo de vida.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                "
              >
                {/* Glow hover */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                  "
                  style={{
                    background: `${service.color}10`,
                  }}
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    w-16 h-16
                    rounded-2xl
                    flex items-center justify-center
                    mb-8
                    border border-white/10
                    bg-black/20
                  "
                  style={{
                    color: service.color,
                  }}
                >
                  <Icon size={30} />
                </div>

                {/* Content */}
                <div className="relative">

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-white
                      mb-5
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      text-white/60
                      leading-relaxed
                    "
                  >
                    {service.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default ServicesSection;