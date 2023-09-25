import { SyntheticEvent, useEffect } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';

import { BookingsTrip } from '../../commons/types';
import { ButtonIcon } from '../../components/commons';
import {
   BookingBox,
   BookingImage,
   BookingItem,
   BookingTitle,
   TotalPrice,
} from './booking_styles';
import { getBookings } from '../../redux/selectors';
import {
   getAllBookings,
   removeBooking,
} from '../../redux/booking/bookimgsOperations';

const Booking = () => {
   const dispatcher = useAppDispatch();
   const bookingsList: BookingsTrip[] =
      useSelector(getBookings);
   useEffect(() => {
      if (bookingsList.length === 0) {
         dispatcher(getAllBookings());
      }
   }, [bookingsList.length, dispatcher]);

   const onRemoveClick = (
      event: SyntheticEvent,
   ) => {
      const element: Element =
         event.currentTarget as Element;
      const id: string = element.id;
      if (id) {
         dispatcher(removeBooking(id));
      }
   };
   console.log(bookingsList);

   return (
      <BookingBox>
         {bookingsList &&
            bookingsList.map(
               (booking: BookingsTrip) => (
                  <BookingItem
                     data-test-id="booking"
                     key={booking._id}
                  >
                     <BookingImage
                        alt={booking.tripId.title}
                        src={booking.tripId.image}
                     />
                     <div>
                        <BookingTitle data-test-id="booking-title">
                           {booking.tripId.title}
                        </BookingTitle>
                        <span data-test-id="booking-guests">
                           {booking.guests} guests
                        </span>
                        <span data-test-id="booking-date">
                           {booking.date.slice(
                              0,
                              10,
                           )}
                        </span>
                     </div>
                     <TotalPrice data-test-id="booking-total">
                        {booking.totalPrice} $
                     </TotalPrice>
                     <ButtonIcon
                        dataAtribute="booking-cancel"
                        id={booking._id}
                        icon={<RiCloseFill />}
                        onClick={onRemoveClick}
                     />
                  </BookingItem>
               ),
            )}
      </BookingBox>
   );
};

export default Booking;
