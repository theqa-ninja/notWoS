import { createContext, useContext, ReactNode } from 'react';


const GameStateProvider = ({ children }: { children: ReactNode }) => {
  return (
    <h1>State here</h1>
  );
};

export { GameStateProvider };
