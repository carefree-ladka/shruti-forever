import { useEffect, useState } from "react";
import { LOADER_FLOATING_EMOJIS, SITE_CONFIG } from "../data/constants";
import { cutenessLabels } from "../data/contentData";

const floatingEmojis = LOADER_FLOATING_EMOJIS;

interface CutenessLoaderProps {
  onComplete: () => void;
}

const CutenessLoader = ({ onComplete }: CutenessLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [currentLabel, setCurrentLabel] = useState(cutenessLabels[0]);
  const [bubbles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: floatingEmojis[i % floatingEmojis.length],
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 4,
      size: 1.2 + Math.random() * 1.5,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next > 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        return next;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const match = [...cutenessLabels].reverse().find((l) => progress >= l.pct);
    if (match) setCurrentLabel(match);
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-linear-to-br from-pink-100 via-rose-50 to-purple-100 flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Floating emoji bubbles */}
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute animate-loader-bubble pointer-events-none"
          style={{
            left: `${b.left}%`,
            bottom: "-60px",
            fontSize: `${b.size}rem`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        >
          {b.emoji}
        </div>
      ))}

      {/* Main content */}
      <div className="text-center z-10 px-4 sm:px-6 max-w-lg w-full">
        <div
          className="text-5xl sm:text-6xl md:text-8xl mb-4 sm:mb-6 transition-all duration-300"
          style={{ transform: `scale(${0.8 + progress * 0.005})` }}
        >
          {currentLabel.emoji}
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-2">
          Cuteness Level
        </h2>
        <p className="text-4xl sm:text-5xl md:text-6xl font-black text-pink-500 mb-3 sm:mb-4">{progress}%</p>

        {/* Progress bar */}
        <div className="w-full bg-pink-200 rounded-full h-4 sm:h-5 md:h-6 overflow-hidden shadow-inner mb-4 sm:mb-6 border-2 border-pink-300">
          <div
            className="h-full rounded-full bg-linear-to-r from-pink-400 via-rose-400 to-purple-400 transition-all duration-100 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
          </div>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium min-h-[2rem] transition-all duration-300">
          {currentLabel.label}
        </p>

        {progress === 100 && (
          <div className="mt-3 sm:mt-4 animate-bounce text-lg sm:text-xl md:text-2xl text-pink-600 font-bold">
            Get ready, {SITE_CONFIG.nameLong}! 🎉
          </div>
        )}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 text-3xl sm:text-4xl md:text-5xl animate-spin" style={{ animationDuration: "4s" }}>🎀</div>
      <div className="absolute top-4 sm:top-8 right-4 sm:right-8 text-3xl sm:text-4xl md:text-5xl animate-spin" style={{ animationDuration: "5s" }}>🌸</div>
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-3xl sm:text-4xl md:text-5xl animate-spin" style={{ animationDuration: "6s" }}>💗</div>
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-3xl sm:text-4xl md:text-5xl animate-spin" style={{ animationDuration: "3s" }}>✨</div>
    </div>
  );
};

export default CutenessLoader;
