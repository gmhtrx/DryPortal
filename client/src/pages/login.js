import React, { Component } from "react";
import { Col, Container, Row } from "../components/Grid"
import { FormBtn, Input, } from "../components/Form"
import Navigation from "../components/navigation"
import Auth from "../modules/auth"

import API from "../utils/API";

class Login extends Component {
    state = {
        username: "",
        password: "",
        message: ""
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
                password: this.state.password,
                message: this.state.message
            }
            API.loginUser(userData)
                .then((result) => {
                    // Auth.authenticateUser(result.data.token)
                    localStorage.setItem("jwtToken", result.data.token);
                    this.setState({ message: "" });
                    this.props.history.push("/dashboard")
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        this.setState({ message: 'Login failed. Username or password not match' });
                    }
                });
        }
    }

    render() {
        return (

            <Container>
                <Row>
                    <Col size="md-6">
                        {this.state.message !== "" &&
                            <div class="alert alert-warning alert-dismissible" role="alert">
                                {this.state.message}
                            </div>
                        }
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
                            Login
                        </FormBtn>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Login;