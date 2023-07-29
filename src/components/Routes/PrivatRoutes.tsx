import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { constants } from "../../commons/constants";

export const PrivatRoutes = ({
  children,
  isUser,
}: {
  children: ReactElement;
  isUser: boolean;
}): ReactElement => {
  return (<>{isUser ? children : <Navigate to={constants.ROUTES.LOGIN} />}</>);
};
