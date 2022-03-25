import { useState, createContext, useContext, ReactNode } from 'react';

const GameContext = createContext<IGame>({
  addLevel: () => null,
  advanceGame: () => null,
  currentLevel: null,
  gameRoom: null,
  gameState: GameState.IDLE,
  levels: [],
  resetGame: () => null,
  setCurrentLevel: () => null,
  setGameRoom: () => null,
  setGameState: () => null
});

const useGame = () => useContext(GameContext);

function useProvideGame(): IGame {
  const [gameRoom, setGameRoom] = useState<GameRoom | null>(null);
  const [levels, setLevels] = useState<Level[]>([]);
  const [currentLevel, setCurrentLevel] = useState<number | null>(null);

  // NOTE: if game state management becomes too complicated, migrate to useReducer instead
  // Use as reference: https://stackoverflow.com/a/60515724
  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);

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
    setGameState(GameState.IDLE);
  };

  const resolveLevel = () => {
    const level = levels[currentLevel];
    if (level.completed && !level.gameOver) {
      setGameState(GameState.WAITING_FOR_HOST);
    } else if (level.completed && level.gameOver){
      setGameState(GameState.GAME_OVER);
    }
  };

  /**
   * Advance the game state to next stage/state
   * this will indicate which screen should be shown
  *  TODO:
   */
  const advanceGame = () => {
    switch (gameState) {
      case GameState.IDLE:
        return setGameState(GameState.CREATING_GAME);
      case GameState.CREATING_GAME:
        return setGameState(GameState.STARTING_GAME);
      case GameState.STARTING_GAME:
        return setGameState(GameState.NEW_LEVEL);
      case GameState.NEW_LEVEL:
        return setGameState(GameState.LOADING_LEVEL);
      case GameState.LOADING_LEVEL:
        return setGameState(GameState.ENDING_LEVEL);
      case GameState.SHOWING_SCOREBOARD:
        return setGameState(GameState.SHOWING_SCOREBOARD);
      case GameState.GAME_OVER:
        return setGameState(GameState.ENDING_GAME);
      case GameState.ENDING_GAME:
        return resetGame();
      default:
        setGameState(GameState.IDLE);
    }
  };

  return {
    currentLevel,
    gameRoom,
    levels,
    gameState,
    setCurrentLevel,
    setGameRoom,
    addLevel,
    setGameState,
    resetGame,
    advanceGame
  };
}

const GameProvider = ({ children }: { children: ReactNode }) => {
  const game = useProvideGame();
  return (
    <GameContext.Provider value={game}>{children}</GameContext.Provider>
  );
};

export { GameProvider, GameContext, useGame };
