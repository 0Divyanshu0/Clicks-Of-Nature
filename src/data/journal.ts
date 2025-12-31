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
  { id: "1",
  slug: "fire-and-stillness",
  title: "Fire and Stillness",
  excerpt: "Some moments ask nothing from us except attention.",
  image: "/Journal/pot-fire.jpg",
  date: "Dec 2025",
  readTime: "3 min read",
  priority: 3,
  content: `The fire didn’t hurry.
It rose, folded into itself, and breathed.

We sat around it without saying much.
Watching light replace noise.

There was warmth, but also patience.
Time slowed where the flames stayed alive.

No screens.
No timelines.
Just flickering moments held together by heat.

Some moments don’t need words.
They only ask to be felt.`,
  },
  {
    id: "2",
    slug: "morning-by-the-river",
  title: "Morning by the River",
  excerpt: "Light moved slowly over still water.",
  image: "/Journal/kerela-lake.jpg",
  date: "Jan 2026",
  readTime: "2 min read",
  priority: 2,
  content: `The water barely moved.
Birds spoke first, before the sun did.

Some mornings don’t ask for attention.
They simply exist — quietly.`,
  },
];

