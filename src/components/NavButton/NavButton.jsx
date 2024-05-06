import React from "react";
import { Link } from "react-router-dom";
import { PropTypes, DefaultProps } from "prop-types";
import "./styles.css";

const NavButton = (props) => {
  return (
    <div className="btn btn-lg btn-block">
      <Link to={props.href}>
        <button className="nav-button" type="button">
          {props.text}
        </button>
      </Link>
    </div>
  );
};

NavButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

NavButton.defaultProps = {
  href: "#",
  text: "Dummy Link",
};

export default NavButton;
