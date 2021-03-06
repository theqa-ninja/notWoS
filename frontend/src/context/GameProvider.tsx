import { useState, createContext, useContext, ReactNode } from 'react';

const GameContext = createContext<IGame>({
  addLevel: () => null,
  advanceScreen: () => null,
  currentLevel: null,
  gameRoom: null,
  screenState: ScreenState.IDLE,
  levels: [],
  lvlState: { gameOver: false, completed: false },
  resetGame: () => null,
  setCurrentLevel: () => null,
  setGameRoom: () => null,
  setScreenState: () => null,
  setLvlState: () => null
});

const useGame = () => useContext(GameContext);

function useProvideGame(): IGame {
  const [gameRoom, setGameRoom] = useState<GameRoom | null>(null);
  const [levels, setLevels] = useState<Level[]>([]);
  const [currentLevel, setCurrentLevel] = useState<number | null>(null);
  const [lvlState, setLvlState] = useState<LevelState>({
    gameOver: false,
    completed: false
  });

  // NOTE: if game state management becomes too complicated, migrate to useReducer instead
  // Use as reference: https://stackoverflow.com/a/60515724
  const [screenState, setScreenState] = useState<ScreenState>(ScreenState.IDLE);

  /**
   * Adds a level to a list of completed levels
   *
   * @param l - Level
   * @returns void
   */
  const addLevel = (l: Level) => setLevels((lvls: Level[]) => [...lvls, l]);

  const resetGame = () => {
    setGameRoom(null);
    setLevels([]);
    setCurrentLevel(null);
    setScreenState(ScreenState.IDLE);
    setLvlState({
      gameOver: false,
      completed: false
    });
  };

  /**
   * Advance the game state to next stage/state this will indicate which screen
   * should be shown next
   */
  const advanceScreen = (gameOver = false) => {
    if (gameOver) {
      return setScreenState(ScreenState.GAME_OVER);
    }

    switch (screenState) {
      case ScreenState.IDLE:
        return setScreenState(ScreenState.COUNT_DOWN);
      case ScreenState.COUNT_DOWN:
        return setScreenState(ScreenState.ONGOING_GAME);
      case ScreenState.ONGOING_GAME:
        return setScreenState(ScreenState.SCOREBOARD);
      case ScreenState.SCOREBOARD:
        return setScreenState(ScreenState.RANKING);
      case ScreenState.RANKING:
        return setScreenState(ScreenState.COUNT_DOWN);
      default:
        return setScreenState(ScreenState.IDLE);
    }
  };

  return {
    currentLevel,
    gameRoom,
    levels,
    lvlState,
    screenState,
    addLevel,
    advanceScreen,
    resetGame,
    setCurrentLevel,
    setGameRoom,
    setScreenState,
    setLvlState
  };
}

/**
 * Provide Game context to child components
 */
const GameProvider = ({ children }: { children: ReactNode }) => {
  const game = useProvideGame();
  return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
};

export { GameProvider, GameContext, useGame };
