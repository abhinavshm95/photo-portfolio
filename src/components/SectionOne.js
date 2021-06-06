import React from "react";
import header2 from "../asset/Image/header2.png";
import check from "../asset/Image/resize_main-page.jpg";
import { Parallax } from "react-parallax";
import { Container, Row, Col } from 'react-bootstrap';
import VideoContainer from './VideoContainer';
import PhotoGrid from "./PhotoGrid";
import { wedPhotos } from "../asset/Image/grid-photos";
import parallaxGif1 from '../asset/gif/Sequence1.gif';
import parallaxGif2 from '../asset/gif/Sequence2.gif';
import parallaxGif3 from '../asset/gif/Sequence3.gif';
// import { CSSTransition } from "react-transition-group";
import LazyLoad from "react-lazyload";
import BlockInfo from "./BlockInfo";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function SectionOne() {
    return (
        <section>
            <LazyLoad key="1" height={200} throttle={200}>
                <TransitionGroup>
                    <CSSTransition timeout={500} classNames="fade" appear={true}>
                        <Parallax
                            className="hero-image"
                            blur={{ min: -15, max: 15 }}
                            bgImage={check}
                            bgImageAlt="Hero Image"
                            strength={300}
                        >
                            <div style={{ height: '100vh' }} />
                        </Parallax>
                    </CSSTransition>
                </TransitionGroup>
            </LazyLoad>

            <Container fluid className="d-flex">
                <Row className="recent-photograph">
                    Pre Weddings
                </Row>
            </Container>
            <PhotoGrid imageArr={wedPhotos}></PhotoGrid>
            <LazyLoad key="3" height={200} throttle={200}>
                <TransitionGroup>
                    <CSSTransition timeout={500} classNames="fade" appear={true}>
                        <Parallax
                            bgImage={parallaxGif3}
                            bgImageAlt="the dog"
                            strength={200}>
                            <div style={{ height: '60vh' }} />
                        </Parallax>
                    </CSSTransition>
                </TransitionGroup>
            </LazyLoad>
            <Container fluid className="d-flex">
                <Row className="recent-photograph">
                    Wedding Photography
                </Row>
            </Container>
            <PhotoGrid imageArr={wedPhotos}></PhotoGrid>
            

            <LazyLoad key="2" height={200} throttle={200}>
                <TransitionGroup>
                    <CSSTransition timeout={5000} classNames="fade" appear={true}>
                        <BlockInfo></BlockInfo>
                    </CSSTransition>
                </TransitionGroup>
            </LazyLoad>


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
