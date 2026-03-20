import { SITE_CONFIG } from "../data/constants";

interface BirthdayCountdownProps {
  isBirthday: boolean;
  timeUntilBirthday: { days: number; hours: number; minutes: number; seconds: number } | null;
}

const BirthdayCountdown = ({ isBirthday, timeUntilBirthday }: BirthdayCountdownProps) => {
  if (isBirthday) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-pink-600 via-purple-600 to-rose-600 text-white py-3 sm:py-4 md:py-6 shadow-2xl animate-pulse">
        <div className="text-center px-4">
          <div className="flex justify-center gap-2 sm:gap-4 mb-1 sm:mb-2 text-2xl sm:text-3xl md:text-4xl">
            🎂 🎉 🎈 🎊 🎁
          </div>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-2">
            🎉 HAPPY BIRTHDAY, {SITE_CONFIG.nameLong.toUpperCase()}! 🎉
          </h2>
          <p className="text-sm sm:text-base md:text-xl">
            Today is YOUR special day! You deserve all the happiness in the world! 💕
          </p>
          <p className="text-xs sm:text-sm md:text-lg mt-1 sm:mt-2 italic">
            And I can't wait to celebrate many more birthdays with you... ✨
          </p>
        </div>
      </div>
    );
  }

  if (!timeUntilBirthday) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-pink-500 via-rose-500 to-purple-500 text-white py-2 sm:py-3 md:py-4 shadow-lg">
      <div className="text-center px-4">
        <p className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
          🎂 Countdown to {SITE_CONFIG.nameLong}'s Special Day 🎂
        </p>
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 text-lg sm:text-xl md:text-2xl font-bold">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 sm:px-3 md:px-4 py-1 sm:py-2 min-w-12 sm:min-w-16 md:min-w-20">
            <div>{timeUntilBirthday.days}</div>
            <div className="text-[10px] sm:text-xs font-normal">Days</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 sm:px-3 md:px-4 py-1 sm:py-2 min-w-12 sm:min-w-16 md:min-w-20">
            <div>{timeUntilBirthday.hours}</div>
            <div className="text-[10px] sm:text-xs font-normal">Hours</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 sm:px-3 md:px-4 py-1 sm:py-2 min-w-12 sm:min-w-16 md:min-w-20">
            <div>{timeUntilBirthday.minutes}</div>
            <div className="text-[10px] sm:text-xs font-normal">Minutes</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 sm:px-3 md:px-4 py-1 sm:py-2 min-w-12 sm:min-w-16 md:min-w-20">
            <div>{timeUntilBirthday.seconds}</div>
            <div className="text-[10px] sm:text-xs font-normal">Seconds</div>
          </div>
        </div>
        <p className="text-xs sm:text-sm mt-1 sm:mt-2 italic">
          Until {new Date(2000, SITE_CONFIG.birthdayMonth, SITE_CONFIG.birthdayDay).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - The day an angel was born 👑
        </p>
      </div>
    </div>
  );
};

export default BirthdayCountdown;
