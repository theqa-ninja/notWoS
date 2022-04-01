import { ReactNode } from 'react';
import WosBlock from 'components/WosWord/WosBlock';
import { generateRandomLetter, scrambleWord } from 'utils/Scramble';
import { useEffect, useState, useReducer } from 'react';

interface WosScrambledProps {
  children?: ReactNode;
  word: string;
}

/* TODO: maybe the fakes and hiddens should have a state too?
 * fake = { char: 'i', hidden: false, fake: true }
 */

interface Anagram {
  original: string;
  scrambled: string[];
  fakes: string[];
  hiddens: string[];
}

function WosScrambled({ word, children }: WosScrambledProps) {
  const numOfFakes = 1;
  const numOfHiddens = 2;
  const initState: Anagram = {
    original: word,
    scrambled: word.split(''),
    fakes: [],
    hiddens: []
  };

  const [anagram, setAnagram] = useState<Anagram>(initState);

  useEffect(() => {
    // TODO: only generate hiddens or fakes after a certain level
    obfuscateWord();
  }, []);

  const [showHiddens, setShowHiddens] = useState<boolean>(false);

  function obfuscateWord() {
    const temp: Anagram = anagram;

    // NOTE: Order is important. A fake letter can also be hidden
    for (let i = 0; i < numOfFakes; i++) {
      const l = generateRandomLetter();
      temp.fakes.push(l);
      temp.scrambled.push(l);
    }

    for (let i = 0; i < numOfHiddens; i++) {
      const randIndex = Math.floor(Math.random() * temp.scrambled.length);
      temp.hiddens.push(temp.scrambled[randIndex]);
    }

    temp.scrambled = scrambleWord(temp.scrambled);
    setAnagram((state: Anagram) => ({ ...state, ...temp }));
  }

  function scramble() {
    const scrambled: string[] = scrambleWord(anagram.scrambled);
    setAnagram((state: Anagram) => {
      return {
        ...state,
        scrambled: scrambled
      };
    });
  }

  // TODO: what if there are duplicate letters? All duplicates will show as hidden or fake
  return (
    <div className="wos-word" onClick={scramble}>
      {anagram.scrambled.map((l: string, i: number) => (
        <WosBlock
          key={l + i}
          letter={l}
          hidden={anagram.hiddens.includes(l) && !showHiddens}
          fake={anagram.fakes.includes(l)}
        />
      ))}
    </div>
  );
}

export default WosScrambled;
