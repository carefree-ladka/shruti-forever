import { useState } from "react";
import { SITE_CONFIG } from "../data/constants";
import { wishResponses } from "../data/gameData";

const responses = wishResponses;

const WishGranter = () => {
  const [wish, setWish] = useState("");
  const [sealed, setSealed] = useState(false);
  const [sealing, setSealing] = useState(false);
  const [response, setResponse] = useState("");

  const handleSeal = () => {
    if (!wish.trim()) return;
    setSealing(true);
    setTimeout(() => {
      setSealed(true);
      setSealing(false);
      setResponse(responses[Math.floor(Math.random() * responses.length)]);
    }, 1500);
  };

  return (
    <div className="text-center py-6 sm:py-8 md:py-12">
      <p className="text-lg sm:text-xl md:text-2xl text-pink-400 font-medium mb-2">
        Make a Birthday Wish 🌠
      </p>
      <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 md:mb-8">
        (I promise I'll try to make it come true)
      </p>

      {!sealed ? (
        <div className="max-w-md mx-auto px-2">
          <div
            className={`relative transition-all duration-500 ${
              sealing ? "scale-95 opacity-50" : ""
            }`}
          >
            <textarea
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              placeholder={`Type your wish here, ${SITE_CONFIG.name}... ✨`}
              className="w-full h-24 sm:h-28 md:h-32 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-2 border-pink-300 bg-white/80 backdrop-blur text-gray-700 text-base sm:text-lg resize-none focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 placeholder-pink-300"
              disabled={sealing}
            />
            {sealing && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-3xl sm:text-4xl md:text-5xl animate-spin">🪄</div>
              </div>
            )}
          </div>
          <button
            onClick={handleSeal}
            disabled={!wish.trim() || sealing}
            className="mt-3 sm:mt-4 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-linear-to-r from-pink-500 to-purple-500 text-white text-base sm:text-lg md:text-xl font-bold rounded-full shadow-xl hover:scale-105 transition-all disabled:opacity-40 disabled:hover:scale-100"
          >
            {sealing ? "Sealing with magic... ✨" : "Seal My Wish 🌟"}
          </button>
        </div>
      ) : (
        <div className="animate-fadeIn max-w-md mx-auto px-2">
          <div className="bg-linear-to-br from-purple-100 to-pink-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl border-2 border-purple-200 relative overflow-hidden">
            {/* Sparkle overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className="absolute text-base sm:text-lg md:text-xl animate-pulse"
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  ✨
                </span>
              ))}
            </div>

            <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">🔮</div>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-2 sm:mb-3 italic">
              Your wish has been sealed:
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium mb-4 sm:mb-6 px-2 sm:px-4">
              "{wish}"
            </p>
            <div className="h-px bg-pink-300 mb-4 sm:mb-6" />
            <p className="text-lg sm:text-xl md:text-2xl text-pink-600 font-bold">{response}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishGranter;
