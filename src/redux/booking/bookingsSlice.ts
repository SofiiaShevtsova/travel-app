import {
   createSlice,
   isAnyOf,
} from '@reduxjs/toolkit';
import {
   getAllBookings,
   addNewBooking,
   removeBooking,
} from './bookimgsOperations';
import {
   BookingsTrip,
   BookingsState,
} from '../../commons/types';

const pending = (state: BookingsState) => {
   state.isFetchingBookings = true;
};
const finished = (state: BookingsState) => {
   state.isFetchingBookings = false;
};

const initialState: BookingsState = {
   bookingsList: [],
   isFetchingBookings: false,
};

export const bookingsSlice: any = createSlice({
   name: 'bookings',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addMatcher(
            isAnyOf(
               getAllBookings.fulfilled,
               addNewBooking.fulfilled,
               removeBooking.fulfilled,
            ),
            (
               state: BookingsState,
               {
                  payload,
               }: { payload: BookingsTrip[] },
            ): void => {
               state.bookingsList = payload;
               finished(state);
            },
         )

         .addMatcher(
            isAnyOf(
               getAllBookings.pending,
               addNewBooking.pending,
               removeBooking.pending,
            ),
            (state: BookingsState): void => {
               pending(state);
            },
         )
         .addMatcher(
            isAnyOf(
               getAllBookings.rejected,
               addNewBooking.rejected,
               removeBooking.rejected,
            ),
            (state: BookingsState): void => {
               finished(state);
            },
         );
   },
});

export default bookingsSlice.reducer;
