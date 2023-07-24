import PropTypes from "prop-types";
import { ReactElement } from "react";
import { Link } from 'react-router-dom'

const LinkText = ({ text, path }:{text:string, path:string}): ReactElement => {
    return (
        <Link to={path}>
            {text}
        </Link>  
    )
}

export default LinkText

LinkText.propTypes = {
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};