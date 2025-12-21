import { motion } from 'motion/react';
import { Briefcase, Heart, Sparkles, Users } from 'lucide-react';

interface CollaborateProps {
  isDark: boolean;
}

export function Collaborate({ isDark }: CollaborateProps) {
  return (
    <section id="collaborate" className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors ${
      isDark ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
  className={`text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 ${
    isDark ? 'text-white' : 'text-black'
  }`}
>
  Open to Collaborations
</h2>

<p className={`text-lg sm:text-xl max-w-2xl mx-auto px-4 ${
  isDark ? 'text-gray-300' : 'text-gray-600'
}`}>
  I enjoy working on ideas that feel honest, thoughtful, and meaningful
</p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`rounded-lg p-6 sm:p-8 shadow-lg ${
                isDark ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <div className="flex items-start mb-4">
                <div className={`p-3 rounded-lg mr-4 flex-shrink-0 ${
                  isDark ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? 'text-white' : 'text-black'}`} />
                </div>
                <div>
                  <h3 className={`text-xl sm:text-2xl mb-2 ${
  isDark ? 'text-white' : 'text-black'
}`}>
  {service.title}
</h3>

<p className={`text-sm sm:text-base ${
  isDark ? 'text-gray-400' : 'text-gray-600'
}`}>
  {service.description}
</p>
                </div>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-center text-sm sm:text-base ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0 ${
                      isDark ? 'bg-white' : 'bg-black'
                    }`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 sm:p-12 text-center text-white"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">Ready to Start Your Project?</h3>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Let's discuss your vision and create something amazing together
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
const services = [
  {
    icon: Heart,
    title: 'Personal Stories',
    description: 'Collaborations rooted in real moments and human connection.',
    features: [
      'Candid storytelling',
      'Natural light & environments',
      'Emotion over perfection',
    ],
  },
  {
    icon: Sparkles,
    title: 'Nature & Places',
    description: 'Exploring landscapes, streets, and quiet corners together.',
    features: [
      'Outdoor shoots',
      'Slow, observational approach',
      'Mood-focused frames',
    ],
  },
  {
    icon: Users,
    title: 'Creative Experiments',
    description: 'Open to trying ideas that don’t fit into categories.',
    features: [
      'Concept-driven shoots',
      'Minimal setups',
      'Freedom to explore',
    ],
  },
  {
    icon: Briefcase,
    title: 'Selective Projects',
    description: 'Occasional collaborations that align with my style and values.',
    features: [
      'Small-scale projects',
      'Aligned creative vision',
      'Story-first approach',
    ],
  },
];
