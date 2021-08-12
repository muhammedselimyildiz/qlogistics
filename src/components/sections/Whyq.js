import React from 'react'

import Logo from '../../images/Logo.png'
import Fast from "../../images/Fast and Scalable.png"
import Easy from "../../images/Easy to Integrate.png"
import Pratic from "../../images/Practical Features.png"
import { Container, Row, Col, Image } from "react-bootstrap"

const Whyq = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="dark-blue">
                <Container className="why">
            
            <div className="title">
                <h1>Why</h1>
                <Image className="" src={Logo} alt="Logo" fluid />
            </div>

            <Row>
                <Col xs={6} md={4}>
                    <Image src={Fast} alt="Fast" className="image" fluid/>
                    <p>Fast and Scalable</p>
                    
                </Col>
                <Col xs={6} md={4}>
                    <Image src={Easy} alt="Easy" className="image" fluid/>
                    <p>Easy to Integrate</p>
                </Col>
                <Col xs={6} md={4}>
                    <Image src={Pratic} alt="Pratic" className="image" fluid/>
                    <p>Cost Officient</p>
                </Col>
            </Row>
        </Container>
                </div>
            </div>
        </div>
        
    )
}

export default Whyq
