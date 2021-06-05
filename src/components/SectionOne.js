import React, { useState, useCallback } from "react";
import header2 from "../asset/Image/header2.png";
import check from "../asset/Image/resize_main-page.jpg";
import img1 from "../asset/Image/resize2.jpg";
import leftImg from "../asset/Image/left.png";
import rightImg from "../asset/Image/right.png";
import { Parallax, Background } from "react-parallax";
import tileImg1 from "../asset/Image/resize8.jpg";
import tileImg2 from "../asset/Image/resize9.jpg";
import ImageSlider from './ImageSlider';
import { Container, Form, Row, Button, Col } from 'react-bootstrap';
import VideoContainer from './VideoContainer';
import PhotoGrid from "./PhotoGrid";
import { wedPhotos } from "../asset/Image/grid-photos";
import parallaxGif1 from '../asset/gif/Sequence1.gif';
// import parallaxGif2 from '../asset/gif/Sequence2.gif';
// import parallaxGif3 from '../asset/gif/Sequence3.gif';

export default function SectionOne() {
    return (
        <section>
            <Parallax
                className="hero-image"
                blur={{ min: -15, max: 15 }}
                bgImage={check}
                bgImageAlt="Hero Image"
                strength={300}
            >
                <div style={{ height: '100vh' }} />
            </Parallax>
            <div className="sectionOne">
                <div className="sectionOne-container">
                    <div className="sec-one-div">
                        <img src={header2}></img>
                        <p>
                            Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.
                        </p>
                    </div>
                    <VideoContainer></VideoContainer>
                </div>
            </div>
            <Container fluid>
            <Row className="margin-0-padding-0">
                <Col md={6} className="margin-0-padding-0">
                    <div className="text-tile">
                        <div className="margin-auto media-padding-top-100">
                            <h2 className="text-tile-heading"><span>We focus on prompts for natural expressions, not poses.&nbsp;</span></h2>
                            <p className="text-tile-sub-heading">"Kiss like you&nbsp;<span>haven't&nbsp;</span><span>seen each other in years."</span></p>
                            <p className="text-tile-sub-heading">"Say the funniest word you know."</p>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="margin-0-padding-0">
                    <img src={tileImg1} style={{ width: "100%" }}></img>
                </Col>
            </Row>
            <Row className="margin-0-padding-0">
                <Col md={6} className="margin-0-padding-0">
                    <img src={tileImg2} style={{ width: "100%" }}></img>
                </Col>
                <Col md={6} className="margin-0-padding-0">
                    <div className="text-tile">
                        <div className="margin-auto media-padding-top-100">
                            <h2 className="text-tile-heading"><span>Capturing an experience, not just another photograph.&nbsp;</span></h2>
                            <p className="text-tile-sub-heading">"Like getting together with old friends, we'll have plenty of laughs along the way."</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
            <Container fluid className="d-flex">
                <Row className="recent-photograph">
                    Pre Weddings
                </Row>
            </Container>
            <PhotoGrid imageArr={wedPhotos}></PhotoGrid>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={parallaxGif1}
                bgImageAlt="the dog"
                strength={200}
            >
                <div style={{ height: '200px' }} />
            </Parallax>
            {/* <Parallax bgImage={parallaxGif1} strength={300}>
                <div style={{ height: '100vh' }} />
            </Parallax> */}
            <Container fluid className="d-flex">
                <Row className="recent-photograph">
                    Wedding Photography
                </Row>
            </Container>
            <PhotoGrid imageArr={wedPhotos}></PhotoGrid>
            <Container fluid className="contact-us-banner">
                <Row>
                    We don’t trust words. We trust pictures.
                </Row>
                <Row>
                    <a href="/contactus" className="contact-us-wrapper">Contact Us!</a>
                </Row>
            </Container>
        </section>
    )
}
