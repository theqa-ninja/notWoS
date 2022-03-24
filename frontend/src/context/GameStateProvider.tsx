import { useState, createContext, useContext, ReactNode } from 'react';
import GameStateController from 'utils/GameStateController';

const GameStateContext = createContext<IGameStateController>(
  new GameStateController()
);

const useGameState = () => useContext(GameStateContext);

// TODO: state needs to be used with useState, else it would not be reactive.
function useProvideGameState(): IGameStateController {
  const gameState = new GameStateController();
  return gameState;
}

const GameStateProvider = ({ children }: { children: ReactNode }) => {
  const state = useProvideGameState();
  return (
    <GameStateContext.Provider value={state}>
      {children}
    </GameStateContext.Provider>
  );
};

export { GameStateProvider, GameStateContext, useGameState };
