import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
   Footer,
   Header,
   Loader,
} from '../commons';
import { LayoutBox } from './layout_styles';
import {
   getIsFetching,
   getIsFetchingBookings,
   getIsUserFetching,
} from '../../redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
   const isUserFetching: boolean = useSelector(
      getIsUserFetching,
   );
   const isFetching: boolean = useSelector(
      getIsFetching,
   );
   const isFetchingBookings: boolean =
      useSelector(getIsFetchingBookings);

   return (
      <LayoutBox>
         <Suspense fallback={<Loader />}>
            <Outlet />
         </Suspense>
         <Footer />
         <Header />
         {(isUserFetching ||
            isFetching ||
            isFetchingBookings) && <Loader />}
         <ToastContainer
            className='notification'
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
         />
      </LayoutBox>
   );
};
