import { createSlice } from '@reduxjs/toolkit';

import { getAuthData } from '../utils/authStorage.js';

const initialState = {
  user: getAuthData(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action) {
      state.user = action.payload;
    },

    logout(state) {
      state.user = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
