import { motion } from "motion/react";
import { Camera, Feather, Sun } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const values = [
  { icon: Feather, title: "Slow Process", label: "Intentional & Unrushed" },
  { icon: Sun, title: "Natural Light", label: "As It Exists" },
  { icon: Camera, title: "Story First", label: "Over Perfection" },
];

export function About() {
  return (
    <section
      id="about"
      className="bg-gray-900 px-4 py-16 transition-colors sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="h-full w-full"
              >
                <ImageWithFallback
                  src="/Journal/Self.jpg"
                  alt="A quiet moment captured"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl text-white sm:text-4xl lg:text-5xl">
              About My Work
            </h2>

            <p className="mb-6 text-lg text-gray-300 sm:text-xl">
              I don't chase perfect frames. I look for moments that feel real.
            </p>

            <p className="mb-4 text-sm leading-relaxed text-gray-400 sm:text-base">
              Photography, for me, is less about capturing what's obvious and
              more about noticing what usually goes unseen. I'm drawn to quiet
              scenes, natural light, and stories that unfold without forcing
              them.
            </p>

            <p className="mb-8 text-sm leading-relaxed text-gray-400 sm:text-base">
              This space is my personal journal - a collection of moments,
              observations, and stories captured one frame at a time. If
              something here feels familiar, then the photograph has already
              done its job.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {values.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <item.icon className="mx-auto mb-2 h-7 w-7 text-white" />
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
