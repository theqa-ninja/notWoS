import { LockClosedIcon } from '@heroicons/react/solid';
import WnosGuessBlock from 'components/WnosGuess/WnosGuessBlock';

interface WnosGuessProps {
  word: string;
  player: string;
  locked: boolean;
  hidden: boolean;
  length: number;
}

function WnosGuess({ word, player, locked, hidden, length }: WnosGuessProps) {
  return (
    <li className="wnos-guess">
      <div className="wnos-guess-player">
        {locked && <LockClosedIcon className="wnos-guess--lock" />}
        <span className="text-white">{player}</span>
      </div>
      <ul className="wnos-guess-blocks">
        {word.split('').map((w, i) => (
          <WnosGuessBlock
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

export default WnosGuess;
