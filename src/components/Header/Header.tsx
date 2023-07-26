import Logo from "./Logo";
import LinkIcon from "../Links/LinkIcon";
import DropDownMenu from "../DropDown/DropDownMenu";
import ButtonIcon from "../Button/ButtonIcon";
import Menu from "../DropDown/Menu";
import { MdCardTravel } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { constants } from "../../commons/constants";
import { HeaderBox, NavigationBox } from "./header_styles";
import { AppContext } from "../../App";
import { useContext } from "react";


const Header = () => {
  const { user } = useContext(AppContext);
  return (
    <HeaderBox>
      <Logo />
      {user && (
      <NavigationBox>
        <LinkIcon path={constants.ROUTES.BOOKING} icon={<MdCardTravel />} />
        <DropDownMenu
          button={<ButtonIcon icon={<BiUser />} onClick={() => {}} />}
          menu={<Menu />}
        />
      </NavigationBox>
      )}
    </HeaderBox>
  );
};

export default Header;
