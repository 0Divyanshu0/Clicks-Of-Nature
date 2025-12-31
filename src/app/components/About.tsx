import { motion } from "motion/react";
import { Camera, Feather, Sun } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const values = [
  { icon: Feather, title: "Slow Process", label: "Intentional & Unrushed" },
  { icon: Sun, title: "Natural Light", label: "As It Exists" },
  { icon: Camera, title: "Story First", label: "Over Perfection" },
];

interface AboutProps {
  isDark: boolean;
}

export function About({ isDark }: AboutProps) {
  return (
    <section
      id="about"
      className={`py-16 px-4 sm:px-6 lg:px-8 transition-colors ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <ImageWithFallback
                  src="/Journal/Self.jpg"
                  alt="A quiet moment captured"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl mb-6 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              About My Work
            </h2>

            <p
              className={`text-lg sm:text-xl mb-6 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I don’t chase perfect frames. I look for moments that feel real.
            </p>

            <p
              className={`mb-4 text-sm sm:text-base leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Photography, for me, is less about capturing what’s obvious and
              more about noticing what usually goes unseen. I’m drawn to quiet
              scenes, natural light, and stories that unfold without forcing
              them.
            </p>

            <p
              className={`mb-8 text-sm sm:text-base leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              This space is my personal journal — a collection of moments,
              observations, and stories captured one frame at a time. If
              something here feels familiar, then the photograph has already
              done its job.
            </p>

            {/* Philosophy blocks */}
            <div className="grid grid-cols-3 gap-6">
              {values.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <item.icon
                    className={`w-7 h-7 mx-auto mb-2 ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  />
                  <p
                    className={`text-sm font-medium ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`text-xs ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
