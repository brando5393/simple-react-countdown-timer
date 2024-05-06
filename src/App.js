import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Help from "./components/pages/Help";
import Navbar from "./components/Navbar/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Row>
          <Col lg={4}>
            <Container>
              <Navbar />
            </Container>
          </Col>
          <Col lg={8}>
            <Container>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
              <Switch>
                <Route exact path="/about" component={About} />
              </Switch>
              <Switch>
                <Route exact path="/help" component={Help} />
              </Switch>
            </Container>
          </Col>
        </Row>
      </div>
    </Router>
  );
};

export default App;
