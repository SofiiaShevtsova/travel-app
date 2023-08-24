import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  RefCallback,
  useCallback,
  useState
} from "react";
import { InputBox, InputStyle, Label } from "./input_styles";

export const Input = ({
  newRef,
  name,
  onBlur,
  onChange,
  label,
  placeholder,
  type = "text",
  dataAtribute,
  value,
  min
}: {
  newRef?: RefCallback<HTMLElement>;
  name: string;
  onBlur?: FocusEventHandler;
  onChange: ChangeEventHandler;
  label?: string;
  placeholder?: string;
  type?: string;
  dataAtribute?: string;
  value?: string | number;
  min?: string;
}) => {
  const [newValue, setValue] = useState(value);

  const handlerOnChange = useCallback(
    (event: ChangeEvent) => {
      const element: HTMLInputElement = event.target as HTMLInputElement;
      value && setValue(element.value);
      onChange(event);
    },
    [onChange, value]
  );

  return (
    <InputBox>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputStyle
        name={name}
        onBlur={onBlur}
        onChange={handlerOnChange}
        ref={newRef}
        placeholder={placeholder}
        type={type}
        data-test-id={dataAtribute}
        value={newValue}
        min={min}
      />
    </InputBox>
  );
};
