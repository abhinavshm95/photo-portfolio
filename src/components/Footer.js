import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../asset/Image/new_resize_logo.png'
import fb from '../asset/Icon/facebook-circular-logo.svg'
import insta from '../asset/Icon/instagram.svg'
import whatsapp from '../asset/Icon/whatsapp.svg'

export default function Footer() {
    return (
        <footer>
            <Container fluid className="footer-container">
                <Row>
                    <Col md={4}>
                        <div>
                            <img src={logo}></img>
                        </div>
                    </Col>
                    <Col md={4} className="align-centre" >
                        <a className="social-icon" href="www.fastlap.com" target="_blank">
                            <span style={{ backgroundImage: `url('${fb}')` }}></span>
                            <p className="social-text">Facebook</p>
                        </a>
                        <a className="social-icon" href="https://wa.me/9214968921" target="_blank">
                            <span style={{ backgroundImage: `url('${whatsapp}')` }}></span>
                            <p className="social-text">Whatsapp</p>
                        </a>
                        <a className="social-icon" href="www.fastlap.com" target="_blank">
                            <span style={{ backgroundImage: `url('${insta}')` }}></span>
                            <p className="social-text">Instagram</p>
                        </a>
                    </Col>
                    <Col md={4}>
                        <div className="contact-number">
                            sanjanastudioksg@gmail.com <br /> +91-9214968921
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="padding-20">
                        <div className="footer-text" >
                            All Images and Videos Are Copyrighted. Tags: Wedding Films, Wedding Cinema, Fine-Art Cinematography, Cinematic Films, Wedding videos, Wedding Cinematographers in Mumbai, Delhi, Bangalore, Goa, London, Wedding Photography, Destination Wedding Photographer, Best Wedding Photographer
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="made-with" >
                Made with 💙 in INDIA
                </div>
        </footer>
    )
}
