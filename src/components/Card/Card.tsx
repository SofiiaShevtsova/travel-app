import { TripType } from '../../commons/types';
import { constants } from '../../commons/constants';
import {
   CardInfo,
   Price,
   LinkText,
} from '../commons';
import {
   CardBox,
   CardContents,
} from './card_styles';

export const Card = ({
   trip,
}: {
   trip: TripType;
}) => {
   return (
      <CardBox data-test-id="trip-card">
         <img
            data-test-id="trip-card-image"
            src={trip.image}
            alt="trip"
         />
         <CardContents>
            <CardInfo trip={trip} />
            <Price price={trip.price} />
         </CardContents>
         <LinkText
            path={
               constants.ROUTES.TRIP + trip._id
            }
            text={'Discover a trip'}
            dataAtribute="trip-card-link"
         />
      </CardBox>
   );
};
