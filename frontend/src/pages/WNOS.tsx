import Game from 'components/Game/Game';
import { GameProvider } from 'context/GameProvider';
import { observer } from 'mobx-react';

const WNOS = () => {
  return (
    <>
      <GameProvider>
        <Game />
      </GameProvider>
    </>
  );
};

export default observer(WNOS);
