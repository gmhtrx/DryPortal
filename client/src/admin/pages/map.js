import React, { Component } from "react";
import { Col, Container, Row } from "../../components/Grid"
import { FormBtn, Input, } from "../../components/Form"


// import axios from 'axios';

class Maps extends Component {

    handleInputChange = event => {
        const { place, value } = event.target;
        this.setState({
            [place]: value
        });
    };
    render() {
        return (

            <Container>
                <Row>
                    <Col size="md-6">
                        <Input
                            value={this.state.Street}
                            onChange={this.handleInputChange}
                            place="Street"
                            placeholder="Street"
                        />
                        <FormBtn
                            disabled={!(this.state.Street)}
                            onClick={this.handleFormSubmit}
                        >
                            Submit
                        </FormBtn>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Maps;