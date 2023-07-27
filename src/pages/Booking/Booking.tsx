import { useContext } from "react";
import { RiCloseFill } from "react-icons/ri";

import { AppContext } from "../../App";
import { BookingsTrip } from "../../commons/types";
import {ButtonIcon} from "../../components/commons";
import { BookingBox, BookingItem, BookingTitle, TotalPrice } from "./booking_styles";

const Booking = () => {
  const { bookingList, setBooking } = useContext(AppContext);

    const removeBooking = (event: any) => {
    if (bookingList) {
      const newBooking: BookingsTrip[] = bookingList.filter(
        (booking) => booking.tripId !== event.currentTarget.id
      );
      setBooking && setBooking(newBooking);
    }
  };

  return (
    <BookingBox>
      {bookingList &&
        bookingList.map((booking: BookingsTrip) => (
          <BookingItem data-test-id="booking" key={booking.tripId}>
            <BookingTitle data-test-id="booking-title">
              {booking.trip.title}
            </BookingTitle>
            <span data-test-id="booking-guests">
              {booking.guests} guests
            </span>
            <span data-test-id="booking-date">
              {booking.date}
            </span>
            <TotalPrice data-test-id="booking-total">
              {booking.totalPrice} $
            </TotalPrice>
            <ButtonIcon
              dataAtribute="booking-cancel"
              id={booking.tripId}
              icon={<RiCloseFill />}
              onClick={removeBooking}
            />
          </BookingItem>
        ))}
    </BookingBox>
  );
};

export default Booking;
