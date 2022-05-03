interface WordBoardProps {
  annoucement: string;
}

import { useSocket } from 'context/SocketProvider';
import WnosScrambled from 'components/WnosWord/WnosScrambled';
import { useEffect } from 'react';
import { MessageType } from 'lib/MessageTypes';

function WnosBoard({ annoucement }: WordBoardProps) {
  const socket = useSocket();
  useEffect(() => {
    socket.subscribe(MessageType.guess, onNewGuess);
    return () => {
      socket.unsubscribe(MessageType.guess, onNewGuess);
    };
  }, []);

  const onNewGuess = () => {
    console.log('A new guess was made');
  };
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
