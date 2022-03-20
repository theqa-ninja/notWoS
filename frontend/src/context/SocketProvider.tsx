import ClientSocketController from '../utils/ClientSocketController';
import { createContext, useContext, ReactNode } from 'react';

const SocketContext = createContext<IClientSocketController>({
  onNewGuess: () => null,
  onUpdateGameState: () => null,
  onCreateGameRoom: () => null
});

// NOTE: public hook for use
const useSocket = () => useContext(SocketContext);

function useProvideSocket(): IClientSocketController {
  const socketController = new ClientSocketController();
  return socketController;
}

const SocketProvider = ({ children }: { children: ReactNode }) => {
  const socket = useProvideSocket();
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketProvider, SocketContext, useSocket };
