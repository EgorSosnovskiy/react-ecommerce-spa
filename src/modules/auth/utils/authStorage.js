const AUTH_STORAGE_KEY = 'auth';

export const saveAuthData = (user) => {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
};

export const getAuthData = () => {
  const authData = localStorage.getItem(AUTH_STORAGE_KEY);

  return authData ? JSON.parse(authData) : null;
};

export const clearAuthData = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
};
