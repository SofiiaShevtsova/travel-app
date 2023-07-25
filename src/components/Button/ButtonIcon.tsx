import { ReactElement, useCallback } from "react";

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
    <button type="button" onClick={handlerOnClick}>
      {icon}
    </button>
  );
};

export default ButtonIcon;
