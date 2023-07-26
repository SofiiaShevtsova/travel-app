import { LoginBox } from "./login_styles";
import Title from "../../components/Title/Title";
import LinkText from "../../components/Links/LinksText";
import { constants } from "../../commons/constants";
import Form from "../../components/Form/Form";
import { InputInfo } from "../../commons/types";
import Text from "../../components/Text/Text";


const Login = () => {
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
    },
  ];

  return (
    <LoginBox>
      <Title title={"Sign in"} />
          <Form fields={inputInfoArray} name={'Sign in'} />
      <Text text={"Already have not an account?"}>
        <LinkText path={constants.ROUTES.REGISTRATION} text={"Sign up"} />
      </Text>
    </LoginBox>
  );
}

export default Login