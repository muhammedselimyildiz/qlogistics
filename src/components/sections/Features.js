import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import P2P from "../../images/Group Copy.png"
import Optimiz from "../../images/optimization.png"
import Box3 from "../../images/Group 11.png"
import Truck from "../../images/Group 7.png"
import MoneyBox from "../../images/Group 21.png"
import Arrows from "../../images/Group.png"

const Features = () => {
    return (
        <Container className="features">
            <Row>
                <h1>Features</h1>
                <p className="text1">There are lots of reasons to have QLogistics!</p>
                <Col md={4}>
                   <div className="comp">
                        <Image src={P2P} alt="point to point" className="image" fluid />
                        <p>Optimization of the Vehicle Routing domain</p>
                    </div> 
                </Col>
                <Col md={4}>
                    <div className="comp">
                        <Image src={Optimiz} alt="Optimization" className="image" fluid />
                        <p>Up to 30.000 tasks within minutes</p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="comp">
                        <Image src={Box3} alt="3 Linked Box" className="image" fluid />
                        <p>Live Driver Tracking</p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="comp">
                        <Image src={Truck} alt="Load Truck" className="image" fluid />
                        <p>Handling Capacities, time windows, priorities</p>
                    </div>
                </Col>
                <Col md={4}>
                   <div className="comp">
                        <Image src={MoneyBox} alt="Money Box" className="image" fluid />
                        <p>Pickup and Delivery Problems (e.g. ride sharing)</p>
                    </div> 
                </Col>
                <Col md={4}>
                    <div className="comp">
                        <Image src={Arrows} alt="Arrow Path" className="image" fluid />
                        <p>Instant Address Changes</p>   
                    </div>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Features
