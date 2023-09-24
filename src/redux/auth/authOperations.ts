import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '../../helpers/commons';
import { constants } from '../../commons/constants';
import {
   NewUser,
   State,
} from '../../commons/types';
import { lokalStorageServices } from '../../services/localStorageServices';
import { catchError } from '../../helpers/catchError';

export const signUp = createAsyncThunk(
   constants.ACTIONS.SIGN_UP,
   async (
      newUser: NewUser,
      { rejectWithValue, dispatch },
   ) => {
      try {
         const {
            token,
            user: { fullName, email, _id },
         } = await apiRequest.postRequest(
            constants.REQUEST_API.AUTH +
               '/sign-up',
            newUser,
         );
         apiRequest.setToken(token);
         lokalStorageServices.setUserToLocal(
            token,
         );

         return { fullName, email, _id };
      } catch (error: any) {
         catchError({ error, dispatch });
         return rejectWithValue(error.status);
      }
   },
);

export const logIn = createAsyncThunk(
   constants.ACTIONS.SIGN_IN,
   async (
      exixtsUser: NewUser,
      { rejectWithValue, dispatch },
   ) => {
      try {
         const {
            token,
            user: { fullName, email, _id },
         } = await apiRequest.postRequest(
            constants.REQUEST_API.AUTH +
               '/sign-in',
            exixtsUser,
         );
         apiRequest.setToken(token);
         lokalStorageServices.setUserToLocal(
            token,
         );
         return { fullName, email, _id };
      } catch (error: any) {
         catchError({ error, dispatch });
         return rejectWithValue(error.status);
      }
   },
);

export const logOut = createAsyncThunk(
   constants.ACTIONS.LOG_OUT,
   async (_, { getState, rejectWithValue }) => {
      const { auth }: State = getState() as State;
      try {
         if (auth.user) {
            await apiRequest.postRequest(
               constants.REQUEST_API.AUTH +
                  '/log-out',
            );
         }
         apiRequest.setToken('');
         lokalStorageServices.clearLocal();
         return true;
      } catch (error: any) {
         return rejectWithValue(error.status);
      }
   },
);

export const getCurrentUser = createAsyncThunk(
   constants.ACTIONS.GET_USER,
   async (_, { rejectWithValue, dispatch }) => {
      try {
         const { fullName, email, _id } =
            await apiRequest.getRequest(
               constants.REQUEST_API.AUTH +
                  '/authenticated-user',
            );
         return { fullName, email, _id };
      } catch (error: any) {
         catchError({ error, dispatch });
         return rejectWithValue(error.status);
      }
   },
);
