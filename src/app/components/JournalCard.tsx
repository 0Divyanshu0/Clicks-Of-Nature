import { motion } from "motion/react";
import { type JournalEntry } from "../../data/journal";

interface JournalCardProps {
  entry: JournalEntry;
  onClick: () => void;
}

export function JournalCard({ entry, onClick }: JournalCardProps) {
  return (
    <motion.article
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="cursor-pointer overflow-hidden rounded-xl bg-gray-800 shadow-lg active:scale-[0.98] sm:active:scale-100"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={entry.image}
          alt={entry.title}
          layoutId={`journal-image-${entry.id}`}
          className="absolute inset-0 h-full w-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      <div className="p-4 sm:p-5">
        <p className="mb-1 text-xs text-gray-400">
          {entry.date} · {entry.readTime}
        </p>

        <h3 className="mb-2 text-lg font-medium text-white">{entry.title}</h3>

        <p className="text-sm text-gray-300">{entry.excerpt}</p>
      </div>
    </motion.article>
  );
}
