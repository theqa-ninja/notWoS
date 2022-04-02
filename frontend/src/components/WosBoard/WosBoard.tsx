interface WordBoardProps {
  annoucement: string;
}

import WosScrambled from 'components/WosWord/WosScrambled';
import { lvl } from 'utils/MockData';

function WosBoard({ annoucement }: WordBoardProps) {
  return (
    <div className="wos-board">
      <div className="wos-board--announcement">
        <span className="wos-board--text">{annoucement}</span>
      </div>
      <div className="wos-board--anagram">
        <span className="text-lg text-center text-background uppercase">
          unscramble me
        </span>
        <WosScrambled lvl={lvl} word={lvl.starting_word}></WosScrambled>
      </div>
    </div>
  );
}

export default WosBoard;
