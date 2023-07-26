import Input from "../Input/Input";
import ButtonText from "../Button/ButtonText";
import { useForm } from "react-hook-form";
import { FormBox, FieldBox } from "./form_styles";
import { InputInfo } from "../../commons/types";
import { ReactElement, useContext } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { AppContext } from "../../App";

const Form = ({ fields, name }: { fields: InputInfo[]; name: string }) => {
  const { setUser } = useContext(AppContext);

  const onSubmit = ({ email }: { email?: string }) => {
    email && setUser && setUser(email);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      {fields.map((inputInfo: InputInfo): ReactElement => {
        const { ref, name, onBlur, onChange } = {
          ...register(inputInfo.inputName, inputInfo.options),
        };

        return (
          <FieldBox key={name}>
            <Input
              newRef={ref}
              name={name}
              label={inputInfo.label}
              onBlur={onBlur}
              onChange={onChange}
            />
            {errors[name] && <ErrorMessage text={inputInfo.errorsMessage} />}
          </FieldBox>
        );
      })}
      <ButtonText text={name} type="submit" />
    </FormBox>
  );
};

export default Form;
