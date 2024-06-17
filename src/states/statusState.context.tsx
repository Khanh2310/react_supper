import { getProfile, getUserFromLocalStorage } from '@/hook/useQueryUser';
import { User } from '@/types/user/type';
import { createContext, useState } from 'react';

interface IValue {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  profile: User | null;
  setProfile: React.Dispatch<React.SetStateAction<User | null>>;
}
const initialValue: IValue = {
  isAuthenticated: Boolean(getUserFromLocalStorage()),
  setIsAuthenticated: () => null,
  profile: getProfile(),
  setProfile: () => null,
};

export const AppContext = createContext<IValue>(initialValue);
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    initialValue.isAuthenticated
  );
  const [profile, setProfile] = useState<User | null>(initialValue.profile);
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        setProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
