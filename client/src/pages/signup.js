import React, { Component } from "react";
import { Col, Container, Row } from "../components/Grid"
import { FormBtn, Input, } from "../components/Form"
import API from "../utils/API";

class Signup extends Component {

  state = {
    username: "",
    password: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      let userData = {
        username: this.state.username,
        password: this.state.password
      }
      console.log(userData)
      API.postUser(userData)
        .then(console.log("~~~~~~~~~~~~"))
        .catch(err => console.log(err));
    }
  }

  render() {
    return (

      <Container>
        <Row>
          <Col size="md-6">
            <Input
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              placeholder="Username"
            />
            <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              placeholder="Password"
            />
            <FormBtn
              disabled={!(this.state.username && this.state.password)}
              onClick={this.handleFormSubmit}
            >
              Signup
              </FormBtn>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Signup;