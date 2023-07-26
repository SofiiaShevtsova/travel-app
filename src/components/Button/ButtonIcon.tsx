import { ReactElement, useCallback } from "react";
import { ButtonBox } from "./button_styles";

const ButtonIcon = ({
  icon,
  dataAtribute,
  onClick = () => {},
}: {
  icon: ReactElement;
  dataAtribute?: string;
  onClick: Function;
}): ReactElement => {
  const handlerOnClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <ButtonBox
      type="button"
      onClick={handlerOnClick}
      data-test-id={dataAtribute}
    >
      {icon}
    </ButtonBox>
  );
};

export default ButtonIcon;
