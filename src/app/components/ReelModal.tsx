import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { type ReelEntry } from "../../data/reels";
import { ReelPost } from "./ReelPost";

interface ReelModalProps {
  isOpen: boolean;
  post: ReelEntry | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ReelModal({
  isOpen,
  post,
  onClose,
  onNext,
  onPrev,
}: ReelModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKey);
    }

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
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative z-10 h-[95svh] w-full max-w-5xl overflow-hidden rounded-2xl bg-gray-900 text-white shadow-2xl sm:h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 z-20 rounded-full p-2 transition hover:bg-black/10 dark:hover:bg-white/10 sm:right-4 sm:top-4"
              aria-label="Close reel"
            >
              <X />
            </button>

            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/40 p-2 transition hover:bg-black/60 sm:flex"
              aria-label="Previous reel"
            >
              <ChevronLeft className="text-white" />
            </button>

            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/40 p-2 transition hover:bg-black/60 sm:flex"
              aria-label="Next reel"
            >
              <ChevronRight className="text-white" />
            </button>

            <div className="h-full overflow-y-auto overscroll-contain">
              <ReelPost entry={post} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
