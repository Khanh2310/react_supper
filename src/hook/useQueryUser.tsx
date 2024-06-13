export const setToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const setUserToLocalStorage = (access_token: string) => {
  setToLocalStorage('access_token', access_token);
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('access_token');
};

export const getUserFromLocalStorage = () =>
  localStorage.getItem('access_token') || '';
