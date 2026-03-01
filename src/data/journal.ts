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

  {
  id: "3",
  slug: "silence-in-a-noisy-world",
  title: "Silence in a Noisy World",
  excerpt: "Sometimes peace fits inside something small.",
  image: "/Journal/office-escape.jpg",
  date: "Feb 2026",
  readTime: "2 min read",
  priority: 1,
  content: `The room was loud.
Screens flickered.
Engines roared somewhere in the distance.

But the small white earbuds rested quietly.
Waiting.

Noise doesn’t always come from outside.
Sometimes it’s within.

And sometimes,
peace fits inside something no bigger than a fingertip.

I didn’t press play immediately.
I let the silence exist first.

Because even music sounds better
after you’ve heard your own breath.`
},
  {
  id: "4",
  slug: "pink-tree-night",
  title: "Night Under the Pink Tree",
  excerpt: "Blossoms glowing like lanterns after dark.",
  image: "/Journal/pink-tree-night.jpg",
  date: "Mar 2026",
  readTime: "2 min read",
  priority: 0,
  content: `The tree wore its blossoms like soft lanterns,
each petal a pale ember against the dark.
I stood beneath it and felt the night swell
not with noise, but with color.

Sometimes the most vibrant moments
happen after sunset; they are quieter,
and their light is something you carry with you.`
},
  {
  id: "5",
  slug: "hogenakkal-waterfall",
  title: "Hogenakkal Falls",
  excerpt: "Water carving time in stone and spray.",
  image: "/Journal/hogenakkal-waterfall.jpg",
  date: "November 2025",
  readTime: "3 min read",
  priority: -1,
  content: `The river hurtled off the edge and became a roar.
Mist hung in the air like memory.
Stones, slick and round, vanished beneath the rush.

Standing there, I felt small and wide at once.
Nature was not asking for attention,
it simply commanded it.

These falls aren’t just a place.
They are a moment you carry –
the echo of water that never stops falling.`
}
];

