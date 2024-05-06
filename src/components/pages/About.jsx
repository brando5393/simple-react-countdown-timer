import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageHeader from "../PageHeader/PageHeader.jsx";

const About = () => {
  return (
    <div>
      <Row>
        <Col lg={12}>
          <PageHeader heading="About React Countdown Timer" />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <p className="about-text">
            React Countdown timer was developed to provide a simple but
            effective timer solution. In addition to providing preset timer
            options, users are also able to create custom timers that are placed
            within the local storage of the browser for convenience and reuse.
            Moreover, the current time is displayed and regularly updated within
            the header of the homepage to further assist users when setting or
            selecting a timer to use.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
