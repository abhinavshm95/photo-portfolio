import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function VideoContainer() {
    return (<>
        <Container style={{ maxWidth: "none" }} className="padding-l-r-t-b-70">
            <Row className="margin-t-b-10">
                <Col >
                    <div className="video-container">
                        <iframe src="https://www.youtube.com/embed/JCSgkdaLluQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
                <Col >
                    <div className="video-container">
                        <iframe src="https://www.youtube.com/embed/cQJ1JniFciY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
            </Row>
            <Row className="margin-t-b-10">
                <Col>
                    <div className="video-container">
                        <iframe src="https://www.youtube.com/embed/2MtsLiyrMeo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
                <Col>
                    <div className="video-container">
                        <iframe src="https://www.youtube.com/embed/LcJInaIrdkk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
            </Row>
            <Row className="margin-t-b-10">
                <Col>
                    <div className="video-container">
                    <iframe src="https://player.vimeo.com/video/336674624" width="640" height="273" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
                <Col>
                    <div className="video-container">
                    <iframe src="https://player.vimeo.com/video/509437576" width="640" height="273" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
            </Row>
            <Row className="margin-t-b-10">
                <Col>
                    <div className="video-container">
                    <iframe src="https://player.vimeo.com/video/375419601" width="640" height="273" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
                <Col>
                    <div className="video-container">
                    <iframe src="https://player.vimeo.com/video/375419601" width="640" height="273" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
    )
}
