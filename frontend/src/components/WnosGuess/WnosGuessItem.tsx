import { LockClosedIcon } from '@heroicons/react/solid';
import WnosGuessBlock from './WnosGuessBlock';
import { useState } from 'react';
import { observer } from 'mobx-react';
import WnosGuess from 'context/WnosGuess';

interface WnosGuessItemProps {
  word: string;
  player: string;
  locked: boolean;
  hidden: boolean;
  length: number;
}

function WnosGuessItem({ word, player, locked, hidden }: WnosGuessItemProps) {
  const [guess] = useState(() => new WnosGuess(word, player, hidden, locked));
  return (
    <li className="wnos-guess">
      <div className="wnos-guess-player">
        {locked && <LockClosedIcon className="wnos-guess--lock" />}
        <span className="text-white">{player}</span>
      </div>
      <ul className="wnos-guess-blocks">
        {guess.letters.map((w, i) => (
          <WnosGuessBlock
            key={w + i}
            hidden={guess.hidden}
            length={guess.length}
            letter={player ? w : ''}
          />
        ))}
      </ul>
    </li>
  );
}

export default observer(WnosGuessItem);
