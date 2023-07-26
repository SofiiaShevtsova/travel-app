import { ReactElement, useCallback } from "react";
import { ButtonTextBox } from "./button_styles";

const ButtonText = ({
  text,
  type,
  onClick = () => {},
}: {
  text: string;
  type: "button" | "submit";
  onClick?: Function;
}): ReactElement => {
  const handleOnClick = useCallback(() => {
    onClick();
  }, [onClick]);
  return (
    <ButtonTextBox type={type} onClick={handleOnClick}>
      {text}
    </ButtonTextBox>
  );
};

export default ButtonText;
