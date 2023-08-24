import { ReactElement } from "react";
import { useForm } from "react-hook-form";

import { InputInfo } from "../../commons/types";
import { Input, ButtonText, ErrorMessage } from "../commons";
import { FormBox, FieldBox } from "./form_styles";

export const Form = ({
  fields,
  name,
  onSubmit,
  handlerChange,
  children
}: {
  fields: InputInfo[];
  name: string;
    onSubmit?: Function;
    handlerChange?:Function
    children?: ReactElement;
}) => {
  const onSubmitForm = (data: Object) => {
    onSubmit && onSubmit(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormBox onSubmit={handleSubmit(onSubmitForm)}>
      {fields.map((inputInfo: InputInfo): ReactElement => {
        const { ref, name, onBlur, onChange } = {
          ...register(inputInfo.inputName, inputInfo.options),
        };

        const handleOnChange = (event: any) => {
          if (event) {
           onChange(event);
          handlerChange&&handlerChange(event);
          }
        }

        return (
          <FieldBox key={name}>
            <Input
              newRef={ref}
              name={name}
              label={inputInfo.label}
              onBlur={onBlur}
              onChange={handleOnChange}
              placeholder={inputInfo.placeholder}
              type={inputInfo.type}
              dataAtribute={inputInfo.dataAtribute}
              value={inputInfo.value}
              min={inputInfo.min}
            />
            {errors[name] && <ErrorMessage text={inputInfo.errorsMessage} />}
          </FieldBox>
        );
      })}
      {children}
      <ButtonText text={name} type="submit" />
    </FormBox>
  );
};
