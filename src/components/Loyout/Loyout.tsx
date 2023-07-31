import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
   Footer,
   Header,
   Loader,
} from '../commons';
import { LoyoutBox } from './loyout_styles';
import {
   getIsFetching,
   getIsFetchingBookings,
   getIsUserFetching,
} from '../../redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Loyout = () => {
   const isUserFetching: boolean = useSelector(
      getIsUserFetching,
   );
   const isFetching: boolean = useSelector(
      getIsFetching,
   );
   const isFetchingBookings: boolean =
      useSelector(getIsFetchingBookings);

   return (
      <LoyoutBox>
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
      </LoyoutBox>
   );
};
