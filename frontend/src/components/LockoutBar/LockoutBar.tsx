import {
  LockClosedIcon,
  LockOpenIcon,
  ClockIcon
} from '@heroicons/react/solid';
function LockoutBar() {
  return (
    <div className="lockout">
      <div className="lockout-clock">
        <ClockIcon className="text-yellow" />
      </div>
      <div className="timer">
        <div className="timer-bar">
          <div className="timer-bar--filled" style={{ width: '100%' }}></div>
        </div>
      </div>

      <div className="timer-checkpoint">
        <LockClosedIcon className="timer-lock"></LockClosedIcon>
      </div>

      <div className="timer">
        <div className="timer-bar">
          <div className="timer-bar--filled" style={{ width: '100%' }}></div>
        </div>
      </div>

      <div className="timer-checkpoint">
        <LockClosedIcon className="timer-lock"></LockClosedIcon>
      </div>

      <div className="timer">
        <div className="timer-bar">
          <div className="timer-bar--filled" style={{ width: '20%' }}></div>
        </div>
      </div>

      <div className="timer-checkpoint">
        <LockOpenIcon className="timer-lock"></LockOpenIcon>
      </div>

      <div className="timer">
        <div className="timer-bar">
          <div className="timer-bar--filled" style={{ width: '0%' }}></div>
        </div>
      </div>
    </div>
  );
}

export default LockoutBar;
