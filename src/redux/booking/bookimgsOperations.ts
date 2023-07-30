import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '../../helpers/commons';
import { constants } from '../../commons/constants';
import {
   BookingsTrip,
   State,
} from '../../commons/types';

export const getAllBookings = createAsyncThunk(
   constants.ACTIONS.GET_BOOKINGS,
   async (_, { rejectWithValue }) => {
      try {
         const list: BookingsTrip[] =
            await apiRequest.getRequest(
               constants.REQUEST_API.BOOKINGS,
            );
         return list;
      } catch (error) {
         // toast.error(`${error.response.data.message}`, {
         //   position: toast.POSITION.TOP_CENTER,
         // });
         return rejectWithValue(error);
      }
   },
);

export const addNewBooking = createAsyncThunk(
   constants.ACTIONS.ADD_BOOKING,
   async (
      booking: { tripId: string; guests: number; date: string; },
      { rejectWithValue, getState },
   ) => {
      try {
         const { bookings, auth }: State =
            getState() as State;
         
         const newBooking =
            await apiRequest.postRequest(
               constants.REQUEST_API.BOOKINGS,
               {...booking, userId: auth.user?.id}
            );

         return [
            ...bookings.bookingsList,
            newBooking,
         ];
      } catch (error) {
         // toast.error(`${error.response.data.message}`, {
         //   position: toast.POSITION.TOP_CENTER,
         // });
         return rejectWithValue(error);
      }
   },
);

export const removeBooking = createAsyncThunk(
   constants.ACTIONS.REMOVE_BOOKING,
   async (
      bookingId: string,
      { rejectWithValue, getState },
   ) => {
      try {
         await apiRequest.deleteRequest(
            constants.REQUEST_API.BOOKINGS +
               '/' +
               bookingId,
         );
         const { bookings }: State =
            getState() as State;
         const newList: BookingsTrip[] =
            bookings.bookingsList.filter(
               (booking: BookingsTrip) =>
                  booking.id !== bookingId,
            );
         return newList;
      } catch (error) {
         return rejectWithValue(error);
      }
   },
);
