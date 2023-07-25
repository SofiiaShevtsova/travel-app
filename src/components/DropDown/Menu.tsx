import { constants } from "../../commons/constants";
import LinkText from "../Links/LinksText";

const Menu = () => {
  return (
    <div>
      <p>{constants.USER_NAME}</p>
      <LinkText path={constants.ROUTES.LOGIN} text={"Sign out"} />
    </div>
  );
};

export default Menu;
