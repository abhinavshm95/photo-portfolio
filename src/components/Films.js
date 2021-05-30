import React from 'react';
import { Parallax } from 'react-parallax';
import gif from "../asset/Image/test_gif.gif";
import pic1 from "../asset/Image/resize5.jpg"
import VideoContainer from './VideoContainer';
import { Container, Row } from "react-bootstrap";

export default function Films() {
    return (
        <div>
            <Parallax bgImage={pic1} strength={300} className="letter-spacing-12">
                Films
            <img src={pic1} style={{ visibility: "hidden", width: "100%" }} />
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
