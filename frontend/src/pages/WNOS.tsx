import Game from 'components/Game/Game';
import { GameProvider } from 'context/GameProvider';

const WNOS = () => {
  return (
    <>
      <GameProvider>
        <Game />
      </GameProvider>
    </>
  );
};

export default WNOS;
