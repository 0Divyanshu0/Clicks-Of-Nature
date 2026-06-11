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
  {
id: "2",
slug: "between-rides-and-blooms",
title: "Between Rides & Blooms",
excerpt: "Where motion slows and small details take over.",
poster: "public/Reels/posters/bike_flower_slowmo.png",
video: "public/Reels/bike_flower_slowmo.mp4",
orientation: "portrait",
location: "Bangalore",
tag: "Evening Ride",
date: "June 2026",
duration: "0:12",
priority: 0,
content: `Not every ride is about distance.

Sometimes,
it’s the way light falls,
the way something small holds your attention
longer than it should.

Between movement and pause,
there’s a space where everything feels slower—
and somehow, clearer.

This was one of those moments.`,
},
  
];
