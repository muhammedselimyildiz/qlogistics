import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import Devices from "../../images/Group 2.png"
import Circle from "../../images/Oval Copy 3.png"

const Product = () => {
    return (
        <Container className="product">
            <h1>Product</h1>
            <p className="text1">Easy to use dashboard supporting every step of delivery process</p>
            <Row>
                <Col md={8}>
                    <Image src={Devices} alt="Devices" className="devices" fluid/>
                </Col>
                <Col md={3} className="col-auto">
                    <Row className="row1">
                        <Col >
                            <Image src={Circle} alt="Check-Circle" fluid/>
                        </Col>
                        <Col>
                            <p>Operator, Driver and Customer Interfaces</p>
                        </Col>
                    </Row>
                    <Row className="row1">
                        <Col >
                        <Image src={Circle} alt="Check-Circle" fluid/>   
                        </Col>
                        <Col >
                            <p>Realtime tracking of the delivery cars</p>
                        </Col>
                    </Row>
                    <Row className="row1">
                        <Col >
                        <Image src={Circle} alt="Check-Circle" fluid/>  
                        </Col>
                        <Col>
                            <p>Developed for IOS and Android</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            

        </Container>
    )
}

export default Product
