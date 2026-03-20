import { useRef, useState } from "react";
import { SITE_CONFIG } from "../data/constants";
import { scratchCardRewards } from "../data/gameData";

const cards = scratchCardRewards;


interface ScratchCardProps {
  reward: string;
  color: string;
}

const ScratchCard = ({ reward, color }: ScratchCardProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [scratching, setScratching] = useState(false);
  const scratchedRef = useRef(0);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const scratch = (e: React.MouseEvent | React.TouchEvent) => {
    if (!scratching) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    const { x, y } = getPos(e);
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    scratchedRef.current += 1;
    if (scratchedRef.current > 60) {
      setRevealed(true);
    }
  };

  const initCanvas = (canvas: HTMLCanvasElement | null) => {
    if (!canvas || canvasRef.current === canvas) return;
    canvasRef.current = canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#e879a0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 16px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Scratch me! ✨", canvas.width / 2, canvas.height / 2 - 8);
    ctx.font = "12px sans-serif";
    ctx.fillText("↕ drag here ↕", canvas.width / 2, canvas.height / 2 + 14);
  };

  return (
    <div className="relative w-40 sm:w-48 md:w-56 h-28 sm:h-32 md:h-36 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 border-pink-200">
      {/* Reward underneath */}
      <div
        className={`absolute inset-0 bg-linear-to-br ${color} flex items-center justify-center p-4`}
      >
        <p
          className={`text-white text-center font-bold text-sm sm:text-base md:text-lg transition-all duration-500 ${
            revealed ? "scale-100 opacity-100" : "scale-90 opacity-80"
          }`}
        >
          {reward}
        </p>
      </div>

      {/* Scratch overlay */}
      {!revealed && (
        <canvas
          ref={initCanvas}
          width={224}
          height={144}
          className="absolute inset-0 cursor-pointer touch-none"
          onMouseDown={() => setScratching(true)}
          onMouseUp={() => setScratching(false)}
          onMouseLeave={() => setScratching(false)}
          onMouseMove={scratch}
          onTouchStart={() => setScratching(true)}
          onTouchEnd={() => setScratching(false)}
          onTouchMove={scratch}
        />
      )}
    </div>
  );
};

const ScratchCards = () => {
  return (
    <div className="text-center py-6 sm:py-8 md:py-12">
      <p className="text-lg sm:text-xl md:text-2xl text-pink-400 font-medium mb-2">
        Scratch to Reveal! 🎟️
      </p>
      <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 md:mb-8">
        Each card has a special coupon just for you, {SITE_CONFIG.name}
      </p>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 px-2">
        {cards.map((card, i) => (
          <ScratchCard key={i} reward={card.reward} color={card.color} />
        ))}
      </div>
    </div>
  );
};

export default ScratchCards;
