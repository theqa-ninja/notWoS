import { useEffect, useState } from 'react';

function useTimer(startTimer = false, duration = 30) {
  const [count, setCount] = useState(duration);
  const [timerEnded, setTimerEnded] = useState<boolean>(false);

  useEffect(() => {
    if (count <= 0) {
      setTimerEnded(true);
      return;
    }

    if (startTimer) {
      const countdown = setInterval(() => {
        setCount((c) => c - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [startTimer]);

  return { count, timerEnded };
}

export default useTimer;
