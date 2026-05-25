import { motion } from "framer-motion";
import heroVideo from "../../assets/videos/hero/hero.mp4";

function HeroSection() {
  return (
    <section className="
      relative
      h-screen
      overflow-hidden
      flex items-center justify-center
    ">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute inset-0
          w-full h-full
          object-cover
        "
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="
        absolute inset-0
        bg-black/60
      " />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          relative z-10
          text-center
          px-6
          max-w-6xl
        "
      >

        <p className="
          uppercase
          tracking-[0.4em]
          text-[#67C7C9]
          text-sm
          mb-6
        ">
          Viajar • Crear • Compartir
        </p>

        <h1 className="
          text-6xl
          md:text-8xl
          font-black
          leading-none
          tracking-tight
          text-white
        ">
          Vivimos
          <span className="block text-[#EFE29A]">
            Con la Marea
          </span>
        </h1>

        <p className="
          mt-8
          text-lg md:text-2xl
          text-white/80
          max-w-3xl
          mx-auto
          leading-relaxed
        ">
          Una vida en movimiento entre rutas,
          creatividad y proyectos digitales.
        </p>

      </motion.div>

    </section>
  );
}

export default HeroSection;