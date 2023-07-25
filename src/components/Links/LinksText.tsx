import PropTypes from "prop-types";
import { ReactElement } from "react";
import { LinkBox } from "./link_styles";

const LinkText = ({ text, path }:{text:string, path:string}): ReactElement => {
    return (
        <LinkBox to={path}>
            {text}
        </LinkBox>  
    )
}

export default LinkText

LinkText.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};