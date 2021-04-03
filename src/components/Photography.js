import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Parallax } from 'react-parallax';
import check from "../asset/Image/resize8.jpg";
import { photos } from "../asset/Image/grid-photos.js";

export default function Photography() {

    // const [currentImage, setCurrentImage] = useState(0);
    // const [viewerIsOpen, setViewerIsOpen] = useState(false);

    // const openLightbox = useCallback((event, { photo, index }) => {
    //     setCurrentImage(index);
    //     setViewerIsOpen(true);
    // }, []);

    // const closeLightbox = () => {
    //     setCurrentImage(0);
    //     setViewerIsOpen(false);
    // };

    return (<>
        {/* <div>
             <h3>Photography</h3>
         </div> */}
        {/* <Parallax bgImage={check} strength={300} style={{ height: '100vh', display: 'flex' }}> */}
        <Parallax blur={{ min: -15, max: 15 }} bgImage={check} strength={300} className="letter-spacing-12">
            Photography
            <img src={check} style={{ visibility: "hidden", width: "100%" }} />
        </Parallax>
        <div className="photograph-image-show">
            <img src={photos[0].src}></img>
            <img src={photos[1].src}></img>
            <img src={photos[2].src}></img>
            <img src={photos[3].src}></img>
        </div>

        {/* <Gallery photos={photos} direction={"column"} onClick={openLightbox} /> */}
        {/* <ModalGateway>
            {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                        currentIndex={currentImage}
                        views={photos.map(x => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: x.title
                        }))}
                    />
                </Modal>
            ) : null}
        </ModalGateway> */}
    </>
    )
}
