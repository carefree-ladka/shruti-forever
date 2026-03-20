import { useEffect, useState } from "react";
import { SITE_CONFIG } from "../data/constants";
import { compatibilityStages } from "../data/contentData";

const stages = compatibilityStages;

const CompatibilityMeter = () => {
  const [progress, setProgress] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      setStageIndex((prev) => {
        const next = prev + 1;
        if (next >= stages.length) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 600);
          return prev;
        }
        setProgress(stages[next].pct);
        return next;
      });
    }, 800);
    return () => clearInterval(interval);
  }, [started]);

  if (!started) {
    return (
      <div className="text-center py-6 sm:py-8 md:py-12">
        <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">🔬</div>
        <p className="text-lg sm:text-xl md:text-2xl text-pink-400 font-medium mb-2">
          Compatibility Test 💕
        </p>
        <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 md:mb-8">
          Let's see how compatible we really are...
        </p>
        <button
          onClick={() => {
            setStarted(true);
            setProgress(stages[0].pct);
          }}
          className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-linear-to-r from-pink-500 to-purple-500 text-white text-base sm:text-lg md:text-xl font-bold rounded-full shadow-xl hover:scale-105 transition-all"
        >
          Calculate Our Love 💗
        </button>
      </div>
    );
  }

  if (done) {
    return (
      <div className="text-center py-6 sm:py-8 md:py-12 animate-fadeIn">
        <div className="text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-4 animate-bounce">💖</div>
        <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500 mb-3 sm:mb-4">
          {SITE_CONFIG.compatibilityResult}%
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-pink-500 font-bold mb-3 sm:mb-4 md:mb-6">
          Basically soulmates, {SITE_CONFIG.nameLong} 🥰
        </p>
        <div className="max-w-sm mx-auto bg-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-pink-200">
          <p className="text-sm sm:text-base md:text-lg text-gray-600 italic">
            "{SITE_CONFIG.compatibilityDisclaimer}"
          </p>
        </div>
        <div className="flex justify-center gap-2 mt-6 text-2xl">
          {["💗", "🔥", "💕", "✨", "💖"].map((e, i) => (
            <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
              {e}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-6 sm:py-8 md:py-12">
      <div className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 animate-spin" style={{ animationDuration: "2s" }}>
        🔮
      </div>
      <p className="text-lg sm:text-xl md:text-2xl text-pink-400 font-medium mb-3 sm:mb-4 md:mb-6">
        Calculating...
      </p>

      <div className="max-w-sm mx-auto mb-4 sm:mb-6 px-4">
        <div className="w-full bg-pink-100 rounded-full h-6 sm:h-7 md:h-8 overflow-hidden border-2 border-pink-300">
          <div
            className="h-full rounded-full bg-linear-to-r from-pink-400 via-rose-400 to-purple-400 transition-all duration-700 flex items-center justify-end pr-3"
            style={{ width: `${Math.max(progress, 5)}%` }}
          >
            <span className="text-white text-sm font-bold">
              {progress}%
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm sm:text-base md:text-lg text-gray-500 min-h-[2rem] transition-all duration-300 px-4">
        {stages[stageIndex].label}
      </p>
    </div>
  );
};

export default CompatibilityMeter;
