import { ReactElement, useCallback } from "react";
import { ButtonBox } from "./button_styles";

const ButtonIcon = ({
  icon,
  onClick = () => {},
}: {
  icon: ReactElement;
  onClick: Function;
}): ReactElement => {
  const handlerOnClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <ButtonBox type="button" onClick={handlerOnClick}>
      {icon}
    </ButtonBox>
  );
};

export default ButtonIcon;
