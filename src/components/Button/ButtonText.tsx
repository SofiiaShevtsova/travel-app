import { ReactElement, useCallback } from "react";
import { ButtonTextBox } from "./button_styles";

const ButtonText = ({
  text,
  type,
  dataAtribute,
  onClick = () => {},
}: {
  text: string;
  type: "button" | "submit";
  dataAtribute?: string;
  onClick?: Function;
}): ReactElement => {
  const handleOnClick = useCallback(() => {
    onClick();
  }, [onClick]);
  return (
    <ButtonTextBox
      type={type}
      onClick={handleOnClick}
      data-test-id={dataAtribute}
    >
      {text}
    </ButtonTextBox>
  );
};

export default ButtonText;
