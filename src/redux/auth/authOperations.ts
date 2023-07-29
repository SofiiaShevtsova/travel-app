import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiRequest } from "../../helpers/commons";
import { constants } from "../../commons/constants";

export const signUp = createAsyncThunk(
  constants.ACTIONS.SIGN_UP,
  async (newUser, { rejectWithValue }) => {
    try {
      const { token, user } = await apiRequest.postRequest(
        constants.REQUEST_API.AUTH + "/sign-up",
        newUser
      );
      apiRequest.setToken(token);
      return user;
    } catch (error) {
      // toast.error(`${error.response.data.message}`, {
      //   position: toast.POSITION.TOP_CENTER,
      // });
      return rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  constants.ACTIONS.SIGN_IN,
  async (exixtsUser, { rejectWithValue }) => {
    try {
      const { token, user } = await apiRequest.postRequest(
        constants.REQUEST_API.AUTH + "/sign-in",
        exixtsUser
      );
      apiRequest.setToken(token);
      return user;
    } catch (error) {
      // toast.error(`${error.response.data.message}`, {
      //   position: toast.POSITION.TOP_CENTER,
      // });
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  constants.ACTIONS.LOG_OUT,
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiRequest.deleteRequest(
        constants.REQUEST_API.AUTH + "/authenticated-user"
      );
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  constants.ACTIONS.GET_USER,
  async (_, { rejectWithValue }) => {
    try {
      const user = await apiRequest.getRequest(
        constants.REQUEST_API.AUTH + "/authenticated-user"
      );
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
