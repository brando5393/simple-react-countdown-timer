import React from "react";
import "./styles.css";
import { PropTypes } from "prop-types";
import Jumbotron from "react-bootstrap/Jumbotron";
import TimeButton from "../TimeButton/TimeButton.jsx";

const PresetContainer = () => {
  return (
    <div className="presetContainer">
      <Jumbotron>
        <h1>Presets</h1>
      </Jumbotron>
      <TimeButton value="1:00" text="1 minute" />
      <TimeButton value="5:00" text="5 minutes" />
      <TimeButton value="10:00" text="10 minutes" />
      <TimeButton value="60:00" text="60 minutes" />
    </div>
  );
};

PresetContainer.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default PresetContainer;
