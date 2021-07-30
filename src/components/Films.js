import React from 'react';
import { Parallax } from 'react-parallax';
import pic1 from "../asset/Image/resize5.jpg"
import VideoContainer from './VideoContainer';
import { Container, Row } from "react-bootstrap";
import { Helmet } from 'react-helmet'

export default function Films() {
    return (
        <div>
            <Helmet>
                <title>Films</title>
            </Helmet>
            <Parallax
                className="hero-image-film"
                blur={{ min: -15, max: 15 }}
                bgImage={pic1}
                bgImageAlt="Hero Image"
                strength={300}
            >
                <div style={{ height: '100vh' }} />
            </Parallax>
            <Container fluid className="d-flex">
                <Row className="photography-tab-quote">
                A film is a petrified fountain of thought.
                </Row>
            </Container>
            <VideoContainer></VideoContainer>
        </div>
    )
}
