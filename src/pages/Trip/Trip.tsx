import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { AppContext } from "../../App";
import { TripType } from "../../commons/types";
import {CardInfo, ButtonText, Text, Price, Modal} from "../../components/commons";
import { TripBox, Image, TripContent } from "./trip_styles";

const Trip = () => {
  const { tripId } = useParams();
  const { tripsList } = useContext(AppContext);

  const [openModal, setOpen] = useState(false);
  const [trip, setTrip]: [
    TripType | undefined,
    React.Dispatch<React.SetStateAction<any>>
  ] = useState();

  useEffect(() => {
    if (tripId && tripsList) {
      const tripFinded: TripType | undefined = tripsList?.find(
        (trip) => trip.id === tripId
      );
      tripFinded && setTrip(tripFinded);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
