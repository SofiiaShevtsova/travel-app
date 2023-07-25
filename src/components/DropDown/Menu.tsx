import { constants } from "../../commons/constants";
import LinkText from "../Links/LinksText";

import { MenuBox, UserName} from "./dropdownMenu_styles";

const Menu = () => {
  return (
    <MenuBox>
      <UserName>{constants.USER_NAME}</UserName>
      <LinkText path={constants.ROUTES.LOGIN} text={"Sign out"} />
    </MenuBox>
  );
};

export default Menu;
