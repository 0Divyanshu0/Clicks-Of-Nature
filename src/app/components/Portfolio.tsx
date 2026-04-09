import { useState } from "react";
import { motion } from "motion/react";
import { portfolioCategories, portfolioItems } from "../../data/portfolio";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="portfolio"
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
            Moments
          </h2>

          <p className="px-4 text-lg text-gray-300 sm:text-xl">
            A quiet collection of places, people, and passing light
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-2 px-2 sm:mb-12 sm:gap-3"
        >
          {portfolioCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-4 py-2 text-sm transition-all sm:px-6 sm:text-base ${
                selectedCategory === category
                  ? "bg-white text-black"
                  : "bg-gray-700 text-gray-200 hover:bg-gray-600"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
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
              className="group relative overflow-hidden rounded-lg bg-gray-900 shadow-lg"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full"
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredId === item.id ? 1 : 0,
                  y: hoveredId === item.id ? 0 : 20,
                }}
                className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6"
              >
                <span className="mb-1 text-xs text-gray-300 sm:mb-2 sm:text-sm">
                  {item.category}
                </span>
                <h3 className="mb-1 text-xl text-white sm:mb-2 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 sm:text-base">
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
