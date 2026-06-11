export interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    image: "/Journal/red-bettle.jpeg",
    title: "Red on Green",
    category: "Nature",
    description: "A quiet moment where color and stillness meet.",
  },
  {
    id: 2,
    image: "/Journal/kerela-tea-garden.jpg",
    title: "Quiet Greens",
    category: "Nature",
    description: "Where layers of green stand still, unbothered by time.",
  },
  {
    id: 3,
    image: "/Journal/long-exposure-traffic.jpeg",
    title: "Passing Through",
    category: "Street",
    description: "Lines of light rushing forward, while the night stays still.",
  },
  {
    id: 4,
    image: "/Journal/lion.jpeg",
    title: "Silent Approach",
    category: "Wildlife",
    description: "Eyes forward, body low - movement without sound.",
  },
  {
    id: 5,
    image: "/Journal/small-purple-flower.jpeg",
    title: "Hidden Bloom",
    category: "Nature",
    description: "Soft color finding its way through the leaves.",
  },
  {
    id: 6,
    image: "/Journal/diwali-rangoli.jpeg",
    title: "Warm Ritual",
    category: "Culture",
    description: "Light resting gently on patterns made by hand.",
  },
  {
    id: 7,
    image: "/Journal/buddha-statue.jpeg",
    title: "Still Mind",
    category: "Culture",
    description: "Silence shaped in stone, holding centuries of calm.",
  },
  {
    id: 8,
    image: "/Journal/mahadev-drop.jpeg",
    title: "Red Line",
    category: "Abstract",
    description: "A thin divide between chaos and clarity.",
  },
  {
    id: 9,
    image: "/Journal/yellow-butterfly.jpeg",
    title: "Quiet Landing",
    category: "Nature",
    description: "A moment of rest, where color meets calm.",
  },
  {
    id: 10,
    image: "/Journal/ride-bike-me.webp",
    title: "Weekend Ride",
    category: "Nature",
    description: "Two wheels, endless horizons.",
  },
  {
    id: 11,
    image: "/Journal/avalabetta-top.jpg",
    title: "Top of Avalabetta",
    category: "Nature",
    description: "The view from the top of Avalabetta.",
  },
  {
    id: 12,
    image: "/Journal/adi-yogi.jpg",
    title: "Adi Yogi",
    category: "Culture",
    description:
      "The Adi Yogi statue at the Isha Yoga Center, Chikkaballapur, Karnataka.",
  },
  {
    id: 13,
    image: "/Journal/sheru.jpg",
    title: "Sheru",
    category: "Wildlife",
    description: "Sheru, the dog.",
  },
  {
    id: 14,
    image: "/Journal/cu-campus-gallery.jpeg",
    title: "College Days",
    category: "Street",
    description:
      "Wandering the gallery with a twinge of nostalgia for the college days.",
  },
  {
  id: 15,
  image: "/Journal/bike_cloudy.jpg",
  title: "Weekend Ride",
  category: "Nature",
  description: "Not chasing distance—just finding where it feels right to stop.",
  },
  {
  id: 16,
  image: "/Journal/cute_toy.jpg",
  title: "Soft Light, Sharp Mood",
  category: "Aesthetic",
  description: "Cute on the surface, but the mood says otherwise.",
  },
  {
  id: 17,
  image: "/Journal/penukonda_fort.png",
  title: "End of the Pace",
  category: "Journey",
  description: "The road continues. You decide when it’s enough.",
},
];

export const portfolioCategories = [
  "All",
  ...new Set(portfolioItems.map((item) => item.category)),
];
