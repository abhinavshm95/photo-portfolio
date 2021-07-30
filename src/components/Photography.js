import React from "react";
import { Parallax } from 'react-parallax';
import check from "../asset/Image/resize8.jpg";
import { mixPhotos } from "../asset/Image/grid-photos.js";
import PhotoGrid from "./PhotoGrid";
import { Container, Row } from "react-bootstrap";
import { Helmet } from 'react-helmet'
import LazyLoad from "react-lazyload";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";

export default function Photography() {

    return (<>
        <Helmet>
            <title>Photography</title>
        </Helmet>
        <TransitionGroup>
            <CSSTransition timeout={500} classNames="fade" appear={true}>
                <Parallax
                    className="hero-image-photography"
                    blur={{ min: -15, max: 15 }}
                    bgImage={check}
                    bgImageAlt="Hero Image"
                    strength={300}
                >
                    <div style={{ height: '100vh' }} />
                </Parallax>
            </CSSTransition>
        </TransitionGroup>
        <Container fluid className="d-flex">
            <Row className="photography-tab-quote">
                You don’t take a photograph, you make it.
            </Row>
        </Container>
        <PhotoGrid imageArr={mixPhotos}></PhotoGrid>
    </>
    )
}
