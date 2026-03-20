import { useEffect, useState } from "react";
import { reasons } from "../data/contentData";

const ReasonsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % reasons.length);
        setIsFlipped(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const reason = reasons[current];

  return (
    <div className="text-center py-6 sm:py-8 md:py-12">
      <p className="text-lg sm:text-xl md:text-2xl text-pink-400 font-medium mb-2">
        Reasons I Love You 💕
      </p>
      <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 md:mb-8">
        #{current + 1} of {reasons.length} (auto-playing)
      </p>

      {/* Card */}
      <div className="flex justify-center mb-4 sm:mb-6 md:mb-8" style={{ perspective: "1000px" }}>
        <div
          className="w-64 sm:w-72 md:w-80 h-40 sm:h-44 md:h-48 transition-transform duration-500 relative"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 bg-linear-to-br from-pink-100 to-purple-100 rounded-2xl shadow-xl border-2 border-pink-200 flex flex-col items-center justify-center p-6"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{reason.emoji}</div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium">{reason.text}</p>
          </div>
          {/* Back */}
          <div
            className="absolute inset-0 bg-linear-to-br from-purple-100 to-pink-100 rounded-2xl shadow-xl border-2 border-purple-200 flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl animate-pulse">💝</div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 flex-wrap max-w-xs mx-auto">
        {reasons.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-pink-500 scale-125"
                : i < current
                ? "bg-pink-300"
                : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Nav buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + reasons.length) % reasons.length)}
          className="px-6 py-2 bg-pink-100 text-pink-600 rounded-full font-medium hover:bg-pink-200 transition-colors"
        >
          ← Prev
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % reasons.length)}
          className="px-6 py-2 bg-pink-100 text-pink-600 rounded-full font-medium hover:bg-pink-200 transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default ReasonsCarousel;
