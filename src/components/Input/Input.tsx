import { ChangeEvent, ChangeEventHandler, FocusEventHandler, RefCallback, useCallback } from "react";
import { InputBox, InputStyle, Label } from "./input_styles";

const Input = ({
  newRef,
  name,
  onBlur,
  onChange,
  label,
  placeholder,
}: {
  newRef?: RefCallback<HTMLElement>;
  name: string;
  onBlur?: FocusEventHandler;
  onChange: ChangeEventHandler;
  label?: string;
  placeholder?: string;
  }) => {
  
  const handlerOnChange = useCallback((event:ChangeEvent) => {
    onChange(event)
  }, [onChange])
  
  return (
    <InputBox>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputStyle
        name={name}
        onBlur={onBlur}
        onChange={handlerOnChange}
        ref={newRef}
        placeholder={placeholder}
      />
    </InputBox>
  );
};

export default Input;
