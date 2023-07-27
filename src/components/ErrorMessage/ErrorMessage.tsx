import { ReactElement } from "react";
import { Error } from "./errorMessage_styles";

export const ErrorMessage = ({ text }: { text?: string }): ReactElement => {
  return <>{text && <Error>{text}</Error>}</>;
};
