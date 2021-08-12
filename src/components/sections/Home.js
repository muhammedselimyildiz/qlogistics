import React from "react"
import LaptopMockup from "../../images/Promo Mockup.png"
import { Col, Container, Row } from "react-bootstrap"

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="dark-blue">
          <Container className="home">
            <Row>
              <Col md={4}>
                <p className="text">Powerful Logistics Platform!</p>
                <p className="text2">
                  QLogistics is the next generation logistics platform.
                </p>
              </Col>
              <Col md={8} className="iframe-holder">
                <img
                  className="laptop"
                  src={LaptopMockup}
                  alt="LaptopMockup"
                  fluid
                />
                <iframe
                  className="iframe"
                  src="https://www.youtube.com/embed/9mdQPy26hGM"
                  title="YouTube Video Player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Home
