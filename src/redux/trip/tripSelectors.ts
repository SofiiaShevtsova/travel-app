import { TripType } from "../../commons/types";

export const getTrips = (state: any): TripType[] => state.trips.tripsList;
export const getCurrentTrip = (state: any): TripType => state.trips.currentTrip;
export const getIsFetching = (state:any):boolean => state.trips.isFetching;