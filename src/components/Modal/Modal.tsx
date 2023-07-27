import { TripType, InputInfo, BookingsTrip } from "../../commons/types";
import ButtonIcon from "../Button/ButtonIcon";
import CardInfo from "../CardInfo/CardInfo";
import Form from "../Form/Form";
import { ModalBox, ContectBox, Total } from "./modal_styles";
import { RiCloseFill } from "react-icons/ri";
import { useState, useContext } from "react";
import { AppContext } from "../../App";

const Modal = ({ trip, setOpen }: { trip: TripType; setOpen: Function }) => {
  const [date, setDate] = useState("");
  const [guests, setGuests]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(1);

  const { setBooking } = useContext(AppContext);

  const inputInfoArray: InputInfo[] = [
    {
      inputName: "date",
      label: "Date",
      options: { required: true },
      errorsMessage: "Choice a date!",
      type: "date",
      dataAtribute: "book-trip-popup-date",
    },
    {
      inputName: "guests",
      label: "Number of guests",
      options: { rsequired: true, pattern: /^([1-9]|10)$/ },
      errorsMessage: "Max 10 quests!",
      type: "number",
      dataAtribute: "book-trip-popup-guests",
      value: guests,
    },
  ];

  const closeModal = () => {
    setOpen(false);
  };

  const changeInput = (event: any) => {
    if (event.target.name === "guests") {
      setGuests(+event.target.value);
    }
    if (event.target.name === "date") {
      setDate(event.target.value);
    }
  };

  const formSubmit = (data: any) => {
    if (data) {
      const bookingTrip: BookingsTrip = {
        tripTitle: trip.title,
        tripId: trip.id,
        totalPrice: trip.price * guests,
        guests,
        date,
      };
        setBooking && setBooking((previous:any)=>[...previous, bookingTrip]);
    }
  };

  return (
    <ModalBox data-test-id="book-trip-popup">
      <ContectBox>
        <ButtonIcon
          icon={<RiCloseFill />}
          dataAtribute={"book-trip-popup-close"}
          onClick={closeModal}
        />
        <CardInfo trip={trip} />
        <Form
          fields={inputInfoArray}
          name="Book a trip"
          onSubmit={formSubmit}
          handlerChange={changeInput}
        >
          <Total>
            Total:
            <output data-test-id="book-trip-popup-total-value">
              {trip.price * guests}$
            </output>
          </Total>
        </Form>
      </ContectBox>
    </ModalBox>
  );
};

export default Modal;
