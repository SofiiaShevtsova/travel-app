import PropTypes from "prop-types";
import { ReactElement } from "react";
import { Link } from 'react-router-dom'

const LinkIcon = ({ icon, path }:{icon:ReactElement, path:string}): ReactElement => {
    return (
        <Link to={path}>
            {icon}
        </Link>  
    )
}

export default LinkIcon

LinkIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
};