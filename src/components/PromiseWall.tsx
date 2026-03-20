import { useState } from "react";
import { PROMISE_COLORS, SITE_CONFIG } from "../data/constants";
import { promises as promiseData } from "../data/contentData";

const promises = promiseData.map((p, i) => ({
  ...p,
  color: PROMISE_COLORS[i % PROMISE_COLORS.length],
}));


const PromiseWall = () => {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggleFlip = (index: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const allFlipped = flipped.size === promises.length;

  return (
    <div className="text-center py-6 sm:py-8 md:py-12">
      <p className="text-lg sm:text-xl md:text-2xl text-pink-400 font-medium mb-2">
        My Promises to You 🤞
      </p>
      <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 md:mb-8">
        Tap each note to reveal a promise, {SITE_CONFIG.name}
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 max-w-lg mx-auto px-2 sm:px-4">
        {promises.map((promise, i) => (
          <div
            key={i}
            onClick={() => toggleFlip(i)}
            className="cursor-pointer"
            style={{ perspective: "600px" }}
          >
            <div
              className="relative w-full h-20 sm:h-24 transition-transform duration-500"
              style={{
                transformStyle: "preserve-3d",
                transform: flipped.has(i) ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front — sticky note */}
              <div
                className={`absolute inset-0 ${promise.color} border-2 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow`}
                style={{ backfaceVisibility: "hidden" }}
              >
                <span className="text-2xl sm:text-3xl">{promise.emoji}</span>
              </div>
              {/* Back — promise text */}
              <div
                className={`absolute inset-0 ${promise.color} border-2 rounded-xl flex items-center justify-center p-2 shadow-md`}
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <p className="text-xs font-medium text-gray-700 leading-tight">
                  {promise.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {allFlipped && (
        <div className="mt-4 sm:mt-6 md:mt-8 animate-fadeIn">
          <p className="text-base sm:text-lg md:text-xl text-pink-500 font-bold">
            Every single one of these is real, {SITE_CONFIG.nameLong} 💕
          </p>
          <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">
            And I'll keep adding more every year 🤞
          </p>
        </div>
      )}
    </div>
  );
};

export default PromiseWall;
