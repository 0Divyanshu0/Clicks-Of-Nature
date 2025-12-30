import { motion, useScroll, useTransform } from "motion/react";
import { Camera } from "lucide-react";

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  const { scrollY } = useScroll();

  // Disable heavy parallax on mobile
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="home"
      className={`relative min-h-[100svh] flex items-center justify-center overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-gray-900 to-black"
          : "bg-gradient-to-br from-gray-900 to-gray-800"
      }`}
    >
      {/* Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-50 hidden sm:block"
      >
        <div className="absolute inset-0 bg-[url('/Journal/Hero.jpg')] bg-cover bg-center" />
      </motion.div>

      {/* Static background for mobile */}
      <div className="absolute inset-0 opacity-50 sm:hidden bg-[url('/Journal/Hero.jpg')] bg-cover bg-center" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-3 sm:mb-6 inline-block"
        >
          <Camera size={40} className="text-white opacity-80" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 leading-snug"
        >
          No Wi-Fi,
          <br />
          Just Better Connections
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-2"
        >
          A personal photography journal — capturing quiet moments, nature, and
          everyday stories, one frame at a time.
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 sm:px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base"
          onClick={() => {
            document
              .getElementById("portfolio")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore Moments
        </motion.button>
      </motion.div>

      {/* Scroll Indicator (desktop only) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/70 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
