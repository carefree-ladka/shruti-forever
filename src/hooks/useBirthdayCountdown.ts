import { useEffect, useState } from "react";
import { SITE_CONFIG } from "../data/constants";

export const useBirthdayCountdown = (createBirthdayConfetti: () => void) => {
  const [timeUntilBirthday, setTimeUntilBirthday] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const calculateTimeUntilBirthday = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let birthdayThisYear = new Date(currentYear, SITE_CONFIG.birthdayMonth, SITE_CONFIG.birthdayDay);

      if (now > birthdayThisYear) {
        birthdayThisYear = new Date(currentYear + 1, SITE_CONFIG.birthdayMonth, SITE_CONFIG.birthdayDay);
      }

      const isToday = now.getDate() === SITE_CONFIG.birthdayDay && now.getMonth() === SITE_CONFIG.birthdayMonth;

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
