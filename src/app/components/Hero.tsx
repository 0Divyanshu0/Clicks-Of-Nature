import { motion, useScroll, useTransform } from "motion/react";
import { Camera } from "lucide-react";
import { scrollToSection } from "../navigation";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 hidden opacity-50 sm:block"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Journal/hero2.jpg')" }}
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 sm:hidden"
        style={{ backgroundImage: "url('/Journal/Hero.jpg')" }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-3 inline-block sm:mb-6"
        >
          <Camera size={40} className="text-white opacity-80" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4 text-3xl leading-snug text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
        >
          No Wi-Fi,
          <br />
          Just Better Connections
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6 px-2 text-base text-gray-300 sm:mb-8 sm:text-lg md:text-xl"
        >
          A personal photography journal - capturing quiet moments, nature, and
          everyday stories, one frame at a time.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-white px-6 py-3 text-sm text-black transition-colors hover:bg-gray-100 sm:px-8 sm:text-base"
          onClick={() => scrollToSection("portfolio")}
        >
          Explore Moments
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/70 p-2"
        >
          <div className="h-2 w-1 rounded-full bg-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
