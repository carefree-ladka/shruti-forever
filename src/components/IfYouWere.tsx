import { useEffect, useState } from "react";
import { SITE_CONFIG } from "../data/constants";
import { comparisons } from "../data/contentData";


const IfYouWere = () => {
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setShowAnswer(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % comparisons.length);
        setTimeout(() => setShowAnswer(true), 400);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnswer(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const item = comparisons[current];

  const goTo = (index: number) => {
    setAutoPlay(false);
    setShowAnswer(false);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => setShowAnswer(true), 300);
    }, 200);
  };

  return (
    <div className="text-center py-6 sm:py-8 md:py-12">
      <p className="text-lg sm:text-xl md:text-2xl text-pink-400 font-medium mb-2">
        If You Were... 💭
      </p>
      <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 md:mb-8">
        Things that remind me of you, {SITE_CONFIG.nameLong}
      </p>

      <div className="max-w-md mx-auto px-2">
        <div className="bg-linear-to-br from-pink-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-pink-200 shadow-lg min-h-[180px] sm:min-h-[200px] md:min-h-[220px] flex flex-col items-center justify-center">
          <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-2">If you were {item.category}, you'd be...</p>

          <div
            className={`transition-all duration-500 ${
              showAnswer ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500 mb-2 sm:mb-3">
              {item.answer}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 italic">
              {item.reason}
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-6 flex-wrap max-w-xs mx-auto">
          {comparisons.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-pink-500 scale-125"
                  : "bg-gray-300 hover:bg-pink-300"
              }`}
            />
          ))}
        </div>

        {!autoPlay && (
          <button
            onClick={() => setAutoPlay(true)}
            className="mt-4 text-sm text-pink-400 hover:text-pink-600 transition-colors"
          >
            ▶ Resume auto-play
          </button>
        )}
      </div>
    </div>
  );
};

export default IfYouWere;
