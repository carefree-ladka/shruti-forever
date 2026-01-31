export const createConfettiPieces = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
    rotation: Math.random() * 360,
    color: ["#FF69B4", "#FF1493", "#FFB6C1", "#FFC0CB", "#FF6347", "#FFD700", "#9370DB", "#BA55D3"][Math.floor(Math.random() * 8)],
    shape: ["●", "■", "▲", "★", "♥"][Math.floor(Math.random() * 5)],
  }));
};
