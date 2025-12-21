import { motion } from 'motion/react';
import { Award, Camera, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { icon: Camera, value: '500+', label: 'Projects Completed' },
  { icon: Users, value: '300+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Awards Won' },
];

interface AboutProps {
  isDark: boolean;
}

export function About({ isDark }: AboutProps) {
  return (
    <section id="about" className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.4 }}
  className="w-full h-full"
>
  <ImageWithFallback
    src="https://images.unsplash.com/photo-1536924430914-91f9e2041b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjE0NTUyMXww&ixlib=rb-4.1.0&q=80&w=1080"
    alt="About the photographer"
    className="w-full h-full object-cover"
  />
</motion.div>

            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 p-6 sm:p-8 rounded-lg shadow-xl ${
                isDark ? 'bg-white text-black' : 'bg-black text-white'
              }`}
            >
              <p className="text-3xl sm:text-4xl mb-1">10+</p>
              <p className="text-xs sm:text-sm">Years Experience</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              A Little About My Work
            </h2>
            <p className={`text-lg sm:text-xl mb-4 sm:mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Photography, for me, is less about perfection and more about presence.
            </p>
            <p className={`mb-4 sm:mb-6 text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              I’ve spent years quietly observing people, places, and fleeting moments — 
              from calm mornings in nature to unplanned scenes on the street. 
              Some frames are carefully composed, others are instinctive, but all of them
              begin with curiosity.

            </p>
            <p className={`mb-6 sm:mb-8 text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              I’m drawn to natural light, honest expressions, and stories that don’t try too hard.
              I photograph what feels real — moments that might otherwise pass unnoticed.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`} />
                  <p className={`text-xl sm:text-2xl mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                    {stat.value}
                  </p>
                  <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
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