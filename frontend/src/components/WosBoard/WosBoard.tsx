interface WordBoardProps {
  annoucement: string;
}

import WosScrambled from 'components/WosWord/WosScrambled';

function WosBoard({ annoucement }: WordBoardProps) {
  const word = 'sunflower';
  return (
    <div className="wos-board">
      <div className="wos-board--announcement">
        <span className="wos-board--text">{annoucement}</span>
      </div>
      <div className="wos-board--anagram">
        <span className="text-lg text-center text-background uppercase">
          unscramble me
        </span>
        <WosScrambled word={word}></WosScrambled>
      </div>
    </div>
  );
}

export default WosBoard;
