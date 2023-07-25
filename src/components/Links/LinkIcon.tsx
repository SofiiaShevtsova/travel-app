import PropTypes from "prop-types";
import { ReactElement } from "react";
import { LinkBox } from "./link_styles";

const LinkIcon = ({ icon, path }:{icon:ReactElement, path:string}): ReactElement => {
    return (
        <LinkBox to={path}>
            {icon}
        </LinkBox>  
    )
}

export default LinkIcon

LinkIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
};