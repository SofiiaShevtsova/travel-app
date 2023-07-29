import { createContext, lazy, useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { constants } from "./commons/constants";

import {lokalStorageServices} from './services/commons'

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {Loyout} from "./components/commons";
import { BookingsTrip, TripType } from "./commons/types";

const MainLazy = lazy(() => import("./pages/Main/Main"));
const TripLazy = lazy(() => import("./pages/Trip/Trip"));
const BookimgLazy = lazy(() => import("./pages/Booking/Booking"));

export const AppContext: React.Context<{
  tripsList?: TripType[];
  setList?: React.Dispatch<any>;
  user?: string;
  setUser?: React.Dispatch<React.SetStateAction<string>>;
  bookingList?: BookingsTrip[];
  setBooking?:React.Dispatch<any>;
}> = createContext({});

const {
  ROUTES: { MAIN, REGISTRATION, LOGIN, TRIP, BOOKING, ALL },
} = constants;

// const getUserToken:string|undefined = lokalStorageServices.getUserFromLocal();

const App = () => {
  const [tripsList, setList] = useState();
  const [user, setUser] = useState("");
  const [bookingList, setBooking] = useState([]);

  // useEffect(() => {
    
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <AppContext.Provider value={{ tripsList, setList, user, setUser, bookingList, setBooking }}>
      <Routes>
          <Route path={MAIN} element={<Loyout />}>
            <Route index element={<MainLazy />} />
            <Route path={TRIP+':tripId'} element={<TripLazy />} />
            <Route path={BOOKING} element={<BookimgLazy />} />
            <Route path={REGISTRATION} element={<Register />} />
            <Route path={LOGIN} element={<Login />} />
          </Route>
        <Route path={ALL} element={<Navigate to={MAIN} />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
