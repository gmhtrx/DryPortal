import React, { Component } from "react";
import { Col, Container, Row } from "../components/Grid"
import { FormBtn, Input, } from "../components/Form"
import Navigation from "../components/navigation"

import axios from 'axios';

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

    handleFormSubmit = event => {
        event.preventDefault();
        const {username, password} = this.state;
        axios.post('/api/auth/login', { username, password })
        
        .then((result) => {
          localStorage.setItem('jwtToken', result.data.token);
          this.setState({ message: '' });
          this.props.history.push('/')
        })

        .catch((error) => {
          if(error.response.status === 401) {
            this.setState({ message: 'Login failed. Username or password not match' });
          }
        });
    }

    render() {
        return (

            <Container>
                <Navigation
                    logininhref="/login"
                    signuphref="/signup"
                    login="Login"
                    signup="Sign up"
                />
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
                            Login
                        </FormBtn>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Login;