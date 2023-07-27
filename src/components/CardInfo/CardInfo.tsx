import { TripType } from "../../commons/types";
import Title from "../Title/Title";
import { Duration, Level, TripContent, TripInfo } from "./card-info_styles";
import { FaRegCalendarAlt } from "react-icons/fa";

const CardInfo = ({ trip }: { trip: TripType }) => {
  return (
    <TripInfo>
      <Title title={trip.title} dataAtribute="trip-card-title" />
      <TripContent>
        <Duration data-test-id="trip-card-duration">
          <FaRegCalendarAlt />
          <strong>{trip.duration}</strong> days
        </Duration>
        <Level data-test-id="trip-card-level">{trip.level}</Level>
      </TripContent>
    </TripInfo>
  );
};

export default CardInfo;
