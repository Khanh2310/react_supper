import { User } from '@/types/user/type';

export const localStorageEventTarget = new EventTarget();

export const setToLocalStorage = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.log('Storage is not available');
  }
};

export const setUserToLocalStorage = (access_token: string) => {
  setToLocalStorage('access_token', access_token);
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('profile');
  const clearLSEvent = new Event('removeUserFromLocalStorage');
  localStorageEventTarget.dispatchEvent(clearLSEvent);
};

export const getUserFromLocalStorage = () =>
  localStorage.getItem('access_token') || '';

export const getProfile = () => {
  const result = localStorage.getItem('profile');
  return result ? JSON.parse(result) : null;
};

export const setProfile = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile));
};
