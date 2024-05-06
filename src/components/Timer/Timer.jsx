import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TimerButton from "../TimerButton/TimerButton.jsx";
import "./styles.css";

const Timer = () => {
  const [timerDisplay, setTimerDisplay] = useState("00:00");
  return (
    <div className="timer">
      <Row>
        <Col lg={12}>
          <h1>{timerDisplay}</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <TimerButton
            icon={<i className="fas fa-play"></i>}
            message="Start/Pause"
          />
          <TimerButton icon={<i className="fas fa-stop"></i>} message="Stop" />
          <TimerButton icon={<i className="fas fa-redo"></i>} message="Reset" />
          <TimerButton
            icon={<i className="fas fa-plus"></i>}
            message="Add Timer"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Timer;
