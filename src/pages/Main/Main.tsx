import { ChangeEvent, useState } from "react";
import Input from "../../components/Input/Input";
import ButtonIcon from "../../components/Button/ButtonIcon";
import {FiSearch} from 'react-icons/fi'
import Select from "../../components/Select/Select";
import { MainBox, FilterBox } from "./main_styles";

const Main = () => {
  const [query, setQuery] = useState("");

  const onChange = (event: ChangeEvent) => {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    const newQuery: string = input.value;
    setQuery(newQuery);
  };
    
    const onClick = () => {
        console.log('click');
        
    }

  return (
    <MainBox>
      <FilterBox>
          <ButtonIcon icon={<FiSearch />} onClick={onClick} />
          <Input name={"search"} onChange={onChange} />
          <Select name={'duration'} list={['yes']} />
          <Select name={'duration'} list={ ['yes']} />
</FilterBox>
    </MainBox>
  );
};

export default Main;
