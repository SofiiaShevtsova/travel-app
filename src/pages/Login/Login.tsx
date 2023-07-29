import { useDispatch } from 'react-redux';
import { constants } from '../../commons/constants';
import {
   InputInfo,
   NewUser,
} from '../../commons/types';
import {
   Title,
   LinkText,
   Form,
   Text,
} from '../../components/commons';
import { LoginBox } from './login_styles';
import { logIn } from '../../redux/auth/authOperations';

const Login = () => {
   const inputInfoArray: InputInfo[] = [
      {
         inputName: 'email',
         label: 'Email',
         options: {
            required: true,
            pattern: /\w+@+\w{1,5}\.\w{1,5}/g,
         },
         errorsMessage: 'It is not email!',
      },
      {
         inputName: 'password',
         label: 'Password',
         options: {
            required: true,
            minLength: 3,
            maxLength: 20,
         },
         errorsMessage:
            'Name must be 3-20 characters',
         type: 'password',
      },
   ];

   const dispatcher: any = useDispatch();

   const onSubmit = (user: NewUser) => {
      dispatcher(logIn(user));
   };

   return (
      <LoginBox>
         <Title title={'Sign in'} />
         <Form
            fields={inputInfoArray}
            name={'Sign in'}
            onSubmit={onSubmit}
         />
         <Text
            text={'Already have not an account?'}
         >
            <LinkText
               path={
                  constants.ROUTES.REGISTRATION
               }
               text={'Sign up'}
            />
         </Text>
      </LoginBox>
   );
};

export default Login;
