export interface JournalEntry {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: string;
  priority: number; // 👈 NEW
}


export const journalEntries: JournalEntry[] = [
  {
    id: "1",
    slug: "no-wifi-better-connections",
    title: "No Wi-Fi, Just Better Connections",
    excerpt: "Sometimes the quiet moments say more than words.",
    image: "/Journal/Hero.png",
    date: "Dec 2025",
    readTime: "3 min read",
    priority: 1, // 👈 TOP ROW / FEATURED
    content: `...`,
  },
  {
    id: "2",
    slug: "walking-without-a-destination",
    title: "Walking Without a Destination",
    excerpt: "A walk, a camera, and no plan.",
    image: "/Journal/morning-walk.jpg",
    date: "Dec 2025",
    readTime: "2 min read",
    priority: 2, // 👈 SECOND ROW
    content: `...`,
  },
];

