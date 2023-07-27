import { RegisterBox } from "./register_styles";
import Title from "../../components/Title/Title";
import LinkText from "../../components/Links/LinksText";
import { constants } from "../../commons/constants";
import Form from "../../components/Form/Form";
import { InputInfo } from "../../commons/types";
import Text from "../../components/Text/Text";
import { AppContext } from "../../App";
import {useContext} from 'react'

const Register = () => {
  const { setUser } = useContext(AppContext);

  const inputInfoArray: InputInfo[] = [
    {
      inputName: "name",
      label: "Full name",
      options: { required: true, minLength: 2, maxLength: 20 },
      errorsMessage: "Name must be 2-20 characters",
    },
    {
      inputName: "email",
      label: "Email",
      options: { required: true, pattern: /\w+@+\w{1,5}\.\w{1,5}/g },
      errorsMessage: "It is not email!",
    },
    {
      inputName: "password",
      label: "Password",
      options: { required: true, minLength: 3, maxLength: 20 },
      errorsMessage: "Name must be 3-20 characters",
      type: 'password',
    },
  ];

    const onSubmit = ({email}: {email:string}) => {
    email && setUser && setUser(email);
  }


  return (
    <RegisterBox>
      <Title title={"Sign up"} />
      <Form fields={inputInfoArray} name={'Sign up'} onSubmit={onSubmit}/>
      <Text text={"Already have an account?"}>
        <LinkText path={constants.ROUTES.LOGIN} text={"Sign in"} />
      </Text>
    </RegisterBox>
  );
};

export default Register;
