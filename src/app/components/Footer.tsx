import { motion } from 'motion/react';
import { Camera, Heart } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-10 sm:py-14 px-4 sm:px-6 lg:px-8 transition-colors ${
        isDark ? 'bg-black text-white' : 'bg-gray-900 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">
          
          {/* Brand / Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <div className="flex items-center mb-4 justify-center sm:justify-start">
              <Camera className="w-5 h-5 sm:w-6 sm:h-6 mr-2 opacity-80" />
              <span className="text-xl sm:text-2xl tracking-wide">
                Clicks of Nature
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              A quiet photography journal — capturing nature, moments,
              and everyday stories, one frame at a time.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center sm:text-left"
          >
            <h4 className="text-sm sm:text-base mb-4 text-gray-300">
              Navigate
            </h4>
            <ul className="space-y-2">
              {['Home', 'Portfolio', 'About', 'Collaborate', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      document
                        .getElementById(link.toLowerCase())
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Closing Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center sm:text-left sm:col-span-2 lg:col-span-1"
          >
            <h4 className="text-sm sm:text-base mb-4 text-gray-300">
              A small note
            </h4>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Thanks for spending a moment here.
              If something resonated with you, I’m glad our paths crossed.
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            © {currentYear} Clicks of Nature - Divyanshu Srivastava
          </p>
          <p className="text-xs sm:text-sm text-gray-500 flex items-center">
            Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 mx-1 text-red-500" /> and patience
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
