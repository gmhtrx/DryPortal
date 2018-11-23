import React, { Component } from "react";
import {Col, Container, Row} from "../components/Grid"
import Navigation from "../components/navigation"

class Userdash extends Component {

  render() {
    return (

          <Container>
              <Navigation
               logininhref="/dashboard"
               signuphref="/logout"
               login="Dashboard"
               signup="Logout"
              />
            <Row>
              <Col size="md-6">
                <h2>Helloworld</h2>
              </Col>
            </Row>
          </Container>

    );
  }
};

export default Userdash;