import { useState } from "react";
import { motion } from "motion/react";
import { reelEntries, type ReelEntry } from "../../data/reels";
import { ReelCard } from "./ReelCard";
import ReelModal from "./ReelModal";

const sortedReelEntries = [...reelEntries].sort((a, b) => b.priority - a.priority);

export function Reels() {
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
    if (currentIndex === -1) {
      return;
    }

    const nextIndex = (currentIndex + 1) % filteredEntries.length;
    setActiveEntry(filteredEntries[nextIndex]);
  };

  const goPrev = () => {
    if (currentIndex === -1) {
      return;
    }

    const prevIndex = (currentIndex - 1 + filteredEntries.length) % filteredEntries.length;
    setActiveEntry(filteredEntries[prevIndex]);
  };

  return (
    <section id="reels" className="bg-gray-950 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center sm:mb-10"
        >
          <h2 className="mb-3 text-3xl text-white sm:text-4xl">Reels</h2>
          <p className="mx-auto max-w-2xl text-base text-gray-300 sm:text-lg">
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
                  className="w-full rounded-full border border-gray-800 bg-gray-900 px-5 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-500"
                />

                <div className="flex flex-wrap gap-2">
                  {filterOptions.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`rounded-full px-4 py-2 text-sm transition-colors ${
                        activeFilter === filter
                          ? "bg-white text-black"
                          : "bg-gray-900 text-gray-300 hover:bg-gray-800"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {filteredEntries.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {filteredEntries.map((entry) => (
                  <ReelCard
                    key={entry.id}
                    entry={entry}
                    onClick={() => setActiveEntry(entry)}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-gray-800 bg-gray-900 px-6 py-10 text-center text-gray-300">
                No reels matched this search yet.
              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-800 bg-gray-900 px-6 py-10 text-center text-gray-300 sm:px-10 sm:py-14"
          >
            <p className="mb-3 text-lg text-white sm:text-xl">
              Your reels section is ready.
            </p>
            <p className="mx-auto max-w-2xl">
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
        onClose={() => setActiveEntry(null)}
        onNext={goNext}
        onPrev={goPrev}
      />
    </section>
  );
}
