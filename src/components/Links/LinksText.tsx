import PropTypes from "prop-types";
import { ReactElement } from "react";
import { LinkBox } from "./link_styles";

const LinkText = ({
  text,
  path,
  dataAtribute,
}: {
  text: string;
  path: string;
  dataAtribute?: string;
}): ReactElement => {
    return (
        <LinkBox to={path} data-test-id={dataAtribute}>
            {text}
        </LinkBox>  
    )
}

export default LinkText

LinkText.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  dataAtribute: PropTypes.string,
};