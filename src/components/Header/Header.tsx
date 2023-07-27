import Logo from "./Logo";
import LinkIcon from "../Links/LinkIcon";
import DropDownMenu from "../DropDown/DropDownMenu";
import ButtonIcon from "../Button/ButtonIcon";
import Menu from "../DropDown/Menu";
import { BiUser, BiBriefcaseAlt } from "react-icons/bi";
import { constants } from "../../commons/constants";
import { HeaderBox, NavigationBox } from "./header_styles";
import { AppContext } from "../../App";
import { useContext } from "react";
import Container from "../Container/Container";

const Header = () => {
  const { tripsList } = useContext(AppContext);
  return (
    <HeaderBox>
      <Container>
        <>
          <Logo />
          {tripsList && (
            <NavigationBox data-test-id="header-nav">
              <LinkIcon
                path={constants.ROUTES.BOOKING}
                icon={<BiBriefcaseAlt />}
                dataAtribute={"header-bookings-link"}
              />
              <DropDownMenu
                button={
                  <ButtonIcon
                    icon={<BiUser />}
                    onClick={() => {}}
                    dataAtribute={"header-profile-nav"}
                  />
                }
                menu={<Menu />}
              />
            </NavigationBox>
          )}
        </>
      </Container>
    </HeaderBox>
  );
};

export default Header;
