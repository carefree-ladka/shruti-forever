import { useState } from "react";
import { BALLOON_COLORS } from "../data/constants";
import { balloonCompliments } from "../data/gameData";

const compliments = balloonCompliments;
const balloonColors = BALLOON_COLORS;

interface Balloon {
  id: number;
  color: string;
  compliment: string;
  popped: boolean;
  left: number;
  delay: number;
}

const BalloonPop = () => {
  const [balloons, setBalloons] = useState<Balloon[]>(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      color: balloonColors[i % balloonColors.length],
      compliment: compliments[i],
      popped: false,
      left: 5 + (i % 6) * 16,
      delay: i * 0.15,
    }))
  );
  const [revealed, setRevealed] = useState<string | null>(null);

  const popBalloon = (id: number) => {
    const balloon = balloons.find((b) => b.id === id);
    if (!balloon || balloon.popped) return;

    setBalloons((prev) =>
      prev.map((b) => (b.id === id ? { ...b, popped: true } : b))
    );
    setRevealed(balloon.compliment);
    setTimeout(() => setRevealed(null), 2500);
  };

  const allPopped = balloons.every((b) => b.popped);

  return (
    <div className="text-center py-6 sm:py-8 md:py-12">
      <p className="text-lg sm:text-xl md:text-2xl text-pink-400 font-medium mb-2">
        Pop the balloons for surprises! 🎈
      </p>
      <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 md:mb-8">
        (each one has a compliment inside)
      </p>

      {/* Revealed compliment */}
      <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
        {revealed && (
          <div className="animate-fadeIn bg-white/90 backdrop-blur rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-xl border-2 border-pink-200">
            <p className="text-sm sm:text-base md:text-xl text-pink-600 font-semibold">{revealed}</p>
          </div>
        )}
      </div>

      {/* Balloons grid */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-xl mx-auto px-2">
        {balloons.map((balloon) => (
          <div
            key={balloon.id}
            onClick={() => popBalloon(balloon.id)}
            className={`transition-all duration-300 cursor-pointer ${
              balloon.popped
                ? "scale-0 opacity-0"
                : "hover:scale-110 animate-float"
            }`}
            style={{
              animationDelay: `${balloon.delay}s`,
              animationDuration: "3s",
            }}
          >
            {!balloon.popped && (
              <div className="relative">
                <div
                  className={`w-12 h-16 sm:w-14 sm:h-18 md:w-16 md:h-20 rounded-full bg-linear-to-b ${balloon.color} shadow-lg relative`}
                >
                  <div className="absolute top-1.5 sm:top-2 left-2 sm:left-3 w-3 sm:w-4 h-4 sm:h-6 bg-white/30 rounded-full rotate-[-20deg]" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 sm:w-3 h-2 sm:h-3 bg-linear-to-b from-gray-400 to-gray-500 rotate-45" />
                </div>
                <div className="w-px h-6 sm:h-8 md:h-10 bg-gray-300 mx-auto" />
              </div>
            )}
          </div>
        ))}
      </div>

      {allPopped && (
        <div className="mt-4 sm:mt-6 md:mt-8 animate-fadeIn">
          <p className="text-lg sm:text-xl md:text-2xl text-pink-500 font-bold">
            You popped them all! 🎉
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-1 sm:mt-2">
            Just like you pop into my mind every second 💭💕
          </p>
        </div>
      )}
    </div>
  );
};

export default BalloonPop;
