import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const portfolioItems = [
  {
    id: 1,
    image: "/Journal/red-bettle.jpeg",
    title: "Red on Green",
    category: "Nature",
    description: "A quiet moment where color and stillness meet.",
  },
  {
    id: 2,
    image: "/Journal/kerela-tea-garden.jpg",
    title: "Quiet Greens",
    category: "Nature",
    description: "Where layers of green stand still, unbothered by time.",
  },
  {
    id: 3,
    image: "/Journal/long-exposure-traffic.jpeg",
    title: "Passing Through",
    category: "Street",
    description: "Lines of light rushing forward, while the night stays still.",
  },
  {
    id: 4,
    image: "/Journal/lion.jpeg",
    title: "Silent Approach",
    category: "Wildlife",
    description: "Eyes forward, body low — movement without sound.",
  },
  {
    id: 5,
    image: "/Journal/small-purple-flower.jpeg",
    title: "Hidden Bloom",
    category: "Nature",
    description: "Soft color finding its way through the leaves.",
  },
  {
    id: 6,
    image: "/Journal/diwali-rangoli.jpeg",
    title: "Warm Ritual",
    category: "Culture",
    description: "Light resting gently on patterns made by hand.",
  },
  {
    id: 7,
    image: "/Journal/buddha-statue.jpeg",
    title: "Still Mind",
    category: "Culture",
    description: "Silence shaped in stone, holding centuries of calm.",
  },
  {
    id: 8,
    image: "/Journal/mahadev-drop.jpeg",
    title: "Red Line",
    category: "Abstract",
    description: "A thin divide between chaos and clarity.",
  },
  {
    id: 9,
    image: "/Journal/yellow-butterfly.jpeg",
    title: "Quiet Landing",
    category: "Nature",
    description: "A moment of rest, where color meets calm.",
  },
];

// ✅ Dynamic categories (auto-sync with data)
const categories = [
  "All",
  ...Array.from(new Set(portfolioItems.map((item) => item.category))),
];

interface PortfolioProps {
  isDark: boolean;
}

export function Portfolio({ isDark }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors ${
        isDark ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Moments
          </h2>

          <p
            className={`text-lg sm:text-xl ${
              isDark ? "text-gray-300" : "text-gray-600"
            } px-4`}
          >
            A quiet collection of places, people, and passing light
          </p>
        </motion.div>

        {/* Filters */}
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
                  ? isDark
                    ? "bg-white text-black"
                    : "bg-black text-white"
                  : isDark
                  ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
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
                stiffness: 100,
              }}
              className={`group relative overflow-hidden rounded-lg shadow-lg ${
                isDark ? "bg-gray-900" : "bg-white"
              }`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <motion.div
                  whileHover={{ scale: 1.05 }}
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

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredId === item.id ? 1 : 0,
                  y: hoveredId === item.id ? 0 : 20,
                }}
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6 pointer-events-none"
              >
                <span className="text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl sm:text-2xl text-white mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
