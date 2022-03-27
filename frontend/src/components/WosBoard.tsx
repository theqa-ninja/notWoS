interface WordBoardProps {
  announcement: string;
}

import WosBlock from 'components/WosWord/WosBlock';
import WosScrambled from 'components/WosWord/WosScrambled';
import { generateRandomLetter, scrambleWord } from 'utils/Scramble';
import { useEffect } from 'react';

function WosBoard({ announcement }: WordBoardProps) {
  const word = 'temperature';
  let scrambled = scrambleWord(word);
  const numOfFakes = 1;
  const numOfHidden = 2;
  const hiddens: number[] = [];
  const fakes: string[] = [];

  for (let i = 0; i < numOfFakes; i++) {
    // TODO: random letter should not also be a letter that's already in original word?
    const rand = generateRandomLetter();
    fakes.push(rand);
    scrambled += rand;
  }

  for (let i = 0; i < numOfHidden; i++) {
    hiddens.push(Math.floor(Math.random() * scrambled.length));
  }

  return (
    <div className="wos-board">
      <div className="wos-board--announcement">
        <span className="wos-board--text">{announcement}</span>
      </div>
      <div className="wos-board--anagram">
        <span className="text-lg text-center text-background uppercase">
          unscramble me
        </span>
        <WosScrambled>
          {scrambled.split('').map((l: string, i: number) => (
            <WosBlock
              key={l}
              letter={l}
              hidden={hiddens.includes(i)}
              fake={fakes.some((f) => f === l)}
            />
          ))}
        </WosScrambled>
      </div>
    </div>
  );
}

export default WosBoard;
