import { ReactNode } from 'react';
import WosBlock from 'components/WosWord/WosBlock';
import { generateRandomLetter, scrambleWord } from 'utils/Scramble';
import { useEffect, useState, useReducer } from 'react';
import WosWord from 'utils/WosWord';

interface WosScrambledProps {
  lvl: Level;
}

// TODO: might be better to turn WosWord into a ContextProvider
function WosScrambled({ lvl }: WosScrambledProps) {
  const wosWord: WosWord = new WosWord(lvl);
  const [anagram, setAnagram] = useState<Letter[]>([...wosWord.letters]);

  useEffect(() => {
    // TODO: only generate hiddens or fakes after a certain level
    // obfuscateWord();
  }, []);

  const [showHiddens, setShowHiddens] = useState<boolean>(false);
  const [showFakes, setShowFakes] = useState<boolean>(false);

  function scramble() {
    setAnagram([...wosWord.scramble()]);
  }

  function unHideHiddens() {
    wosWord.unHide();
    setShowHiddens(true);
  }

  function unHideFakes() {
    setShowFakes(true);
  }

  return (
    <div className="wos-word" onClick={scramble}>
      {anagram.map((l: Letter, i: number) => (
        <WosBlock
          key={l.char + i}
          letter={l.char}
          hidden={l.hidden && !showHiddens}
          fake={l.fake && showFakes}
        />
      ))}
    </div>
  );
}

export default WosScrambled;
