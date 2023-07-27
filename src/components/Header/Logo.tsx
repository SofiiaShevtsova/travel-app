import {LinkText} from "../commons";
import { constants } from "../../commons/constants";
import { LogoBox } from "./header_styles";

const Logo = () => (
  <LogoBox>
    <LinkText path={constants.ROUTES.MAIN} text={constants.APP_NAME} dataAtribute={'header-logo'} />
  </LogoBox>
);

export default Logo;
