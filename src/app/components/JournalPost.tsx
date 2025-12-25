import { X } from "lucide-react";
import { JournalEntry } from "../../data/journal";

interface JournalPostProps {
  entry: JournalEntry;
  isDark: boolean;
  onClose: () => void;
}

export function JournalPost({ entry, isDark, onClose }: JournalPostProps) {
  return (
    <article>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition"
        aria-label="Close journal"
      >
        <X />
      </button>

      {/* Hero image */}
      <img
        src={entry.image}
        alt={entry.title}
        className="w-full h-72 object-cover rounded-t-xl"
      />

      {/* Content */}
      <div className="p-6 sm:p-8">
        <p className="text-xs text-gray-400 mb-2">
          {entry.date} · {entry.readTime}
        </p>

        <h2 className="text-2xl sm:text-3xl font-medium mb-6">{entry.title}</h2>

        <div
          className={`text-base leading-relaxed whitespace-pre-line ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {entry.content}
        </div>
      </div>
    </article>
  );
}
