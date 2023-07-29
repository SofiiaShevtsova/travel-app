import { BiUser, BiBriefcaseAlt } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { constants } from "../../commons/constants";
import {ButtonIcon, LinkIcon, DropDownMenu, Container} from "../commons";
import Logo from "./Logo";
import Menu from "../DropDown/Menu";
import {
  HeaderBox,
  NavigationBox,
  BookingLink,
} from "./header_styles";
import { getUser } from "../../redux/selectors";

export const Header = () => {
const user = useSelector(getUser)
  return (
    <HeaderBox>
      <Container>
        <>
          <Logo />
          {user && (
            <NavigationBox data-test-id="header-nav">
              <BookingLink>
                <LinkIcon
                  path={constants.ROUTES.BOOKING}
                  icon={<BiBriefcaseAlt />}
                  dataAtribute={"header-bookings-link"}
                />
                {/* {bookingList && bookingList?.length > 0 && (
                  <BookingTotal>{bookingList?.length}</BookingTotal>
                )} */}
              </BookingLink>
              <DropDownMenu
                button={
                  <ButtonIcon
                    icon={<BiUser />}
                    onClick={() => {}}
                    dataAtribute={"header-profile-nav"}
                  />
                }
                menu={<Menu user={ user } />}
              />
            </NavigationBox>
          )}
        </>
      </Container>
    </HeaderBox>
  );
};
