import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageHeader from "../PageHeader/PageHeader.jsx";
import TimeDisplay from "../TimeDisplay/TimeDisplay.jsx";
import Timer from "../Timer/Timer.jsx";
import PresetContainer from "../PresetContainer/PresetContainer.jsx";
import UserTimersContainer from "../UserTimersContainer/UserTimersContainer.jsx";

const Home = () => {
  return (
    <div>
      <Row>
        <Col lg={12}>
          <PageHeader
            heading="Welcome to React Countdown Timer"
            pageInfo={<TimeDisplay />}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Timer />
          <Row>
            <Col lg={12}>
              <PresetContainer />
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <UserTimersContainer />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
