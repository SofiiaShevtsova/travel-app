import { createContext, lazy, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// import Loyout from './components/Loyout';
// import Shops from './pages/ShopsPage/Shops';

// const HistoryLazy = lazy(() =>
//    import('./pages/HistoryPage/History'),
// );
// const ProductsLazy = lazy(() =>
//    import('./components/Products'),
// );
// const OrdersLazy = lazy(() =>
//    import('./pages/OrdersPage/Orders'),
// );

export const DeliveryContext = createContext(null);

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
      <Route path="/sing-up" element={<Register />} />
      <Route path="/sing-in" element={<Login />} />
      <Route path="/" element={<Loyout />}>
        <Route index element={<MainLazy />} />
        <Route path="trip/:tripId" element={<TripLazy />}/>
        <Route path="/booking" element={<BookimgLazy />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    // </DeliveryContext.Provider>
  );
};

export default App;
