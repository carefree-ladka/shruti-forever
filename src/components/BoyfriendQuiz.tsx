import { useState } from "react";
import { quizQuestions } from "../data/gameData";

type Question = typeof quizQuestions[number];

const questions: Question[] = quizQuestions;

const BoyfriendQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showReaction, setShowReaction] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    const isCorrect = index === questions[currentQ].correct;
    if (isCorrect) setScore((s) => s + 1);
    setShowReaction(true);

    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ((q) => q + 1);
        setSelected(null);
        setShowReaction(false);
      } else {
        setFinished(true);
      }
    }, 1800);
  };

  if (finished) {
    return (
      <div className="text-center py-6 sm:py-8 md:py-12 animate-fadeIn">
        <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">🏆</div>
        <p className="text-lg sm:text-xl md:text-2xl text-pink-400 font-medium mb-2">Quiz Complete!</p>
        <p className="text-3xl sm:text-4xl md:text-5xl font-black text-pink-500 mb-3 sm:mb-4">
          {score}/{questions.length}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-600">
          {score === questions.length
            ? "Perfect score! I know my girl 😏💕"
            : score >= 3
            ? "Pretty good! I pay attention 😊"
            : "Okay I need to study more 😅"}
        </p>
        <p className="text-sm sm:text-base md:text-lg text-pink-400 mt-3 sm:mt-4 italic">
          (I definitely got them all right though, right? 😂)
        </p>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="text-center py-6 sm:py-8 md:py-12">
      <p className="text-lg sm:text-xl md:text-2xl text-pink-400 font-medium mb-2">
        How Well Does Your BF Know You? 🤔
      </p>
      <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 md:mb-8">
        Question {currentQ + 1} of {questions.length}
      </p>

      <div className="max-w-md mx-auto px-2">
        <div className="bg-white/80 backdrop-blur rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-pink-200 mb-4 sm:mb-6">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium mb-3 sm:mb-4 md:mb-6">
            {q.question}
          </p>

          <div className="space-y-2 sm:space-y-3">
            {q.options.map((option, i) => {
              let btnClass =
                "w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-medium transition-all duration-300 border-2 ";
              if (selected === null) {
                btnClass +=
                  "bg-pink-50 border-pink-200 text-gray-700 hover:bg-pink-100 hover:border-pink-400 cursor-pointer";
              } else if (i === q.correct) {
                btnClass +=
                  "bg-green-100 border-green-400 text-green-700 scale-105";
              } else if (i === selected) {
                btnClass += "bg-red-100 border-red-400 text-red-700";
              } else {
                btnClass += "bg-gray-50 border-gray-200 text-gray-400";
              }

              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  className={btnClass}
                  disabled={selected !== null}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* Reaction */}
        {showReaction && (
          <div className="animate-fadeIn">
            <p className="text-lg text-pink-600 font-semibold">
              {selected === q.correct ? "✅ " : "❌ "}
              {q.reaction}
            </p>
          </div>
        )}

        {/* Progress */}
        <div className="flex justify-center gap-2 mt-6">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`w-8 h-2 rounded-full transition-all ${
                i === currentQ
                  ? "bg-pink-500"
                  : i < currentQ
                  ? "bg-pink-300"
                  : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoyfriendQuiz;
