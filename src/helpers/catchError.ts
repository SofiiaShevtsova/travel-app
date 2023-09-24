import { toast as notification } from 'react-toastify';
import { logOut } from '../redux/auth/authOperations';

export const myMessage: {[key: number]: string} = {
  400: "Bad Request",
  401: "Unauthorized",
  404: "Not found",
  409: "Conflict",
};

export const catchError = ({
   error,
   dispatch,
}: any) => {
   if (error.status === 401) {
      dispatch(logOut());
   }
   notification.error(myMessage[error.status]);
};
