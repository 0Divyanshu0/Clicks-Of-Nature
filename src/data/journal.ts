export interface JournalEntry {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: string; // 👈 full journal story
}

export const journalEntries: JournalEntry[] = [
  {
    id: '1',
    slug: 'no-wifi-better-connections',
    title: 'No Wi-Fi, Just Better Connections',
    excerpt:
      'Sometimes the quiet moments say more than words. This journal is about slowing down and noticing what usually slips by.',
    image: 'Public/Hero.png',
    date: 'Dec 2025',
    readTime: '3 min read',
    content: `
There was no signal where we stopped.
Just wind, trees, and conversations that didn’t rush.

I realized how often silence makes us uncomfortable.
But this time, it felt grounding.

No notifications.
No urgency.
Just presence.

Some connections don’t need Wi-Fi.
    `,
  },
  {
    id: '2',
    slug: 'walking-without-a-destination',
    title: 'Walking Without a Destination',
    excerpt:'A walk, a camera, and no plan. Just light, shadows, and patience.',
    image: 'Public/Journal/morning-walk.jpg',
    date: 'Dec 2025',
    readTime: '2 min read',
    content: `
I didn’t know where I was going.
And that was the point.

Every turn felt slower.
Every frame felt earned.

Sometimes the best walks
are the ones that don’t try to arrive.
    `,
  },
];
