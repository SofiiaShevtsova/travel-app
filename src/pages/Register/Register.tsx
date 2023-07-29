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
import { RegisterBox } from './register_styles';
import { signUp } from '../../redux/auth/authOperations';

const Register = () => {
   const inputInfoArray: InputInfo[] = [
      {
         inputName: 'fullName',
         label: 'Full name',
         options: {
            required: true,
            minLength: 2,
            maxLength: 20,
         },
         errorsMessage:
            'Name must be 2-20 characters',
      },
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

   const onSubmit = (newUser: NewUser) => {
      dispatcher(signUp(newUser));
   };

   return (
      <RegisterBox>
         <Title title={'Sign up'} />
         <Form
            fields={inputInfoArray}
            name={'Sign up'}
            onSubmit={onSubmit}
         />
         <Text text={'Already have an account?'}>
            <LinkText
               path={constants.ROUTES.LOGIN}
               text={'Sign in'}
            />
         </Text>
      </RegisterBox>
   );
};

export default Register;
