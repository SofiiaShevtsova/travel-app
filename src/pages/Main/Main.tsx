import { ChangeEvent, useState, useEffect } from "react";
import Input from "../../components/Input/Input";
import { FiSearch } from "react-icons/fi";
import Select from "../../components/Select/Select";
import { MainBox, FilterBox, InputBox, TripList } from "./main_styles";
import list from "../../data/trips.json";
import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import { AppContext } from "../../App";
import { useContext } from "react";
import { TripType } from "../../commons/types";

const selectsArray = [
  {
    name: "duration",
    dataAtribute: "filter-duration",
    options: [
      { value: "", text: "duration" },
      { value: "0_x_5", text: "> 5 days" },
      { value: "5_x_10", text: "> 10 days" },
      { value: "10_x", text: "< 10 days" },
    ],
  },
  {
    name: "level",
    dataAtribute: "filter-level",
    options: [
      { value: "", text: "level" },
      { value: "easy", text: "easy" },
      { value: "moderate", text: "moderate" },
      { value: "difficult", text: "difficult" },
    ],
  },
];

const Main = () => {
  const [query, setQuery] = useState("");
  const arrayTrips: TripType[] = list;

  const { setList, tripsList } = useContext(AppContext);

  useEffect(() => {
    setList && setList(arrayTrips);
  }, [arrayTrips, setList]);

  const onChange = (event: ChangeEvent) => {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    const newQuery: string = input.value;
    setQuery(newQuery);
  };

  return (
    <MainBox>
      <FilterBox>
        <Container>
          <>
            <InputBox>
              <FiSearch />
              <Input name={"search"} onChange={onChange} placeholder="search by title"/>
            </InputBox>
            {selectsArray.map((select) => (
              <Select
                name={select.name}
                list={select.options}
                dataAtribute={select.dataAtribute}
                key={select.dataAtribute}
              />
            ))}
          </>
        </Container>
      </FilterBox>
      <TripList>
        {tripsList &&
          tripsList.map((trip) => <Card trip={trip} key={trip.id} />)}
      </TripList>
    </MainBox>
  );
};

export default Main;
