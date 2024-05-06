import React from "react";
import { PropTypes } from "prop-types";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./styles.css";

const PageHeader = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1>{props.heading}</h1>
        <p>{props.pageInfo}</p>
      </Jumbotron>
    </div>
  );
};

PageHeader.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default PageHeader;
