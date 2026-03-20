import { useEffect, useState } from "react";
import { SITE_CONFIG } from "../data/constants";

const LoveCounter = () => {
  const [count, setCount] = useState(0);
  const target = SITE_CONFIG.loveCountTarget;

  useEffect(() => {
    let current = 0;
    const step = Math.ceil(target / 300);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(current);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-6 sm:py-8 md:py-12">
      <p className="text-lg sm:text-xl md:text-2xl text-pink-400 font-medium mb-2 sm:mb-4">
        How much I love you:
      </p>
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-rose-500 to-purple-500 tabular-nums">
        {count.toLocaleString()}
      </div>
      <p className="text-xl sm:text-2xl md:text-3xl text-pink-500 mt-2 animate-pulse font-bold">
        ...and counting ∞
      </p>
      <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl">
        {["💗", "💖", "💕", "💞", "💓"].map((h, i) => (
          <span
            key={i}
            className="animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {h}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoveCounter;
