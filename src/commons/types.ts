
import { store } from "../redux/store";

export type State = ReturnType<typeof store.getState>

export type InputInfo = {
   inputName: string;
   label?: string;
   options?: object;
   errorsMessage?: string;
   type?: string;
   dataAtribute?: string;
   value?: string | number;
   placeholder?: string;
   min?: string;
};

export type TripType = {
   _id: string;
   title: string;
   description: string;
   level: string;
   duration: number;
   price: number;
   image: string;
   createdAt: string;
};

export type BookingsTrip = {
   _id: string;
   userId: string;
   createdAt: string;
   tripId: {
      title: string;
      duration: number;
      price: number;
   };
   guests: number;
   date: string;
   totalPrice: number;
};

export interface User {
   fullName: string;
   email: string;
   _id: string;
}

export interface NewUser {
   password: string;
   fullName?: string;
   email: string;
}

export type UserState = {
   user: null | User;
   isUserFetching: boolean;
};

export type TripState = {
   tripsList: TripType[];
   currentTrip: TripType | null;
   isFetching: boolean;
};

export type BookingsState = {
   bookingsList: BookingsTrip[];
   isFetchingBookings: boolean;
}

