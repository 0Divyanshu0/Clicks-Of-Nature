import { MapPin } from "lucide-react";
import { type ReelEntry } from "../../data/reels";

interface ReelPostProps {
  entry: ReelEntry;
}

const playerSizeClasses: Record<ReelEntry["orientation"], string> = {
  portrait: "max-w-md",
  landscape: "max-w-5xl",
  square: "max-w-2xl",
};

export function ReelPost({ entry }: ReelPostProps) {
  return (
    <article className="flex flex-col">
      <div className="flex w-full items-center justify-center bg-black px-4 py-4">
        <div className={`w-full ${playerSizeClasses[entry.orientation]}`}>
          <video
            src={entry.video}
            poster={entry.poster}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="w-full max-h-[78svh] object-contain"
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl p-5 sm:p-8">
        <p className="mb-2 text-xs text-gray-400">
          {entry.date} · {entry.duration}
        </p>

        <h2 className="mb-3 text-2xl font-medium sm:text-3xl">{entry.title}</h2>

        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-200">
            <MapPin className="h-3 w-3" />
            {entry.location}
          </span>
          <span className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-200">
            {entry.tag}
          </span>
        </div>

        <div className="whitespace-pre-line text-base leading-relaxed text-gray-300">
          {entry.content}
        </div>
      </div>
    </article>
  );
}
