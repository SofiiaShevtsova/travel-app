import { ChangeEvent, useState, useEffect } from "react";
import Container from "../../components/Container/Container";
import { AppContext } from "../../App";
import { useContext } from "react";
import { TripType } from "../../commons/types";
import { useParams } from "react-router-dom";

const Trip = () => {
    const data = useParams();
    console.log(data);
    
  const { tripsList } = useContext(AppContext);

//   useEffect(() => {
//      setList && setList(arrayTrip)
//    }, [setList]);

  return (<></>
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
