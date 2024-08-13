import { getProfile, getUserFromLocalStorage } from '@/hook/useQueryUser';
import { IExtendedPurchase } from '@/types/purchase/type';
import { User } from '@/types/user/type';
import { createContext, useState } from 'react';

interface IValue {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  profile: User | null;
  setProfile: React.Dispatch<React.SetStateAction<User | null>>;
  extendedPurchase: IExtendedPurchase[];
  setExtendedPurchase: React.Dispatch<
    React.SetStateAction<IExtendedPurchase[]>
  >;
}
const initialValue: IValue = {
  isAuthenticated: Boolean(getUserFromLocalStorage()),
  setIsAuthenticated: () => null,
  profile: getProfile(),
  setProfile: () => null,
  extendedPurchase: [],
  setExtendedPurchase: () => null,
};

export const AppContext = createContext<IValue>(initialValue);
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    initialValue.isAuthenticated
  );
  const [profile, setProfile] = useState<User | null>(initialValue.profile);
  const [extendedPurchase, setExtendedPurchase] = useState<IExtendedPurchase[]>(
    initialValue.extendedPurchase
  );
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        setProfile,
        extendedPurchase,
        setExtendedPurchase,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
