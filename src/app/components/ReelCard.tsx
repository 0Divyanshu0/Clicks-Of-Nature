import { useRef, useState } from "react";
import { motion } from "motion/react";
import { MapPin, Play } from "lucide-react";
import { type ReelEntry } from "../../data/reels";

interface ReelCardProps {
  entry: ReelEntry;
  onClick: () => void;
}

const frameClasses: Record<ReelEntry["orientation"], string> = {
  portrait: "aspect-[9/16]",
  landscape: "aspect-[16/9]",
  square: "aspect-square",
};

const cardSpanClasses: Record<ReelEntry["orientation"], string> = {
  portrait: "",
  landscape: "sm:col-span-2",
  square: "",
};

export function ReelCard({ entry, onClick }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPreviewing, setIsPreviewing] = useState(false);

  const handlePreviewStart = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    setIsPreviewing(true);
    video.currentTime = 0;
    void video.play().catch(() => undefined);
  };

  const handlePreviewStop = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.pause();
    video.currentTime = 0;
    setIsPreviewing(false);
  };

  return (
    <motion.article
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 120 }}
      onMouseEnter={handlePreviewStart}
      onMouseLeave={handlePreviewStop}
      onFocus={handlePreviewStart}
      onBlur={handlePreviewStop}
      className={`cursor-pointer overflow-hidden rounded-xl bg-gray-800 shadow-lg active:scale-[0.98] sm:active:scale-100 ${cardSpanClasses[entry.orientation]}`}
    >
      <div className={`relative overflow-hidden ${frameClasses[entry.orientation]}`}>
        <img
          src={entry.poster}
          alt={entry.title}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${
            isPreviewing ? "opacity-0" : "opacity-100"
          }`}
        />
        <video
          ref={videoRef}
          src={entry.video}
          muted
          playsInline
          loop
          preload="metadata"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${
            isPreviewing ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
        <div className="absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-xs text-white">
          {entry.duration}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div>
            <p className="mb-1 text-xs text-gray-300">{entry.date}</p>
            <h3 className="text-lg font-medium text-white">{entry.title}</h3>
            <p className="mt-1 flex items-center gap-1 text-xs text-gray-300">
              <MapPin className="h-3 w-3" />
              {entry.location}
            </p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
            <Play className="h-4 w-4 fill-white text-white" />
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-700 px-2.5 py-1 text-xs text-gray-200">
            {entry.tag}
          </span>
        </div>
        <p className="text-sm text-gray-300">{entry.excerpt}</p>
      </div>
    </motion.article>
  );
}
