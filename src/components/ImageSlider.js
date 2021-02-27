import React from 'react'
import Slider from 'react-slick';
import img2 from "../asset/Image/sample6.png";
import logo from '../asset/Image/new_resize_logo.png';
import img4 from "../asset/Image/ban1.jpg";
import img3 from "../asset/Image/sample3.png";

export default function ImageSlider() {
    const settings = {
        // dots: true
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // arrows: true
      };
    return (
        <div className="container">
            <Slider {...settings}>
            <div>
                <img src="http://placekitten.com/g/800/400"></img>
            </div>
            <div>
            <img src="http://placekitten.com/g/800/400"></img>
            </div>
            <div>
            <img src="http://placekitten.com/g/800/400"></img>
            </div>
            <div>
            <img src="http://placekitten.com/g/800/400"></img>
            </div>
        </Slider>
        </div>
    )
}
