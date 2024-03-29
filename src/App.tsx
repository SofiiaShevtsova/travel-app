import { lazy, useEffect, useState } from 'react';
import {
   // Navigate,
   Route,
   Routes,
   BrowserRouter,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import {
   theme,
   darkTheme,
} from './commons/theme';
import {
   Layout,
   PublicRoutes,
   PrivatRoutes,
   ToggleTheme,
} from './components/commons';
import { useAppDispatch } from './redux/store';

import { constants } from './commons/constants';
import { lokalStorageServices } from './services/commons';

import Login from './pages/Login/Login';

import Register from './pages/Register/Register';
// import ErrorPage from './pages/ErrorPage/ErrorPage';
import { User } from './commons/types';
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

const {
   ROUTES: {
      MAIN,
      REGISTRATION,
      LOGIN,
      TRIP,
      BOOKING,
      // ALL,
   },
} = constants;

const token: string | undefined =
   lokalStorageServices.getUserFromLocal();

const App = () => {
   const dispatcher = useAppDispatch();
   const [isUser, setIsUser] = useState(!!token);
   const [currentTheme, setTheme] =
      useState('light');

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
   }, [user]);

   return (
      <ThemeProvider
         theme={
            currentTheme === 'light'
               ? theme
               : darkTheme
         }
      >
         <BrowserRouter>
            <Routes>
               <Route
                  path={MAIN}
                  element={<Layout />}
               >
                  <Route
                     index
                     element={
                        <PrivatRoutes
                           isUser={
                              !!user || isUser
                           }
                        >
                           <MainLazy />
                        </PrivatRoutes>
                     }
                  />
                  <Route
                     path={TRIP + ':tripId'}
                     element={
                        <PrivatRoutes
                           isUser={
                              !!user || isUser
                           }
                        >
                           <TripLazy />
                        </PrivatRoutes>
                     }
                  />
                  <Route
                     path={BOOKING}
                     element={
                        <PrivatRoutes
                           isUser={
                              !!user || isUser
                           }
                        >
                           <BookimgLazy />
                        </PrivatRoutes>
                     }
                  />
                  <Route
                     path={REGISTRATION}
                     element={
                        <PublicRoutes
                           isUser={
                              !!user || isUser
                           }
                        >
                           <Register />
                        </PublicRoutes>
                     }
                  />
                  <Route
                     path={LOGIN}
                     element={
                        <PublicRoutes
                           isUser={
                              !!user || isUser
                           }
                        >
                           <Login />
                        </PublicRoutes>
                     }
                  />
               </Route>
               {/* <Route
            path={ALL}
            element={<ErrorPage />}
         /> */}
            </Routes>
         </BrowserRouter>
         <ToggleTheme
            setTheme={setTheme}
            currentTheme={currentTheme}
         />
      </ThemeProvider>
   );
};

export default App;
