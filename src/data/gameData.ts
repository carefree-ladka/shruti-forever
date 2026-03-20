import { SITE_CONFIG } from "./constants";

const { name, nameLong } = SITE_CONFIG;

// ============================================
// BOYFRIEND QUIZ — Questions & answers
// ============================================
export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  reaction: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: `What's ${name}'s favorite color?`,
    options: ["Pink 🩷", "Purple 💜", "Blue 💙", "Red ❤️"],
    correct: 0,
    reaction: "Obviously I know this! 😏",
  },
  {
    question: `What does ${name} do when she's happy?`,
    options: ["Dances 💃", "Screams 🗣️", "Goes quiet 🤫", "Smiles non-stop 😊"],
    correct: 3,
    reaction: "That smile is burned into my memory 🥰",
  },
  {
    question: `${name}'s go-to comfort food?`,
    options: ["Pizza 🍕", "Ice cream 🍦", "Maggi 🍜", "Chocolate 🍫"],
    correct: 2,
    reaction: "Late night Maggi hits different 😋",
  },
  {
    question: `What's ${name}'s love language?`,
    options: ["Words 💬", "Quality time ⏰", "Gifts 🎁", "Physical touch 🤗"],
    correct: 1,
    reaction: "Every second with you is precious 💕",
  },
  {
    question: `What makes ${name} laugh the hardest?`,
    options: ["Memes 📱", "My jokes 😂", "Cute animals 🐱", "Random things 🤪"],
    correct: 1,
    reaction: "I'm basically a comedian at this point 😎",
  },
];

// ============================================
// BALLOON POP — Compliments inside balloons
// ============================================
export const balloonCompliments = [
  "You're the prettiest girl in any room 🌹",
  "Your smile literally heals me 😊",
  "You're way smarter than you think 🧠",
  "Your voice is my favorite sound 🎵",
  "You make everything more fun 🎉",
  "You give the best hugs in the world 🤗",
  "Your eyes are absolutely magical ✨",
  "You're the kindest soul I know 💗",
  "You make me want to be better 🌟",
  "You're my favorite notification 📱",
  "Your laugh is contagious 😂",
  "You're adorable when you're sleepy 😴",
];

// ============================================
// SCRATCH CARDS — Rewards
// ============================================
export const scratchCardRewards = [
  { reward: "One free hug anytime you want 🤗", color: "from-pink-400 to-rose-400" },
  { reward: "Breakfast in bed coupon 🥞☕", color: "from-purple-400 to-violet-400" },
  { reward: "A whole day doing whatever YOU want 👑", color: "from-fuchsia-400 to-pink-400" },
  { reward: "Unlimited forehead kisses pass 😘", color: "from-rose-400 to-pink-400" },
];

// ============================================
// SPIN WHEEL — Prizes
// ============================================
export const spinWheelPrizes = [
  { text: "Movie night\nyour pick 🎬", color: "#ec4899" },
  { text: "One piggyback\nride 🐷", color: "#a855f7" },
  { text: "I do your\nchores today 🧹", color: "#f43f5e" },
  { text: "Surprise\ndate 🌹", color: "#8b5cf6" },
  { text: "Breakfast\nin bed 🥞", color: "#ec4899" },
  { text: "Unlimited\ncuddles pass 🤗", color: "#a855f7" },
  { text: "Ice cream\ntrip 🍦", color: "#f43f5e" },
  { text: "Love letter\nfrom me 💌", color: "#8b5cf6" },
];

// ============================================
// WISH GRANTER — Responses after sealing a wish
// ============================================
export const wishResponses = [
  "Consider it done, birthday girl 🪄✨",
  `Your wish is my command, ${nameLong} 💫`,
  "Already working on it 😏💕",
  "Anything for you, always 🌟",
  "The universe (and your boyfriend) heard you 🌙",
];

// ============================================
// LOVE NOTE — Mood options & heart rating reactions
// ============================================
export const loveNoteMoods = [
  { emoji: "🥰", label: "Loved it" },
  { emoji: "😍", label: "Obsessed" },
  { emoji: "🥹", label: "Crying rn" },
  { emoji: "😭", label: "Ugly crying" },
  { emoji: "💀", label: "I'm dead" },
];

export const heartRatingReactions: Record<number, string> = {
  5: "5 hearts?! You're the best 🥰",
  4: "4 hearts! I'll work harder next time 😤💕",
  3: "3 hearts... I can do better 😅",
  2: "Only 2?! My heart is breaking 😂",
  1: "1 heart?! Okay I deserved that 😭",
};
