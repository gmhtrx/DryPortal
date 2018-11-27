import React, { Component } from "react";
import { Col, Container, Row } from "../Grid/"


class Track extends Component {
    render() {
        return <Col size="">
            <Row>

                <div style={{padding: 20 + "px" }}>
                    <h4>Open Orders</h4>
                    <p>
                        Your clothes are ready to be picked up
                    </p>    
                    <h4>Closed Orders</h4>
                    <p>
                        Order # 1002 || 11/25/2018 -------------- Delivered
                    </p>
                </div>
            </Row>

        </Col>
    }
}


export default Track;