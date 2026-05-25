import { motion } from "framer-motion";

import {
  Instagram,
  Mail,
  MessageCircle,
  Youtube,
} from "lucide-react";

function ContactSection() {
  return (
    <section
      id="contacto"
      className="
        relative
        py-32
        px-6
        bg-[#0B0B0D]
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[900px]
          h-[900px]
          bg-[#67C7C9]/5
          blur-[180px]
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
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
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
            Contacto
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
            Construyamos
            <span className="block text-[#EFE29A]">
              algo juntos.
            </span>
          </h2>

          <p
            className="
              text-white/65
              text-lg
              leading-relaxed
              max-w-xl
              mb-12
            "
          >
            Si conectás con nuestra forma de crear,
            viajar y comunicar,
            podés escribirnos para colaborar,
            trabajar juntos o simplemente saludarnos
            desde cualquier parte del mundo.
          </p>

          {/* Social Links */}
          <div className="space-y-5">
            
            <a
              href="https://instagram.com/conlamareavan"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex items-center gap-5
                p-5
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                hover:border-[#67C7C9]/40
                transition
              "
            >
              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  flex items-center justify-center
                  bg-[#67C7C9]/10
                  text-[#67C7C9]
                "
              >
                <Instagram size={28} />
              </div>

              <div>
                <p className="text-white font-semibold">
                  Instagram
                </p>

                <p className="text-white/50 text-sm">
                  @conlamareavan
                </p>
              </div>
            </a>

            <a
              href="mailto:hola@conlamareavan.com"
              className="
                group
                flex items-center gap-5
                p-5
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                hover:border-[#EFE29A]/40
                transition
              "
            >
              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  flex items-center justify-center
                  bg-[#EFE29A]/10
                  text-[#EFE29A]
                "
              >
                <Mail size={28} />
              </div>

              <div>
                <p className="text-white font-semibold">
                  Email
                </p>

                <p className="text-white/50 text-sm">
                  conlamarea.van@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://youtube.com/@conlamareavan"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex items-center gap-5
                p-5
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                hover:border-[#3C972C]/40
                transition
              "
            >
              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  flex items-center justify-center
                  bg-[#3C972C]/10
                  text-[#3C972C]
                "
              >
                <Youtube size={28} />
              </div>

              <div>
                <p className="text-white font-semibold">
                  YouTube
                </p>

                <p className="text-white/50 text-sm">
                  Con la Marea Van
                </p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            relative
            rounded-[2.5rem]
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            p-8 md:p-10
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              inset-0
              rounded-[2.5rem]
              bg-gradient-to-br
              from-[#67C7C9]/5
              via-transparent
              to-[#EFE29A]/5
              pointer-events-none
            "
          />

          <div className="relative">
            
            <div className="flex items-center gap-4 mb-10">
              
              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-[#67C7C9]/10
                  flex items-center justify-center
                  text-[#67C7C9]
                "
              >
                <MessageCircle size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Hablemos
                </h3>

                <p className="text-white/50">
                  Respondemos lo antes posible.
                </p>
              </div>

            </div>

            <form className="space-y-6">
              
              <div>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="
                    w-full
                    rounded-2xl
                    border border-white/10
                    bg-black/20
                    px-6 py-4
                    text-white
                    placeholder:text-white/30
                    outline-none
                    focus:border-[#67C7C9]/40
                    transition
                  "
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Tu email"
                  className="
                    w-full
                    rounded-2xl
                    border border-white/10
                    bg-black/20
                    px-6 py-4
                    text-white
                    placeholder:text-white/30
                    outline-none
                    focus:border-[#67C7C9]/40
                    transition
                  "
                />
              </div>

              <div>
                <textarea
                  rows="6"
                  placeholder="Contanos sobre tu proyecto..."
                  className="
                    w-full
                    rounded-2xl
                    border border-white/10
                    bg-black/20
                    px-6 py-4
                    text-white
                    placeholder:text-white/30
                    outline-none
                    resize-none
                    focus:border-[#67C7C9]/40
                    transition
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-[#67C7C9]
                  text-black
                  font-bold
                  text-lg
                  hover:scale-[1.02]
                  transition
                "
              >
                Enviar mensaje
              </button>

            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;