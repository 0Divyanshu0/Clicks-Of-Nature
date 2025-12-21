import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const portfolioItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544124094-8aea0374da93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2NjE4OTg0MHww&ixlib=rb-4.1.0&q=80&w=1080',
   title: 'Golden Hour',
  category: 'People',
  description: 'Light softens everything for a moment before fading.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzY2MjMzODA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Mountain Majesty',
    category: 'Landscape',
    description: 'Breathtaking landscape photography featuring majestic mountains and pristine natural beauty.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1548566862-2c9b1fed780a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjYxODc4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Urban Architecture',
    category: 'Architecture',
    description: 'Modern architectural photography capturing the essence of contemporary urban design.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1628803184377-c5167a0cb6fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjYyMjgzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Street Stories',
    category: 'Street',
    description: 'Candid street photography that captures authentic moments and urban life narratives.',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1599462616558-2b75fd26a283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlfGVufDF8fHx8MTc2NjIxMDQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Wedding Bliss',
    category: 'Wedding',
    description: 'Beautiful wedding photography preserving the most precious moments of your special day.',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzY2MTY2MDkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Fashion Forward',
    category: 'Fashion',
    description: 'High-end fashion photography that brings style and elegance to life.',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1605702012553-e954fbde66eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMGNpdHklMjBsaWdodHN8ZW58MXx8fHwxNzY2MjI0Njk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Night Lights',
    category: 'Urban',
    description: 'Stunning night photography showcasing the vibrant energy of city lights.',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1536924430914-91f9e2041b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjE0NTUyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Artistic Vision',
    category: 'Portrait',
    description: 'Creative portrait photography that explores artistic expression and emotion.',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1519414442781-fbd745c5b497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHN1bnNldHxlbnwxfHx8fDE3NjYyMTgxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Sunset Symphony',
    category: 'Landscape',
    description: 'Dramatic landscape photography featuring spectacular sunset vistas over mountain ranges.',
  },
];

const categories = [
  'All',
  'Nature',
  'Streets',
  'People',
  'Light & Shadow',
  'Night Walks',
  'Everyday',
];


interface PortfolioProps {
  isDark: boolean;
}

export function Portfolio({ isDark }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors ${
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
  Moments
</h2>

<p className={`text-lg sm:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} px-4`}>
  A quiet collection of places, people, and passing light
</p>

        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-2 rounded-full transition-all text-sm sm:text-base ${
                selectedCategory === category
                  ? isDark ? 'bg-white text-black' : 'bg-black text-white'
                  : isDark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              className={`group relative overflow-hidden rounded-lg shadow-lg ${
                isDark ? 'bg-gray-900' : 'bg-white'
              }`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <motion.div
  whileHover={{ scale: 1.1 }}
  transition={{ duration: 0.5 }}
  className="w-full h-full"
>
  <ImageWithFallback
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover"
  />
</motion.div>

              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredId === item.id ? 1 : 0,
                  y: hoveredId === item.id ? 0 : 20,
                }}
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6 pointer-events-none"
              >
                <span className="text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2">{item.category}</span>
                <h3 className="text-xl sm:text-2xl text-white mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}