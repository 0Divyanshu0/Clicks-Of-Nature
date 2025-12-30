import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { JournalEntry } from "../../data/journal";
import { JournalPost } from "./JournalPost";

interface JournalModalProps {
  isOpen: boolean;
  post: JournalEntry | null;
  isDark: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function JournalModal({
  isOpen,
  post,
  isDark,
  onClose,
  onNext,
  onPrev,
}: JournalModalProps) {
  // 🔒 Lock background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ⌨️ Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {isOpen && post && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`relative z-10 w-full max-w-5xl h-[95svh] sm:h-[90vh] rounded-2xl shadow-2xl overflow-hidden ${
              isDark ? "bg-gray-900 text-white" : "bg-white text-black"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition"
              aria-label="Close journal"
            >
              <X />
            </button>

            {/* Previous (desktop only) */}
            <button
              onClick={onPrev}
              className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
              aria-label="Previous journal"
            >
              <ChevronLeft className="text-white" />
            </button>

            {/* Next (desktop only) */}
            <button
              onClick={onNext}
              className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
              aria-label="Next journal"
            >
              <ChevronRight className="text-white" />
            </button>

            {/* Scrollable Content */}
            <div className="h-full overflow-y-auto overscroll-contain">
              <JournalPost entry={post} isDark={isDark} onClose={onClose} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
