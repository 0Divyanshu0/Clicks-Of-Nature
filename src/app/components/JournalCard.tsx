import { motion } from "motion/react";
import { JournalEntry } from "../../data/journal";

interface JournalCardProps {
  entry: JournalEntry;
  isDark: boolean;
  onClick: () => void;
}

export function JournalCard({ entry, isDark, onClick }: JournalCardProps) {
  return (
    <motion.article
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 120 }}
      className={`cursor-pointer rounded-xl overflow-hidden shadow-lg ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      {/* Image wrapper with fixed aspect ratio */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={entry.image}
          alt={entry.title}
          layoutId={`journal-image-${entry.id}`}
          className="absolute inset-0 w-full h-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Text content */}
      <div className="p-5">
        <p className="text-xs text-gray-400 mb-1">
          {entry.date} · {entry.readTime}
        </p>

        <h3
          className={`text-lg font-medium mb-2 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {entry.title}
        </h3>

        <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          {entry.excerpt}
        </p>
      </div>
    </motion.article>
  );
}
