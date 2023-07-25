import { constants } from "../../commons/constants";
import LinkText from "../Links/LinksText";

import { MenuBox } from "./dropdownMenu_styles";

const Menu = () => {
  return (
    <MenuBox>
      <p>{constants.USER_NAME}</p>
      <LinkText path={constants.ROUTES.LOGIN} text={"Sign out"} />
    </MenuBox>
  );
};

export default Menu;
