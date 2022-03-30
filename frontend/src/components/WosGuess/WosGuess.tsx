import { LockClosedIcon } from '@heroicons/react/solid';
import classnames from 'classnames';

interface WosGuessProps {
  word: string;
  player: string;
  locked: boolean;
  hidden: boolean;
  length: number;
}

const lengthToColor: { [key: string]: string } = {
  '4': 'lavender',
  '5': 'teal',
  '6': 'maroon',
  '7': 'green',
  '8': 'yellow',
  '9': 'blue',
  '10': 'mauve',
  '11': 'pink',
  '12': 'peach'
};

function WosGuess({ word, player, locked, hidden, length }: WosGuessProps) {
  return (
    <li className="wos-guess">
      <div className="wos-guess-player">
        {locked && <LockClosedIcon className="wos-guess--lock" />}
        <span className="text-white">{player}</span>
      </div>
      <div className="wos-guess-blocks">
        {word.split('').map((w, i) => (
          <span
            key={w + i}
            className={`wos-guess-block wos-guess-block--${
              lengthToColor[length.toString()]
            }`}
          >
            {hidden ? '?' : w}
          </span>
        ))}
      </div>
    </li>
  );
}

export default WosGuess;
