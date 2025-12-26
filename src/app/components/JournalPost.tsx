import { motion } from "motion/react";
import { JournalEntry } from "../../data/journal";

interface JournalPostProps {
  entry: JournalEntry;
  isDark: boolean;
  onClose: () => void;
}

export function JournalPost({ entry, isDark }: JournalPostProps) {
  return (
    <article className="flex flex-col">
      {/* Hero Image */}
      <div className="w-full bg-black flex justify-center items-center">
        <motion.img
          src={entry.image}
          alt={entry.title}
          layoutId={`journal-image-${entry.id}`}
          className="w-full h-auto max-h-[100vh] object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 max-w-3xl mx-auto">
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