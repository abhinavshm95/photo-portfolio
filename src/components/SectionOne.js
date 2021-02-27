import React from 'react'
import header2 from "../asset/Image/header2.png";
import check from "../asset/Image/check.jpeg";
import { Parallax, Background } from "react-parallax";
import ImageSlider from './ImageSlider';

export default function SectionOne() {
    return (
        <section>
            <Parallax bgImage={check} strength={300}>
                    <div style={{ height: '100vh' }}>
                    </div>
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
                    <div className="sec-one-video">
                        <div className="two-video-container">
                            <div className="iframe-div">
                                <iframe src="https://www.youtube.com/embed/hC8CH0Z3L54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="iframe-div">
                                <iframe src="https://www.youtube.com/embed/hC8CH0Z3L54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="two-video-container">
                            <div className="iframe-div">
                                <iframe src="https://www.youtube.com/embed/hC8CH0Z3L54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="iframe-div">
                                <iframe src="https://www.youtube.com/embed/hC8CH0Z3L54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ImageSlider></ImageSlider>
        </section>
    )
}
