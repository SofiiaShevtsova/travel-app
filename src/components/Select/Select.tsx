import { IconBox, SelectBox, SelectStyles } from "./select_styles";
import {BiSolidDownArrow} from 'react-icons/bi'

const Select = ({ name, dataAtribute, list }: { name: string; dataAtribute: string; list: { value: string; text:string}[] }) => {
  return (
    <SelectBox>
      <SelectStyles data-test-id={dataAtribute} name={name} id={name}>
        {list.map(options => (<option value={options.value} key={options.value}>{options.text}</option>))}
      </SelectStyles>
      <IconBox>
      <BiSolidDownArrow/>
      </IconBox>
    </SelectBox>
  );
};

export default Select;
