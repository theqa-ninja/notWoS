import { useEffect, useState } from 'react';

function useTimer(start = false, duration = 30) {
  const [count, setCount] = useState(duration);
  const [timerEnded, setTimerEnded] = useState<boolean>(false);
  const [timerStarted, setTimerStarted] = useState<boolean>(start);

  useEffect(() => {
    if (count <= 0) {
      setTimerStarted(false);
      setTimerEnded(true);
      return;
    }

    if (timerStarted) {
      const countdown = setInterval(() => {
        setCount((c) => c - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [count, timerStarted]);

  function startTimer() {
    setTimerStarted(true);
  }

  return { count, timerStarted, timerEnded, startTimer };
}

export default useTimer;
