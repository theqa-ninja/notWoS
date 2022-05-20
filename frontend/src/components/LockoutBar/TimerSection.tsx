import {
  ClockIcon,
  LockOpenIcon,
  LockClosedIcon
} from '@heroicons/react/solid';

import { useState, useEffect } from 'react';
import useTimer from 'hooks/useTimer';

interface TimerSectionProps {
  locked?: boolean;
  duration?: number;
  started?: boolean;
  end?: boolean;
}

function TimerSection({
  locked = true,
  duration = 30,
  started = false,
  end = false
}: TimerSectionProps) {
  //TODO: NEEDS A WAY TO TELL PARENT COMPONENT THAT THE TIMER ENDED
  const [progress, setProgress] = useState<number>(100);
  const timer = useTimer(started, duration);
  const [lockedTimer, setLockedTimer] = useState<boolean>(locked);

  function calcProgress(currTime: number) {
    return Math.floor((currTime / duration) * 100);
  }

  useEffect(() => {
    if (started) {
      timer.startTimer();
    }
  }, [started]);

  useEffect(() => {
    // set the timer progress
    if (timer.count > 0) {
      setProgress(calcProgress(timer.count));
    } else {
      // timer done, unlock timer
      setProgress(0);
      setLockedTimer(false);
    }
  }, [timer.count]);

  return (
    <>
      <div className="timer">
        <div className="timer-bar">
          <div
            className="timer-bar--filled"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      {!end ? (
        <div className="timer-checkpoint">
          {lockedTimer ? (
            <LockClosedIcon className="timer-lock"></LockClosedIcon>
          ) : (
            <LockOpenIcon className="timer-lock"></LockOpenIcon>
          )}
        </div>
      ) : null}
    </>
  );
}

export default TimerSection;
