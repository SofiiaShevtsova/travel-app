import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { User } from "../../commons/types";
import { constants } from "../../commons/constants";

export const PublicRoutes =({
  children,
  user,
}: {
  children: ReactElement;
  user: User|null;
    }): ReactElement => {
    console.log(children);
    
  return (<>{!user ? children : <Navigate to={constants.ROUTES.MAIN} />}</>);
};