import { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import {
   TripType,
   InputInfo,
} from '../../commons/types';
import {
   ButtonIcon,
   CardInfo,
   Form,
} from '../commons';
import {
   ModalBox,
   ContectBox,
   Total,
} from './modal_styles';
import { useAppDispatch } from '../../redux/store';
import { addNewBooking } from '../../redux/booking/bookimgsOperations';

export const Modal = ({
   trip,
   setOpen,
}: {
   trip: TripType;
   setOpen: Function;
}) => {
   const [date, setDate] = useState('');
   const [guests, setGuests]: [
      number,
      React.Dispatch<
         React.SetStateAction<number>
      >,
   ] = useState(1);

   const dispatcher = useAppDispatch();
  
   const inputInfoArray: InputInfo[] = [
      {
         inputName: 'date',
         label: 'Date',
         options: { required: true },
         errorsMessage: 'Choice a date!',
         type: 'date',
         dataAtribute: 'book-trip-popup-date',
      },
      {
         inputName: 'guests',
         label: 'Number of guests',
         options: {
            rsequired: true,
            pattern: /^([1-9]|10)$/,
         },
         errorsMessage: 'Max 10 quests!',
         type: 'number',
         dataAtribute: 'book-trip-popup-guests',
         value: guests,
      },
   ];

   const closeModal = () => {
      setOpen(false);
   };

   const changeInput = (event: any) => {
      if (event.target.name === 'guests') {
         setGuests(+event.target.value);
      }
     if (event.target.name === 'date') {
         setDate(`${event.target.value}`);
      }
   };

   const formSubmit = (data: any) => {
      if (data) {
        const bookingTrip: { tripId: string; guests: number; date: string; } = {
            tripId: trip.id,
            guests,
            date,
         };
         dispatcher(addNewBooking(bookingTrip))
         setOpen(false);
      }
   };

   return (
      <ModalBox data-test-id="book-trip-popup">
         <ContectBox>
            <ButtonIcon
               icon={<RiCloseFill />}
               dataAtribute={
                  'book-trip-popup-close'
               }
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
