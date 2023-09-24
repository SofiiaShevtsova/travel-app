import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '../../helpers/commons';
import { constants } from '../../commons/constants';
import {
   BookingsTrip,
   State,
} from '../../commons/types';
import { toast as notification } from 'react-toastify';
import { catchError } from '../../helpers/catchError';

export const getAllBookings = createAsyncThunk(
   constants.ACTIONS.GET_BOOKINGS,
   async (_, { rejectWithValue, dispatch }) => {
      try {
         const list: BookingsTrip[] =
            await apiRequest.getRequest(
               constants.REQUEST_API.BOOKINGS,
            );
         return list;
      } catch (error: any) {
         catchError({ error, dispatch });
         return rejectWithValue(error.status);
      }
   },
);

export const addNewBooking = createAsyncThunk(
   constants.ACTIONS.ADD_BOOKING,
   async (
      booking: {
         tripId: string;
         guests: number;
         date: string;
         totalPrice: number;
      },
      { rejectWithValue, getState, dispatch },
   ) => {
      try {
         const { bookings, auth }: State =
            getState() as State;

         const newBooking: BookingsTrip =
            await apiRequest.postRequest(
               constants.REQUEST_API.BOOKINGS,
               {
                  ...booking,
                  userId: auth.user?._id,
               },
            );
         notification.success(
            'You made new booking!',
         );
         return [
            ...bookings.bookingsList,
            newBooking,
         ];
      } catch (error: any) {
         catchError({ error, dispatch });
         return rejectWithValue(error.status);
      }
   },
);

export const removeBooking = createAsyncThunk(
   constants.ACTIONS.REMOVE_BOOKING,
   async (
      bookingId: string,
      { rejectWithValue, getState, dispatch },
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
                  booking._id !== bookingId,
            );
         notification.success(
            'You removed booking!',
         );
         return newList;
      } catch (error: any) {
         catchError({ error, dispatch });
         return rejectWithValue(error.status);
      }
   },
);
