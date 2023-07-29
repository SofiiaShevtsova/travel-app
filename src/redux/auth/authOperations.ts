import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '../../helpers/commons';
import { constants } from '../../commons/constants';
import { NewUser } from '../../commons/types';
import { lokalStorageServices } from '../../services/localStorageServices';

export const signUp = createAsyncThunk(
   constants.ACTIONS.SIGN_UP,
   async (
      newUser: NewUser,
      { rejectWithValue },
   ) => {
      try {
         const {
            token,
            user: { fullName, email },
         } = await apiRequest.postRequest(
            constants.REQUEST_API.AUTH +
               '/sign-up',
            newUser,
         );
         apiRequest.setToken(token);
         lokalStorageServices.setUserToLocal(
            token,
         );

         return { fullName, email };
      } catch (error) {
         // toast.error(`${error.response.data.message}`, {
         //   position: toast.POSITION.TOP_CENTER,
         // });
         return rejectWithValue(error);
      }
   },
);

export const logIn = createAsyncThunk(
   constants.ACTIONS.SIGN_IN,
   async (
      exixtsUser: NewUser,
      { rejectWithValue },
   ) => {
      try {
         const {
            token,
            user: { fullName, email },
         } = await apiRequest.postRequest(
            constants.REQUEST_API.AUTH +
               '/sign-in',
            exixtsUser,
         );
         apiRequest.setToken(token);
         lokalStorageServices.setUserToLocal(
            token,
         );

         return { fullName, email };
      } catch (error) {
         // toast.error(`${error.response.data.message}`, {
         //   position: toast.POSITION.TOP_CENTER,
         // });
         return rejectWithValue(error);
      }
   },
);

export const logOut = createAsyncThunk(
   constants.ACTIONS.LOG_OUT,
   () => {
      apiRequest.setToken('');
      lokalStorageServices.clearLocal();
      return true;
   },
);

export const getCurrentUser = createAsyncThunk(
   constants.ACTIONS.GET_USER,
   async (_, { rejectWithValue }) => {
      try {
         const { fullName, email } =
            await apiRequest.getRequest(
               constants.REQUEST_API.AUTH +
                  '/authenticated-user',
            );
         return { fullName, email };
      } catch (error) {
         return rejectWithValue(error);
      }
   },
);
