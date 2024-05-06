import React from "react";
import "./styles.css";

const TimeButton = (props) => {
  return (
    <div className="timeButton">
      <button type="button" data-value={props.value}>
        {props.text}
      </button>
    </div>
  );
};

export default TimeButton;
