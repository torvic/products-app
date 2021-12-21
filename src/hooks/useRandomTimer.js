import { useEffect, useRef, useState } from 'react';

const useRandomTimer = () => {
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  const [disabled, setDisabled] = useState(false);

  let interval = useRef();
  useEffect(() => {
    const startTimer = () => {
      const randomTime = Math.floor(Math.random() * 10 + 1) * 60000;
      const countDownDate = new Date().getTime() + randomTime;
      interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const hours = `0${Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        )}`.slice(-2);
        const minutes = `0${Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60),
        )}`.slice(-2);
        const seconds = `0${Math.floor((distance % (1000 * 60)) / 1000)}`.slice(
          -2,
        );
        if (distance < 0) {
          clearInterval(interval.current);
          setDisabled(true);
        } else {
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      }, 1000);
    };
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return { disabled, timerHours, timerMinutes, timerSeconds };
};

export default useRandomTimer;
