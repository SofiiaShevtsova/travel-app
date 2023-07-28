import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from "../../App";
import { constants } from "../../commons/constants";
import { InputInfo } from "../../commons/types";
import {Title, LinkText, Form, Text} from "../../components/commons";
import { LoginBox } from "./login_styles";

const Login = () => {
  const { setUser, user, setList } = useContext(AppContext);

  const inputInfoArray: InputInfo[] = [
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

    useEffect(() => {
    setList && setList(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LoginBox>
      <Title title={"Sign in"} />
      <Form fields={inputInfoArray} name={'Sign in'} onSubmit={onSubmit } />
      <Text text={"Already have not an account?"}>
        <LinkText path={constants.ROUTES.REGISTRATION} text={"Sign up"} />
      </Text>
      {user&& <Navigate to={constants.ROUTES.MAIN}/>}
    </LoginBox>
  );
}

export default Login