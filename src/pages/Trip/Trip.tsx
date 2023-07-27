import { useState, useEffect } from "react";
import { AppContext } from "../../App";
import { useContext } from "react";
import { TripType } from "../../commons/types";
import { useParams } from "react-router-dom";
import { TripBox, Image, TripContent } from "./trip_styles";
import CardInfo from "../../components/CardInfo/CardInfo";
import Text from "../../components/Text/Text";
import Price from "../../components/Price/Price";
import ButtonText from "../../components/Button/ButtonText";
import Modal from "../../components/Modal/Modal";

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
