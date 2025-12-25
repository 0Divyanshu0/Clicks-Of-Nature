import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { JournalEntry } from "../../data/journal";
import { JournalPost } from "./JournalPost";

interface JournalModalProps {
  isOpen: boolean;
  post: JournalEntry | null;
  isDark: boolean;
  onClose: () => void;
}

export default function JournalModal({
  isOpen,
  post,
  isDark,
  onClose,
}: JournalModalProps) {
  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && post && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <JournalPost entry={post} isDark={isDark} onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
