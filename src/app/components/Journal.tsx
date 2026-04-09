import { useState } from "react";
import { journalEntries, type JournalEntry } from "../../data/journal";
import { JournalCard } from "./JournalCard";
import JournalModal from "./JournalModal";

const sortedJournalEntries = [...journalEntries].sort(
  (a, b) => b.priority - a.priority
);

export default function Journal() {
  const [activeEntry, setActiveEntry] = useState<JournalEntry | null>(null);

  const currentIndex = activeEntry
    ? sortedJournalEntries.findIndex((entry) => entry.id === activeEntry.id)
    : -1;

  const goNext = () => {
    if (currentIndex === -1) {
      return;
    }

    const nextIndex = (currentIndex + 1) % sortedJournalEntries.length;
    setActiveEntry(sortedJournalEntries[nextIndex]);
  };

  const goPrev = () => {
    if (currentIndex === -1) {
      return;
    }

    const prevIndex =
      (currentIndex - 1 + sortedJournalEntries.length) %
      sortedJournalEntries.length;
    setActiveEntry(sortedJournalEntries[prevIndex]);
  };

  return (
    <section id="journal" className="bg-gray-900 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-center text-3xl text-white sm:mb-10 sm:text-4xl">
          Photography Journal
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {sortedJournalEntries.map((entry) => (
            <JournalCard
              key={entry.id}
              entry={entry}
              onClick={() => setActiveEntry(entry)}
            />
          ))}
        </div>
      </div>

      <JournalModal
        isOpen={!!activeEntry}
        post={activeEntry}
        onClose={() => setActiveEntry(null)}
        onNext={goNext}
        onPrev={goPrev}
      />
    </section>
  );
}
