import WnosBlock from 'components/WnosWord/WnosBlock';
import { useEffect, useState } from 'react';
import WnosWord from 'utils/WnosWord';
import { useGame } from 'context/GameProvider';
import { observer } from 'mobx-react';

// TODO: might be better to turn WnosWord into a ContextProvider
function WnosScrambled() {
  const game = useGame();
  const wnosWord: WnosWord = new WnosWord(game.currentLevel!);
  const [anagram, setAnagram] = useState<Letter[]>([...wnosWord.letters]);

  useEffect(() => {
    // TODO: only generate hiddens or fakes after a certain level
    // obfuscateWord();
  }, []);

  const [showHiddens, setShowHiddens] = useState<boolean>(false);
  const [showFakes, setShowFakes] = useState<boolean>(false);

  function scramble() {
    setAnagram([...wnosWord.scramble()]);
  }

  function unHideHiddens() {
    wnosWord.unHide();
    setShowHiddens(true);
  }

  function unHideFakes() {
    setShowFakes(true);
  }

  return (
    <div className="wnos-word" onClick={scramble}>
      {anagram.map((l: Letter, i: number) => (
        <WnosBlock
          key={l.char + i}
          letter={l.char}
          hidden={l.hidden && !showHiddens}
          fake={l.fake && showFakes}
        />
      ))}
    </div>
  );
}

export default observer(WnosScrambled);
