import { User } from '@/types/user/type';

export const setToLocalStorage = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.error('Storage is not available');
  }
};

export const setUserToLocalStorage = (user: User) => {
  setToLocalStorage('user', user._id);
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
};

export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  if (user) {
    try {
      return user;
    } catch (error) {
      return null;
    }
  }
  return null;
};
