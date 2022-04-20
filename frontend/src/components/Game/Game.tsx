import LayoutGame from 'components/Layouts/LayoutGame';
import Loading from 'components/Loading';
import Screen from './Screen';
import ScreenState from 'lib/ScreenState';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { useGame } from 'context/GameProvider';
/**
 * handles game state and all of it screens
 */
const Game = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const game = useGame();

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <>
      <Screen component={game.getScreen()} />
      {game.screenState === ScreenState.IDLE ? null : <LayoutGame />}
      {isLoading ? <Loading className="!bg-black-0" /> : null}
    </>
  );
};

export default observer(Game);
