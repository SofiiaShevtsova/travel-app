import { ChangeEventHandler, FocusEventHandler, RefCallback } from "react";
import { InputBox, InputStyle } from "./input_styles";

const Input = ({
  newRef,
  name,
  onBlur,
  onChange,
  label,
}: {
  newRef: RefCallback<HTMLElement>;
  name: string;
  onBlur: FocusEventHandler;
  onChange: ChangeEventHandler;
  label?: string;
}) => {
  return (
    <InputBox>
      {label && <label htmlFor={name}>{label}</label>}
      <InputStyle name={name} onBlur={onBlur} onChange={onChange} ref={newRef} />
    </InputBox>
  );
};

export default Input;
