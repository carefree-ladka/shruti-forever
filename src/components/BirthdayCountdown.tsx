interface BirthdayCountdownProps {
  isBirthday: boolean;
  timeUntilBirthday: { days: number; hours: number; minutes: number; seconds: number } | null;
}

const BirthdayCountdown = ({ isBirthday, timeUntilBirthday }: BirthdayCountdownProps) => {
  if (isBirthday) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-pink-600 via-purple-600 to-rose-600 text-white py-6 shadow-2xl animate-pulse">
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-2 text-4xl">
            🎂 🎉 🎈 🎊 🎁
          </div>
          <h2 className="text-4xl font-bold mb-2">
            🎉 HAPPY BIRTHDAY, SHRUTIIIIIIIIIII! 🎉
          </h2>
          <p className="text-xl">
            Today is YOUR special day! You deserve all the happiness in the world! 💕
          </p>
          <p className="text-lg mt-2 italic">
            And I can't wait to celebrate many more birthdays with you... ✨
          </p>
        </div>
      </div>
    );
  }

  if (!timeUntilBirthday) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-pink-500 via-rose-500 to-purple-500 text-white py-4 shadow-lg">
      <div className="text-center">
        <p className="text-sm font-semibold mb-2">
          🎂 Countdown to Shrutiiiiiiiiiii's Special Day 🎂
        </p>
        <div className="flex justify-center gap-4 text-2xl font-bold">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-20">
            <div>{timeUntilBirthday.days}</div>
            <div className="text-xs font-normal">Days</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-20">
            <div>{timeUntilBirthday.hours}</div>
            <div className="text-xs font-normal">Hours</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-20">
            <div>{timeUntilBirthday.minutes}</div>
            <div className="text-xs font-normal">Minutes</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-20">
            <div>{timeUntilBirthday.seconds}</div>
            <div className="text-xs font-normal">Seconds</div>
          </div>
        </div>
        <p className="text-sm mt-2 italic">
          Until March 29th - The day an angel was born 👑
        </p>
      </div>
    </div>
  );
};

export default BirthdayCountdown;
