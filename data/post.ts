// ./data/posts.ts

import { Post } from "@/types/post";

const posts: Post[] = [
  {
    id: "1",
    title: "The Enchanted Forest",
    body: "In the heart of the ancient woods, secrets long forgotten stir once more. The forest, a living entity, guards its mysteries closely. Those who enter may never return, but the brave who emerge bring tales of wonder and terror...",
    author: "Emily Bronte",
    date: "2024-05-01",
    comments: [
      { id: "c1", text: "A spellbinding journey into the unknown.", username: "The Times" },
    ],
  },
  {
    id: "2",
    title: "The Last Stargazer",
    body: "As the last of the great astronomers, Dr. Evelyn Drake knew the stars held secrets to the past and future. On the eve of the world’s darkest hour, she discovers a celestial anomaly that could change humanity's fate forever...",
    author: "Arthur C. Clarke",
    date: "2024-04-15",
    comments: [
      { id: "c3", text: "A stellar achievement in science fiction.", username: "The Guardian" },
    ],
  },
  {
    id: "3",
    title: "Whispers of the Ancient",
    body: "The ruins of Atlantis had always been a myth, until Dr. Sarah Waters uncovered an ancient tablet. As she deciphers its secrets, she realizes the ancient civilization's warnings are more relevant than ever...",
    author: "Dan Brown",
    date: "2024-03-22",
    comments: [
      { id: "c5", text: "An electrifying blend of history and mystery.", username: "BBC" },
    ],
  },
  {
    id: "4",
    title: "Echoes of Eternity",
    body: "In a world where time travel is possible, the past is not as distant as it seems. The Timekeepers, guardians of the timeline, face a new threat that could unravel history itself...",
    author: "H.G. Wells",
    date: "2024-02-28",
    comments: [
      { id: "c7", text: "Wells' timeless narrative resonates with new urgency.", username: "The Independent" },
      { id: "c8", text: "A masterful exploration of time and consequence.", username: "The Telegraph" },
    ],
  },
  {
    id: "5",
    title: "The Forgotten Kingdom",
    body: "Beneath the sands of Egypt lies a kingdom lost to history. Archaeologist John Carter's latest expedition uncovers a truth that could rewrite the history books...",
    author: "Wilbur Smith",
    date: "2024-01-18",
    comments: [
      { id: "c9", text: "An epic tale of discovery and adventure.", username: "National Geographic" },
      { id: "c10", text: "Smith's vivid storytelling brings ancient Egypt to life.", username: "Smithsonian Magazine" },
    ],
  },
  {
    id: "6",
    title: "The Silent Sea",
    body: "Captain Ahab thought he knew every inch of the ocean, but the abyss holds more secrets than he ever imagined. On his final voyage, he encounters a leviathan beyond comprehension...",
    author: "Herman Melville",
    date: "2024-03-11",
    comments: [
      { id: "c11", text: "A maritime epic of legendary proportions.", username: "Maritime Weekly" },
  ],
  },
  {
    id: "7",
    title: "The Alchemist's Code",
    body: "In Renaissance Italy, a young alchemist discovers a code that could turn any material into gold. But the secret to eternal life may come at a price...",
    author: "Umberto Eco",
    date: "2024-05-20",
    comments: [
      { id: "c13", text: "A philosophical and thrilling exploration.", username: "Literary Review" },
    ],
  },
  {
    id: "8",
    title: "The Celestial Choir",
    body: "Music has the power to transcend realms. When a forgotten symphony is played, it opens a portal to a world of pure harmony and chaos...",
    author: "Philip Pullman",
    date: "2024-06-05",
    comments: [
      { id: "c15", text: "A symphony of words and imagination.", username: "The Boston Globe" },
   ],
  },
  {
    id: "9",
    title: "The Midnight Library",
    body: "Between life and death, there is a library. Each book is a chance to try another life you could have lived. For Nora, it's a chance to undo her biggest regrets...",
    author: "Matt Haig",
    date: "2024-02-14",
    comments: [
      { id: "c17", text: "A poignant and uplifting journey.", username: "The Washington Post" },
    ],
  },
  {
    id: "10",
    title: "The Shadow Weaver",
    body: "In a world where shadows hold power, young Elara discovers she can weave the shadows into reality. But with great power comes even greater danger...",
    author: "Leigh Bardugo",
    date: "2024-01-01",
    comments: [
      { id: "c19", text: "A dark and enchanting tale.", username: "Tor.com" },
   ],
  },
];

export default posts;
