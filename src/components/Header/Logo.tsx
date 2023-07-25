import LinkText from "../Links/LinksText";
import { constants } from "../../commons/constants";
import { LogoBox } from "./header_styles";

const Logo = () => (
  <LogoBox>
    <LinkText path={constants.ROUTES.MAIN} text={constants.APP_NAME} />
  </LogoBox>
);

export default Logo;
