import { useState } from "react";
import { journalEntries, JournalEntry } from "../../data/journal";
import { JournalCard } from "./JournalCard";
import { JournalPost } from "./JournalPost";

interface JournalProps {
  isDark: boolean;
}

export default function Journal({ isDark }: JournalProps) {
  const [activeEntry, setActiveEntry] = useState<JournalEntry | null>(null);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {journalEntries.map((entry) => (
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
      <JournalPost
        entry={activeEntry}
        isDark={isDark}
        onClose={() => setActiveEntry(null)}
      />
    </section>
  );
}
