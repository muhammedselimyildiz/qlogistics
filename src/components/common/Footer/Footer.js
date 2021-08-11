import React from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap'
import Logo from '../../../images/Logo.png'

const Footer = () => {
    return (
        <Container className="foot">
            <Row>
            <Col xs={6} md={4}>
                <Image src={Logo} alt="Qlogistics" />
            </Col>
            <Col>
                <p>©2019 Copyright Qimia GmbH</p>
            </Col>    
                
            </Row>
        </Container>

    )
}

export default Footer
