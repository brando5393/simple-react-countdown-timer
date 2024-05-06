import React from "react";
import "./styles.css";

const TimerButton = (props) => {
  return (
    <div className="btn">
      <button
        className="timer-button"
        data-toggle="tooltip"
        data-placement="bottom"
        title={props.message}
      >
        {props.icon}
      </button>
    </div>
  );
};

export default TimerButton;
