import { toast as notification } from 'react-toastify';
import { logOut } from '../redux/auth/authOperations';

export const catchError = ({
   error,
   dispatch,
}: any) => {
   if (error.status === 401) {
      dispatch(logOut());
   }
   notification.error(error.statusText);
};
