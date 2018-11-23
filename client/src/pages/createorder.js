import React, { Component } from "react";
import { Col, Container, Row } from "../components/Grid"
import { Orderform } from "../components/createorderform"
import axios from "axios";
import Auth from "../modules/auth";
import API from "../utils/API"

class Createorder extends Component {

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
          if(error) throw error
          console.log("www")
        });
    }
    


    render() {
        return (
            <Container id="main">
                <Row>
                    <Col size="md-6">
                        
                    </Col>
                </Row>
            </Container>

        );
    }
};

export default Createorder;