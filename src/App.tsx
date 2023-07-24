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
      {/* <Route
               path="delivery"
               element={<Loyout />}
            >
               <Route
                  path="shops"
                  element={<Shops />}
               >
                  <Route
                     path=":id"
                     element={<ProductsLazy />}
                  />
               </Route> */}
      {/* <Route
                  path="orders"
                  element={<OrdersLazy />}
               /> */}
      {/* <Route
                  path="history"
                  element={<HistoryLazy />}
               /> */}
      {/* </Route> */}
      <Route path="/*" element={<Navigate to="/delivery/shops" />} />
    </Routes>
    // </DeliveryContext.Provider>
  );
};

export default App;
