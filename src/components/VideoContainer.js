import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function VideoContainer() {
    return (<>
        {/* <div className="dual-video-container"> */}
        <Container>
            <Row className="margin-t-b-10">
                <Col sm={6}>
                    <div className="video-container">
                        <iframe src="https://www.youtube.com/embed/hC8CH0Z3L54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="video-container">
                        <iframe src="https://www.youtube.com/embed/hC8CH0Z3L54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
            </Row>
            <Row className="margin-t-b-10">
                <Col sm={6}>
                    <div className="video-container">
                        <iframe src="https://www.youtube.com/embed/hC8CH0Z3L54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="video-container">
                        <iframe src="https://www.youtube.com/embed/hC8CH0Z3L54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
            </Row>
            <Row className="margin-t-b-10">
                <Col sm={6}>
                    <div className="video-container">
                    <iframe src="https://player.vimeo.com/video/375419601" width="640" height="273" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="video-container">
                    <iframe src="https://player.vimeo.com/video/375419601" width="640" height="273" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
            {/* <iframe src="https://www.youtube.com/embed/hC8CH0Z3L54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        {/* </div> */}
        {/* <iframe src="https://www.youtube.com/embed/hC8CH0Z3L54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe src="https://www.youtube.com/embed/hC8CH0Z3L54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    </>
        // <div className="sec-one-video">
        //     <div className="two-video-container">
        //         <div className="iframe-div">
        //             <iframe src="https://www.youtube.com/embed/hC8CH0Z3L54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //         </div>
        //         <div className="iframe-div">
        //             <iframe src="https://www.youtube.com/embed/hC8CH0Z3L54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //         </div>
        //     </div>
        //     <div className="two-video-container">
        //         <div className="iframe-div">
        //             <iframe src="https://www.youtube.com/embed/hC8CH0Z3L54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //         </div>
        //         <div className="iframe-div">
        //             <iframe src="https://www.youtube.com/embed/hC8CH0Z3L54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //         </div>
        //     </div>
        // </div>
    )
}
