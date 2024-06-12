export const setToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const setUserToLocalStorage = (user: string) => {
  setToLocalStorage('user', user);
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
};

export const getUserFromLocalStorage = () => localStorage.getItem('user') || '';
