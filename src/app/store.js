import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../modules/auth/store/authSlice.js';
import { apiSlice } from './api/apiSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,

    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
