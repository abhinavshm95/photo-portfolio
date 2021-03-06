import React, { useState, useCallback } from "react";
import { Parallax } from 'react-parallax';
import check from "../asset/Image/resize8.jpg";
import { preWedPhotos } from "../asset/Image/grid-photos.js";
import PhotoGrid from "./PhotoGrid";
import { Container, Row } from "react-bootstrap";

export default function Photography() {

    return (<>
        <Parallax
            className="hero-image-photography"
            blur={{ min: -15, max: 15 }}
            bgImage={check}
            bgImageAlt="Hero Image"
            strength={300}
        >
            <div style={{ height: '100vh' }} />
        </Parallax>
        <Container fluid className="d-flex">
            <Row className="photography-tab-quote">
                You don’t take a photograph, you make it.
                </Row>
        </Container>
        <PhotoGrid imageArr={preWedPhotos}></PhotoGrid>
    </>
    )
}
