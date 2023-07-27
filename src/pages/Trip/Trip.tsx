import { ChangeEvent, useState, useEffect } from "react";
import Container from "../../components/Container/Container";
import { AppContext } from "../../App";
import { useContext } from "react";
import { TripType } from "../../commons/types";
import { useParams } from "react-router-dom";
import { TripBox, Image, TripContent } from "./trip_styles";
import CardInfo from "../../components/CardInfo/CardInfo";
import Text from "../../components/Text/Text";
import Price from "../../components/Price/Price";
import ButtonText from "../../components/Button/ButtonText";

const Trip = () => {
  const { tripId } = useParams();

  const { tripsList } = useContext(AppContext);

  const trip = tripsList?.find((trip) => trip.id === tripId);

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
            <ButtonText text={"Book a trip"} type="button" />
          </TripContent>
        </TripBox>
      )}
    </>
    // <MainBox>
    //   <FilterBox>
    //     <Container>
    //       <>
    //         <InputBox>
    //           <FiSearch />
    //           <Input name={"search"} onChange={onChange} />
    //         </InputBox>
    //         {selectsArray.map((select) => (
    //           <Select
    //             name={select.name}
    //             list={select.options}
    //             dataAtribute={select.dataAtribute}
    //             key={select.dataAtribute}
    //           />
    //         ))}
    //       </>
    //     </Container>
    //   </FilterBox>
    //   <TripList>
    //     {tripsList && tripsList.map((trip) => (
    //       <Card trip={trip} key={trip.id} />
    //     ))}
    //   </TripList>
    // </MainBox>
  );
};

export default Trip;
