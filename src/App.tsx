import { createContext, lazy, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { constants } from "./commons/constants";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Loyout from "./components/Loyout/Loyout";

const MainLazy = lazy(() => import("./pages/Main"));
const TripLazy = lazy(() => import("./pages/Trip"));
const BookimgLazy = lazy(() => import("./pages/Booking"));

export const DeliveryContext = createContext(null);

const {ROUTES:{MAIN, REGISTRATION, LOGIN, TRIP, BOOKING, ALL}} = constants

// const orderListStorege =
//    JSON.parse(
//       localStorage.getItem('order-list'),
//    ) || [];

const App = () => {
  //  const [orderList, setOrderList] = useState(
  //     orderListStorege,
  //  );

  //  useEffect(() => {
  //     localStorage.setItem(
  //        'order-list',
  //        JSON.stringify(orderList),
  //     );
  //  }, [orderList]);

  return (
    // <DeliveryContext.Provider
    //    value={{ setOrderList, orderList }}
    // >
    <Routes>
      <Route path={MAIN} element={<Loyout />}>
        <Route index element={<MainLazy />} />
        <Route path={REGISTRATION} element={<Register />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={TRIP} element={<TripLazy />} />
        <Route path={BOOKING} element={<BookimgLazy />} />
      </Route>
      <Route path={ALL} element={<Navigate to={MAIN} />} />
    </Routes>
    // </DeliveryContext.Provider>
  );
};

export default App;
