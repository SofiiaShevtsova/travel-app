import { createContext, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { constants } from "./commons/constants";

import { lokalStorageServices } from "./services/commons";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Loyout, PublicRoutes, PrivatRoutes } from "./components/commons";
import { BookingsTrip, TripType, User } from "./commons/types";
import { getCurrentUser } from "./redux/auth/authOperations";
import { apiRequest } from "./helpers/helpersAPI";
import { getUser } from "./redux/auth/authSelectors";

const MainLazy = lazy(() => import("./pages/Main/Main"));
const TripLazy = lazy(() => import("./pages/Trip/Trip"));
const BookimgLazy = lazy(() => import("./pages/Booking/Booking"));

export const AppContext: React.Context<{
  tripsList?: TripType[];
  setList?: React.Dispatch<any>;
  user?: string;
  setUser?: React.Dispatch<React.SetStateAction<string>>;
  bookingList?: BookingsTrip[];
  setBooking?: React.Dispatch<any>;
}> = createContext({});

const {
  ROUTES: { MAIN, REGISTRATION, LOGIN, TRIP, BOOKING, ALL },
} = constants;

const token:string|undefined = lokalStorageServices.getUserFromLocal();

const App = () => {
  const user: User | null = useSelector(getUser);

  console.log(user);
  console.log(token);
  
  
  // const [tripsList, setList] = useState();
  // const [bookingList, setBooking] = useState([]);

  const dispatcher:any = useDispatch()

  useEffect(() => {
    if (token) {
      apiRequest.setToken(token)
      dispatcher(getCurrentUser())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <Routes>
            <Route path={MAIN} element={<Loyout />}>
              <Route index element={(<PrivatRoutes isUser={!!token}><MainLazy /></PrivatRoutes>)} />
              <Route path={TRIP + ":tripId"} element={(<PrivatRoutes isUser={!!token}><TripLazy /></PrivatRoutes>)} />
              <Route path={BOOKING} element={(<PrivatRoutes isUser={!!token}><BookimgLazy /></PrivatRoutes>)} />
              <Route path={REGISTRATION} element={(<PublicRoutes isUser={!!token}><Register /></PublicRoutes>)} />
              <Route path={LOGIN} element={(<PublicRoutes isUser={!!token}><Login /></PublicRoutes>)} />
            </Route>
        <Route path={ALL} element={<Navigate to={MAIN} />} />
      </Routes>
  );
};

export default App;
