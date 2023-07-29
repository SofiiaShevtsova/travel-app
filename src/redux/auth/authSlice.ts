import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logIn, signUp, logOut, getCurrentUser } from "./authOperations";
import { UserState, User } from "../../commons/types";

const pending = (state: UserState) => {
  state.isUserFetching = true;
};
const finished = (state: UserState) => {
  state.isUserFetching = false;
};

const initialState: UserState = {
  user: null,
  isUserFetching: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logOut.fulfilled, (state: UserState): void => {
        state.user = null;
        finished(state);
      })
      .addCase(logOut.rejected, (state: UserState): void => {
        finished(state);
      });

    builder
      .addMatcher(
        isAnyOf(
          signUp.pending,
          logIn.pending,
          getCurrentUser.pending,
          logOut.pending
        ),
        (state: UserState): void => {
          pending(state);
        }
      )
      .addMatcher(
        isAnyOf(signUp.fulfilled, logIn.fulfilled, getCurrentUser.fulfilled),
        (state: UserState, { payload }: { payload: User }): void => {
          state.user = payload;
          finished(state);
        }
      )
      .addMatcher(
        isAnyOf(signUp.rejected, logIn.rejected, getCurrentUser.rejected),
        (state: UserState): void => {
          state.user = null;
          finished(state);
        }
      );
  },
});

export default authSlice.reducer;
