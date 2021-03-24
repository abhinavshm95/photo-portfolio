import React from 'react'
import Slider from 'react-slick';
import img6 from "../asset/Image/resize6.jpg";
import img4 from '../asset/Image/resize4.jpg';
import img1 from "../asset/Image/resize1.jpg";
import img3 from "../asset/Image/resize3.jpg";
import { Container } from 'react-bootstrap';

export default function ImageSlider() {
    const settings = {
        // fade: true,
        // adaptiveHeight: true,
        // autoplaySpeed: 2000,
        // dots: true,
        // infinite: true,
        speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // arrows: true
      };
    return (
        <Container fluid>
            <Slider {...settings}>
            <div>
                <img src={img1}></img>
            </div>
            <div>
            <img src={img4}></img>
            </div>
            <div>
            <img src={img3}></img>
            </div>
            <div>
            <img src={img6}></img>
            </div>
        </Slider>
        </Container>
    )
}
