import { getUserFromLocalStorage } from '@/hook/useQueryUser';
import { createContext, useState } from 'react';

interface IValue {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
const initialValue: IValue = {
  isAuthenticated: Boolean(getUserFromLocalStorage()),
  setIsAuthenticated: () => null,
};

export const AppContext = createContext<IValue>(initialValue);
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    initialValue.isAuthenticated
  );
  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AppContext.Provider>
  );
};
