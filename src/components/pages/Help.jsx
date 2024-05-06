import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageHeader from "../PageHeader/PageHeader.jsx";

const Help = () => {
  return (
    <div>
      <Row>
        <Col lg={12}>
          <PageHeader heading="React Countdown Timer Help" />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <p className="help-text">
            Cupiditate quis et mollitia aspernatur consequatur totam nisi
            accusamus. Magnam aliquid suscipit omnis doloribus molestiae quod.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Help;
