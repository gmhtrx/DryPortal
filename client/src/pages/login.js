import React, { Component } from "react";
import { Col, Container, Row } from "../components/Grid"
import { FormBtn, Input, } from "../components/Form"

class Login extends Component {
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
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Login;