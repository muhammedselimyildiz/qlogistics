import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

const Contact = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="dark-blue">
                <Container className="contact">
            <h1>Contact</h1>
            <Row className="g-5">
                <Col md={6}>
                    <span className="top-text">
                        So Simple,
                        
                        So Powerful!
                    </span>
                    <span className="bottom-text">
                        Got a question? We are here to help!
                        <br/>
                        Fill up the form to get in touch with us on your enquiries.
                    </span>
                </Col>
                <Col md={6}>
                    <h2>CONTACT US</h2>
                    <form name="contact" method="post" className="">
                        <input type="hidden" name="form-name" value="contact" />
                        <p>
                            <input type="text" className="form-input" name="name" placeholder="Name"  required/>
                        </p>
                        <p>
                            <input type="email" className="form-input" name="email" placeholder="Email"  required/>
                        </p>
                        <p>
                            <textarea className="form-input" type="textarea" name="message" maxLength="4000" rows="2" placeholder="Your Message"></textarea>
                        </p>
                        <p className="">
                            <button type="submit" className="">Send</button>
                        </p>
                    </form>
                </Col>
            </Row>
        </Container>
                </div>
            </div>
        </div>
        
    )
}

export default Contact
