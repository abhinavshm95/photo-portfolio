import React from 'react'
import header2 from "../asset/Image/header2.png";
import check from "../asset/Image/resize_main-page.jpg";
import img1 from "../asset/Image/resize2.jpg";
import { Parallax, Background } from "react-parallax";
import ImageSlider from './ImageSlider';
import { Container, Row } from 'react-bootstrap';
import VideoContainer from './VideoContainer';

export default function SectionOne() {
    return (
        <section>
            <Parallax bgImage={check} strength={300}>
                <img src={check} style={{ visibility: "hidden", width: "100%" }} />
            </Parallax>
            {/* <div className="main-background-video">
                <div>
                    <div class="image" style={{ backgroundImage: `url(${check})` }}>
                    </div>
                </div>
            </div> */}
            <div className="sectionOne">
                <div className="sectionOne-container">
                    <div className="sec-one-div">
                        <img src={header2}></img>
                        <p>
                            We are wanderers, explorers of light, driven by a strong desire to capture fleeting moments onto frames and stitching them together to create a visual symphony which is both organic and timeless. We do not follow trends and have our own unique non-linear approach of presenting stories. Our wedding films are carefully crafted to blend traditional with modern, combining stunning visuals with creative storytelling.
                        </p>
                    </div>
                <VideoContainer></VideoContainer>
                </div>
            </div>
            <Container fluid className="d-flex">
                <Row className="recent-photograph">
                    RECENT PHOTOGRAPHS
                </Row>
            </Container>
            <ImageSlider></ImageSlider>
            <Container fluid className="d-flex">
                <Row className="recent-photograph">
                    RECENT PHOTOGRAPHS
                </Row>
            </Container>
            <ImageSlider></ImageSlider>
            <Parallax bgImage={img1} strength={300}>
            <img src={img1} style={{ visibility: "hidden", width: "100%" }} />
            </Parallax>
        </section>
    )
}
