import React, { useState, useEffect } from "react";
import moment from "moment";
import "./styles.css";

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState("00:00");
  useEffect(() => {
    setInterval(() => {
      let time = moment().format("h:mm a");
      setCurrentTime(time);
    }, 1000);
  });

  //eslint-disable-next-line
  return <div className="time-display">{currentTime}</div>;
};

export default TimeDisplay;
