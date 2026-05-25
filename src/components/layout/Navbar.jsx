import { useState } from "react";

import { Link } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import { Menu, X } from "lucide-react";

import logo from "../../assets/images/logos/logo-marea.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Nosotros",
      href: "#nosotros",
    },
    {
      name: "Videos",
      href: "#videos",
    },
    {
      name: "Proyectos",
      href: "#servicios",
    },
    {
      name: "Contacto",
      href: "#contacto",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <header
        className="
          fixed
          top-0
          left-0
          w-full
          z-50
          px-4
          py-4
        "
      >
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="
              flex
              items-center
              justify-between
              px-6
              py-4
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              shadow-[0_0_30px_rgba(0,0,0,0.2)]
            "
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-4"
            >
              <img
                src={logo}
                alt="Con la Marea Van"
                className="
                  w-12
                  object-contain
                "
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="
                hidden
                md:flex
                items-center
                gap-10
              "
            >
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="
                    relative
                    text-white/70
                    hover:text-white
                    transition
                    text-sm
                    uppercase
                    tracking-[0.15em]
                    group
                  "
                >
                  {link.name}

                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      w-0
                      h-[1px]
                      bg-[#67C7C9]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </a>
              ))}
            </nav>

            {/* Mobile Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="
                md:hidden
                w-12 h-12
                rounded-2xl
                border border-white/10
                bg-white/5
                flex items-center justify-center
                text-white
              "
            >
              <Menu size={24} />
            </button>
          </motion.div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="
              fixed
              inset-0
              z-[999]
              bg-black/90
              backdrop-blur-3xl
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
                w-[500px]
                h-[500px]
                bg-[#67C7C9]/10
                blur-[120px]
                rounded-full
              "
            />

            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="
                absolute
                top-6
                right-6
                w-14 h-14
                rounded-2xl
                border border-white/10
                bg-white/5
                flex items-center justify-center
                text-white
              "
            >
              <X size={28} />
            </button>

            {/* Menu Content */}
            <div
              className="
                relative
                h-full
                flex
                flex-col
                items-center
                justify-center
                gap-10
              "
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                  }}
                  className="
                    text-4xl
                    md:text-6xl
                    font-black
                    tracking-tight
                    text-white
                    hover:text-[#67C7C9]
                    transition
                  "
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Bottom Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.5,
                }}
                className="
                  absolute
                  bottom-12
                  text-center
                "
              >
                <p
                  className="
                    text-white/40
                    uppercase
                    tracking-[0.3em]
                    text-xs
                  "
                >
                  Viajar • Crear • Compartir
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;