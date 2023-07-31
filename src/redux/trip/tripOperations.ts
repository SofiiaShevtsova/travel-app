import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '../../helpers/commons';
import { constants } from '../../commons/constants';
import { TripType } from '../../commons/types';
import { catchError } from '../../helpers/catchError';

export const getAllTrips = createAsyncThunk(
   constants.ACTIONS.GET_TRIPS,
   async (_, { rejectWithValue, dispatch }) => {
      try {
         const data: TripType[] =
            await apiRequest.getRequest(
               constants.REQUEST_API.TRIPS,
            );
         return data;
      } catch (error: any) {
         catchError({ error, dispatch });
         return rejectWithValue(error.status);
      }
   },
);

export const getOneTrip = createAsyncThunk(
   constants.ACTIONS.GET_ONE_TRIP,
   async (
      id: string,
      { rejectWithValue, dispatch },
   ) => {
      try {
         const trip: TripType =
            await apiRequest.getRequest(
               constants.REQUEST_API.TRIPS +
                  '/' +
                  id,
            );
         return trip;
      } catch (error: any) {
         catchError({ error, dispatch });
         return rejectWithValue(error.status);
      }
   },
);
