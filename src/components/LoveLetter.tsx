import { useState } from "react";
import { loveLetterContent } from "../data/contentData";

const LoveLetter = () => {
  const [opened, setOpened] = useState(false);
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opened) return;
    setOpening(true);
    setTimeout(() => {
      setOpened(true);
      setOpening(false);
    }, 800);
  };

  return (
    <div className="text-center py-6 sm:py-8 md:py-12">
      <p className="text-lg sm:text-xl md:text-2xl text-pink-400 font-medium mb-3 sm:mb-4 md:mb-6">
        A secret letter, just for you 💌
      </p>

      {!opened ? (
        <div
          onClick={handleOpen}
          className={`cursor-pointer inline-block transition-all duration-500 ${
            opening ? "scale-110 rotate-3" : "hover:scale-105"
          }`}
        >
          {/* Envelope */}
          <div className="relative w-56 sm:w-64 md:w-72 h-36 sm:h-42 md:h-48 mx-auto">
            {/* Envelope body */}
            <div className="absolute inset-0 bg-linear-to-b from-pink-200 to-pink-300 rounded-xl shadow-2xl border-2 border-pink-400 overflow-hidden">
              {/* Envelope flap */}
              <div
                className={`absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-pink-300 to-pink-200 origin-top transition-transform duration-700 ${
                  opening ? "-scale-y-100" : ""
                }`}
                style={{
                  clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                }}
              />
              {/* Heart seal */}
              <div
                className={`absolute top-8 left-1/2 -translate-x-1/2 text-4xl z-10 transition-all duration-500 ${
                  opening ? "opacity-0 scale-0" : "animate-pulse"
                }`}
              >
                💝
              </div>
              {/* Inner lines */}
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <div className="h-1 bg-pink-400/30 rounded" />
                <div className="h-1 bg-pink-400/30 rounded w-3/4" />
                <div className="h-1 bg-pink-400/30 rounded w-1/2" />
              </div>
            </div>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-pink-500 mt-3 sm:mt-4 animate-pulse">
            Tap to open ✨
          </p>
        </div>
      ) : (
        <div className="animate-fadeIn max-w-2xl mx-auto px-2">
          <div
            className="bg-amber-50 rounded-xl sm:rounded-2xl p-5 sm:p-7 md:p-10 shadow-2xl border-2 border-amber-200 relative"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            {/* Decorative corner */}
            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 text-lg sm:text-xl md:text-2xl opacity-40">🌸</div>
            <div className="absolute top-2 sm:top-3 right-2 sm:right-3 text-lg sm:text-xl md:text-2xl opacity-40">🌸</div>
            <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-lg sm:text-xl md:text-2xl opacity-40">
              🌸
            </div>
            <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 text-lg sm:text-xl md:text-2xl opacity-40">
              🌸
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed italic mb-3 sm:mb-4">
              {loveLetterContent.greeting}
            </p>
            {loveLetterContent.paragraphs.map((para, i) => (
              <p key={i} className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-2 sm:mb-3">
                {para}
              </p>
            ))}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mt-4 sm:mt-6 text-right">
              {loveLetterContent.signOff}
              <br />
              <span className="text-pink-500 font-bold text-sm sm:text-base md:text-lg">
                {loveLetterContent.signature}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoveLetter;
