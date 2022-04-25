interface WordBoardProps {
  annoucement: string;
}

import WnosScrambled from 'components/WnosWord/WnosScrambled';

function WnosBoard({ annoucement }: WordBoardProps) {
  return (
    <div className="wnos-board">
      <div className="wnos-board--announcement">
        <span className="wnos-board--text">{annoucement}</span>
      </div>
      <div className="wnos-board--anagram">
        <span className="text-lg text-center text-background uppercase">
          unscramble me
        </span>
        <WnosScrambled />
      </div>
    </div>
  );
}

export default WnosBoard;
