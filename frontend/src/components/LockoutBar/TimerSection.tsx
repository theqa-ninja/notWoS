import {
  ClockIcon,
  LockOpenIcon,
  LockClosedIcon
} from '@heroicons/react/solid';

import { useState, useEffect } from 'react';

interface TimerSectionProps {
  locked: boolean;
  countdown: number;
}

function TimerSection({ locked = true, countdown = 30 }: TimerSectionProps) {
  // TODO: timer countdown and animate progress bar

  const [progress, setProgress] = useState<number>(100);

  function calcProgress(currTime: number) {
    return Math.floor((currTime / countdown) * 100);
  }

  return (
    <>
      <div className="lockout-clock">
        <ClockIcon className="text-yellow" />
      </div>
      <div className="timer">
        <div className="timer-bar">
          <div
            className="timer-bar--filled"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="timer-checkpoint">
        {locked ? (
          <LockClosedIcon className="timer-lock"></LockClosedIcon>
        ) : (
          <LockOpenIcon className="timer-lock"></LockOpenIcon>
        )}
      </div>
    </>
  );
}

export default TimerSection;
