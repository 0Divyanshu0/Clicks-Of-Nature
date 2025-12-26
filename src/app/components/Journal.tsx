import { useState } from "react";
import { journalEntries, JournalEntry } from "../../data/journal";
import { JournalCard } from "./JournalCard";
import JournalModal from "./JournalModal";

interface JournalProps {
  isDark: boolean;
}

export default function Journal({ isDark }: JournalProps) {
  const [activeEntry, setActiveEntry] = useState<JournalEntry | null>(null);

  // ✅ Sort by editorial priority (lower = higher importance)
  const sortedEntries = [...journalEntries].sort(
    (a, b) => a.priority - b.priority
  );

  return (
    <section
      id="journal"
      className={`py-16 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl mb-10 text-center ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Photography Journal
        </h2>

        {/* Journal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedEntries.map((entry) => (
            <JournalCard
              key={entry.id}
              entry={entry}
              isDark={isDark}
              onClick={() => setActiveEntry(entry)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <JournalModal
        isOpen={!!activeEntry}
        post={activeEntry}
        isDark={isDark}
        onClose={() => setActiveEntry(null)}
      />
    </section>
  );
}
