import React, { useState, useCallback } from "react";
import header2 from "../asset/Image/header2.png";
import check from "../asset/Image/resize_main-page.jpg";
import img1 from "../asset/Image/resize2.jpg";
import leftImg from "../asset/Image/left.png";
import rightImg from "../asset/Image/right.png";
import { Parallax, Background } from "react-parallax";
import ImageSlider from './ImageSlider';
import { Container, Form, Row, Button } from 'react-bootstrap';
import VideoContainer from './VideoContainer';
import PhotoGrid from "./PhotoGrid";
import { wedPhotos } from "../asset/Image/grid-photos";

export default function SectionOne() {
    return (
        <section>
            <Parallax bgImage={check} strength={300}>
                <img src={check} style={{ visibility: "hidden", width: "100%" }} />
            </Parallax>
            <div className="sectionOne">
                <div className="sectionOne-container">
                    <div className="sec-one-div">
                        <img src={header2}></img>
                        <p>
                            {/* We are wanderers, explorers of light, driven by a strong desire to capture fleeting moments onto frames and stitching them together to create a visual symphony which is both organic and timeless. We do not follow trends and have our own unique non-linear approach of presenting stories. Our wedding films are carefully crafted to blend traditional with modern, combining stunning visuals with creative storytelling. */}
                            Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.
                        </p>
                    </div>
                    <VideoContainer></VideoContainer>
                </div>
            </div>
            <Container fluid className="d-flex">
                <Row className="recent-photograph">
                    {/* <img src={leftImg} /> */}
                    Pre Weddings
                {/* <img src={rightImg} /> */}
                </Row>
            </Container>
            <PhotoGrid imageArr={wedPhotos}></PhotoGrid>
            {/* <ImageSlider></ImageSlider> */}
            <Container fluid className="d-flex">
                <Row className="recent-photograph">
                    Wedding Photography
                </Row>
            </Container>
            {/* <ImageSlider></ImageSlider> */}
            <PhotoGrid imageArr={wedPhotos}></PhotoGrid>
            <Container fluid className="contact-us-banner">
                <Row>
                    <img src={leftImg} className="text-img" />
                    We don’t trust words. We trust pictures.
                <img src={rightImg} className="text-img" />
                </Row>
                <Row>
                    <a href="/contactus" className="contact-us-wrapper">Contact Us!</a>
                </Row>
                {/* <Form className="email-form-submit" >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Button className="margin-l-20" variant="primary" type="submit">
                            Submit
                        </Button>
                </Form> */}
            </Container>
        </section>
    )
}
