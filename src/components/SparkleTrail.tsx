import { useEffect, useState } from "react";
import { SPARKLE_EMOJIS } from "../data/constants";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

const sparkleEmojis = SPARKLE_EMOJIS;

const SparkleTrail = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    let lastTime = 0;
    const handleMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 80) return;
      lastTime = now;

      const sparkle: Sparkle = {
        id: now,
        x: e.clientX,
        y: e.clientY,
        emoji: sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)],
      };
      setSparkles((prev) => [...prev.slice(-12), sparkle]);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    if (sparkles.length === 0) return;
    const timer = setTimeout(() => {
      setSparkles((prev) => prev.slice(1));
    }, 600);
    return () => clearTimeout(timer);
  }, [sparkles]);

  return (
    <>
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="fixed pointer-events-none z-[9999] animate-sparkle-fade"
          style={{ left: s.x - 10, top: s.y - 10 }}
        >
          {s.emoji}
        </div>
      ))}
    </>
  );
};

export default SparkleTrail;
