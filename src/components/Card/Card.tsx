import { TripType } from "../../commons/types";
import { CardBox, CardContents } from "./card_styles";
import CardInfo from "../CardInfo/CardInfo";
import Price from "../Price/Price";
import LinkText from "../Links/LinksText";
import { constants } from "../../commons/constants";

const Card = ({ trip }: { trip: TripType }) => {
  return (
    <CardBox data-test-id="trip-card">
      <img data-test-id="trip-card-image" src={trip.image} alt="trip photo" />
      <CardContents>
        <CardInfo trip={trip} />
        <Price price={trip.price} />
      </CardContents>
      <LinkText
        path={constants.ROUTES.TRIP + trip.id}
        text={"Discover a trip"}
        dataAtribute="trip-card-link"
      />
    </CardBox>
  );
};

export default Card;
