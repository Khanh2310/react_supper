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
};

export const getUserFromLocalStorage = () =>
  localStorage.getItem('access_token') || '';
