import Input from "../Input/Input";
import ButtonText from "../Button/ButtonText";
import { useForm } from "react-hook-form";
import { FormBox, FieldBox } from "./form_styles";
import { InputInfo } from "../../commons/types";
import { ReactElement } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Form = ({
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

export default Form;
