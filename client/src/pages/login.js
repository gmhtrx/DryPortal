import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(this.state.username);
    console.log(this.state.password);

    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  }

<<<<<<< HEAD
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <h4>Login</h4>
          <form className="form-horizontal">
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="username">
                  Username
                </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input
                  className="form-input"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="password">
                  Password:{""}
                </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                  placeholder="password" type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group ">
              <div className="col-7" />
              <button className="btn btn-primary col-1 col-mr-auto" onClick={this.handleSubmit} type="submit">
                Login
              </button>
              <Link to="/signup" className="btn btn-link">
                <span className="text-secondary">sign up</span>
              </Link>
            </div>
          </form>
        </div>
      );
=======
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
                            Login
                        </FormBtn>
                    </Col>
                </Row>
            </Container>
        );
>>>>>>> abc65be86bfaa9d8282704f7de871c7f7f1fd41f
    }
  }
}

export default LoginForm;