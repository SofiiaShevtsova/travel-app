import { createContext, lazy, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { constants } from "./commons/constants";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Loyout from "./components/Loyout/Loyout";
import { TripType } from "./commons/types";

const MainLazy = lazy(() => import("./pages/Main/Main"));
const TripLazy = lazy(() => import("./pages/Trip/Trip"));
const BookimgLazy = lazy(() => import("./pages/Booking"));

export const AppContext: React.Context<{
  tripsList?: TripType[];
  setList?: React.Dispatch<any>;
  user?: string;
  setUser?: React.Dispatch<React.SetStateAction<string>>;
}> = createContext({});

const {
  ROUTES: { MAIN, REGISTRATION, LOGIN, TRIP, BOOKING, ALL },
} = constants;

const App = () => {
  const [tripsList, setList] = useState();
  const [user, setUser] = useState("");

  return (
    <AppContext.Provider value={{ tripsList, setList, user, setUser }}>
      <Routes>
        {user && (
          <Route path={MAIN} element={<Loyout />}>
            <Route index element={<MainLazy />} />
            <Route path={TRIP+':tripId'} element={<TripLazy />} />
            <Route path={BOOKING} element={<BookimgLazy />} />
          </Route>
        )}
        {!user && (
          <Route path={MAIN} element={<Loyout />}>
            <Route index element={<Navigate to={LOGIN} />} />
            <Route path={REGISTRATION} element={<Register />} />
            <Route path={LOGIN} element={<Login />} />
          </Route>
        )}
        <Route path={ALL} element={<Navigate to={MAIN} />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
