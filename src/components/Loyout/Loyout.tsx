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
      </LoyoutBox>
   );
};
