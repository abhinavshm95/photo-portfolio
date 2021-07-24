import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import tileImg1 from "../asset/Image/resize8.jpg";
import tileImg2 from "../asset/Image/resize9.jpg";

export default function () {
    return (
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
                    <img src={tileImg1} style={{ width: "100%" }} alt="block-image1"></img>
                </Col>
            </Row>
            <Row className="margin-0-padding-0">
                <Col md={6} className="margin-0-padding-0">
                    <img src={tileImg2} style={{ width: "100%" }} alt="block-image2"></img>
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
    )
}