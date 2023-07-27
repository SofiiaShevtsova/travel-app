import { useContext } from "react";
import { BiUser, BiBriefcaseAlt } from "react-icons/bi";

import { AppContext } from "../../App";
import { constants } from "../../commons/constants";
import {ButtonIcon, LinkIcon, DropDownMenu, Container} from "../commons";
import Logo from "./Logo";
import Menu from "../DropDown/Menu";
import {
  BookingTotal,
  HeaderBox,
  NavigationBox,
  BookingLink,
} from "./header_styles";

export const Header = () => {
  const { tripsList, bookingList } = useContext(AppContext);
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
