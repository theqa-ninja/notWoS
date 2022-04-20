import UserStore from './UserStore';
import { createContext, useContext, ReactNode } from 'react';

const UserContext = createContext<UserStore>({} as UserStore);
const useUser = () => useContext(UserContext);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const user = new UserStore();
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext, useUser };
