import { constants } from "../../commons/constants";
import ButtonText from "../Button/ButtonText";
import { AppContext } from "../../App";
import { MenuBox } from "./dropdownMenu_styles";
import { useContext } from "react";

const Menu = () => {
  const { setUser } = useContext(AppContext);

  const onClick = () => {
    console.log('click');
    
    setUser && setUser("");
  };

  return (
    <MenuBox>
      <p>{constants.USER_NAME}</p>
      <ButtonText text={"Sign out"} type={"button"} onClick={onClick} />
    </MenuBox>
  );
};

export default Menu;
