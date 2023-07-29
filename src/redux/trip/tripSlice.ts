import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllTrips, getOneTrip } from "./tripOperations";
import { TripState, TripType } from "../../commons/types";

const pending = (state: TripState) => {
  state.isFetching = true;
};
const finished = (state: TripState) => {
  state.isFetching = false;
};

const initialState: TripState = {
    tripsList: [],
    currentTrip: null,
  isFetching: false,
};

export const tripsSlice:any = createSlice({
  name: "trips",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTrips.fulfilled, (state: TripState, {payload}: {payload:TripType[]}): void => {
        state.tripsList = payload;
        finished(state);
      })
      .addCase(getAllTrips.rejected, (state: TripState): void => {
        finished(state);
      })
      .addCase(getOneTrip.fulfilled, (state: TripState, {payload}: {payload:TripType}): void => {
        state.currentTrip = payload;
        finished(state);
      })
          .addCase(getOneTrip.rejected, (state: TripState): void => {
        state.currentTrip = null;
        finished(state);
      })
    builder
      .addMatcher(
        isAnyOf(
            getAllTrips.pending,
        getOneTrip.pending
        ),
        (state: TripState): void => {
          pending(state);
        }
      )
    //   .addMatcher(
    //     isAnyOf(signUp.fulfilled, logIn.fulfilled, getCurrentUser.fulfilled),
    //     (state: TripState, { payload }: { payload: User }): void => {
    //       state.user = payload;
    //       finished(state);
    //     }
    //   )
    //   .addMatcher(
    //     isAnyOf(signUp.rejected, logIn.rejected, getCurrentUser.rejected),
    //     (state: TripState): void => {
    //       state.user = null;
    //       finished(state);
    //     }
    //   );
  },
});

export default tripsSlice.reducer;
