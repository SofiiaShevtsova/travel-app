import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
   useSelector,
} from 'react-redux';
import { useAppDispatch } from "../../redux/store";


import { TripType } from "../../commons/types";
import {CardInfo, ButtonText, Text, Price, Modal} from "../../components/commons";
import { TripBox, Image, TripContent } from "./trip_styles";
import { getOneTrip } from "../../redux/trip/tripOperations";
import { getCurrentTrip } from "../../redux/selectors";

const Trip = () => {
  const { tripId } = useParams();

   const dispatcher = useAppDispatch();
  const trip:TripType|null = useSelector(getCurrentTrip);

  const [openModal, setOpen] = useState(false);

  useEffect(() => {
    if (tripId) {
      dispatcher(getOneTrip(tripId));
    }
  }, [dispatcher, tripId]);

  const onClick = () => {
    setOpen(true);
  };

  return (
    <>
      {trip && (
        <TripBox>
          <Image
            data-test-id="trip-details-image"
            src={trip.image}
            alt="trip photo"
          />
          <TripContent>
            <CardInfo trip={trip} />
            <Text text={trip.description} />
            <Price price={trip.price} />
            <ButtonText text={"Book a trip"} type="button" onClick={onClick} />
          </TripContent>
        </TripBox>
      )}
      {openModal && trip && <Modal trip={trip} setOpen={setOpen} />}
    </>
  );
};

export default Trip;
