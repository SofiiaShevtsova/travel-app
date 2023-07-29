import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import tripsReducer from './trip/tripSlice';
import bookingsReducer from './booking/bookingsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    trips: tripsReducer,
    bookings: bookingsReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
