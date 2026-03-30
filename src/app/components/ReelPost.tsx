import { MapPin } from "lucide-react";
import { ReelEntry } from "../../data/reels";

interface ReelPostProps {
  entry: ReelEntry;
  isDark: boolean;
}

const playerSizeClasses: Record<ReelEntry["orientation"], string> = {
  portrait: "max-w-md",
  landscape: "max-w-5xl",
  square: "max-w-2xl",
};

export function ReelPost({ entry, isDark }: ReelPostProps) {
  return (
    <article className="flex flex-col">
      <div className="w-full bg-black flex justify-center items-center px-4 py-4">
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

      <div className="p-5 sm:p-8 max-w-3xl mx-auto">
        <p className="text-xs text-gray-400 mb-2">
          {entry.date} · {entry.duration}
        </p>

        <h2 className="text-2xl sm:text-3xl font-medium mb-5 sm:mb-3">
          {entry.title}
        </h2>

        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs ${
              isDark ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-700"
            }`}
          >
            <MapPin className="h-3 w-3" />
            {entry.location}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-xs ${
              isDark ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-700"
            }`}
          >
            {entry.tag}
          </span>
        </div>

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
