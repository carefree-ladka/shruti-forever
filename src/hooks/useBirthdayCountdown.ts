import { useEffect, useState } from "react";

export const useBirthdayCountdown = (createBirthdayConfetti: () => void) => {
  const [timeUntilBirthday, setTimeUntilBirthday] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const calculateTimeUntilBirthday = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let birthdayThisYear = new Date(currentYear, 2, 29);

      if (now > birthdayThisYear) {
        birthdayThisYear = new Date(currentYear + 1, 2, 29);
      }

      const isToday = now.getDate() === 29 && now.getMonth() === 2;

      if (isToday) {
        setIsBirthday(true);
        createBirthdayConfetti();
        return null;
      }

      setIsBirthday(false);

      const timeDiff = birthdayThisYear.getTime() - now.getTime();
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    const interval = setInterval(() => {
      const result = calculateTimeUntilBirthday();
      setTimeUntilBirthday(result);
    }, 1000);

    return () => clearInterval(interval);
  }, [createBirthdayConfetti]);

  return { timeUntilBirthday, isBirthday };
};
