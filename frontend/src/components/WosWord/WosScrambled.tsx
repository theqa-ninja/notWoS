import { ReactNode } from 'react';
import WosBlock from 'components/WosWord/WosBlock';
import { generateRandomLetter, scrambleWord } from 'utils/Scramble';
import { useEffect, useState, useReducer } from 'react';

interface WosScrambledProps {
  word: string;
  lvl: Level;
}

/* TODO: maybe the fakes and hiddens should have a state too?
 * fake = { char: 'i', hidden: false, fake: true }
 */

interface Anagram extends Level {
  scrambled?: string[];
}

function WosScrambled({ word, lvl }: WosScrambledProps) {
  // const numOfFakes = 1;
  // const numOfHiddens = 2;
  // const initState: Anagram = {
  //   original: word,
  //   scrambled: word.split(''),
  //   fakes: [],
  //   hiddens: []
  // };

  const [anagram, setAnagram] = useState<Anagram>(
    Object.assign({ scrambled: [] }, lvl)
  );

  useEffect(() => {
    // TODO: only generate hiddens or fakes after a certain level
    // obfuscateWord();
    const scrambled = anagram.letters.concat(anagram.fake_letters);
    setAnagram((state: Anagram) => ({
      ...state,
      scrambled: scrambleWord(scrambled)
    }));
  }, []);

  const [showHiddens, setShowHiddens] = useState<boolean>(false);

  // function obfuscateWord() {
  //   const temp: Anagram = anagram;

  //   // NOTE: Order is important. A fake letter can also be hidden
  //   for (let i = 0; i < numOfFakes; i++) {
  //     const l = generateRandomLetter();
  //     temp.fakes.push(l);
  //     temp.scrambled.push(l);
  //   }

  //   for (let i = 0; i < numOfHiddens; i++) {
  //     const randIndex = Math.floor(Math.random() * temp.scrambled.length);
  //     temp.hiddens.push(temp.scrambled[randIndex]);
  //   }

  //   temp.scrambled = scrambleWord(temp.scrambled);
  //   setAnagram((state: Anagram) => ({ ...state, ...temp }));
  // }
  //
  console.log(anagram);

  function scramble() {
    const scrambled: string[] = scrambleWord(anagram.scrambled ?? []);
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
      {anagram.scrambled?.map((l: string, i: number) => (
        <WosBlock
          key={l + i}
          letter={l}
          hidden={anagram.hidden_letters.includes(l) && !showHiddens}
          fake={anagram.fake_letters.includes(l)}
        />
      ))}
    </div>
  );
}

export default WosScrambled;
