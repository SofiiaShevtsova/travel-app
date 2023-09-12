import { TripType } from "../commons/types";

export const filterList = ({
  query,
  level,
  duration,
  tripsList,
}: {
  query: string;
  level: string;
  duration: string;
  tripsList: TripType[];
}): TripType[] => {
  let newList: TripType[] = tripsList;
  newList = query
    ? newList.filter(
        (trip) => trip.title.toLowerCase().search(query.toLowerCase()) !== -1
      )
    : newList;
  newList =
    level !== "" ? newList.filter((trip) => trip.level === level) : newList;
  newList =
    duration !== ""
      ? newList.filter((trip) => {
          switch (duration) {
            case "0_x_5":
              return trip.duration < 6;
            case "5_x_10":
              return trip.duration < 11 && trip.duration > 5;
            case "10_x":
              return trip.duration > 10;
            default:
              return true;
          }
        })
      : newList;

  return newList;
};
