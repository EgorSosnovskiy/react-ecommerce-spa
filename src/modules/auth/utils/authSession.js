import { logout, setCredentials } from '../store/authSlice.js';
import { clearAuthData, saveAuthData } from '../utils/authStorage.js';

export const createSession = (dispatch, user) => {
  dispatch(setCredentials(user));
  saveAuthData(user);
};

export const destroySession = (dispatch) => {
  dispatch(logout());
  clearAuthData();
};
