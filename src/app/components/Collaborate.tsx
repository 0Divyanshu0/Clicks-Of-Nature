import { motion } from "motion/react";
import { Briefcase, Heart, Sparkles, Users } from "lucide-react";
import { scrollToSection } from "../navigation";

const services = [
  {
    icon: Heart,
    title: "Personal Stories",
    description: "Collaborations rooted in real moments and human connection.",
    features: [
      "Candid storytelling",
      "Natural light & environments",
      "Emotion over perfection",
    ],
  },
  {
    icon: Sparkles,
    title: "Nature & Places",
    description: "Exploring landscapes, streets, and quiet corners together.",
    features: [
      "Outdoor shoots",
      "Slow, observational approach",
      "Mood-focused frames",
    ],
  },
  {
    icon: Users,
    title: "Creative Experiments",
    description: "Open to trying ideas that don't fit into categories.",
    features: [
      "Concept-driven shoots",
      "Minimal setups",
      "Freedom to explore",
    ],
  },
  {
    icon: Briefcase,
    title: "Selective Projects",
    description: "Occasional collaborations that align with my style and values.",
    features: [
      "Small-scale projects",
      "Aligned creative vision",
      "Story-first approach",
    ],
  },
];

export function Collaborate() {
  return (
    <section
      id="collaborate"
      className="bg-gray-800 px-4 py-12 transition-colors sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center sm:mb-12"
        >
          <h2 className="mb-3 text-3xl text-white sm:mb-4 sm:text-4xl lg:text-5xl">
            Open to Collaborations
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-lg text-gray-300 sm:text-xl">
            I enjoy working on ideas that feel honest, thoughtful, and meaningful
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-6 sm:mb-16 sm:gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-lg bg-gray-900 p-6 shadow-lg sm:p-8"
            >
              <div className="mb-4 flex items-start">
                <div className="mr-4 flex-shrink-0 rounded-lg bg-gray-800 p-3">
                  <service.icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl text-white sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm text-gray-300 sm:text-base"
                  >
                    <div className="mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-center text-white sm:p-12"
        >
          <h3 className="mb-3 text-2xl sm:mb-4 sm:text-3xl lg:text-4xl">
            Ready to Start Your Project?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl px-4 text-lg text-gray-300 sm:mb-8 sm:text-xl">
            Let&apos;s discuss your vision and create something amazing together
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-white px-6 py-3 text-sm text-black transition-colors hover:bg-gray-100 sm:px-8 sm:text-base"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
