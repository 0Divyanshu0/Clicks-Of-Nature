import { motion } from "motion/react";
import { type JournalEntry } from "../../data/journal";

interface JournalPostProps {
  entry: JournalEntry;
}

export function JournalPost({ entry }: JournalPostProps) {
  return (
    <article className="flex flex-col">
      <div className="flex w-full items-center justify-center bg-black">
        <motion.img
          src={entry.image}
          alt={entry.title}
          layoutId={`journal-image-${entry.id}`}
          className="h-auto max-h-[60svh] w-full object-contain sm:max-h-[80vh]"
        />
      </div>

      <div className="mx-auto max-w-3xl p-5 sm:p-8">
        <p className="mb-2 text-xs text-gray-400">
          {entry.date} · {entry.readTime}
        </p>

        <h2 className="mb-5 text-2xl font-medium sm:mb-6 sm:text-3xl">
          {entry.title}
        </h2>

        <div className="whitespace-pre-line text-base leading-relaxed text-gray-300">
          {entry.content}
        </div>
      </div>
    </article>
  );
}
