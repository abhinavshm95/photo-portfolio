import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import check from "../asset/Image/Con01.jpg";
import SimpleMap from "./SimpleMap"
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';

const onFormSubmit = e => {
    e.preventDefault();
    const { formBasicName, formBasicEmail, formBasicNumber } = e.target.elements;
    const Params = { Name: formBasicName.value, Email: formBasicEmail.value, Number: formBasicNumber.value };
    // axios.post('https://formspree.io/f/xqkwqbvz', Params).then();
    axios.post('https://formspree.io/f/mgerlgwj', Params).then();
}

export default function ContactUs() {
    return (<>
        <Helmet>
            <title>Contact Us</title>
        </Helmet>
        <TransitionGroup>
            <CSSTransition timeout={500} classNames="fade" appear={true}>
                <Parallax
                    className="hero-image-contactus"
                    blur={{ min: -15, max: 15 }}
                    bgImage={check}
                    bgImageAlt="Hero Image"
                    strength={300}
                >
                    <div style={{ height: '60vh' }} />
                </Parallax>
            </CSSTransition>
        </TransitionGroup>
        <Container>
            <Row style={{ margin: "30px" }}>
                <Col md={6} className="margin-b-767-40">
                    <Form onSubmit={onFormSubmit}>
                        <div className="contact-form-title">
                            SEND US A MESSAGE
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Button variant="primary" style={{ width: "100%", margin: "0px !important" }} type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col md={6} className="map-col">
                    <SimpleMap style={{ maxHeight: "350px" }}></SimpleMap>
                </Col>
            </Row>
        </Container>
    </>)
}
