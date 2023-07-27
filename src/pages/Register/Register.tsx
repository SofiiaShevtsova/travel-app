import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../App";
import { constants } from "../../commons/constants";
import { InputInfo } from "../../commons/types";
import { Title, LinkText, Form, Text } from "../../components/commons";
import { RegisterBox } from "./register_styles";

const Register = () => {
  const { setUser, user } = useContext(AppContext);

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
      type: "password",
    },
  ];

  const onSubmit = ({ email }: { email: string }) => {
    email && setUser && setUser(email);
  };

  return (
    <RegisterBox>
      <Title title={"Sign up"} />
      <Form fields={inputInfoArray} name={"Sign up"} onSubmit={onSubmit} />
      <Text text={"Already have an account?"}>
        <LinkText path={constants.ROUTES.LOGIN} text={"Sign in"} />
      </Text>
      {user && <Navigate to={constants.ROUTES.MAIN} />}
    </RegisterBox>
  );
};

export default Register;
