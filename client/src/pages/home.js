import React, { Component } from "react";
import { Col, Container, Row } from "../components/Grid"

class Home extends Component {


  render() {
    return (

      <Container>
         <Row>
          <Col size="md-6">
          Create a pick up request!
          </Col>          
        </Row>
        

        <Row>
          <Col size="md-6">
          About Us
          </Col>          
        </Row>

      </Container>


    );
  }
};

export default Home;