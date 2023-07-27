import { ReactElement, useCallback } from "react";
import { ButtonBox } from "./button_styles";

export const ButtonIcon = ({
  icon,
  dataAtribute,
  id,
  onClick = () => {},
}: {
  icon: ReactElement;
    dataAtribute?: string;
    id?: string;
  onClick: Function;
}): ReactElement => {
  const handlerOnClick = useCallback((event:any) => {
    onClick(event);
  }, [onClick]);

  return (
    <ButtonBox
      type="button"
      onClick={handlerOnClick}
      data-test-id={dataAtribute}
      id={id}
    >
      {icon}
    </ButtonBox>
  );
};

