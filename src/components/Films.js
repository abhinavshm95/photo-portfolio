import React from 'react';
import { Parallax } from 'react-parallax';
import gif from "../asset/Image/test_gif.gif";
import pic1 from "../asset/Image/resize5.jpg"
import VideoContainer from './VideoContainer';
import { Container, Row } from "react-bootstrap";

export default function Films() {
    return (
        <div>
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
