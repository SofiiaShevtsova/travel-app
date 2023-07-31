import {
   createContext,
   lazy,
   useEffect,
   useState,
} from 'react';
import {
   Navigate,
   Route,
   Routes,
} from 'react-router-dom';
import {
   useSelector,
} from 'react-redux';
import {
   Loyout,
   PublicRoutes,
   PrivatRoutes,
} from './components/commons';
import { useAppDispatch } from './redux/store';

import { constants } from './commons/constants';
import { lokalStorageServices } from './services/commons';

import Login from './pages/Login/Login';

import Register from './pages/Register/Register';
import {
   BookingsTrip,
   TripType,
   User,
} from './commons/types';
import { getCurrentUser } from './redux/auth/authOperations';
import { apiRequest } from './helpers/helpersAPI';
import { getUser } from './redux/selectors';

const MainLazy = lazy(
   () => import('./pages/Main/Main'),
);
const TripLazy = lazy(
   () => import('./pages/Trip/Trip'),
);
const BookimgLazy = lazy(
   () => import('./pages/Booking/Booking'),
);

export const AppContext: React.Context<{
   tripsList?: TripType[];
   setList?: React.Dispatch<any>;
   user?: string;
   setUser?: React.Dispatch<
      React.SetStateAction<string>
   >;
   bookingList?: BookingsTrip[];
   setBooking?: React.Dispatch<any>;
}> = createContext({});

const {
   ROUTES: {
      MAIN,
      REGISTRATION,
      LOGIN,
      TRIP,
      BOOKING,
      ALL,
   },
} = constants;

const token: string | undefined =
   lokalStorageServices.getUserFromLocal();

const App = () => {
   const dispatcher = useAppDispatch();
   const [isUser, setIsUser] = useState(!!token);

   const user: User | null = useSelector(getUser);

   useEffect(() => {
      if (token) {
         apiRequest.setToken(token);
         dispatcher(getCurrentUser());
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      user && setIsUser(false);
   }, [user])

   return (
      <Routes>
         <Route path={MAIN} element={<Loyout />}>
            <Route
               index
               element={
                  <PrivatRoutes isUser={!!user || isUser}>
                     <MainLazy />
                  </PrivatRoutes>
               }
            />
            <Route
               path={TRIP + ':tripId'}
               element={
                  <PrivatRoutes isUser={!!user || isUser}>
                     <TripLazy />
                  </PrivatRoutes>
               }
            />
            <Route
               path={BOOKING}
               element={
                  <PrivatRoutes isUser={!!user || isUser}>
                     <BookimgLazy />
                  </PrivatRoutes>
               }
            />
            <Route
               path={REGISTRATION}
               element={
                  <PublicRoutes isUser={!!user || isUser}>
                     <Register />
                  </PublicRoutes>
               }
            />
            <Route
               path={LOGIN}
               element={
                  <PublicRoutes isUser={!!user || isUser}>
                     <Login />
                  </PublicRoutes>
               }
            />
         </Route>
         <Route
            path={ALL}
            element={<Navigate to={MAIN} />}
         />
      </Routes>
   );
};

export default App;
