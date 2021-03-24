import React from 'react';
import { Parallax } from 'react-parallax';
import gif from "../asset/Image/test_gif.gif";
import pic1 from "../asset/Image/resize5.jpg"
import VideoContainer from './VideoContainer';

export default function Films() {
    return (
        <div>
            <Parallax bgImage={pic1} strength={300} className="letter-spacing-12">Films</Parallax>
            <VideoContainer></VideoContainer>
        </div>
    )
}
