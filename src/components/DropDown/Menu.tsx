import { constants } from "../../commons/constants";
import { MenuBox } from "./dropdownMenu_styles";
import LinkText from "../Links/LinksText";

const Menu = () => {

  return (
    <MenuBox data-test-id="header-profile-nav-list">
      <p data-test-id="header-profile-nav-username">{constants.USER_NAME}</p>
      <LinkText text={"Sign out"} path={constants.ROUTES.LOGIN} dataAtribute={ "header-profile-nav-sign-out"} />
    </MenuBox>
  );
};

export default Menu;
