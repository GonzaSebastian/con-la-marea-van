import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { youtubeVideos } from "../../data/videos";

function VideosSection() {
  return (
    <section
      id="videos"
      className="
        relative
        py-32
        px-6
        bg-[#0B0B0D]
        overflow-hidden
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[800px]
          h-[800px]
          bg-[#67C7C9]/5
          blur-[160px]
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
            YouTube
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
            Historias
            <span className="block text-[#EFE29A]">
              en movimiento.
            </span>
          </h2>

          <p
            className="
              mt-8
              text-white/65
              text-lg
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Compartimos rutas, experiencias,
            aprendizajes y momentos reales
            viviendo en nuestra van por Argentina.
          </p>
        </motion.div>

        {/* Videos */}
        <div className="grid lg:grid-cols-3 gap-8">

          {youtubeVideos.map((video, index) => {

            const thumbnail = `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;

            const youtubeUrl = `https://www.youtube.com/watch?v=${video.videoId}`;

            return (
              <motion.a
                key={index}
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
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
                  backdrop-blur-md
                "
              >
                {/* Imagen */}
                <div className="relative overflow-hidden">
                  
                  <img
                    src={thumbnail}
                    alt={video.title}
                    className="
                      w-full
                      aspect-video
                      object-cover
                      group-hover:scale-105
                      transition
                      duration-700
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* Play */}
                  <div
                    className="
                      absolute inset-0
                      flex items-center justify-center
                    "
                  >
                    <div
                      className="
                        w-20 h-20
                        rounded-full
                        border border-white/20
                        bg-white/10
                        backdrop-blur-xl
                        flex items-center justify-center
                        group-hover:scale-110
                        transition
                        duration-500
                      "
                    >
                      <Play
                        size={34}
                        fill="white"
                        className="text-white ml-1"
                      />
                    </div>
                  </div>

                  {/* Gradient glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition
                      duration-500
                      bg-[#67C7C9]/10
                    "
                  />
                </div>

                {/* Info */}
                <div className="p-7">

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-white
                      mb-4
                      leading-tight
                    "
                  >
                    {video.title}
                  </h3>

                  <p className="text-white/55 leading-relaxed">
                    Ver episodio en YouTube
                  </p>

                </div>

              </motion.a>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default VideosSection;