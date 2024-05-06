import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import TimeButton from "../TimeButton/TimeButton.jsx";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

const UserTimersContainer = () => {
  const [userButtons, setUserButtons] = useState([]);
  return (
    <div className="userTimers">
      <Jumbotron>
        <h1>User Timers</h1>
      </Jumbotron>
      {userButtons.map((btn) => (
        <TimeButton key={uuidv4()} value={"#"} text={btn} />
      ))}
    </div>
  );
};

export default UserTimersContainer;
