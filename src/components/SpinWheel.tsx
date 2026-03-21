import { useRef, useState } from "react";
import { SITE_CONFIG } from "../data/constants";
import { spinWheelPrizes } from "../data/gameData";

const prizes = spinWheelPrizes;
const NUM = prizes.length;
const SEG_ANGLE = 360 / NUM;
const RADIUS = 170;
const CENTER = 200;
const TEXT_RADIUS = 110;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} Z`;
}

const SpinWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const wheelRef = useRef<SVGGElement>(null);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);
    setShowResult(false);

    const extraSpins = 5 * 360;
    const randomAngle = Math.floor(Math.random() * 360);
    const totalRotation = rotation + extraSpins + randomAngle;
    setRotation(totalRotation);

    setTimeout(() => {
      const finalAngle = totalRotation % 360;
      const adjustedAngle = (360 - finalAngle + SEG_ANGLE / 2) % 360;
      const winnerIndex = Math.floor(adjustedAngle / SEG_ANGLE) % NUM;
      setResult(prizes[winnerIndex].text.replace("\n", " "));
      setSpinning(false);
      setShowResult(true);
    }, 4000);
  };

  return (
    <div className="text-center py-6 sm:py-8 md:py-12 px-4">
      <p className="text-lg sm:text-xl md:text-2xl text-pink-400 font-medium mb-1">
        Spin the Wheel! 🎡
      </p>
      <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
        Win a prize from your boyfriend, {SITE_CONFIG.name}
      </p>

      <div className="relative inline-block mb-4 sm:mb-6">
        {/* Pointer */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
          <svg width="28" height="32" viewBox="0 0 28 32">
            <polygon points="14,32 0,0 28,0" fill="#e11d48" stroke="#fff" strokeWidth="2" />
          </svg>
        </div>

        {/* Outer glow ring */}
        <div
          className="rounded-full p-1.5 sm:p-2 shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #ec4899, #a855f7, #ec4899)",
          }}
        >
          <svg
            viewBox="0 0 400 400"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full"
            style={{ filter: "drop-shadow(0 4px 20px rgba(236,72,153,0.3))" }}
          >
            <g
              style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: "200px 200px",
                transition: spinning
                  ? "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)"
                  : "none",
              }}
              ref={wheelRef}
            >
              {/* Segments */}
              {prizes.map((prize, i) => {
                const startAngle = i * SEG_ANGLE;
                const endAngle = startAngle + SEG_ANGLE;
                const d = describeArc(CENTER, CENTER, RADIUS, startAngle, endAngle);
                return (
                  <path
                    key={i}
                    d={d}
                    fill={prize.color}
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.5"
                  />
                );
              })}

              {/* Segment divider lines */}
              {prizes.map((_, i) => {
                const angle = i * SEG_ANGLE;
                const pt = polarToCartesian(CENTER, CENTER, RADIUS, angle);
                return (
                  <line
                    key={`line-${i}`}
                    x1={CENTER}
                    y1={CENTER}
                    x2={pt.x}
                    y2={pt.y}
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="2"
                  />
                );
              })}

              {/* Text labels */}
              {prizes.map((prize, i) => {
                const midAngle = i * SEG_ANGLE + SEG_ANGLE / 2;
                const textPt = polarToCartesian(CENTER, CENTER, TEXT_RADIUS, midAngle);
                const lines = prize.text.split("\n");
                return (
                  <g key={`text-${i}`}>
                    {lines.map((line, j) => (
                      <text
                        key={j}
                        x={textPt.x}
                        y={textPt.y + (j - (lines.length - 1) / 2) * 16}
                        textAnchor="middle"
                        dominantBaseline="central"
                        transform={`rotate(${midAngle}, ${textPt.x}, ${textPt.y})`}
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                        style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.4)" }}
                      >
                        {line}
                      </text>
                    ))}
                  </g>
                );
              })}

              {/* Center circle */}
              <circle cx={CENTER} cy={CENTER} r="28" fill="white" stroke="#f9a8d4" strokeWidth="3" />
              <text x={CENTER} y={CENTER} textAnchor="middle" dominantBaseline="central" fontSize="22">
                💖
              </text>
            </g>
          </svg>
        </div>
      </div>

      {showResult && result && (
        <div className="animate-fadeIn mb-4 sm:mb-6">
          <div className="inline-block bg-white/90 backdrop-blur rounded-2xl px-6 py-4 shadow-lg border-2 border-pink-200">
            <p className="text-sm text-gray-400 mb-1">🎉 You won:</p>
            <p className="text-xl sm:text-2xl text-pink-600 font-bold">{result}</p>
            <p className="text-xs text-gray-400 mt-2">
              Redeemable anytime, {SITE_CONFIG.nameLong} 😘
            </p>
          </div>
        </div>
      )}

      <button
        onClick={spin}
        disabled={spinning}
        className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-linear-to-r from-pink-500 to-purple-500 text-white text-base sm:text-lg md:text-xl font-bold rounded-full shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100"
      >
        {spinning ? "Spinning... 🌀" : result ? "Spin Again! 🎡" : "SPIN! 🎡"}
      </button>
    </div>
  );
};

export default SpinWheel;
