import PropTypes from "prop-types";
import { ReactElement } from "react";
import { LinkBox } from "./link_styles";

const LinkIcon = ({
  icon,
  path,
  dataAtribute,
}: {
  icon: ReactElement;
  path: string;
  dataAtribute?: string;
}): ReactElement => {
  return (
    <LinkBox to={path} data-test-id={dataAtribute}>
      {icon}
    </LinkBox>
  );
};

export default LinkIcon;

LinkIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
  dataAtribute: PropTypes.string,
};
