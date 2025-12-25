import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { JournalEntry } from "../../data/journal";

interface JournalPostProps {
  entry: JournalEntry | null;
  isDark: boolean;
  onClose: () => void;
}

export function JournalPost({ entry, isDark, onClose }: JournalPostProps) {
  if (!entry) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.article
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className={`relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl ${
            isDark ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
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

            <h2 className="text-2xl sm:text-3xl font-medium mb-6">
              {entry.title}
            </h2>

            {/* Journal body */}
            <div
              className={`text-base leading-relaxed whitespace-pre-line ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {entry.content}
            </div>
          </div>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  );
}
