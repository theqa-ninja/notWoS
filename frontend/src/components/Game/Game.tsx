import LayoutGame from 'components/Layouts/LayoutGame';
import { useGame } from 'context/GameProvider';
import ScreenState from 'lib/ScreenState';
import { ReactNode } from 'react';
import GameOverScreen from './GameOverScreen';
import GameStartScreen from './GameStartScreen';
import ScoreboardScreen from './ScoreboardScreen';

/**
 * handles game state and all of it screens
 */
const Game = () => {
  const { screenState } = useGame();
  const getScreen = (state: ScreenState): ReactNode => {
    switch (state) {
      case ScreenState.IDLE:
        return <GameStartScreen />;
      case ScreenState.COUNT_DOWN:
        return null;
      case ScreenState.ONGOING_GAME:
        return null;
      case ScreenState.SCOREBOARD:
        return <ScoreboardScreen />;
      case ScreenState.RANKING:
        return null;
      case ScreenState.GAME_OVER:
        return <GameOverScreen />;
      default:
        return null;
    }
  };

  return (
    <>
      {getScreen(screenState)}
      {screenState === ScreenState.IDLE ? null : <LayoutGame />}
    </>
  );
};

export default Game;
