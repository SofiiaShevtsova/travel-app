import { BookingsTrip, State, TripType, User } from "../commons/types";
export const getUser = (state: State):User|null => state.auth.user;
export const getIsUserFetching = (state:State):boolean => state.auth.isUserFetching;
export const getTrips = (state: State): TripType[] => state.trips.tripsList;
export const getCurrentTrip = (state: State): TripType|null => state.trips.currentTrip;
export const getIsFetching = (state:State):boolean => state.trips.isFetching;
export const getBookings = (state: State): BookingsTrip[] => state.bookings.bookingsList;
export const getIsFetchingBookings = (state:State):boolean => state.bookings.isFetchingBookings;