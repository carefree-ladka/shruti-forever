interface LoveMeterProps {
  current: number;
  total: number;
}

const hearts = ["🤍", "🩷", "🩷", "💗", "💗", "💖", "💖"];

const LoveMeter = ({ current, total }: LoveMeterProps) => {
  const pct = Math.round((current / total) * 100);
  const heartIndex = Math.min(Math.floor((pct / 100) * (hearts.length - 1)), hearts.length - 1);

  return (
    <div className="flex flex-col items-center gap-1 mb-3 sm:mb-4">
      <p className="text-xs sm:text-sm text-pink-500 font-semibold">Love Meter {hearts[heartIndex]}</p>
      <div className="w-32 sm:w-40 md:w-48 bg-pink-100 rounded-full h-2.5 sm:h-3 overflow-hidden border border-pink-300">
        <div
          className="h-full rounded-full bg-linear-to-r from-pink-400 to-rose-500 transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-[10px] sm:text-xs text-gray-500">{pct}% love unlocked</p>
    </div>
  );
};

export default LoveMeter;
