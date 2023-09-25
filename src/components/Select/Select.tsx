import { BiSolidDownArrow } from 'react-icons/bi';
import {
   IconBox,
   SelectBox,
   SelectStyles,
} from './select_styles';

export const Select = ({
   name,
   dataAtribute,
   list,
   onChange,
}: {
   name: string;
   dataAtribute: string;
   onChange: Function;
   list: { value: string; text: string }[];
}) => {
   const onSelectChange = (event: any) => {
      onChange(event);
   };

   return (
      <SelectBox htmlFor={name}>
         <SelectStyles
            data-test-id={dataAtribute}
            name={name}
            id={name}
         onChange={onSelectChange}
         >
            {list.map((options) => (
               <option
                  value={options.value}
                  key={options.value}
               >
                  {options.text}
               </option>
            ))}
         </SelectStyles>
         <IconBox>
            <BiSolidDownArrow />
         </IconBox>
      </SelectBox>
   );
};
