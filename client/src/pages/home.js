import React, { Component } from "react";
import {Col, Container, Row} from "../components/Grid"
import Navigation from "../components/navigation"

class Home extends Component {


  render() {
    return (
        
          <Container>
            <Navigation/>
            <Row>
              <Col size="md-6">
              Hello
              </Col>
            </Row>
          </Container>

    );
  }
};

export default Home;