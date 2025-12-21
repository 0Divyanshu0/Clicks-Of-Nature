import { motion } from 'motion/react';
import { Camera, Heart } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 sm:py-12 px-4 sm:px-6 lg:px-8 transition-colors ${
      isDark ? 'bg-black text-white' : 'bg-gray-900 text-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <div className="flex items-center mb-4 justify-center sm:justify-start">
              <Camera className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              <span className="text-xl sm:text-2xl">LENS</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400">
              Professional photography services capturing life's most beautiful moments.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center sm:text-left"
          >
            <h4 className="text-base sm:text-lg mb-4">Quick Links</h4>
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

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center sm:text-left sm:col-span-2 lg:col-span-1"
          >
            <h4 className="text-base sm:text-lg mb-4">Stay Updated</h4>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              Subscribe to get updates on new projects and photography tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className={`flex-1 px-4 py-2 rounded-lg sm:rounded-l-lg sm:rounded-r-none border focus:outline-none focus:border-gray-500 text-sm sm:text-base ${
                  isDark 
                    ? 'bg-gray-900 text-white border-gray-800' 
                    : 'bg-gray-800 text-white border-gray-700'
                }`}
              />
              <button className="px-4 sm:px-6 py-2 bg-white text-black rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-gray-100 transition-colors text-sm sm:text-base whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm sm:text-base text-gray-400 text-center sm:text-left">
            © {currentYear} LENS Photography. All rights reserved.
          </p>
          <p className="text-sm sm:text-base text-gray-400 flex items-center">
            Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 mx-1 text-red-500" /> for photography lovers
          </p>
        </motion.div>
      </div>
    </footer>
  );
}