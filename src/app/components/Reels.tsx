import { useState } from "react";
import { motion } from "motion/react";
import { reelEntries, ReelEntry } from "../../data/reels";
import { ReelCard } from "./ReelCard";
import ReelModal from "./ReelModal";

interface ReelsProps {
  isDark: boolean;
}

const sortedReelEntries = [...reelEntries].sort(
  (a, b) => a.priority - b.priority
);

export function Reels({ isDark }: ReelsProps) {
  const [activeEntry, setActiveEntry] = useState<ReelEntry | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filterOptions = [
    "All",
    ...Array.from(
      new Set(sortedReelEntries.flatMap((entry) => [entry.location, entry.tag]))
    ),
  ];

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredEntries = sortedReelEntries.filter((entry) => {
    const matchesFilter =
      activeFilter === "All" ||
      entry.location === activeFilter ||
      entry.tag === activeFilter;

    const matchesSearch =
      normalizedQuery.length === 0 ||
      [entry.title, entry.location, entry.tag, entry.excerpt, entry.content]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);

    return matchesFilter && matchesSearch;
  });

  const currentIndex = activeEntry
    ? filteredEntries.findIndex((entry) => entry.id === activeEntry.id)
    : -1;

  const goNext = () => {
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % filteredEntries.length;
    setActiveEntry(filteredEntries[nextIndex]);
  };

  const goPrev = () => {
    if (currentIndex === -1) return;
    const prevIndex =
      (currentIndex - 1 + filteredEntries.length) % filteredEntries.length;
    setActiveEntry(filteredEntries[prevIndex]);
  };

  return (
    <section
      id="reels"
      className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-10"
        >
          <h2
            className={`text-3xl sm:text-4xl mb-3 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Reels
          </h2>
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Small moving moments, arranged with the same editorial rhythm as the
            journal.
          </p>
        </motion.div>

        {sortedReelEntries.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 sm:mb-8"
            >
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search by reel name, tag, or location"
                  className={`w-full rounded-full border px-5 py-3 text-sm outline-none transition-colors ${
                    isDark
                      ? "border-gray-800 bg-gray-900 text-white placeholder:text-gray-500"
                      : "border-gray-200 bg-white text-black placeholder:text-gray-400"
                  }`}
                />

                <div className="flex flex-wrap gap-2">
                  {filterOptions.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`rounded-full px-4 py-2 text-sm transition-colors ${
                        activeFilter === filter
                          ? isDark
                            ? "bg-white text-black"
                            : "bg-black text-white"
                          : isDark
                          ? "bg-gray-900 text-gray-300 hover:bg-gray-800"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {filteredEntries.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredEntries.map((entry) => (
                  <ReelCard
                    key={entry.id}
                    entry={entry}
                    isDark={isDark}
                    onClick={() => setActiveEntry(entry)}
                  />
                ))}
              </div>
            ) : (
              <div
                className={`rounded-2xl border px-6 py-10 text-center ${
                  isDark
                    ? "border-gray-800 bg-gray-900 text-gray-300"
                    : "border-gray-200 bg-white text-gray-600"
                }`}
              >
                No reels matched this search yet.
              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl border px-6 py-10 sm:px-10 sm:py-14 text-center ${
              isDark
                ? "border-gray-800 bg-gray-900 text-gray-300"
                : "border-gray-200 bg-white text-gray-600"
            }`}
          >
            <p className="text-lg sm:text-xl text-white mb-3">
              Your reels section is ready.
            </p>
            <p className="max-w-2xl mx-auto">
              Upload `.mp4` or `.webm` files into `public/Reels`, posters into
              `public/Reels/posters`, then add each reel entry in
              `src/data/reels.ts` with `orientation: "portrait"`,
              `orientation: "landscape"`, or `orientation: "square"`.
            </p>
          </motion.div>
        )}
      </div>

      <ReelModal
        isOpen={!!activeEntry}
        post={activeEntry}
        isDark={isDark}
        onClose={() => setActiveEntry(null)}
        onNext={goNext}
        onPrev={goPrev}
      />
    </section>
  );
}
