import { createContext, useContext, ReactNode } from 'react';
import GameStore from './GameStore';

const GameContext = createContext<GameStore>({} as GameStore);

const useGame = () => useContext(GameContext);

const GameProvider = ({ children }: { children: ReactNode }) => {
  const game = new GameStore();
  return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
};

export { GameProvider, GameContext, useGame };
