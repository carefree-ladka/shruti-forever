import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { SITE_CONFIG } from "../data/constants";
import { heartRatingReactions, loveNoteMoods } from "../data/gameData";

const moods = loveNoteMoods;

const LoveNote = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [heartRating, setHeartRating] = useState(0);
  const [hoveredHeart, setHoveredHeart] = useState(0);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSend = async () => {
    if (!message.trim() && selectedMood === null && heartRating === 0) return;
    setSending(true);
    setError(false);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          message: message || "(no message)",
          mood: selectedMood !== null ? `${moods[selectedMood].emoji} ${moods[selectedMood].label}` : "not selected",
          heart_rating: `${heartRating}/5 hearts`,
          from_name: `${SITE_CONFIG.name} (Birthday Site)`,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setSent(true);
    } catch {
      setError(true);
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="text-center py-6 sm:py-8 md:py-12 animate-fadeIn">
        <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6 animate-bounce">💌</div>
        <p className="text-xl sm:text-2xl md:text-3xl text-pink-500 font-bold mb-2 sm:mb-3">
          Sent with love! 💕
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 px-4">
          Your note just made your boyfriend's entire day, {SITE_CONFIG.nameLong} 🥹
        </p>
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl">
          {["✨", "💖", "✨", "💖", "✨"].map((e, i) => (
            <span
              key={i}
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-6 sm:py-8 md:py-12">
      <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">💌</div>
      <p className="text-lg sm:text-xl md:text-2xl text-pink-400 font-medium mb-2">
        Send Me a Love Note 💕
      </p>
      <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 md:mb-8">
        Tell me what you think, birthday girl — I'll read it a million times
      </p>

      <form ref={formRef} className="max-w-md mx-auto space-y-4 sm:space-y-5 md:space-y-6 px-2">
        {/* Heart rating */}
        <div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-2 sm:mb-3">
            Rate this birthday surprise:
          </p>
          <div className="flex justify-center gap-1.5 sm:gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setHeartRating(n)}
                onMouseEnter={() => setHoveredHeart(n)}
                onMouseLeave={() => setHoveredHeart(0)}
                className="text-2xl sm:text-3xl md:text-4xl transition-transform duration-200 hover:scale-125"
              >
                {n <= (hoveredHeart || heartRating) ? "❤️" : "🤍"}
              </button>
            ))}
          </div>
          {heartRating > 0 && (
            <p className="text-sm text-pink-400 mt-2">
              {heartRatingReactions[heartRating]}
            </p>
          )}
        </div>

        {/* Mood selector */}
        <div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-2 sm:mb-3">How are you feeling rn?</p>
          <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
            {moods.map((mood, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedMood(i)}
                className={`flex flex-col items-center gap-0.5 sm:gap-1 px-2.5 sm:px-3 md:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 transition-all duration-200 ${
                  selectedMood === i
                    ? "border-pink-500 bg-pink-50 scale-110 shadow-lg"
                    : "border-gray-200 bg-white hover:border-pink-300 hover:bg-pink-50"
                }`}
              >
                <span className="text-lg sm:text-xl md:text-2xl">{mood.emoji}</span>
                <span className="text-[10px] sm:text-xs text-gray-500">{mood.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`Write me something cute, ${SITE_CONFIG.name}... 💭`}
            className="w-full h-24 sm:h-28 p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 border-pink-300 bg-white/80 backdrop-blur text-gray-700 text-base sm:text-lg resize-none focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 placeholder-pink-300"
            disabled={sending}
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm">
            Oops, something went wrong 😅 Try again?
          </p>
        )}

        <button
          type="button"
          onClick={handleSend}
          disabled={
            sending ||
            (!message.trim() && selectedMood === null && heartRating === 0)
          }
          className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-linear-to-r from-pink-500 to-purple-500 text-white text-base sm:text-lg md:text-xl font-bold rounded-full shadow-xl hover:scale-105 transition-all disabled:opacity-40 disabled:hover:scale-100"
        >
          {sending ? (
            <span className="flex items-center gap-2">
              Sending with love
              <span className="animate-spin">💌</span>
            </span>
          ) : (
            "Send My Love Note 💌"
          )}
        </button>
      </form>
    </div>
  );
};

export default LoveNote;
