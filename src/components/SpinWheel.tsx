import { useState } from "react";
import { SITE_CONFIG } from "../data/constants";
import { spinWheelPrizes } from "../data/gameData";

const prizes = spinWheelPrizes;


const SpinWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);

    const extraSpins = 5 * 360;
    const randomAngle = Math.floor(Math.random() * 360);
    const totalRotation = rotation + extraSpins + randomAngle;
    setRotation(totalRotation);

    setTimeout(() => {
      const finalAngle = totalRotation % 360;
      const segmentAngle = 360 / prizes.length;
      // The pointer is at the top (0°), wheel rotates clockwise
      // So we need to find which segment is at the top after rotation
      const adjustedAngle = (360 - finalAngle + segmentAngle / 2) % 360;
      const winnerIndex = Math.floor(adjustedAngle / segmentAngle) % prizes.length;
      setResult(prizes[winnerIndex].text.replace("\n", " "));
      setSpinning(false);
    }, 4000);
  };

  const segmentAngle = 360 / prizes.length;

  return (
    <div className="text-center py-6 sm:py-8 md:py-12">
      <p className="text-lg sm:text-xl md:text-2xl text-pink-400 font-medium mb-2">
        Spin the Wheel! 🎡
      </p>
      <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 md:mb-8">
        Win a prize from your boyfriend, {SITE_CONFIG.name}
      </p>

      <div className="relative inline-block mb-4 sm:mb-6 md:mb-8">
        {/* Pointer */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 text-xl sm:text-2xl md:text-3xl">
          🔻
        </div>

        {/* Wheel */}
        <div
          className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full relative overflow-hidden shadow-2xl border-4 border-pink-300"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: spinning ? "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)" : "none",
          }}
        >
          {prizes.map((prize, i) => {
            const startAngle = i * segmentAngle;
            const skew = 90 - segmentAngle;
            return (
              <div
                key={i}
                className="absolute w-1/2 h-1/2 origin-bottom-right"
                style={{
                  transform: `rotate(${startAngle}deg) skewY(-${skew}deg)`,
                  top: 0,
                  right: "50%",
                }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background: prize.color,
                    transform: `skewY(${skew}deg)`,
                  }}
                />
              </div>
            );
          })}
          {/* Text labels */}
          {prizes.map((prize, i) => {
            const angle = i * segmentAngle + segmentAngle / 2 - 90;
            const radius = 80;
            const rad = (angle * Math.PI) / 180;
            const x = 144 + radius * Math.cos(rad);
            const y = 144 + radius * Math.sin(rad);
            return (
              <div
                key={`text-${i}`}
                className="absolute text-white font-bold text-xs text-center leading-tight pointer-events-none"
                style={{
                  left: x,
                  top: y,
                  transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                  width: "70px",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                }}
              >
                {prize.text.split("\n").map((line, j) => (
                  <div key={j}>{line}</div>
                ))}
              </div>
            );
          })}
          {/* Center circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-2 border-pink-300">
            <span className="text-lg sm:text-xl md:text-2xl">💖</span>
          </div>
        </div>
      </div>

      {result && (
        <div className="animate-fadeIn mb-4 sm:mb-6">
          <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-1">You won:</p>
          <p className="text-lg sm:text-xl md:text-2xl text-pink-600 font-bold">{result}</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">
            Redeemable anytime, {SITE_CONFIG.nameLong} 😘
          </p>
        </div>
      )}

      <button
        onClick={spin}
        disabled={spinning}
        className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-linear-to-r from-pink-500 to-purple-500 text-white text-base sm:text-lg md:text-xl font-bold rounded-full shadow-xl hover:scale-105 transition-all disabled:opacity-50"
      >
        {spinning ? "Spinning... 🌀" : result ? "Spin Again! 🎡" : "SPIN! 🎡"}
      </button>
    </div>
  );
};

export default SpinWheel;
