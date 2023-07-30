import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '../../helpers/commons';
import { constants } from '../../commons/constants';
import { TripType } from '../../commons/types';
import { toast as notification } from 'react-toastify';
import { logOut } from '../auth/authOperations';

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
         if (error.status === 401) {
            dispatch(logOut());
         }
         notification.error(error.statusText);
         return rejectWithValue(error.status);
      }
   },
);

export const getOneTrip = createAsyncThunk(
   constants.ACTIONS.GET_ONE_TRIP,
   async (id: string, { rejectWithValue }) => {
      try {
         const trip: TripType =
            await apiRequest.getRequest(
               constants.REQUEST_API.TRIPS +
                  '/' +
                  id,
            );
         return trip;
      } catch (error) {
         // toast.error(`${error.response.data.message}`, {
         //   position: toast.POSITION.TOP_CENTER,
         // });
         return rejectWithValue(error);
      }
   },
);

// export const logIn = createAsyncThunk(
//    constants.ACTIONS.SIGN_IN,
//    async (
//       exixtsUser: NewUser,
//       { rejectWithValue },
//    ) => {
//       try {
//          const {
//             token,
//             user: { fullName, email },
//          } = await apiRequest.postRequest(
//             constants.REQUEST_API.AUTH +
//                '/sign-in',
//             exixtsUser,
//          );
//          apiRequest.setToken(token);
//          lokalStorageServices.setUserToLocal(
//             token,
//          );

//          return { fullName, email };
//       } catch (error) {
//          // toast.error(`${error.response.data.message}`, {
//          //   position: toast.POSITION.TOP_CENTER,
//          // });
//          return rejectWithValue(error);
//       }
//    },
// );

// export const logOut = createAsyncThunk(
//    constants.ACTIONS.LOG_OUT,
//    () => {
//       apiRequest.setToken('');
//       lokalStorageServices.clearLocal();
//       return true;
//    },
// );

// export const getCurrentUser = createAsyncThunk(
//    constants.ACTIONS.GET_USER,
//    async (_, { rejectWithValue }) => {
//       try {
//          const { fullName, email } =
//             await apiRequest.getRequest(
//                constants.REQUEST_API.AUTH +
//                   '/authenticated-user',
//             );
//          return { fullName, email };
//       } catch (error) {
//          return rejectWithValue(error);
//       }
//    },
// );
