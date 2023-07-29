import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import tripsReducer from './trip/tripSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    trips: tripsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
