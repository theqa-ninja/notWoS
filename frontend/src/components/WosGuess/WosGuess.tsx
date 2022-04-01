import { LockClosedIcon } from '@heroicons/react/solid';
import WosGuessBlock from 'components/WosGuess/WosGuessBlock';

interface WosGuessProps {
  word: string;
  player: string;
  locked: boolean;
  hidden: boolean;
  length: number;
}

function WosGuess({ word, player, locked, hidden, length }: WosGuessProps) {
  return (
    <li className="wos-guess">
      <div className="wos-guess-player">
        {locked && <LockClosedIcon className="wos-guess--lock" />}
        <span className="text-white">{player}</span>
      </div>
      <ul className="wos-guess-blocks">
        {word.split('').map((w, i) => (
          <WosGuessBlock
            key={w + i}
            hidden={hidden}
            length={length}
            letter={player ? w : ''}
          />
        ))}
      </ul>
    </li>
  );
}

export default WosGuess;
