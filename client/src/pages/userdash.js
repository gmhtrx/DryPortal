import React, { Component } from "react";
import { Col, Container, Row } from "../components/Grid"
import { Nav, NavItem, NavLink } from "reactstrap";
import { Orderform } from "../components/createorderform"


import axios from "axios";
import Auth from "../modules/auth";
import API from "../utils/API"
import "../components/style/styles.css"
class Userdash extends Component {

    constructor(props) {
        super(props);

        this.state = {
            secretData: ""
        };
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        console.log("hello1")
        axios.get('/api/items')
            .then(hello => console.log(hello))
            .catch((error) => {
                if (error) throw error
                console.log("www")
            });
    }



    render() {
        return (

            <Container idName="main">
                <Nav tabs>
                    <NavItem>
                        <NavLink href="#">Create Order</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Track</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Account</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#">Cart: (0)</NavLink>
                    </NavItem>
                </Nav>
                <Row>
                    <Col size="md-6">

                        {Auth.isUserAuthenticated() ? (

                            <div className="top-bar-right">
                                Log out
                            </div>
                        ) : (
                                <div className="top-bar-right">
                                    You need to log in or sign up
                            </div>
                            )}
                    </Col>
                </Row>
            </Container>

        );
    }
};

export default Userdash;