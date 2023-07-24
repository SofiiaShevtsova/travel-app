import Logo from "./Logo";
import LinkIcon from "../Links/LinkIcon";
import DropDownMenu from "../DropDown/DropDownMenu";
import ButtonIcon from "../Button/ButtonIcon";
import Menu from "../DropDown/Menu";
import { MdCardTravel } from "react-icons/md";
import { BiUser } from "react-icons/bi";

const Header = () => {
  return (
    <div>
      <Logo />
      <LinkIcon path="/booking" icon={<MdCardTravel />} />
      <DropDownMenu
        button={<ButtonIcon icon={<BiUser />} onClick={() => {}} />}
        menu={<Menu />}
      />
    </div>
  );
};

export default Header;
