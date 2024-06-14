export const setUserToLocalStorage = (access_token: string) => {
  localStorage.setItem('access_token', access_token);
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('access_token');
};

export const getUserFromLocalStorage = () =>
  localStorage.getItem('access_token') || '';
