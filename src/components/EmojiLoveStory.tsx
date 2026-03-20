import { useState } from "react";
import { SITE_CONFIG } from "../data/constants";
import { emojiStoryLines } from "../data/contentData";

const storyLines = emojiStoryLines;


const EmojiLoveStory = () => {
  const [revealedCount, setRevealedCount] = useState(0);
  const [showMeaning, setShowMeaning] = useState<number | null>(null);

  const revealNext = () => {
    if (revealedCount < storyLines.length) {
      setRevealedCount((c) => c + 1);
    }
  };

  const toggleMeaning = (index: number) => {
    setShowMeaning(showMeaning === index ? null : index);
  };

  const allRevealed = revealedCount === storyLines.length;

  return (
    <div className="text-center py-6 sm:py-8 md:py-12">
      <p className="text-lg sm:text-xl md:text-2xl text-pink-400 font-medium mb-2">
        Our Love Story in Emojis 💕
      </p>
      <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 md:mb-8">
        Tap each line to decode it, {SITE_CONFIG.name}
      </p>

      <div className="max-w-md mx-auto space-y-2 sm:space-y-3 mb-4 sm:mb-6 md:mb-8 px-2">
        {storyLines.slice(0, revealedCount).map((line, i) => (
          <div
            key={i}
            onClick={() => toggleMeaning(i)}
            className="cursor-pointer animate-fadeIn"
          >
            <div
              className={`bg-white/90 rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 transition-all duration-300 ${
                showMeaning === i
                  ? "border-pink-400 shadow-lg scale-[1.02]"
                  : "border-pink-200 hover:border-pink-300"
              }`}
            >
              <p className="text-xl sm:text-2xl md:text-3xl mb-1 tracking-wider">{line.emojis}</p>
              {showMeaning === i ? (
                <p className="text-xs sm:text-sm text-pink-600 font-medium animate-fadeIn mt-1 sm:mt-2">
                  {line.meaning}
                </p>
              ) : (
                <p className="text-xs text-gray-400 mt-1">tap to decode ✨</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {!allRevealed ? (
        <button
          onClick={revealNext}
          className="px-6 sm:px-8 py-2.5 sm:py-3 bg-linear-to-r from-pink-500 to-purple-500 text-white text-base sm:text-lg font-bold rounded-full shadow-xl hover:scale-105 transition-all"
        >
          Next Chapter {revealedCount + 1}/{storyLines.length} 📖
        </button>
      ) : (
        <div className="animate-fadeIn">
          <p className="text-base sm:text-lg md:text-xl text-pink-500 font-bold">
            The best story ever written 📖💕
          </p>
          <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">
            And we're still writing new chapters every day, {SITE_CONFIG.nameLong} ✨
          </p>
        </div>
      )}
    </div>
  );
};

export default EmojiLoveStory;
