import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import VideosSection from "../components/sections/VideosSection";
import ServicesSection from "../components/sections/ServicesSection";
import ContactSection from "../components/sections/ContactSection";

import NoiseBackground from "../components/ui/NoiseBackground";

function Home() {
  return (
    <main className="bg-black min-h-screen">
      <NoiseBackground />
      <Navbar />

      <HeroSection />
      <AboutSection />
      <VideosSection />
      <ServicesSection />
      <ContactSection />

      <Footer />

    </main>
  );
}

export default Home;