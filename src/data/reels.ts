export interface ReelEntry {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  poster: string;
  video: string;
  orientation: "portrait" | "landscape" | "square";
  location: string;
  tag: string;
  date: string;
  duration: string;
  content: string;
  priority: number;
}

export const reelEntries: ReelEntry[] = [
  {
    id: "1",
    slug: "off-office-recap",
    title: "Off-Office Recap",
    excerpt: "Some recaps of my off-office life :)",
    poster: "/Reels/posters/off-office-recap.jpg",
    video: "/Reels/vn_travel_edit.mp4",
    orientation: "portrait",
    location: "Bangalore",
    tag: "Weekend",
    date: "Mar 2026",
    duration: "0:16",
    priority: 0,
    content: `A few small moments from life outside work.

The quieter side of the week.
Short roads, slow frames, and the kind of time that feels like your own again.`,
  },
];
