import { motion } from "motion/react";
import { Camera, Heart } from "lucide-react";
import { NAV_ITEMS, scrollToSection } from "../navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black px-4 py-10 text-white transition-colors sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:mb-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <div className="mb-4 flex items-center justify-center sm:justify-start">
              <Camera className="mr-2 h-5 w-5 opacity-80 sm:h-6 sm:w-6" />
              <span className="text-xl tracking-wide sm:text-2xl">
                Clicks of Nature
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
              A quiet photography journal, capturing nature, moments, and
              everyday stories, one frame at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center sm:text-left"
          >
            <h4 className="mb-4 text-sm text-gray-300 sm:text-base">Navigate</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-gray-400 transition-colors hover:text-white sm:text-base"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center sm:col-span-2 sm:text-left lg:col-span-1"
          >
            <h4 className="mb-4 text-sm text-gray-300 sm:text-base">
              A small note
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
              Thanks for spending a moment here. If something resonated with
              you, I&apos;m glad our paths crossed.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 sm:flex-row sm:pt-8"
        >
          <p className="text-center text-xs text-gray-500 sm:text-left sm:text-sm">
            Copyright {currentYear} Clicks of Nature - Divyanshu Srivastava
          </p>
          <p className="flex items-center text-xs text-gray-500 sm:text-sm">
            Made with <Heart className="mx-1 h-3 w-3 text-red-500 sm:h-4 sm:w-4" /> and
            patience
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
