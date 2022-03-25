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
  setGameState: () => null,
});

const useGame = () => useContext(GameContext);

function useProvideGame(): IGame {
  const [gameRoom, setGameRoom] = useState<GameRoom | null>(null);
  const [levels, setLevels] = useState<Level[]>([]);
  const [currentLevel, setCurrentLevel] = useState<number | null>(null);
  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);

  const addLevel = (l: Level) => setLevels((lvls) => [...lvls, l]);

  const resetGame = () => {
    setGameRoom(null);
    setLevels([]) ;
    setCurrentLevel(null);
    setGameState(GameState.IDLE);
  }

  /**
  * Advance the game state to next stage/state
  */
  const advanceGame= () => {
    switch(gameState) {
      default:
        setGameState(GameState.IDLE);
    }
  }

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

const GameProvider = ({children} : {children: ReactNode}) => {
  const game = useProvideGame();
  return (
    <GameContext.Provider value={game}>
      {children}
    </GameContext.Provider>
  )
}

export { GameProvider, GameContext, useGame };
